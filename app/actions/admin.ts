"use server";

import { list, put } from "@vercel/blob";
import type { ContactSubmission } from "@/lib/types";
import { isAuthenticated } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function getContactSubmissions(): Promise<ContactSubmission[]> {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  try {
    const { blobs } = await list({
      prefix: "contacts/",
    });

    const submissions: ContactSubmission[] = [];

    for (const blob of blobs) {
      try {
        const response = await fetch(blob.url);
        const data = await response.json();
        submissions.push(data);
      } catch (error) {
        console.error(`Error fetching ${blob.pathname}:`, error);
      }
    }

    // 新しい順にソート
    return submissions.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return [];
  }
}

export async function updateContactStatus(
  id: string,
  status: "read" | "unread"
) {
  if (!(await isAuthenticated())) {
    redirect("/admin/login");
  }

  try {
    // 既存のデータを取得
    const { blobs } = await list({
      prefix: `contacts/${id}.json`,
    });

    if (blobs.length === 0) {
      throw new Error("Contact not found");
    }

    const response = await fetch(blobs[0].url);
    const submission: ContactSubmission = await response.json();

    // ステータスを更新
    submission.status = status;

    // 更新されたデータを保存
    await put(`contacts/${id}.json`, JSON.stringify(submission, null, 2), {
      access: "public",
      contentType: "application/json",
    });

    // 重要：キャッシュを無効化
    revalidatePath("/admin"); // ← 追加

    return { success: true };
  } catch (error) {
    console.error("Error updating contact status:", error);
    return { success: false, error: "ステータスの更新に失敗しました。" };
  }
}

"use server"

import { put } from "@vercel/blob"
import type { ContactSubmission } from "@/lib/types"

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const inquiryType = formData.get("inquiryType") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // バリデーション
    if (!inquiryType || !message) {
      return {
        success: false,
        error: true,
        message: "必須項目を入力してください。",
      }
    }

    // 新しいお問い合わせデータを作成
    const submission: ContactSubmission = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      status: "unread",
      data: {
        inquiryType,
        name: name || "",
        email: email || "",
        message,
      },
    }

    // Vercel Blobに保存
    const filename = `contacts/${submission.id}.json`
    await put(filename, JSON.stringify(submission, null, 2), {
      access: "public",
      contentType: "application/json",
    })

    return {
      success: true,
      error: false,
      message: "お問い合わせを送信しました。ありがとうございます。",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      error: true,
      message: "送信中にエラーが発生しました。しばらく時間をおいて再度お試しください。",
    }
  }
}

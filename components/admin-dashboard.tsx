"use client";

import { useState, useEffect } from "react"; // useEffectを追加
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ContactSubmission } from "@/lib/types";
import { updateContactStatus } from "@/app/actions/admin";
import { logoutAdmin } from "@/app/actions/auth";
import { Mail, Clock, User, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

interface AdminDashboardProps {
  submissions: ContactSubmission[];
}

export function AdminDashboard({
  submissions: initialSubmissions,
}: AdminDashboardProps) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [selectedSubmission, setSelectedSubmission] =
    useState<ContactSubmission | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [mounted, setMounted] = useState(false); // ← 追加
  const router = useRouter();

  // クライアントサイドでマウントされたかを確認
  useEffect(() => {
    setMounted(true);
  }, []); // ← 追加

  const handleStatusChange = async (id: string, status: "read" | "unread") => {
    console.log(`🖱️ Button clicked: ${id} → ${status}`); // デバッグログ
    setIsUpdating(true);

    try {
      const result = await updateContactStatus(id, status);
      console.log(`📡 Server Action result:`, result); // デバッグログ

      if (result.success) {
        // ローカル状態を更新
        const updatedSubmissions = submissions.map((submission) =>
          submission.id === id ? { ...submission, status } : submission
        );
        setSubmissions(updatedSubmissions);

        // 選択中のアイテムも更新
        if (selectedSubmission?.id === id) {
          setSelectedSubmission({ ...selectedSubmission, status });
        }

        // ページを更新
        router.refresh();
      }
    } catch (error) {
      console.error("Status update error:", error);
      router.refresh();
    } finally {
      setIsUpdating(false);
    }
  };

  const unreadCount = submissions.filter((s) => s.status === "unread").length;

  // 日付フォーマット関数
  const formatDate = (timestamp: string) => {
    if (!mounted) {
      // サーバーサイドでは簡単なフォーマット
      return new Date(timestamp).toISOString().slice(0, 16).replace("T", " ");
    }
    // クライアントサイドでは日本語フォーマット
    return new Date(timestamp).toLocaleString("ja-JP");
  }; // ← 追加

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              管理者ダッシュボード
            </h1>
            <form action={logoutAdmin}>
              <Button variant="outline" type="submit">
                ログアウト
              </Button>
            </form>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* お問い合わせ一覧 */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                お問い合わせ一覧
              </h2>
              <Badge variant={unreadCount > 0 ? "destructive" : "secondary"}>
                未読: {unreadCount}件
              </Badge>
            </div>

            <div className="space-y-4">
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className={`cursor-pointer transition-colors ${
                    submission.status === "unread"
                      ? "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20"
                      : "border-gray-200 dark:border-gray-700"
                  } ${
                    selectedSubmission?.id === submission.id
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  onClick={() => setSelectedSubmission(submission)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant={
                          submission.status === "unread"
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {submission.status === "unread" ? "未読" : "既読"}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {formatDate(submission.timestamp)} {/* ← 修正 */}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {submission.data.inquiryType}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {submission.data.name || "名前未入力"}
                        {submission.data.email && ` (${submission.data.email})`}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {submission.data.message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {submissions.length === 0 && (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-gray-500 dark:text-gray-400">
                      お問い合わせはまだありません。
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* 詳細表示 */}
          <div>
            {selectedSubmission ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>お問い合わせ詳細</CardTitle>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={
                          selectedSubmission.status === "read"
                            ? "secondary"
                            : "default"
                        }
                        onClick={() =>
                          handleStatusChange(selectedSubmission.id, "read")
                        }
                        disabled={isUpdating}
                      >
                        {isUpdating ? "更新中..." : "既読にする"}
                      </Button>
                      <Button
                        size="sm"
                        variant={
                          selectedSubmission.status === "unread"
                            ? "secondary"
                            : "outline"
                        }
                        onClick={() =>
                          handleStatusChange(selectedSubmission.id, "unread")
                        }
                        disabled={isUpdating}
                      >
                        {isUpdating ? "更新中..." : "未読にする"}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {formatDate(selectedSubmission.timestamp)} {/* ← 修正 */}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">
                      {selectedSubmission.data.inquiryType}
                    </span>
                  </div>

                  {selectedSubmission.data.name && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{selectedSubmission.data.name}</span>
                    </div>
                  )}

                  {selectedSubmission.data.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a
                        href={`mailto:${selectedSubmission.data.email}`}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                      >
                        {selectedSubmission.data.email}
                      </a>
                    </div>
                  )}

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">お問い合わせ内容</h4>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                      <p className="whitespace-pre-wrap text-sm">
                        {selectedSubmission.data.message}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    左側のお問い合わせを選択して詳細を表示
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

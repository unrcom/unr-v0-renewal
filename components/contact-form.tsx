"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContactForm } from "@/app/actions/contact";
import { useActionState } from "react";

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, null);

  return (
    <form action={action} className="space-y-6">
      {/* 案件種別 */}
      <div className="space-y-2">
        <Label htmlFor="inquiry-type" className="dark:text-gray-200">
          どのようなご案件ですか？
        </Label>
        <Select name="inquiryType" required>
          <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200">
            <SelectValue placeholder="選択してください" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
            <SelectItem
              value="consultation"
              className="dark:text-gray-200 dark:focus:bg-gray-700"
            >
              ご相談
            </SelectItem>
            <SelectItem
              value="support"
              className="dark:text-gray-200 dark:focus:bg-gray-700"
            >
              サポート
            </SelectItem>
            <SelectItem
              value="other"
              className="dark:text-gray-200 dark:focus:bg-gray-700"
            >
              その他
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* お名前 */}
      <div className="space-y-2">
        <Label htmlFor="name" className="dark:text-gray-200">
          （差し支えなければ）お名前
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="お名前を入力してください"
          className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
        />
      </div>

      {/* メールアドレス */}
      <div className="space-y-2">
        <Label htmlFor="email" className="dark:text-gray-200">
          （返信を希望される場合）メールアドレス
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="メールアドレスを入力してください"
          className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
        />
      </div>

      {/* お問い合わせ内容 */}
      <div className="space-y-2">
        <Label htmlFor="message" className="dark:text-gray-200">
          お問い合わせ文面
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="お問い合わせ内容を入力してください"
          className="min-h-32 w-full resize-y dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400"
          required
        />
      </div>

      {/* 送信ボタン */}
      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
      >
        {isPending ? "送信中..." : "送信する"}
      </Button>

      {/* 送信結果メッセージ */}
      {state?.success && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
          <p className="text-green-800 dark:text-green-300">{state.message}</p>
        </div>
      )}

      {state?.error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-800 dark:text-red-300">{state.message}</p>
        </div>
      )}
    </form>
  );
}

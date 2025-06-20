"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { generateAuthToken } from "@/lib/auth"

export async function loginAdmin(prevState: any, formData: FormData) {
  const password = formData.get("password") as string

  if (!password) {
    return {
      success: false,
      message: "パスワードを入力してください。",
    }
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return {
      success: false,
      message: "パスワードが正しくありません。",
    }
  }

  // 認証成功 - Cookieを設定
  const cookieStore = await cookies()
  const authToken = generateAuthToken()

  cookieStore.set("admin-auth", authToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24, // 24時間
  })

  redirect("/admin")
}

export async function logoutAdmin() {
  const cookieStore = await cookies()
  cookieStore.delete("admin-auth")
  redirect("/admin/login")
}

import { cookies } from "next/headers"

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get("admin-auth")

  if (!authToken) {
    return false
  }

  // 簡単なトークン検証（実際のプロジェクトではより堅牢な方法を使用）
  const expectedToken = Buffer.from(`admin:${process.env.ADMIN_PASSWORD}`).toString("base64")
  return authToken.value === expectedToken
}

export function generateAuthToken(): string {
  return Buffer.from(`admin:${process.env.ADMIN_PASSWORD}`).toString("base64")
}

"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { loginAdmin } from "@/app/actions/auth"

export default function AdminLoginPage() {
  const [state, action, isPending] = useActionState(loginAdmin, null)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">管理者ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={action} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">パスワード</Label>
              <Input id="password" name="password" type="password" required className="w-full" disabled={isPending} />
            </div>

            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "ログイン中..." : "ログイン"}
            </Button>

            {state?.message && (
              <div className={`text-center text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>
                {state.message}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

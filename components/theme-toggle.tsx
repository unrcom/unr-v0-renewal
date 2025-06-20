"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-white hover:bg-cyan-600 dark:text-gray-100 dark:hover:bg-gray-700"
      aria-label={theme === "light" ? "ダークモードに切り替え" : "ライトモードに切り替え"}
    >
      {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

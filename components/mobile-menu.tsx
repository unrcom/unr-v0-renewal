"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

interface MobileMenuProps {
  currentPath?: string
}

export function MobileMenu({ currentPath }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { href: "/", label: "ホーム" },
    { href: "/mission", label: "ミッション" },
    { href: "/prof", label: "会社概要" },
    { href: "/contact", label: "お問合せ" },
    { href: "/style", label: "開発スタイル" },
    { href: "/times", label: "時系列" },
  ]

  return (
    <>
      {/* ハンバーガーメニューボタン */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:bg-cyan-600 dark:hover:bg-gray-700 lg:hidden"
        aria-label="メニューを開く"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* オーバーレイ */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu} />}

      {/* サイドバーメニュー */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-cyan-500 dark:bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-600 dark:border-gray-700">
          <Link href="/" onClick={closeMenu} className="text-xl font-semibold">
            unremoted.com
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            className="text-white hover:bg-cyan-600 dark:hover:bg-gray-700"
            aria-label="メニューを閉じる"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* メニュー項目 */}
        <nav className="p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-2 px-3 rounded-md transition-colors ${
                    currentPath === item.href
                      ? "bg-cyan-600 dark:bg-gray-700 text-white"
                      : "hover:bg-cyan-600 dark:hover:bg-gray-700 text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* テーマ切り替えボタン */}
        <div className="absolute bottom-4 left-4">
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}

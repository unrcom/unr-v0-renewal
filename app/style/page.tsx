import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function StylePage() {
  const developmentItems = [
    "link bkiban",
    "Mac (apple silicon) 上に開発環境を構築する（できるだけ CLI を用いる動機です）",
    "2023年版・日常業務のはじめかた",
    "React + Nextjs + TypeScript による Vercel CDN からの静的コンテンツ配信",
    "React による シングルページWebアプリケーション (SPA)の開発",
    "Cross platform によるスマートフォンアプリの開発",
    "新人社員向け Webプログラミング研修",
    "Firebase Authentication を用いたユーザ認証",
    "aws Lightsail Redmine インスタンス によるチケットサービス",
    "aws Lightsail WordPress インスタンス による Webページの配信",
    "aws S3 + CloudFront による静的 Web ページの配信",
    "Mac (Intel chip) での開発に必要なツールのインストール",
    "Docker container を用いた React + Redux Toolkit + TypeScript による Webフロントエンド開発環境の構築",
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu currentPath="/style" />
              <Link href="/" className="text-xl font-semibold">
                unremoted.com
              </Link>
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              <Link href="/" className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/mission" className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors">
                Mission
              </Link>
              <Link href="/prof" className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors">
                Profile
              </Link>
              <Link href="/style" className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors">
                Style
              </Link>
              <Link href="/times" className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors">
                Times
              </Link>
              <Link href="/contact" className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 sm:p-8 lg:p-12">
            <div className="space-y-4">
              {developmentItems.map((item, index) => (
                <div key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <p className="text-sm sm:text-base">We are unremoted.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

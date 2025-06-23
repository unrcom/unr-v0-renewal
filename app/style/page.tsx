import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

export default function StylePage() {
  const developmentItems = [
    <Link
      key="bkiban"
      href="https://link.bkiban.com"
      rel="noopener noreferrer"
      target="_blank"
    >
      link bkiban
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/unr/items/12d16cbc491a9c3e4af6"
      rel="noopener noreferrer"
      target="_blank"
    >
      Mac (apple silicon) 上に開発環境を構築する（できるだけ CLI
      を用いる動機です）
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/ishi32/items/24ef4aff3ceff3972208"
      rel="noopener noreferrer"
      target="_blank"
    >
      2023年版・日常業務のはじめかた
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/unr/items/8de632d48bfa72d3f149"
      rel="noopener noreferrer"
      target="_blank"
    >
      React + Nextjs + TypeScript による Vercel CDN からの静的コンテンツ配信
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/unr/items/c627a9b25628441e64f3"
      rel="noopener noreferrer"
      target="_blank"
    >
      React による シングルページWebアプリケーション (SPA)の開発
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/ishi32/private/aec7b9504ef987aeda22"
      rel="noopener noreferrer"
      target="_blank"
    >
      新人社員向け Webプログラミング研修
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/ishi32/private/3ffbf05f8024ae8cedab"
      rel="noopener noreferrer"
      target="_blank"
    >
      Firebase Authentication を用いたユーザ認証
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/unr/items/ccedd6aac4bfbb288e16"
      rel="noopener noreferrer"
      target="_blank"
    >
      aws Lightsail Redmine インスタンス によるチケットサービス
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/unr/items/0fa80d1bca9c46235e9f"
      rel="noopener noreferrer"
      target="_blank"
    >
      aws Lightsail WordPress インスタンス による Webページの配信
    </Link>,
    <Link
      key="bkiban"
      href="https://qiita.com/unr/items/56f38111d04d09c23983"
      rel="noopener noreferrer"
      target="_blank"
    >
      aws S3 + CloudFront による静的 Web ページの配信
    </Link>,
    <Link
      key="bkiban"
      href="https://github.com/unrcom/devenv_mac_intelcpu"
      rel="noopener noreferrer"
      target="_blank"
    >
      Mac (Intel chip) での開発に必要なツールのインストール
    </Link>,
    <Link
      key="bkiban"
      href="https://github.com/unrcom/devenv_docker_react"
      rel="noopener noreferrer"
      target="_blank"
    >
      Docker container を用いた React + Redux Toolkit + TypeScript による
      Webフロントエンド開発環境の構築
    </Link>,
  ];

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
              <Link
                href="/"
                className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/mission"
                className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
              >
                Mission
              </Link>
              <Link
                href="/prof"
                className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/style"
                className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
              >
                Style
              </Link>
              <Link
                href="/times"
                className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
              >
                Times
              </Link>
              <Link
                href="/contact"
                className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
              >
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
                <div
                  key={index}
                  className="text-gray-700 dark:text-gray-300 leading-relaxed"
                >
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
  );
}

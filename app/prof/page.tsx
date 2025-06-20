import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function ProfPage() {
  const companyData = {
    会社名: "アンリモート合同会社",
    Duns: "680152082",
    法人番号: "801103010605",
    適格請求書発行事業者登録番号: "T801103010605",
    ドメイン: "unremoted.com",
    設立: "2021年4月",
    事業所在地: {
      郵便番号: "1600022",
      住所: "東京都新宿区新宿5-11-30",
      建物: "新宿第五葉山ビル308号室",
    },
    公的金融機関: ["東京三協信用金庫 新宿支店", "GMOあおぞらネット銀行 法人営業部"],
    代表社員: {
      氏名: "石光能治",
      メールアドレス: "ishi32@unremoted.com",
      電話番号: "070-4700-1622",
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu currentPath="/prof" />
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
            <pre className="text-sm sm:text-base font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap overflow-x-auto">
              <code>{JSON.stringify(companyData, null, 2)}</code>
            </pre>
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

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu currentPath="/" />
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
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Welcome to unremoted.com
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              生成AIとカスタムSaaSでソリューションをご提供しています
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
              >
                <Link href="/contact">お問い合わせ</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <Link href="/prof">詳細を見る</Link>
              </Button>
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

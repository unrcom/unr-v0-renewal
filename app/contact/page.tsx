import { ContactForm } from "@/components/contact-form"
import { Mail } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu currentPath="/contact" />
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
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Email Contact Info */}
          <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center space-x-3 mb-2">
              <Mail className="h-5 w-5 text-cyan-500 dark:text-cyan-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">メールでのお問い合わせ</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              <a
                href="mailto:info@unremoted.com"
                className="text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
              >
                info@unremoted.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">お問い合わせフォーム</h2>
            <ContactForm />
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

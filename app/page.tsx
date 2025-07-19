import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FileText, ExternalLink } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/" />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Welcome to unremoted.com
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              生成AIとカスタムSaaSでソリューションを提供しています
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

        {/* Latest News Section */}
        <div className="bg-white dark:bg-gray-800 py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Latest News
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                最新の技術動向と実績をお届けします
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border dark:border-gray-700 p-6 sm:p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyan-500 dark:bg-cyan-600 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        NEW
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        2025年7月18日
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                      AWS Summit Tokyo 2025 生成AI動向レポート
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      企業の業務変革への示唆 〜
                      基調講演の注目発言と企業導入成功事例から見る実践的AI活用
                      〜
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        asChild
                        className="bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-700"
                      >
                        <Link
                          href="/aws-summit-2025-report"
                          className="inline-flex items-center gap-2"
                        >
                          レポートを読む
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          Claude 4
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          生成AI
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">
                          企業導入
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

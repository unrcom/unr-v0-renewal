import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  FileText,
  ExternalLink,
  Network,
  Users,
  MessageSquare,
  Target,
  CheckCircle,
} from "lucide-react";

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

        {/* Company Constitution Section */}
        <div className="bg-white dark:bg-gray-800 py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Company Constitution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                分散型組織として大切にする価値観と行動指針
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border dark:border-gray-700 p-6 sm:p-8 lg:p-10">
                {/* 前文 */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 dark:bg-cyan-600 rounded-full mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      前文
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      私たちは、中央集権的な統制に依存せず、各メンバーの自律性とネットワークの力を信じます。失敗を恐れず、変化を受け入れ、オープンな協働を通じて持続的な価値を創造することをここに宣言します。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* 第一章 分散型意思決定 */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第一章　分散型意思決定
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第1条（自律的判断権）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            各メンバーは、専門領域において自律的な意思決定権を持ちます
                          </li>
                          <li>
                            •
                            中央の承認を待つことなく、迅速な判断と実行を行います
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第2条（集合知の活用）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            重要な決定は、関係者との対話と情報共有を通じて行います
                          </li>
                          <li>
                            • 多様な視点を取り入れ、集合知を最大限に活用します
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 第二章 再生・適応能力 */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <Network className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第二章　再生・適応能力
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第3条（失敗からの学習）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            • 失敗を学習と成長の機会として積極的に受け入れます
                          </li>
                          <li>
                            • 迅速な試行錯誤を通じて最適解を見つけ出します
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第4条（変化への適応）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            • 環境の変化に柔軟に対応し、組織自体を進化させます
                          </li>
                          <li>• 固定的な構造やプロセスに固執しません</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 第三章 オープンネットワーク */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第三章　オープンネットワーク
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第5条（透明性の確保）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            情報とナレッジを積極的に共有し、組織の透明性を保ちます
                          </li>
                          <li>
                            •
                            ただし、顧客との契約に基づく秘密保持義務は厳格に遵守します
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第6条（外部との協働）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            組織の境界を超えた協働とパートナーシップを積極的に構築します
                          </li>
                          <li>
                            •
                            オープンソース精神に基づいた知識の共有と相互発展を目指します
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 第四章 触媒としてのリーダーシップ */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-orange-500 dark:bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第四章　触媒としてのリーダーシップ
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第7条（エンパワーメント）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            リーダーは統制者ではなく、メンバーの能力を引き出す触媒として機能します
                          </li>
                          <li>
                            • 各メンバーが最大限の力を発揮できる環境を整備します
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第8条（持続可能な成長）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            一時的な成功ではなく、組織とメンバーの持続的な成長を追求します
                          </li>
                          <li>
                            •
                            ネットワーク全体の繁栄を通じて、個々の成功を実現します
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 第五章 顧客価値の創造 */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-500 dark:bg-red-600 rounded-lg flex items-center justify-center mr-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第五章　顧客価値の創造
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第9条（顧客起点のサイクル）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            顧客（プロジェクトオーナー）の意向を起点としたビジネスサイクルを構築します
                          </li>
                          <li>
                            •
                            分散型組織の柔軟性を活かしながら、顧客価値の最大化を追求します
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第10条（成果物の品質保証）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            顧客の資産となる成果物の品質を、適切なレベルのレビューとテストによって担保します
                          </li>
                          <li>
                            •
                            自律的な品質管理体制を通じて、継続的な改善を実現します
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20">
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

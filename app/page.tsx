import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  FileText,
  ExternalLink,
  Scale,
  Users,
  MessageSquare,
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
                私たちが大切にする価値観と行動指針
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg border dark:border-gray-700 p-6 sm:p-8 lg:p-10">
                {/* 前文 */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 dark:bg-cyan-600 rounded-full mb-4">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      前文
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      私たちは、お客様、パートナー企業、そして社会全体との信頼関係を基盤とし、技術を通じて豊かな未来を創造することを使命とします。すべての人の自由と多様性を尊重し、公正で透明な事業活動を行うことをここに宣言します。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* 第一章 包括的自由権 */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第一章　包括的自由権
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第1条（基本的人権の尊重）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            すべての人が生まれながらに持つ自由と権利を最大限に尊重します
                          </li>
                          <li>
                            •
                            個人の尊厳を何よりも大切にし、これを侵すことはありません
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第2条（個人の尊重）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>
                            •
                            すべての個人が持つ生命、自由、幸福を追求する権利を尊重します
                          </li>
                          <li>• 一人ひとりの価値観と選択を大切にします</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 第二章 法の下の自由と多様性 */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <Scale className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第二章　法の下の自由と多様性
                      </h3>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                        第3条（平等と多様性）
                      </h4>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                        <li>
                          • 法の下での平等を守り、多様性豊かな組織を構築します
                        </li>
                        <li>
                          •
                          性別、年齢、国籍、信条、社会的地位によって差別することはありません
                        </li>
                        <li>
                          •
                          多様な背景を持つ人々との協働によって、組織をより柔軟かつ強固にしていきます
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 第三章 精神的自由 */}
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        第三章　精神的自由
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第4条（思想・良心の自由）
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 ml-4">
                          • すべての人の思想と良心の自由を尊重します
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第5条（信教の自由）
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 ml-4">
                          • 宗教的信念や価値観の多様性を認め、尊重します
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第6条（表現の自由）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>• 社内においては一切の表現の自由を保障します</li>
                          <li>
                            •
                            社外においては、常にお客様と社会全体の利益のために責任を持った表現を行います
                          </li>
                          <li>
                            •
                            お客様とお客様の資産に対しては、お客様との契約の下、お客様の利益のために責任を持って取り扱います
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第7条（活動の自由）
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 ml-4">
                          •
                          職業選択や居住の自由など、基本的な生活の自由を尊重します
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                          第8条（学問・技術の自由）
                        </h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                          <li>• 学習と技術革新への自由な探求を支援します</li>
                          <li>• 創造的な発想と挑戦を奨励します</li>
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

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AWSSubmitReportPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/aws-summit-2025-report" />

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 sm:p-8 lg:p-12">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {/* Section 1: Header */}
              <div className="mb-12">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                  AWS Summit Tokyo 2025 生成AI動向レポート
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-8 text-center">
                  〜企業の業務変革への示唆〜
                </h2>

                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-l-4 border-cyan-500 mb-8">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    2025年6月25日、AWS Summit Tokyo 2025 が開催されました。 170
                    講演のうち 30 %以上が 生成AI 関連という、まさに 生成AI
                    推しを象徴するイベントとなりました。
                    特に注目すべきは、基調講演での Anthropic 社の ケイト
                    氏の登壇でした。
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    本レポートでは、事業継承、M&A、リスク管理、IT戦略、サステナビリティなど、
                    <strong className="text-cyan-700 dark:text-cyan-300">
                      幅広いビジネスアドバイザリー領域
                    </strong>
                    での 生成AI 活用の可能性について、
                    特に組織の成長に伴うナレッジ統合・活用の観点から、
                    最新動向と実務への適用例をお伝えします。
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    レポート作成日: 2025年7月18日
                  </p>
                </div>
              </div>

              {/* Section 2: Anthropic基調講演ハイライト */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  Anthropic社 基調講演の重要発表
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6">
                  〜 企業AI 活用の新たな転換点 〜
                </h3>

                {/* 主要発表事項 */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      1
                    </span>
                    主要発表事項
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    2025年6月25日、Anthropic 社の ケイト
                    氏が重要な発表を行いました：
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>
                      <strong>
                        本日 (2025年6月25日) より Claude 4 モデルが Amazon
                        Bedrock で利用可能に
                      </strong>
                    </li>
                    <li>
                      <strong>2025年秋、東京オフィス開設</strong>
                      （日本市場、顧客、人材への長期的コミットメントの明確な表明）
                    </li>
                    <li>
                      <strong>日本語版 Claude 全面展開 </strong>
                      （日本文化、日本語文脈まで理解する高度な対応）
                    </li>
                  </ul>
                </div>

                {/* 企業哲学 */}
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      2
                    </span>
                    注目すべき企業哲学
                  </h4>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    「私の最高の日々は、袖をまくってお客様と一緒に実験し、
                    真のインパクトを生み出すユースケースを探求する時です」
                  </blockquote>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    &lsquo;My favorite days at Anthropic are the ones where we
                    get to roll up our sleeves and experiment with use cases
                    that drive true impact for you and for your
                    customers.&rsquo;
                  </blockquote>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    これは単なる技術提供ではなく
                    <strong className="text-green-700 dark:text-green-300">
                      顧客との共創を重視する
                    </strong>{" "}
                    Anthropic の姿勢を明確に示しています。
                  </p>
                </div>

                {/* 戦略的意味 */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      3
                    </span>
                    企業向けの戦略的意味
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    特に急速に成長した組織にとって重要なポイント：
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                      <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        データ主権性の確保
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        日本リージョンでの処理
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                      <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        組織固有の文脈理解
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        日本の商習慣・文化への対応
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                      <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        段階的導入支援
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        実験的アプローチの重視
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: 企業導入成功事例 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  企業導入成功事例
                </h2>
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-6">
                  〜日本企業が示すAI活用の実践例〜
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  ケイト氏が紹介した日本企業の導入事例は、ビジネスアドバイザリー業務への応用可能性を示しています：
                </p>

                {/* NRI事例 */}
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                    <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                      NRI
                    </span>
                    野村総合研究所
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">
                        課題
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        複雑な日本語文書の分析に数時間を要していた
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">
                        結果
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        Claudeにより数分に短縮、同等の精度を維持
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">
                        示唆
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        M&A案件の企業分析資料、契約書レビュー等への適用可能性
                      </p>
                    </div>
                  </div>
                </div>

                {/* パナソニック事例 */}
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                    <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                      P
                    </span>
                    パナソニック
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">
                        アプローチ
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        戦略的パートナーシップによる全社AI活用
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">
                        活用範囲
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        社内業務効率化と顧客向けプラットフォーム両方で活用
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">
                        示唆
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        大規模組織での段階的AI導入モデル
                      </p>
                    </div>
                  </div>
                </div>

                {/* Route事例 */}
                <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg mb-8 border-l-4 border-teal-500">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                    <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                      R
                    </span>
                    Route（開発企業）
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">
                        成果
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        7時間の連続自律開発作業を実現
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">
                        効果
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        エンジニアがより高度で差別化された業務に集中
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-1">
                        示唆
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400">
                        ITシステム構築、業務自動化プロジェクトでの活用
                      </p>
                    </div>
                  </div>
                </div>

                {/* 定量効果 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      💰
                    </span>
                    導入効果の定量化
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        50-80%
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        コスト削減効果
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                        日本
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        データ主権性確保
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                        段階的
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        スケールアップ対応
                      </p>
                    </div>
                  </div>
                </div>

                {/* アドバイザリー業務への示唆 */}
                <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">
                      🔍
                    </span>
                    ますます高度化するアドバイザリー業務への示唆
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                    これらの事例から見えるアドバイザリー業務での活用領域：
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                    <li>大量文書の迅速な分析・要約</li>
                    <li>専門知識の組織横断的な共有</li>
                    <li>クライアント固有の課題解決支援の効率化</li>
                    <li>
                      完全かつストレスのないセキュリティの確保と適切なオプトアウトの実現
                    </li>
                  </ul>
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

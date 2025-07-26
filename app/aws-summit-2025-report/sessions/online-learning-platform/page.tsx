import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "AtamaPLUS AI教育アプリ本番運用実践：2か月開発とコスト70%削減 | AWS Summit 2025",
  description:
    "AtamaPLUSのAI教育アプリ開発・運用実践知を詳細分析。AIステップ解説機能の2か月開発、プロンプトキャッシングによる70%コスト削減、教育ドメイン特有の品質保証手法まで包括的にレポート。",
  keywords:
    "AtamaPLUS, AI教育アプリ, Amazon Bedrock, プロンプトキャッシング, LLM as a Judge, EdTech, 教育AI, 本番運用",
  authors: [{ name: "unremoted.com" }],
  openGraph: {
    title: "AtamaPLUS：AI教育アプリの本番運用実践知",
    description:
      "AWS Summit 2025で語られたAI教育アプリの開発・運用ノウハウ。2か月開発とコスト削減の実践事例。",
    type: "article",
    url: "https://unremoted.com/aws-summit-2025-report/sessions/online-learning-platform",
    siteName: "unremoted.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AtamaPLUS：AI教育アプリ本番運用の実践知",
    description:
      "2か月開発とコスト70%削減を実現。教育AIアプリの開発・運用ノウハウを詳細レポート。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function OnlineLearningPlatformPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/aws-summit-2025-report/sessions/online-learning-platform" />

      {/* Main Content */}
      <main className="flex-1 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 sm:p-8 lg:p-12">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {/* Header Section */}
              <div className="mb-12">
                <div className="mb-6">
                  <a
                    href="/aws-summit-2025-report"
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium mb-4"
                  >
                    ← メインレポートに戻る
                  </a>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  Amazon Bedrockで実現する新たな学習体験
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-8">
                  〜AtamaPLUSが示すAI教育アプリの本番運用実践知〜
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      講演者
                    </h3>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <p>前田氏（AtamaPLUS）</p>
                      <p>VPoE・技術部署責任者</p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      企業情報
                    </h3>
                    <div className="text-sm text-green-700 dark:text-green-300">
                      <p>EdTechスタートアップ（8期目）</p>
                      <p>AI教材「atama+」提供</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    講演概要
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    EdTechスタートアップのAtamaPLUSが開発・運用する「AIステップ解説」機能について、
                    開発から本番環境での運用まで、実践的な知見が包括的に紹介された講演です。
                    生成AIアプリケーションを「作る」ことから「安全に提供し続ける」ことへのフォーカスシフトを通じて、
                    教育ドメイン特有の課題解決と、他業界にも応用可能な本番運用のベストプラクティスが語られました。
                  </p>
                  <div className="bg-orange-100 dark:bg-orange-800/30 p-3 rounded text-sm">
                    <p className="text-orange-800 dark:text-orange-200">
                      <strong>講演の特徴:</strong>{" "}
                      RAGやエージェント等のトレンド技術よりも、
                      実際にユーザーが使うアプリケーションの運用面での「泥臭い工夫」に焦点を当てた実践的内容
                    </p>
                  </div>
                </div>
              </div>

              {/* 生成AI時代の危機感と機会 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  生成AI時代における教育業界の危機感と機会
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    AtamaPLUSの事業背景
                  </h3>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4">
                      企業概要
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                          ミッション
                        </h5>
                        <p className="text-purple-600 dark:text-purple-400 italic">
                          「教育に 人に 社会に 次の可能性を」
                        </p>

                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 mt-3">
                          事業内容
                        </h5>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• AI教材「atama+」を全国の塾・予備校に提供</li>
                          <li>• 自社塾運営</li>
                          <li>• 創業8期目のEdTechスタートアップ</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                          技術特徴
                        </h5>
                        <p className="text-purple-600 dark:text-purple-400">
                          一人一人の学習データから得意・苦手を分析し、カリキュラムをパーソナライズ
                        </p>

                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 mt-3">
                          これまでの挑戦
                        </h5>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• 河合塾との模試オンライン受験システム</li>
                          <li>• 大学入試方式変革プロダクト</li>
                          <li>• 教育業界での継続的技術革新</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    2022年末の転換点：ChatGPT登場による危機感
                  </h3>

                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4">
                      スタートアップとしての危機感
                    </h4>
                    <blockquote className="text-red-700 dark:text-red-300 mb-4 leading-relaxed italic pl-4 border-l-4 border-red-300 dark:border-red-600">
                      「破壊的イノベーションが世の中をどんどん変えていこうとしている中で、スタートアップとしては、
                      そのトレンドに乗らないと、最悪死んでしまうということが全然考えられる」
                    </blockquote>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          認識した変化
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• 技術的・社会的特異点の発生</li>
                          <li>• あらゆる業界のディスラプション</li>
                          <li>• 教育業界への大きな影響予測</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          教育特有の課題
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• 生成AIの確率的挙動への疑問</li>
                          <li>• 教育との親和性検証必要</li>
                          <li>• 真の価値提供内容の模索</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          対応の困難さ
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• 「ラフに手を出す」ことの危険性</li>
                          <li>• 何かやらねばという焦燥感</li>
                          <li>• 約1年間の試行錯誤期間</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AIステップ解説機能 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  AIステップ解説：教育課題に特化したAI活用
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    学習における根本課題の発見
                  </h3>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                      従来の学習体験の限界
                    </h4>

                    <div className="mb-4">
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                        基本的な学習サイクル
                      </h5>
                      <div className="flex items-center justify-center space-x-4 bg-yellow-100 dark:bg-yellow-800/30 p-4 rounded-lg">
                        <div className="bg-yellow-200 dark:bg-yellow-700 px-3 py-2 rounded">
                          問題を解く
                        </div>
                        <span className="text-yellow-600 dark:text-yellow-400">
                          →
                        </span>
                        <div className="bg-yellow-200 dark:bg-yellow-700 px-3 py-2 rounded">
                          解説を読む
                        </div>
                        <span className="text-yellow-600 dark:text-yellow-400">
                          →
                        </span>
                        <div className="bg-yellow-200 dark:bg-yellow-700 px-3 py-2 rounded">
                          繰り返し
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                          解説理解の課題
                        </h5>
                        <ul className="text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• 式変形過程の省略</li>
                          <li>• 突然出現する公式</li>
                          <li>• 使用理由の不明確さ</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                          学習への影響
                        </h5>
                        <ul className="text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• 本質的理解の欠如</li>
                          <li>• 知識の抜け落ち</li>
                          <li>• 学力向上の阻害</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">
                          生成AIとの親和性
                        </h5>
                        <ul className="text-yellow-600 dark:text-yellow-400 space-y-1">
                          <li>• 個別最適化解説</li>
                          <li>• 理解度に応じた詳細化</li>
                          <li>• 躓きポイントの特定</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                      生成AIとの親和性発見
                    </h4>
                    <blockquote className="text-green-700 dark:text-green-300 mb-4 leading-relaxed italic pl-4 border-l-4 border-green-300 dark:border-green-600">
                      「解説っていうものをもっと親切に、その生徒さんがどこで詰まっているのかっていうのも含めて、
                      理解度に合わせて、個別最適化して提供できないか」
                    </blockquote>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    AIステップ解説の機能設計
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                      基本アプローチ
                    </h4>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2 text-sm">
                      <li>
                        • ChatGPT風のフリー質問機能ではなく、解説の詳細化に特化
                      </li>
                      <li>• 学習コンテンツデータをコンテキストとして活用</li>
                      <li>
                        •
                        ユーザーの「自分が何を分からないか」の言語化コスト極小化
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      システム動作フロー
                    </h4>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          1
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            チャンク分割
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            解説文を意味のある塊に自動分割
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          2
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            段階的提示
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            チャンクごとに理解確認を実施
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          3
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            適応的詳細化
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            理解状況に応じて追加解説を生成
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          4
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            選択肢提示
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            予想される躓きポイントに対応した選択肢提供
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        ユーザー体験
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs">
                          ワンタップ詳細化
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                          個別最適化
                        </span>
                        <span className="px-3 py-1 bg-pink-100 dark:bg-pink-800/50 text-pink-800 dark:text-pink-200 rounded-full text-xs">
                          シームレス体験
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2か月強での高速開発 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  2か月強での高速開発アプローチ
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-500">
                    <h3 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                      組織的工夫
                    </h3>
                    <h4 className="font-medium text-emerald-700 dark:text-emerald-300 mb-2">
                      有志チーム編成
                    </h4>
                    <ul className="text-sm text-emerald-600 dark:text-emerald-400 space-y-1">
                      <li>• メイン業務と並行開発</li>
                      <li>• 少数精鋭による機動力</li>
                      <li>• 組織承認プロセス回避</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibent text-orange-800 dark:text-orange-200 mb-4">
                      価値検証重視
                    </h3>
                    <h4 className="font-medium text-orange-700 dark:text-orange-300 mb-2">
                      PR/FAQ手法活用
                    </h4>
                    <ul className="text-sm text-orange-600 dark:text-orange-400 space-y-1">
                      <li>• 開発前の価値明確化</li>
                      <li>• プレスリリース・FAQ事前作成</li>
                      <li>• 早期ユーザーヒアリング</li>
                    </ul>
                  </div>

                  <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-lg border-l-4 border-violet-500">
                    <h3 className="font-semibold text-violet-800 dark:text-violet-200 mb-4">
                      アーキテクチャ工夫
                    </h3>
                    <h4 className="font-medium text-violet-700 dark:text-violet-300 mb-2">
                      シンプル・独立設計
                    </h4>
                    <ul className="text-sm text-violet-600 dark:text-violet-400 space-y-1">
                      <li>• 既存APIサーバー非依存</li>
                      <li>• 別コンポーネント切り出し</li>
                      <li>• クライアント側データ渡し</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Amazon Bedrock選定理由
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-cyan-100 dark:bg-cyan-800/50 p-3 rounded-lg mb-2">
                        <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                          統一API
                        </span>
                      </div>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400">
                        複数基盤モデル（Claude、Nova等）の統一アクセス
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-lg mb-2">
                        <span className="font-semibold text-blue-700 dark:text-blue-300">
                          AWS連携
                        </span>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        IAMロール経由でのクレデンシャル不要接続
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-indigo-100 dark:bg-indigo-800/50 p-3 rounded-lg mb-2">
                        <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                          運用機能
                        </span>
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        ロギング、推論監視等の非機能要件充実
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 本番運用の3つの技術的工夫 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  本番運用における3つの技術的工夫
                </h2>

                <div className="space-y-8">
                  {/* 1. コスト課題 */}
                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center">
                      <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                        1
                      </span>
                      コスト課題の解決
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-3">
                        変動費構造リスクの認識
                      </h4>
                      <blockquote className="text-red-600 dark:text-red-400 mb-4 leading-relaxed italic pl-4 border-l-4 border-red-300 dark:border-red-600">
                        「生成アプリケーションってめちゃくちゃ変動費構造。使えば使うほどトークンコストを消費していって、
                        原価が圧迫されて、最悪赤字構造になる」
                      </blockquote>

                      <div className="bg-red-100 dark:bg-red-800/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          サービス事業者のジレンマ
                        </h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-red-600 dark:text-red-400">
                              開発側:
                            </span>
                            <span className="text-red-500 dark:text-red-500">
                              {" "}
                              たくさん使って欲しい
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-red-600 dark:text-red-400">
                              事業側:
                            </span>
                            <span className="text-red-500 dark:text-red-500">
                              {" "}
                              使われるほど困る（コスト圧迫）
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                        プロンプトキャッシングによる解決
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            実装概要
                          </h5>
                          <ul className="text-green-600 dark:text-green-400 space-y-1">
                            <li>• 実装時期: 2024年4月</li>
                            <li>• TTL: 5分間キャッシュ</li>
                            <li>• 対象: システムプロンプト部分</li>
                            <li>• 効果: 約70%コスト削減</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                            技術詳細
                          </h5>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded text-xs font-mono">
                            <div className="text-blue-600 dark:text-blue-400">
                              システムプロンプト（キャッシュ対象）
                            </div>
                            <div className="pl-2 text-green-600 dark:text-green-400">
                              ├─ 問題データ（固定）
                            </div>
                            <div className="pl-2 text-green-600 dark:text-green-400">
                              ├─ 解説データ（固定）
                            </div>
                            <div className="pl-2 text-green-600 dark:text-green-400">
                              └─ 指示内容（固定）
                            </div>
                            <div className="text-orange-600 dark:text-orange-400 mt-2">
                              ユーザープロンプト（都度課金）
                            </div>
                            <div className="pl-2 text-gray-600 dark:text-gray-400">
                              └─ ユーザーとの実際のやり取り
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2. 運用課題 */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                        2
                      </span>
                      運用課題：LLM as a Judge活用
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                        モデル変更頻度の高まり
                      </h4>
                      <div className="bg-blue-100 dark:bg-blue-800/30 p-4 rounded-lg text-sm">
                        <p className="text-blue-700 dark:text-blue-300 mb-2">
                          <strong>更新頻度:</strong>{" "}
                          月1回ペースでの新基盤モデルリリース
                        </p>
                        <p className="text-blue-600 dark:text-blue-400">
                          Claude 3.5 Sonnet v2 → Amazon Nova → Claude 3.5 Sonnet
                          → Claude 4 等
                        </p>
                      </div>
                    </div>

                    <div className="bg-cyan-50 dark:bg-cyan-900/30 p-6 rounded-lg">
                      <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-4">
                        LLM as a Judge実装
                      </h4>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                            技術選択
                          </h5>
                          <ul className="text-cyan-600 dark:text-cyan-400 space-y-1">
                            <li>• Amazon Bedrock Evaluationsではなく</li>
                            <li>• LangChainのOSS「OpenEvals」を使用</li>
                            <li>• 実際のユーザーやり取りデータ活用</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                            評価プロセス
                          </h5>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <div className="bg-cyan-200 dark:bg-cyan-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                1
                              </div>
                              <span className="text-cyan-600 dark:text-cyan-400">
                                データセット準備
                              </span>
                            </div>
                            <div className="flex items-center">
                              <div className="bg-cyan-200 dark:bg-cyan-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                2
                              </div>
                              <span className="text-cyan-600 dark:text-cyan-400">
                                モデル比較実行
                              </span>
                            </div>
                            <div className="flex items-center">
                              <div className="bg-cyan-200 dark:bg-cyan-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-2">
                                3
                              </div>
                              <span className="text-cyan-600 dark:text-cyan-400">
                                自動評価・判定
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. 可観測性 */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">
                        3
                      </span>
                      可観測性：アプリケーションレイヤー監視
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                        生成AIアプリケーションの特性
                      </h4>
                      <div className="bg-purple-100 dark:bg-purple-800/30 p-4 rounded-lg text-sm text-purple-700 dark:text-purple-300">
                        <ul className="space-y-1">
                          <li>• 機械学習アプリケーションの進化系</li>
                          <li>
                            •
                            通常のロジカルアプリケーションより振る舞いの安定性が低い
                          </li>
                          <li>• 確率的挙動によるセッションごとの監視必要性</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-100 dark:bg-red-800/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          Amazon Bedrockログの限界
                        </h5>
                        <ul className="text-sm text-red-600 dark:text-red-400 space-y-1">
                          <li>• Bedrock ↔ Claude間のログのみ</li>
                          <li>
                            • アプリケーションレイヤーのメタデータ付与困難
                          </li>
                          <li>• セッション特定等の詳細分析に制約</li>
                        </ul>
                      </div>

                      <div className="bg-green-100 dark:bg-green-800/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                          Datadog LLM Observability
                        </h5>
                        <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                          <li>• 既存監視基盤との統合</li>
                          <li>• 関数wrap/デコレーターでの簡単計装</li>
                          <li>• ユーザーセッション識別情報追加</li>
                          <li>• レイテンシ・コスト・トークン一元管理</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 教育ドメイン特有の品質保証 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  教育ドメイン特有の品質保証
                </h2>

                <div className="mb-8">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-4">
                      教育サービスとしての責任
                    </h3>
                    <blockquote className="text-orange-700 dark:text-orange-300 mb-4 leading-relaxed italic pl-4 border-l-4 border-orange-300 dark:border-orange-600">
                      「教育サービスとして生徒さんに提供するという上で、外せない責任があります。
                      学術的に正しい回答を生成して、提供しないと、よく分からない回答を解説を得られて、
                      生徒さんを混乱させてしまうというリスクがある」
                    </blockquote>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                      AIプロダクト品質保証ガイドライン活用
                    </h3>
                    <div className="text-sm text-blue-700 dark:text-blue-300 space-y-3">
                      <div>
                        <h4 className="font-medium text-blue-600 dark:text-blue-400">
                          参考基準
                        </h4>
                        <p>AIプロダクト品質保証コンソーシアムのガイドライン</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-600 dark:text-blue-400">
                          重点評価軸
                        </h4>
                        <ul className="space-y-1">
                          <li>
                            • <strong>回答性能・事実性:</strong>{" "}
                            教育コンテンツの正確性重視
                          </li>
                          <li>
                            • <strong>誠実性:</strong>{" "}
                            生徒への適切な学習支援確保
                          </li>
                          <li>• セキュリティリスク: 自由入力なしで低リスク</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                      ユーザーフィードバック収集
                    </h3>
                    <div className="text-sm text-green-700 dark:text-green-300 space-y-3">
                      <div>
                        <h4 className="font-medium text-green-600 dark:text-green-400">
                          解決率モニタリング
                        </h4>
                        <ul className="space-y-1">
                          <li>• 解説終了時の2択アンケート</li>
                          <li>• 「理解できたかどうか」の継続収集</li>
                          <li>• 解決率75%のKPI設定・定期監視</li>
                        </ul>
                      </div>
                      <div className="bg-green-100 dark:bg-green-800/30 p-3 rounded">
                        <h5 className="font-medium text-green-600 dark:text-green-400">
                          改善サイクル
                        </h5>
                        <div className="text-xs text-green-500 dark:text-green-500">
                          機能利用 → 理解度FB → 定期分析 → プロンプト改善
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    ドメインエキスパート検査体制
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-violet-700 dark:text-violet-300 mb-3">
                        社内リソース活用
                      </h4>
                      <ul className="text-violet-600 dark:text-violet-400 space-y-2">
                        <li>• AtamaPLUS社内の学術エキスパート活用</li>
                        <li>• コンテンツ制作チームの専門知識利用</li>
                        <li>• 怪しい回答発見時のプロンプト調整プロセス</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                        専用ツール開発
                      </h4>
                      <ul className="text-purple-600 dark:text-purple-400 space-y-2">
                        <li>• ユーザーやり取り内容参照UI開発</li>
                        <li>• ドメインエキスパートによるレビュー環境</li>
                        <li>• 安全なレビュー環境（個人情報非含有）</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      実現可能性の条件
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-violet-100 dark:bg-violet-800/50 text-violet-800 dark:text-violet-200 rounded-full text-xs">
                        自由入力なし
                      </span>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                        個人情報非含有
                      </span>
                      <span className="px-3 py-1 bg-pink-100 dark:bg-pink-800/50 text-pink-800 dark:text-pink-200 rounded-full text-xs">
                        セッション構造化
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AWS支援体制 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  AWS Generative AI Innovation Centerとの協業
                </h2>

                <div className="mb-8">
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-l-4 border-cyan-500">
                    <h3 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-4">
                      支援プログラムの概要
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-medium text-cyan-700 dark:text-cyan-300 mb-2">
                          プログラム特徴
                        </h4>
                        <ul className="text-cyan-600 dark:text-cyan-400 space-y-1">
                          <li>• 生成AIアプリケーション本番運用特化支援</li>
                          <li>• AWS内の専門家による直接支援</li>
                          <li>• 実践的な開発支援（理論ではなく実装レベル）</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-cyan-700 dark:text-cyan-300 mb-2">
                          支援内容の実践性
                        </h4>
                        <blockquote className="text-cyan-600 dark:text-cyan-400 italic text-xs pl-3 border-l-2 border-cyan-300">
                          「実際に今こんな開発してるんですよねっていうのを、コードを渡して、プロンプト渡して、
                          実際のデータも渡して、それをもとに専門家の方からアドバイスをいただける」
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                      1. 回答品質向上支援
                    </h3>
                    <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
                      <div>
                        <h4 className="font-medium text-green-600 dark:text-green-400">
                          課題
                        </h4>
                        <p>数学の増減表で上に凸・下に凸を必ず逆にする事象</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 dark:text-green-400">
                          支援内容
                        </h4>
                        <p>実際のプロンプト・データのスペシャリストレビュー</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-600 dark:text-green-400">
                          結果
                        </h4>
                        <p>具体的改善提案の実装・品質向上実現</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-4">
                      2. コスト削減アーキテクチャ支援
                    </h3>
                    <div className="space-y-3 text-sm text-orange-700 dark:text-orange-300">
                      <div>
                        <h4 className="font-medium text-orange-600 dark:text-orange-400">
                          課題
                        </h4>
                        <p>変動費コストによる事業リスク</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 dark:text-orange-400">
                          支援内容
                        </h4>
                        <p>アーキテクチャ大幅改善提案・キャッシュ活用戦略</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-orange-600 dark:text-orange-400">
                          提案
                        </h4>
                        <p>固定費構造割合増加によるコスト構造改善</p>
                      </div>
                      <div className="bg-orange-100 dark:bg-orange-800/30 p-2 rounded text-xs">
                        <span className="text-orange-500 dark:text-orange-500">
                          現状:
                          開発体制確保できず未実装（但し実装価値の高い提案を受領）
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 組織のAI活用戦略への応用ポイント */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  組織のAI活用戦略への応用ポイント
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      生成AI導入の段階的アプローチ
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                          Phase別実装ロードマップ
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                              1
                            </div>
                            <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                              価値仮説の明確化
                            </h5>
                            <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                              <li>• ドメイン特有課題の特定</li>
                              <li>• 生成AIとの親和性検証</li>
                              <li>• PR/FAQ手法による価値明文化</li>
                            </ul>
                          </div>
                          <div className="text-center">
                            <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                              2
                            </div>
                            <h5 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">
                              高速プロトタイピング
                            </h5>
                            <ul className="text-xs text-indigo-700 dark:text-indigo-300 space-y-1">
                              <li>• 有志チーム編成による機動力</li>
                              <li>• 既存システム依存度最小化</li>
                              <li>• マネージドサービス活用</li>
                            </ul>
                          </div>
                          <div className="text-center">
                            <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                              3
                            </div>
                            <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                              本番運用設計
                            </h5>
                            <ul className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                              <li>• 変動費コスト構造検討</li>
                              <li>• 品質保証プロセス組み込み</li>
                              <li>• 可観測性・監視体制整備</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      ドメイン特有要件への対応指針
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-500">
                        <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                          教育業界の示唆
                        </h4>
                        <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-2">
                          <li>
                            • <strong>正確性重視:</strong>{" "}
                            学術的正確性の外部検証体制
                          </li>
                          <li>
                            • <strong>安全性確保:</strong>{" "}
                            自由入力制限による予測可能性向上
                          </li>
                          <li>
                            • <strong>継続改善:</strong>{" "}
                            ユーザーフィードバック収集・KPI設定
                          </li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-l-4 border-teal-500">
                        <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-4">
                          他業界への応用
                        </h4>
                        <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2">
                          <li>
                            • <strong>医療:</strong>{" "}
                            診断支援での正確性・専門家検証
                          </li>
                          <li>
                            • <strong>金融:</strong>{" "}
                            投資助言での法的適合性・専門家監修
                          </li>
                          <li>
                            • <strong>法務:</strong>{" "}
                            契約書分析での法的正確性・弁護士監修
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      技術選択の実践的考慮事項
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                          Amazon Bedrock選択要因
                        </h4>
                        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                          <li>
                            <strong>1. 開発効率:</strong>{" "}
                            統一API・認証周り整備済み
                          </li>
                          <li>
                            <strong>2. 運用負荷:</strong>{" "}
                            ログ取得・監視機能標準装備
                          </li>
                          <li>
                            <strong>3. コスト管理:</strong>{" "}
                            プロンプトキャッシング等の最適化機能
                          </li>
                          <li>
                            <strong>4. 専門支援:</strong> AWS Innovation
                            Center連携
                          </li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                          運用監視の重要性
                        </h4>
                        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                          <li>• アプリケーションレイヤーでの独自監視実装</li>
                          <li>• LLM as a Judgeによるモデル変更自動化</li>
                          <li>• ドメインエキスパートとエンジニアの協業体制</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* まとめ */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  まとめ：AI教育アプリ開発・運用の実践知
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    前田氏が示すAI実装の現実解
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                        1. 「作る」から「提供し続ける」へのシフト
                      </h4>
                      <blockquote className="text-blue-700 dark:text-blue-300 italic mb-3 pl-4 border-l-2 border-blue-300">
                        「生成AIのアプリケーションを作って、世の中に公開して使ってもらうみたいなことは、かなりスピーディにできる時代。
                        ただ、生成AIってかなり確率的な振る舞いをするので、これをそのままユーザーに使ってもらって大丈夫なんだろうか」
                      </blockquote>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                        2. ドメイン事業者としての責任
                      </h4>
                      <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                        <li>• 技術的可能性と事業的責任のバランス</li>
                        <li>• ユーザー価値提供への徹底的こだわり</li>
                        <li>• 段階的品質保証プロセスの構築</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                        3. 実践的工夫の積み重ね
                      </h4>
                      <ul className="text-purple-700 dark:text-purple-300 space-y-2 text-sm">
                        <li>• トレンド技術追求より運用課題解決重視</li>
                        <li>• 「泥臭い工夫」による安定サービス提供</li>
                        <li>• 継続的改善サイクルの仕組み化</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    AtamaPLUSの成果と今後展望
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
                        定量的成果
                      </h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                        <li>• 2か月強での開発・リリース実現</li>
                        <li>
                          • 約70%のコスト削減（プロンプトキャッシング活用）
                        </li>
                        <li>• 解決率75%のKPI達成・継続監視</li>
                      </ul>
                    </div>

                    <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg border-l-4 border-pink-500">
                      <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-3">
                        今後の展望
                      </h4>
                      <blockquote className="text-pink-700 dark:text-pink-300 italic text-sm mb-2">
                        「この技術によって、やっぱりこれって教育の世界をめちゃくちゃ変えるポテンシャルがある技術だなっていうのを確信した」
                      </blockquote>
                      <p className="text-pink-600 dark:text-pink-400 text-sm">
                        「教育に 人に 社会に
                        次の可能性を」の世界実現への継続的挑戦
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/30 p-8 rounded-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      AI実装成功の要因・持続可能なAI事業の要件
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
                        成功要因
                      </h4>
                      <ol className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
                        <li>
                          <strong>1. 明確な価値仮説:</strong>{" "}
                          ドメイン課題×AI親和性の的確な見極め
                        </li>
                        <li>
                          <strong>2. 高速検証:</strong>{" "}
                          有志チーム・シンプル設計による迅速価値検証
                        </li>
                        <li>
                          <strong>3. 本番考慮:</strong>{" "}
                          コスト・品質・監視の事前設計と継続改善
                        </li>
                        <li>
                          <strong>4. 専門支援:</strong>{" "}
                          ベンダー支援プログラムの積極活用
                        </li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        持続可能性要件
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li>• 変動費コスト構造への早期対応</li>
                        <li>• ドメイン専門家との協業体制構築</li>
                        <li>• ユーザーフィードバック収集・分析の仕組み化</li>
                        <li>• 技術進化に対応した継続的運用改善</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      「技術的可能性の追求と事業的責任の両立こそが、
                      <br />
                      真に価値あるAIサービスを生み出す鍵である」
                    </p>
                  </div>
                </div>
              </div>

              {/* ナビゲーション */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
                <div className="flex justify-between items-center">
                  <a
                    href="/aws-summit-2025-report"
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium"
                  >
                    ← メインレポートに戻る
                  </a>
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

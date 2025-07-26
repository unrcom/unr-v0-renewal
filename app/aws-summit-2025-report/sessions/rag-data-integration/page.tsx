import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "RAG実装実践ガイド：検索拡張生成の3段階進化アプローチ | AWS Summit 2025",
  description:
    "RAG（検索拡張生成）の実装ガイドを技術者向けに詳細解説。Naive→Advanced→Modular RAGの3段階進化、データ基盤設計5つのベストプラクティス、チャンキング戦略まで包括的に説明。",
  keywords:
    "RAG, 検索拡張生成, Amazon Bedrock, ベクトルDB, ハイブリッド検索, グラフRAG, データ基盤設計, AI実装",
  authors: [{ name: "unremoted.com" }],
  openGraph: {
    title: "RAG実装実践ガイド：技術者向け包括的解説",
    description:
      "AWS Summit 2025で語られたRAGの3段階進化アプローチとデータ基盤設計のベストプラクティス。",
    type: "article",
    url: "https://unremoted.com/aws-summit-2025-report/sessions/rag-data-integration",
    siteName: "unremoted.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG実装実践ガイド：3段階進化アプローチ",
    description:
      "検索拡張生成の実装から運用まで。技術者向けの詳細ガイドをAWS Summit 2025レポートで解説。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function RagDataIntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/aws-summit-2025-report/sessions/rag-data-integration" />

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
                  RAGを中心とした生成AIデータ活用実践ガイド
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-8">
                  〜コンテキスト強化から基盤設計まで：技術者向け包括的解説〜
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      講演者
                    </h3>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <p>高野氏（AWSジャパン）</p>
                      <p>ソリューションアーキテクト</p>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      セッション情報
                    </h3>
                    <div className="text-sm text-green-700 dark:text-green-300">
                      <p>時間: 40分</p>
                      <p>レベル: 300（技術詳細）</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    講演概要
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    RAG（Retrieval-Augmented
                    Generation：検索拡張生成）を中心とした生成AIにおけるデータ活用について、
                    技術的詳細から実装までを体系的に解説した講演です。
                    自動車保険の具体的ユースケースを通じて、コンテキストの種類から高度な検索手法、
                    そしてスケーラブルなデータ基盤設計まで、実際のシステム構築に必要な知識が包括的に提供されました。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        対象内容
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        技術メインの詳細内容（レベル300）
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                        対象外
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400">
                        ファインチューニング・モデル学習
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAGの2つのコンテキスト */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  RAGにおける2つのコンテキストの重要性
                </h2>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    🚗 具体的ユースケース：自動車保険チャットボット
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        ユーザー設定
                      </h4>
                      <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• パット（新車購入者）</li>
                        <li>• 旧車は売却済み</li>
                        <li>• 新車用保険が必要</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        ユーザーニーズ
                      </h4>
                      <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• 料金比較</li>
                        <li>• 補償内容検討</li>
                        <li>• パーソナライズ見積</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        解決課題
                      </h4>
                      <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• 汎用的回答の限界</li>
                        <li>• 個別最適化の必要性</li>
                        <li>• 適切なコンテキスト提供</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  RAGで必要な2種類のコンテキスト
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        1
                      </span>
                      状況コンテキスト
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                          定義
                        </h5>
                        <p className="text-blue-600 dark:text-blue-400">
                          ユーザーの人物、現在の状況、事実についての情報
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                          パット例
                        </h5>
                        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• 運転履歴、車両スペック</li>
                          <li>• 居住地、家族構成</li>
                          <li>• 過去の保険履歴</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                          データソース
                        </h5>
                        <p className="text-blue-600 dark:text-blue-400">
                          既存データベース（RDB）に構造化保存
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        2
                      </span>
                      セマンティックコンテキスト
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">
                          定義
                        </h5>
                        <p className="text-green-600 dark:text-green-400">
                          質問や事実に関連する類似情報、意味を与える情報
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">
                          パット例
                        </h5>
                        <ul className="text-green-600 dark:text-green-400 space-y-1">
                          <li>• 保険法律・規則</li>
                          <li>• 保険請求情報</li>
                          <li>• 業界ベストプラクティス</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">
                          データソース
                        </h5>
                        <p className="text-green-600 dark:text-green-400">
                          ベクトル変換後、ベクトルDBに保存
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    拡張プロンプトの4要素構成
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                          1
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                            基盤モデル指示
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            システムプロンプト
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                          2
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                            状況コンテキスト
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            ユーザー固有事実情報
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                          3
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                            セマンティックコンテキスト
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            関連類似情報
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">
                          4
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                            ユーザー質問
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            実際のクエリ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RAGの3段階進化 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  RAGの3段階進化アプローチ
                </h2>

                <div className="space-y-8">
                  {/* Naive RAG */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500">
                    <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-4 flex items-center">
                      <span className="bg-amber-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                        1
                      </span>
                      Naive RAG：全ての基礎となる手法
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                      <div>
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                          特徴
                        </h4>
                        <ul className="text-amber-600 dark:text-amber-400 space-y-1">
                          <li>• 質問→ベクトルDB検索→回答</li>
                          <li>• シンプルで実装容易</li>
                          <li>• 技術選定の基礎となる</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                          適用場面
                        </h4>
                        <ul className="text-amber-600 dark:text-amber-400 space-y-1">
                          <li>• 個人差によらず同様回答でOK</li>
                          <li>• パット・テリー等誰でも同じ</li>
                          <li>• 基本的な情報提供システム</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                          制限事項
                        </h4>
                        <ul className="text-amber-600 dark:text-amber-400 space-y-1">
                          <li>• データニュアンス捉えられない</li>
                          <li>• パーソナライゼーション不足</li>
                          <li>• 例：「保険料200-5,000ドル」</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Advanced RAG */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4 flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                        2
                      </span>
                      Advanced RAG：複数検索手法の組み合わせ
                    </h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">
                        3つの処理段階
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            検索前処理
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400">
                            質問のカスタマイズ・リライティング
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            コンテキスト検索
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400">
                            高度な検索手法適用
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <h5 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            検索後処理
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400">
                            フィルタリング・リランキング・要約
                          </p>
                        </div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-4">
                      主要テクニック
                    </h4>

                    <div className="space-y-4">
                      <div className="bg-cyan-50 dark:bg-cyan-900/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                          A. ハイブリッド検索
                        </h5>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="font-medium text-cyan-600 dark:text-cyan-400">
                              手法:
                            </span>{" "}
                            ベクトル検索 + 全文検索 + リランキング
                          </div>
                          <div>
                            <span className="font-medium text-cyan-600 dark:text-cyan-400">
                              効果:
                            </span>{" "}
                            固有名詞・専門用語の取りこぼし防止
                          </div>
                        </div>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">
                          B. グラフRAG
                        </h5>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="font-medium text-teal-600 dark:text-teal-400">
                              手法:
                            </span>{" "}
                            複雑な情報関連性をグラフ構造で管理
                          </div>
                          <div>
                            <span className="font-medium text-teal-600 dark:text-teal-400">
                              基盤:
                            </span>{" "}
                            Amazon Neptune Analytics
                          </div>
                        </div>
                      </div>

                      <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                        <h5 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                          C. 自然言語→SQL変換
                        </h5>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="font-medium text-indigo-600 dark:text-indigo-400">
                              手法:
                            </span>{" "}
                            質問をSQLクエリに変換してデータ取得
                          </div>
                          <div>
                            <span className="font-medium text-indigo-600 dark:text-indigo-400">
                              メリット:
                            </span>{" "}
                            全データのベクトル化が不要
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Modular RAG */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center">
                      <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4">
                        3
                      </span>
                      Modular RAG：自動化されたオーケストレーション
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                          概念
                        </h4>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-2">
                          <li>• 複数ナレッジベース・処理手法のモジュール化</li>
                          <li>• 最適なタイミング・順番での自動実行</li>
                          <li>• ユーザー体験の最大化</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-3">
                          技術基盤
                        </h4>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-2">
                          <li>
                            • <strong>Amazon Bedrock Agents</strong>
                            による自動オーケストレーション
                          </li>
                          <li>• 複数データソース・サービスの統合呼び出し</li>
                          <li>• ユーザー入力からの自動判断・実行</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* データ基盤設計 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  データ基盤設計の実践指針
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    データソースの分類と処理方針
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                        構造化データ
                      </h4>
                      <div className="text-sm text-emerald-700 dark:text-emerald-300 space-y-2">
                        <p>
                          <strong>特性:</strong> 定義されたスキーマで管理
                        </p>
                        <p>
                          <strong>処理:</strong> 従来のデータベースクエリ
                        </p>
                        <p>
                          <strong>RAG統合:</strong> SQL→自然言語変換での活用
                        </p>
                      </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">
                        半構造化データ
                      </h4>
                      <div className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
                        <p>
                          <strong>特性:</strong> JSON、XML等のスキーマ可変形式
                        </p>
                        <p>
                          <strong>処理:</strong> 時系列変化に対応した柔軟な管理
                        </p>
                        <p>
                          <strong>RAG統合:</strong> 必要に応じてベクトル化
                        </p>
                      </div>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-lg border-l-4 border-rose-500">
                      <h4 className="font-semibold text-rose-800 dark:text-rose-200 mb-3">
                        非構造化データ
                      </h4>
                      <div className="text-sm text-rose-700 dark:text-rose-300 space-y-2">
                        <p>
                          <strong>特性:</strong> 文書、画像等の意味抽出が必要
                        </p>
                        <p>
                          <strong>処理:</strong>{" "}
                          埋め込みモデルによるベクトル化必須
                        </p>
                        <p>
                          <strong>RAG統合:</strong>{" "}
                          ベクトルデータベースでの類似検索
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    チャンキング（分割）戦略の選択
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                          1. 固定長チャンキング
                        </h4>
                        <span className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">
                          PoC推奨
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-yellow-700 dark:text-yellow-300">
                            実装:
                          </span>
                          <span className="text-yellow-600 dark:text-yellow-400">
                            {" "}
                            非常に簡単
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-yellow-700 dark:text-yellow-300">
                            メリット:
                          </span>
                          <span className="text-yellow-600 dark:text-yellow-400">
                            {" "}
                            迅速なPoC実装
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-yellow-700 dark:text-yellow-300">
                            デメリット:
                          </span>
                          <span className="text-yellow-600 dark:text-yellow-400">
                            {" "}
                            文脈・流れを無視
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                          2. 階層的チャンキング
                        </h4>
                        <span className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                          Bedrock対応
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-blue-700 dark:text-blue-300">
                            実装:
                          </span>
                          <span className="text-blue-600 dark:text-blue-400">
                            {" "}
                            グループ・階層ごとの分割
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-blue-700 dark:text-blue-300">
                            メリット:
                          </span>
                          <span className="text-blue-600 dark:text-blue-400">
                            {" "}
                            検索精度と文脈保持の両立
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-blue-700 dark:text-blue-300">
                            デメリット:
                          </span>
                          <span className="text-blue-600 dark:text-blue-400">
                            {" "}
                            ドメイン知識が必要
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                          3. セマンティックチャンキング
                        </h4>
                        <span className="bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                          高精度
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-purple-700 dark:text-purple-300">
                            実装:
                          </span>
                          <span className="text-purple-600 dark:text-purple-400">
                            {" "}
                            LLMによる意味理解での分割
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-purple-700 dark:text-purple-300">
                            メリット:
                          </span>
                          <span className="text-purple-600 dark:text-purple-400">
                            {" "}
                            最も適切なコンテキスト保持
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-purple-700 dark:text-purple-300">
                            デメリット:
                          </span>
                          <span className="text-purple-600 dark:text-purple-400">
                            {" "}
                            計算コスト・時間が大きい
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-800 dark:to-slate-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    ベクトルデータベース選択基準
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        主要選択基準
                      </h4>
                      <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li>
                          <strong>1. 馴染みやすさ・実装しやすさ</strong>
                          （最優先）
                        </li>
                        <li>
                          <strong>2. 特定ユースケース要件</strong>
                          （グラフRAG、ハイブリッド検索等）
                        </li>
                        <li>3. スケーラビリティ・パフォーマンス</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        AWS推奨サービス
                      </h4>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        <li>
                          • <strong>Neptune Analytics:</strong> グラフRAG特化
                        </li>
                        <li>
                          • <strong>OpenSearch:</strong> ハイブリッド検索特化
                        </li>
                        <li>
                          • <strong>その他:</strong> 馴染みのあるDBサービス
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* データ基盤5つのベストプラクティス */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  データ基盤設計5つのベストプラクティス
                </h2>

                <div className="grid md:grid-cols-1 gap-6">
                  {[
                    {
                      number: 1,
                      title: "疎結合アーキテクチャ",
                      description: "データ保存層とデータ処理層の分離",
                      benefits: "部分変更・再利用の容易性確保",
                      color: "blue",
                    },
                    {
                      number: 2,
                      title: "適切なツール選択",
                      description: "データ鮮度・レイテンシ要件に応じた技術選定",
                      benefits:
                        "リアルタイム：ストリーミング、バッチ：データウェアハウス",
                      color: "green",
                    },
                    {
                      number: 3,
                      title: "マネージドサービス活用",
                      description: "クラスター管理・運用をAWSに委任",
                      benefits: "アプリケーション開発・UX向上に集中",
                      color: "purple",
                    },
                    {
                      number: 4,
                      title: "ログ中心データデザイン",
                      description:
                        "全データをイミュータブルログとしてデータレイクに保存",
                      benefits: "バグ・不具合時の復旧可能性確保",
                      color: "orange",
                    },
                    {
                      number: 5,
                      title: "コスト意識の徹底",
                      description: "設計段階での必ずコスト見積もり実施",
                      benefits: "予想外の高コスト時は技術選択・要件の見直し",
                      color: "red",
                    },
                  ].map((practice) => (
                    <div
                      key={practice.number}
                      className={`bg-\${practice.color}-50 dark:bg-\${practice.color}-900/20 p-6 rounded-lg border-l-4 border-\${practice.color}-500`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`bg-\${practice.color}-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold mr-4 flex-shrink-0`}
                        >
                          {practice.number}
                        </div>
                        <div className="flex-1">
                          <h3
                            className={`text-lg font-semibold text-\${practice.color}-800 dark:text-\${practice.color}-200 mb-2`}
                          >
                            {practice.title}
                          </h3>
                          <p
                            className={`text-\${practice.color}-700 dark:text-\${practice.color}-300 mb-2`}
                          >
                            {practice.description}
                          </p>
                          <p
                            className={`text-sm text-\${practice.color}-600 dark:text-\${practice.color}-400 italic`}
                          >
                            💡 {practice.benefits}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* データガバナンス */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  データガバナンスの実装
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    主要課題と対応策
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4">
                        主要課題
                      </h4>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                        <li>
                          • <strong>データの散在・重複</strong>
                          <br />
                          複数部署でのデータ管理による不整合
                        </li>
                        <li>
                          • <strong>リネージ追跡困難</strong>
                          <br />
                          データの出所・変更履歴が不明
                        </li>
                        <li>
                          • <strong>品質管理不足</strong>
                          <br />
                          データクオリティの継続監視不備
                        </li>
                        <li>
                          • <strong>アクセス制御複雑化</strong>
                          <br />
                          適切な権限管理の困難さ
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                        ソリューション
                      </h4>
                      <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                        <li>
                          •{" "}
                          <strong>
                            Amazon SageMaker Data Wrangler Catalog
                          </strong>
                          <br />
                          データカタログ化による統合管理
                        </li>
                        <li>
                          • <strong>AWS Glue Data Quality</strong>
                          <br />
                          宣言的ルール記述による品質チェック
                        </li>
                        <li>
                          • <strong>Amazon SageMaker</strong>
                          <br />
                          データ系譜の可視化・トレーサビリティ
                        </li>
                        <li>
                          • <strong>IAM・リソースベースポリシー</strong>
                          <br />
                          きめ細かいアクセス制御
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    統合ガバナンスアプローチ
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-indigo-100 dark:bg-indigo-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">
                          アクセス制御
                        </h4>
                      </div>
                      <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
                        <li>• 部署別データ管理維持</li>
                        <li>• 許可ベースアクセス</li>
                        <li>• カタログ統合管理</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                          品質管理
                        </h4>
                      </div>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• SQLベース複雑ルール</li>
                        <li>• 自動チェック実行</li>
                        <li>• 継続的品質監視</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-cyan-100 dark:bg-cyan-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-cyan-800 dark:text-cyan-200">
                          コンプライアンス
                        </h4>
                      </div>
                      <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-1">
                        <li>• 法規制要件自動チェック</li>
                        <li>• ビジネスルール適合確認</li>
                        <li>• 監査ログ自動生成</li>
                      </ul>
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
                      RAG実装の段階的アプローチ
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                          段階的実装ロードマップ
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                              1
                            </div>
                            <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                              Phase 1: Naive RAG
                            </h5>
                            <p className="text-xs text-yellow-700 dark:text-yellow-300">
                              技術選定・基本機能検証
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                              2
                            </div>
                            <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">
                              Phase 2: Advanced RAG
                            </h5>
                            <p className="text-xs text-orange-700 dark:text-orange-300">
                              高度検索手法・精度向上
                            </p>
                          </div>
                          <div className="text-center">
                            <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                              3
                            </div>
                            <h5 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                              Phase 3: Modular RAG
                            </h5>
                            <p className="text-xs text-red-700 dark:text-red-300">
                              完全自動化・UX最大化
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                        データ活用戦略の実践指針
                      </h4>
                      <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                        <li>
                          <strong>「全データのベクトル化は不要」の原則</strong>
                        </li>
                        <li>• 既存データベースの直接活用</li>
                        <li>• SQL変換による効率的データ取得</li>
                        <li>• ベクトル化コスト・管理負荷の最適化</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                        技術選択の優先順位
                      </h4>
                      <ol className="text-sm text-green-700 dark:text-green-300 space-y-2">
                        <li>
                          <strong>1. 馴染みやすさ:</strong>{" "}
                          実装経験・チーム習熟度
                        </li>
                        <li>
                          <strong>2. 要件適合性:</strong>{" "}
                          特定ユースケース要求仕様
                        </li>
                        <li>
                          <strong>3. スケーラビリティ:</strong>{" "}
                          将来拡張性・パフォーマンス
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      組織実装時の考慮事項
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                          技術面
                        </h5>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• 段階的進化によるリスク軽減</li>
                          <li>• 既存システム統合性確保</li>
                          <li>• コスト予測・管理の徹底</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">
                          組織面
                        </h5>
                        <ul className="text-pink-600 dark:text-pink-400 space-y-1">
                          <li>• ドメイン知識者の巻き込み</li>
                          <li>• データガバナンス体制構築</li>
                          <li>• 部門横断データ活用合意</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          継続改善
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• 自動化による運用負荷軽減</li>
                          <li>• ユーザー価値提供への集中</li>
                          <li>• 定期的技術・コスト見直し</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* まとめ */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  まとめ：RAG実装成功のための行動指針
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    高野氏が示す実践的アプローチ
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                        1. 段階的発展の重要性
                      </h4>
                      <blockquote className="text-green-700 dark:text-green-300 italic mb-3 pl-4 border-l-2 border-green-300">
                        「RAGはNaive
                        RAGから始めて、段階的に発展させていきましょう」
                      </blockquote>
                      <p className="text-sm text-green-600 dark:text-green-400">
                        実装順序: 基礎技術確立（Naive RAG）→ 精度向上（Advanced
                        RAG）→ 完全自動化（Modular RAG）
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                        2. データ活用の効率化
                      </h4>
                      <blockquote className="text-blue-700 dark:text-blue-300 italic mb-3 pl-4 border-l-2 border-blue-300">
                        「データは別に全部ベクトル化しなくてもいいです。今あるデータを利用して、生成AIアプリケーションに使うことができます」
                      </blockquote>
                      <p className="text-sm text-blue-600 dark:text-blue-400">
                        実装方針:
                        既存データベース直接活用・必要最小限のベクトル化・SQL変換による効率的データ取得
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                        3. 自動化への投資
                      </h4>
                      <blockquote className="text-purple-700 dark:text-purple-300 italic mb-3 pl-4 border-l-2 border-purple-300">
                        「RAGのパイプラインは出来る限り自動化していきましょう。ユーザーに価値を届けるところとは関係ないところはもう出来る限り自動化する」
                      </blockquote>
                      <p className="text-sm text-purple-600 dark:text-purple-400">
                        自動化対象:
                        データ収集・前処理パイプライン、品質チェック・ガバナンス、オーケストレーション・意思決定
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 p-8 rounded-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      RAG実装で得られるビジネス価値
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                          ユーザー体験向上
                        </h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• パーソナライズ高精度応答</li>
                        <li>• やり取り回数削減</li>
                        <li>• リアルタイム対応</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">
                          組織運営効率化
                        </h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 既存データ資産有効活用</li>
                        <li>• 部門横断データ統合</li>
                        <li>• 人的リソース最適配置</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 dark:bg-purple-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                          技術的優位性確立
                        </h4>
                      </div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 段階的進化による技術蓄積</li>
                        <li>• スケーラブル将来対応</li>
                        <li>• ガバナンス基盤安全性</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      「コンテキストを提供するために最適なデータアーキテクチャーをちゃんと考えて、
                      <br />
                      ユーザーに価値を届けることに集中しましょう」
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ソニーグループAI戦略：45,000人規模のAI民主化実践 | AWS Summit 2025レポート",
  description:
    "ソニーグループが語った生成AI・エージェンティックAI戦略の詳細分析。45,000人規模のAI民主化実践、Strands Agents SDK活用事例、大企業での段階的AI導入モデルまで実践的知見を包括的に解説。",
  keywords:
    "ソニーグループ, AI民主化, Strands Agents, エージェンティックAI, Amazon Bedrock, マルチクラウド, 大企業AI導入, 組織変革",
  authors: [{ name: "unremoted.com" }],
  openGraph: {
    title: "ソニーグループ：45,000人規模のAI民主化戦略の全貌",
    description:
      "AWS Summit 2025で語られたソニーグループのAI戦略を詳細分析。AI民主化から組織変革まで、実践事例とStrands Agents技術解説。",
    type: "article",
    url: "https://unremoted.com/aws-summit-2025-report/sessions/sony-group-ai-initiative",
    siteName: "unremoted.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ソニーグループ：45,000人規模のAI民主化戦略",
    description:
      "AI民主化から組織変革まで。ソニーグループの実践事例とStrands Agents詳細解説をレポート。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function SonyGroupAIInitiativePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/aws-summit-2025-report/sessions/sony-group-ai-initiative" />

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
                  ソニーグループにおける生成AI・エージェンティックAI戦略
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-8">
                  〜AI民主化から組織変革まで：45,000人規模の実践例〜
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      講演者
                    </h3>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <p>大場氏（グループガバナンス統括）</p>
                      <p>平野氏（シニアアーキテクト）</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    講演概要
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    ソニーグループが推進する生成AI・エージェンティックAI戦略について、戦略面と技術面の両方から包括的に紹介された講演です。
                    グループ全体45,000人が利用する大規模AI活用基盤の構築実績と、「人を中心に据えたAI活用」という明確な哲学に基づいた組織変革への取り組みが語られました。
                  </p>
                </div>
              </div>

              {/* 実績数値セクション */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  大規模AI活用の実績
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      45,000人
                    </div>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      グループ全社員が利用
                    </p>
                  </div>
                  <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      200万回/月
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      AI推論実行回数
                    </p>
                  </div>
                  <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      5万時間/月
                    </div>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      生産性向上効果
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">
                      POC実績
                    </h4>
                    <div className="space-y-2 text-sm text-orange-700 dark:text-orange-300">
                      <div className="flex justify-between">
                        <span>実行済POC件数</span>
                        <span className="font-semibold">260件</span>
                      </div>
                      <div className="flex justify-between">
                        <span>本番移行済</span>
                        <span className="font-semibold">40件</span>
                      </div>
                      <div className="flex justify-between">
                        <span>利用可能モデル</span>
                        <span className="font-semibold">130種類</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-l-4 border-teal-500">
                    <h4 className="font-semibold text-teal-800 dark:teal-orange-200 mb-3">
                      グループ展開
                    </h4>
                    <div className="space-y-2 text-sm text-teal-700 dark:text-teal-300">
                      <div className="flex justify-between">
                        <span>対象グループ会社</span>
                        <span className="font-semibold">200社以上</span>
                      </div>
                      <div className="flex justify-between">
                        <span>展開地域</span>
                        <span className="font-semibold">全世界</span>
                      </div>
                      <div className="flex justify-between">
                        <span>1日平均利用</span>
                        <span className="font-semibold">12万回以上</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI哲学セクション */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  ソニーグループのAI哲学：人中心のアプローチ
                </h2>

                <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 p-8 rounded-lg mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      基本理念
                    </h3>
                    <blockquote className="text-lg italic text-purple-700 dark:text-purple-300 border-l-4 border-purple-500 pl-4">
                      「クリエイティビティは人に宿るもの、
                      <br />
                      AIはクリエイティブをサポートするもの」
                    </blockquote>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-2">
                          創造性向上
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          クリエイターの創造力を最大化
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                          生産性向上
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          社員の業務効率を大幅改善
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                          感動創造
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          世界を感動で満たすパーパス実現
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strands Agents詳細セクション */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  Strands Agents SDK：エージェント開発の革新
                </h2>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    🚀 開発効率の劇的改善
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        従来開発との比較
                      </h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>
                          • コード量：<strong>70-80%削減</strong>
                        </li>
                        <li>• メンテナンス性：大幅向上</li>
                        <li>• 拡張性：柔軟な機能追加</li>
                        <li>• 再利用性：コンポーネント共有</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        ソニーでの実践成果
                      </h4>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• 既存プログラム移行完了</li>
                        <li>• 技術標準化の推進</li>
                        <li>• 開発速度の向上</li>
                        <li>• 品質保証の向上</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  エージェント開発4領域での評価
                </h3>

                <div className="space-y-6">
                  {/* Model */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        M
                      </span>
                      Model（モデル推論）
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                          ✅ 現在の利点
                        </h5>
                        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• モデル間設定差異の吸収</li>
                          <li>• Converse APIとの連携</li>
                          <li>• 推論設定の簡便化</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                          🔮 今後への期待
                        </h5>
                        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• 細かい調整機能の拡充</li>
                          <li>• Bedrock以外のモデル対応</li>
                          <li>• マルチLLM環境の管理負荷軽減</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Reasoning Loop */}
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        R
                      </span>
                      Reasoning Loop（推論ループ）
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                          ✅ 現在の利点
                        </h5>
                        <ul className="text-green-600 dark:text-green-400 space-y-1">
                          <li>• リーズニングループ実装の標準化</li>
                          <li>• 複雑タスク実行への対応</li>
                          <li>• ReActパターンの自動実行</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                          🔮 今後への期待
                        </h5>
                        <ul className="text-green-600 dark:text-green-400 space-y-1">
                          <li>• ループ途中でのカスタム処理挿入</li>
                          <li>• より柔軟な制御機能</li>
                          <li>• 個別拡張への対応</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* AI Orchestration */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center">
                      <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        O
                      </span>
                      AI Orchestration（AIオーケストレーション）
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                          ✅ 現在の利点
                        </h5>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• メモリ設計の標準化</li>
                          <li>• 複雑な状態管理の簡素化</li>
                          <li>• エージェント間連携の基盤</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                          🔮 今後への期待
                        </h5>
                        <ul className="text-purple-600 dark:text-purple-400 space-y-1">
                          <li>• マルチエージェント状態管理</li>
                          <li>• 相互関係の複雑化対応</li>
                          <li>• より高度な協調機能</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tool Use */}
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3 flex items-center">
                      <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                        T
                      </span>
                      Tool Use（ツール利用）
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                          ✅ 現在の利点
                        </h5>
                        <ul className="text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• MCP・A2A概念が組み込み済み</li>
                          <li>• 機能拡張が簡便</li>
                          <li>• エンタープライズツール連携</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
                          🔮 今後への期待
                        </h5>
                        <ul className="text-orange-600 dark:text-orange-400 space-y-1">
                          <li>• マルチIDP認証対応</li>
                          <li>• 認証認可情報の引き渡し</li>
                          <li>• エンタープライズセキュリティ強化</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* エージェント連携実例 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  マルチプラットフォーム・エージェント連携の実現
                </h2>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    実際の連携フロー例
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4">
                        1
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          Microsoft Teams UI
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ユーザーがTeams UIからクエリを入力
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4">
                        2
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          エージェンティックAIプラットフォーム
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          最適なエージェントを自動選択・ルーティング
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4">
                        3
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          並列エージェント処理
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Copilot Studio + Bedrock構築エージェントが同時動作
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4">
                        4
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          データ統合・返答
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          各リポジトリからのデータを統合してユーザーに返却
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                      技術的実装要素
                    </h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                      <li>
                        • <strong>MCPサーバー社内標準化</strong>
                        <br />
                        エージェント間通信の統一プロトコル
                      </li>
                      <li>
                        • <strong>A2A連携機能</strong>
                        <br />
                        エージェント同士の自律的協調
                      </li>
                      <li>
                        • <strong>マルチプラットフォーム対応</strong>
                        <br />
                        異なる環境の透明な連携
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                      実現される価値
                    </h4>
                    <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-2">
                      <li>
                        • <strong>プラットフォーム垣根の排除</strong>
                        <br />
                        統一UXでの多様なエージェント活用
                      </li>
                      <li>
                        • <strong>複雑タスクの自動実行</strong>
                        <br />
                        人手不要の高度業務処理
                      </li>
                      <li>
                        • <strong>コスト最適化</strong>
                        <br />
                        最適エージェント選択による効率化
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 組織変革戦略 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  AIドリブンカンパニーへの組織変革
                </h2>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-8 border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-4">
                    AIアクセラレーションチーム設立
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                        体制
                      </h4>
                      <ul className="text-red-600 dark:text-red-400 space-y-1">
                        <li>• CDO小寺氏直轄</li>
                        <li>• 技術部門総力結集</li>
                        <li>• 専門チーム組成</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                        推進機能
                      </h4>
                      <ul className="text-red-600 dark:text-red-400 space-y-1">
                        <li>• AI民主化推進</li>
                        <li>• AI組織変革</li>
                        <li>• エージェンティックAI構築</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                        ガバナンス
                      </h4>
                      <ul className="text-red-600 dark:text-red-400 space-y-1">
                        <li>• セキュリティ連携</li>
                        <li>• コンプライアンス</li>
                        <li>• AI倫理・プライバシー</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-l-4 border-cyan-500">
                    <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">
                      短期戦略
                    </h4>
                    <ul className="text-sm text-cyan-700 dark:text-cyan-300 space-y-2">
                      <li>• 個人レベルでのAI活用促進</li>
                      <li>• 組織業務へのAI適用加速</li>
                      <li>• 民主化プラットフォーム拡充</li>
                      <li>• エージェンティックAI導入</li>
                    </ul>
                  </div>

                  <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-lg border-l-4 border-violet-500">
                    <h4 className="font-semibold text-violet-800 dark:text-violet-200 mb-3">
                      中長期戦略
                    </h4>
                    <ul className="text-sm text-violet-700 dark:text-violet-300 space-y-2">
                      <li>• AI当たり前時代の組織設計</li>
                      <li>• 人事戦略とAI戦略の連動</li>
                      <li>• 新しいリソース戦略検討</li>
                      <li>• 競争力向上への変革</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ビジネスアドバイザリーへの示唆 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  組織のAI活用戦略への応用ポイント
                </h2>

                <div className="space-y-6">
                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500">
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-4">
                      大規模組織でのAI導入モデル
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-amber-700 dark:text-amber-300">
                            1. 民主化
                          </span>
                        </div>
                        <p className="text-amber-600 dark:text-amber-400">
                          全社員へのAI教育
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-amber-700 dark:text-amber-300">
                            2. 実践
                          </span>
                        </div>
                        <p className="text-amber-600 dark:text-amber-400">
                          POC・パイロット実行
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-amber-700 dark:text-amber-300">
                            3. スケール
                          </span>
                        </div>
                        <p className="text-amber-600 dark:text-amber-400">
                          全社展開・標準化
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-amber-100 dark:bg-amber-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-amber-700 dark:text-amber-300">
                            4. 変革
                          </span>
                        </div>
                        <p className="text-amber-600 dark:text-amber-400">
                          組織・戦略転換
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-lg border-l-4 border-rose-500">
                      <h4 className="font-semibold text-rose-800 dark:text-rose-200 mb-3">
                        技術選択の戦略的視点
                      </h4>
                      <ul className="text-sm text-rose-700 dark:text-rose-300 space-y-2">
                        <li>
                          • <strong>軍用割時代の認識</strong>
                          <br />
                          技術選択の柔軟性重視
                        </li>
                        <li>
                          • <strong>ピボット戦略</strong>
                          <br />
                          機動力と経済性の両立
                        </li>
                        <li>
                          • <strong>標準化推進</strong>
                          <br />
                          エンタープライズ要件対応
                        </li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                        組織変革の実践アプローチ
                      </h4>
                      <ul className="text-sm text-emerald-700 dark:text-emerald-300 space-y-2">
                        <li>
                          • <strong>人中心哲学</strong>
                          <br />
                          価値観・目的の事前明確化
                        </li>
                        <li>
                          • <strong>全社巻き込み</strong>
                          <br />
                          トップダウン×ボトムアップ
                        </li>
                        <li>
                          • <strong>継続学習</strong>
                          <br />
                          技術進化対応の組織能力
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strands Agents導入検討 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  Strands Agents導入検討のポイント
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                      導入メリット
                    </h3>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                      <li>
                        <strong>開発効率化:</strong> 70-80%のコード削減効果
                      </li>
                      <li>
                        <strong>技術標準化:</strong>{" "}
                        モデル・プラットフォーム差異吸収
                      </li>
                      <li>
                        <strong>エンタープライズ対応:</strong>{" "}
                        セキュリティ・認証基盤
                      </li>
                      <li>
                        <strong>将来性:</strong> AWS生態系での継続機能拡張
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                    <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-4">
                      検討課題
                    </h3>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
                      <li>
                        <strong>カスタム処理:</strong>{" "}
                        特定業務要件への対応可能性
                      </li>
                      <li>
                        <strong>マルチクラウド:</strong> AWS以外環境との統合方針
                      </li>
                      <li>
                        <strong>人材育成:</strong> 新技術習得・体制整備
                      </li>
                      <li>
                        <strong>移行戦略:</strong> 既存システムからの段階移行
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    実践的導入アプローチ
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                        1
                      </div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                        PoC段階
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        小規模エージェントでの機能検証
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                        2
                      </div>
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">
                        パイロット運用
                      </h4>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400">
                        限定業務での本格活用
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                        3
                      </div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                        段階展開
                      </h4>
                      <p className="text-xs text-purple-600 dark:text-purple-400">
                        成功事例ベース適用拡大
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">
                        4
                      </div>
                      <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-1">
                        全社展開
                      </h4>
                      <p className="text-xs text-pink-600 dark:text-pink-400">
                        標準プラットフォーム確立
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* まとめ */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  まとめ：企業AI活用の新しいスタンダード
                </h2>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30 p-8 rounded-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      ソニーグループが示すAI活用の成功要因
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                          明確な哲学
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        人中心のAI活用理念に基づく一貫した戦略
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 dark:bg-green-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-green-800 dark:text-green-200">
                          大規模実践
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        45,000人規模での実際の業務適用と継続改善
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 dark:bg-purple-800/50 p-4 rounded-lg mb-3">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                          技術革新
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Strands Agents等最新技術の積極活用
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-700 dark:text-gray-300 italic">
                      「技術の進歩に合わせて柔軟にピボットを取る戦略こそが、
                      <br />
                      AI時代の企業競争力の源泉である」
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

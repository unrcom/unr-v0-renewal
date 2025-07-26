import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "電通デジタルAIマーケティング戦略：127社導入の実践事例 | AWS Summit 2025",
  description:
    "電通デジタルの次世代マーケティング戦略を詳細分析。無限AI AS（127社導入、効果1.5倍）、データクリーンルーム活用、Amazon Nova実践事例、マルチエージェント協調システムまで包括的にレポート。",
  keywords:
    "電通デジタル, AIマーケティング, 無限AI AS, データクリーンルーム, Amazon Nova, マルチエージェント, 広告業界AI活用",
  authors: [{ name: "unremoted.com" }],
  openGraph: {
    title: "電通デジタル：127社導入のAIマーケティング実践戦略",
    description:
      "AWS Summit 2025で語られた電通デジタルの次世代マーケティング戦略。データとAIの統合アプローチを詳細分析。",
    type: "article",
    url: "https://unremoted.com/aws-summit-2025-report/sessions/dentsu-digital-transformation",
    siteName: "unremoted.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "電通デジタル：127社導入のAIマーケティング戦略",
    description:
      "無限AI ASの実践事例からデータクリーンルーム活用まで。次世代マーケティングの最前線をレポート。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function DentsuDigitalTransformationPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/aws-summit-2025-report/sessions/dentsu-digital-transformation" />

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
                  電通デジタルのAIマーケティング戦略事例
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-8">
                  〜データとAIの統合アプローチ：業界動向レポート〜
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                      講演者
                    </h3>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <p>山本氏（CAO・最高AI責任者）</p>
                      <p>前川氏（データテクノロジーセンター）</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    講演概要
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    電通デジタルによる「データ×AI」マーケティング戦略の取り組み事例が紹介された講演です。
                    無限AI
                    ASの運用実績、データクリーンルームを活用した企業間データ連携、エージェント技術を用いた業務統合などの具体例を通じて、
                    マーケティング業界におけるAI活用の現状と課題が示されました。
                  </p>
                </div>
              </div>

              {/* 報告された主要事例 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  報告された主要事例
                </h2>

                {/* 無限AI AS */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    1. 無限AI AS：AIマーケティングソリューションの運用状況
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        127社
                      </div>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        導入企業数（2024年時点）
                      </p>
                    </div>
                    <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                        1.5倍
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        平均効果向上（報告値）
                      </p>
                    </div>
                    <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        8倍
                      </div>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        CV向上事例（特定条件下）
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mb-6 border-l-4 border-amber-500">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                      技術的特徴
                    </h4>
                    <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
                      <li>
                        • <strong>データ効率化</strong>:
                        従来の大量データ依存から少量データでの高精度予測への転換
                      </li>
                      <li>
                        • <strong>知識活用</strong>:
                        LLMの事前学習知識を活用した広告効果予測
                      </li>
                      <li>
                        • <strong>説明可能性</strong>:
                        改善提案の自然言語での説明機能
                      </li>
                      <li>
                        • <strong>技術基盤</strong>: Amazon Bedrock、Amazon
                        Nova等を活用
                      </li>
                    </ul>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border-l-4 border-emerald-500">
                    <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">
                      Amazon Nova活用事例
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                          使用技術
                        </h5>
                        <ul className="text-emerald-600 dark:text-emerald-400 space-y-1">
                          <li>• Amazon Nova Canvas（画像生成）</li>
                          <li>• Amazon Nova Reel（動画生成）</li>
                          <li>• 静止画から動画への自動変換</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">
                          報告された効果
                        </h5>
                        <ul className="text-emerald-600 dark:text-emerald-400 space-y-1">
                          <li>• コンバージョン率8倍向上（一事例）</li>
                          <li>• 高性能動画枠への配信機会拡大</li>
                          <li>• レスポンシブルAI機能による安全運用</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* データクリーンルーム */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    2. データクリーンルーム活用の取り組み
                  </h3>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                      戦略的背景
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                          従来の課題
                        </h5>
                        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• プライバシー規制強化</li>
                          <li>• 直接データ共有のリスク</li>
                          <li>• 3層データ統合の複雑性</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                          戦略転換
                        </h5>
                        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• 2層統合アプローチ</li>
                          <li>• 安全なデータ連携基盤</li>
                          <li>• リアルタイム管理対応</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                          統合データ
                        </h5>
                        <ul className="text-blue-600 dark:text-blue-400 space-y-1">
                          <li>• ファーストパーティデータ（非日常）</li>
                          <li>• プラットフォームデータ（日常）</li>
                          <li>• 企業間安全連携</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                        運用規模
                      </h4>
                      <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                        <div className="flex justify-between">
                          <span>年間キャンペーン実行</span>
                          <span className="font-semibold">1,000件超</span>
                        </div>
                        <div className="flex justify-between">
                          <span>主要技術基盤</span>
                          <span className="font-semibold">
                            Amazon Marketing Cloud
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>統合管理システム</span>
                          <span className="font-semibold">
                            TOBIAS（独自開発）
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>対応プラットフォーム</span>
                          <span className="font-semibold">
                            AWS Clean Rooms等
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">
                        技術的課題と対応
                      </h4>
                      <ul className="text-sm text-teal-700 dark:text-teal-300 space-y-2">
                        <li>
                          • <strong>プライバシー保護</strong>
                          <br />
                          企業間データ連携時の安全確保
                        </li>
                        <li>
                          • <strong>リアルタイム管理</strong>
                          <br />
                          オプトアウト対応の自動化
                        </li>
                        <li>
                          • <strong>データ同期</strong>
                          <br />
                          複数プラットフォーム間の統合
                        </li>
                        <li>
                          • <strong>セキュリティ</strong>
                          <br />
                          ファイル移動不要の連携方式
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      AWS Clean Roomsの業界への影響
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                          従来の制約
                        </h5>
                        <p className="text-green-700 dark:text-green-300">
                          大手プラットフォーマーのみがクリーンルームを提供、中小企業は利用困難
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                          現在の可能性
                        </h5>
                        <p className="text-blue-700 dark:text-blue-300">
                          中小規模企業も独自クリーンルーム構築が可能、多様な企業間データ協業の実現
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                      <h6 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        応用例
                      </h6>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-200 rounded-full text-xs">
                          小売×メーカー
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                          ディーラー×自動車
                        </span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                          エンタメ×劇場
                        </span>
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-800/50 text-orange-800 dark:text-orange-200 rounded-full text-xs">
                          メディア×メディア
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* エージェント技術 */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    3. エージェント技術による業務統合実験
                  </h3>

                  <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-4">
                      開発中の統合システム
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          システム概要
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• マルチエージェント協調処理</li>
                          <li>• 分析〜実行の一貫ワークフロー</li>
                          <li>• 2025年7月デモ予定</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          対象プロセス
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• 商品企画</li>
                          <li>• マーケティング戦略</li>
                          <li>• 実行・配信</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                          技術基盤
                        </h5>
                        <ul className="text-red-600 dark:text-red-400 space-y-1">
                          <li>• Amazon Bedrock活用</li>
                          <li>• エージェント間協調機能</li>
                          <li>• 既存ツール統合</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      統合マーケティングエージェントのワークフロー例
                    </h4>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          1
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            コンセプト開発
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            商品企画の自動ブレインストーミング、ペルソナ分析、デプスインタビュー設計
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          2
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            ブランディング
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            商品名決定、メインビジュアル開発、ブランドコンセプト統合
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-4 flex-shrink-0">
                          3
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            マーケティング展開
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            カスタマージャーニー設計、クリエイティブ制作、統合レポート自動生成
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 技術動向と業界への示唆 */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  技術動向と業界への示唆
                </h2>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    データ活用の変化
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
                        プライバシーファースト時代への適応
                      </h4>
                      <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
                        <li>
                          • 直接データ共有からクリーンルーム経由連携への移行
                        </li>
                        <li>
                          • 中小企業でもAWS Clean Roomsによる独自環境構築が可能
                        </li>
                        <li>• 企業間データ協業の技術的ハードル低下</li>
                      </ul>
                    </div>

                    <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-lg border-l-4 border-violet-500">
                      <h4 className="font-semibold text-violet-800 dark:text-violet-200 mb-3">
                        AI技術の活用範囲拡大
                      </h4>
                      <ul className="text-sm text-violet-700 dark:text-violet-300 space-y-2">
                        <li>• 生成AIから分析AIへの適用領域拡張</li>
                        <li>• エージェント技術による部門横断的業務自動化</li>
                        <li>• 対話データ等の新しいデータ活用パターン</li>
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
                  {/* データ統合戦略 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      データ統合戦略の検討点
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
                          プライバシー対応の重要性
                        </h4>
                        <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                          <li>• 法規制遵守とビジネス価値創出のバランス</li>
                          <li>• 安全なデータ連携基盤への投資判断</li>
                          <li>• 社内外データ活用ポリシーの明確化</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
                          段階的統合アプローチ
                        </h4>
                        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                          <li>• 単一部門での効果実証から開始</li>
                          <li>• 部門間データ連携への拡張</li>
                          <li>• 全社横断システムへの発展</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* AI技術選択 */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                      AI技術選択時の考慮点
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">
                          技術パートナーとの関係性
                        </h4>
                        <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                          <li>• 具体的ビジネス課題の共有による機能共同開発</li>
                          <li>• 継続的フィードバックによる改善サイクル</li>
                          <li>• 長期的パートナーシップの構築</li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-3">
                          組織変革への準備
                        </h4>
                        <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-2">
                          <li>• 既存業務プロセスとの整合性確保</li>
                          <li>• 人材スキル開発計画の策定</li>
                          <li>• 段階的導入による組織適応</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 効果測定・評価 */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                      効果測定・評価の重要性
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-teal-100 dark:bg-teal-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-teal-700 dark:text-teal-300">
                            ROI明確化
                          </span>
                        </div>
                        <p className="text-sm text-teal-600 dark:text-teal-400">
                          継続投資判断のための定量的指標設定
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-cyan-100 dark:bg-cyan-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-cyan-700 dark:text-cyan-300">
                            客観的検証
                          </span>
                        </div>
                        <p className="text-sm text-cyan-600 dark:text-cyan-400">
                          A/Bテスト等による効果測定
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="bg-blue-100 dark:bg-blue-800/50 p-3 rounded-lg mb-2">
                          <span className="font-semibold text-blue-700 dark:text-blue-300">
                            相対評価
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 dark:text-blue-400">
                          業界平均との比較分析
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* まとめ */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                  まとめ：マーケティング業界のAI活用動向
                </h2>

                <div className="mb-8"></div>
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    報告された技術進歩
                  </h3>

                  <div className="bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/30 p-8 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-center italic">
                      電通デジタルの事例を通じて見える業界動向
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="bg-blue-100 dark:bg-blue-800/50 p-4 rounded-lg mb-3">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200">
                            ツール統合の進展
                          </h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 複数プラットフォーム間連携技術向上</li>
                          <li>• エージェント技術による自動化拡大</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-100 dark:bg-green-800/50 p-4 rounded-lg mb-3">
                          <h4 className="font-semibold text-green-800 dark:text-green-200">
                            データ活用の高度化
                          </h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• プライバシー保護と利用価値の両立</li>
                          <li>• 企業間データ協業の実用化</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-100 dark:bg-purple-800/50 p-4 rounded-lg mb-3">
                          <h4 className="font-semibold text-purple-800 dark:text-purple-200">
                            組織プロセスの変化
                          </h4>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• 部門横断的業務統合の試行</li>
                          <li>• 人間とAIの役割分担の模索</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    業界全体への示唆
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg border-l-4 border-amber-500">
                      <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
                        技術的側面
                      </h4>
                      <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-2">
                        <li>• 大手広告代理店レベルでの実装が進行中</li>
                        <li>• 中小企業でも類似アプローチが技術的に可能</li>
                        <li>• プラットフォーム提供者との連携が重要</li>
                      </ul>
                    </div>

                    <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-lg border-l-4 border-rose-500">
                      <h4 className="font-semibold text-rose-800 dark:text-rose-200 mb-3">
                        組織的側面
                      </h4>
                      <ul className="text-sm text-rose-700 dark:text-rose-300 space-y-2">
                        <li>• 部門別最適化から全体最適化への転換</li>
                        <li>• 専門性の壁を越えた協業の必要性</li>
                        <li>• 継続的な技術学習・適応の重要性</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-6 bg-gray-100 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 text-center italic">
                      「AIで大事なことは、今までのプロセスが、どうしても、組織の壁、ツールの壁、人の壁、流派、色んな問題で分断してたんですけども、飛び越えられちゃう。
                      AIに忖度はないですから。飛び越えて瞬間でアウトプットを提供できる。」
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

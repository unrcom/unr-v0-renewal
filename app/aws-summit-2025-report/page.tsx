import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Users,
  Lightbulb,
  Code,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

export default function AWSSubmitReportPage() {
  const sessions = [
    {
      id: "sony-group-ai-initiative",
      title: "ソニーグループにおける生成AI・エージェンティックAI戦略",
      subtitle: "〜AI民主化から組織変革まで：45,000人規模の実践例〜",
      speakers: [
        "大場氏（グループガバナンス統括）",
        "平野氏（シニアアーキテクト）",
      ],
      company: "ソニーグループ株式会社",
      duration: "30分",
      icon: <Users className="w-6 h-6" />,
      color: "blue",
      highlights: [
        "45,000人規模のAI民主化実践",
        "Strands Agents SDK詳細解説",
        "エージェンティックAI実装戦略",
        "大企業での段階的AI導入モデル",
      ],
      targetAudience: "大企業のAI戦略担当者、技術責任者、組織変革推進者",
      keyTechnologies: [
        "Amazon Bedrock",
        "Strands Agents",
        "マルチクラウド・マルチLLM",
        "MCP/A2A",
      ],
    },
    {
      id: "dentsu-digital-transformation",
      title: "電通デジタルのAIマーケティング戦略事例",
      subtitle: "〜データとAIの統合アプローチ：業界動向レポート〜",
      speakers: [
        "山本氏（CAO・最高AI責任者）",
        "前川氏（データテクノロジーセンター）",
      ],
      company: "電通デジタル",
      duration: "30分",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "orange",
      highlights: [
        "無限AI AS（127社導入、効果1.5倍）",
        "データクリーンルーム活用実践",
        "マルチエージェント協調システム",
        "Amazon Nova実践活用事例",
      ],
      targetAudience:
        "マーケティング責任者、デジタル変革推進者、広告業界関係者",
      keyTechnologies: [
        "Amazon Bedrock",
        "Amazon Nova",
        "データクリーンルーム",
        "エージェント協調",
      ],
    },
    {
      id: "rag-data-integration",
      title: "RAGを中心とした生成AIデータ活用実践ガイド",
      subtitle: "〜コンテキスト強化から基盤設計まで：技術者向け包括的解説〜",
      speakers: ["高野氏（AWSジャパン ソリューションアーキテクト）"],
      company: "AWSジャパン",
      duration: "40分",
      icon: <Code className="w-6 h-6" />,
      color: "purple",
      highlights: [
        "RAGの3段階進化（Naive→Advanced→Modular）",
        "2つのコンテキスト詳細解説",
        "データ基盤設計5つのベストプラクティス",
        "チャンキング戦略とベクトルDB選択",
      ],
      targetAudience: "RAG実装検討技術者、データ基盤責任者、AI開発エンジニア",
      keyTechnologies: [
        "Amazon Bedrock",
        "ベクトルDB",
        "ハイブリッド検索",
        "グラフRAG",
      ],
    },
    {
      id: "online-learning-platform",
      title: "Amazon Bedrockで実現する新たな学習体験",
      subtitle: "〜AtamaPLUSが示すAI教育アプリの本番運用実践知〜",
      speakers: ["前田氏（AtamaPLUS VPoE・技術部署責任者）"],
      company: "AtamaPLUS",
      duration: "30分",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "green",
      highlights: [
        "AIステップ解説機能の開発実践",
        "本番運用3つの技術的工夫",
        "教育ドメイン特有の品質保証",
        "AWS Innovation Center協業事例",
      ],
      targetAudience: "AI実装検討事業会社、教育関係者、EdTech開発者",
      keyTechnologies: [
        "Amazon Bedrock",
        "プロンプトキャッシング",
        "LLM as a Judge",
        "Datadog",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        card: "from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20",
        border: "border-blue-200 dark:border-blue-700",
        icon: "bg-blue-500 dark:bg-blue-600",
        badge:
          "bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200",
        button:
          "bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700",
      },
      orange: {
        card: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
        border: "border-orange-200 dark:border-orange-700",
        icon: "bg-orange-500 dark:bg-orange-600",
        badge:
          "bg-orange-100 dark:bg-orange-800/50 text-orange-800 dark:text-orange-200",
        button:
          "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700",
      },
      purple: {
        card: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
        border: "border-purple-200 dark:border-purple-700",
        icon: "bg-purple-500 dark:bg-purple-600",
        badge:
          "bg-purple-100 dark:bg-purple-800/50 text-purple-800 dark:text-purple-200",
        button:
          "bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700",
      },
      green: {
        card: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
        border: "border-green-200 dark:border-green-700",
        icon: "bg-green-500 dark:bg-green-600",
        badge:
          "bg-green-100 dark:bg-green-800/50 text-green-800 dark:text-green-200",
        button:
          "bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700",
      },
    };
    return colorMap[color as keyof typeof colorMap];
  };

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

              {/* Section 4: 個別講演詳細レポート */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-12 mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                  個別講演詳細レポート
                </h2>
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    各講演の深掘り分析と実践的な知見をお届けします
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    技術詳細から組織運営まで、AI活用の最前線で得られた貴重な洞察を包括的にレポート
                  </p>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border dark:border-gray-700 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    レポート対象講演
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-cyan-800 dark:text-cyan-200 mb-2">
                        企業戦略事例
                      </h4>
                      <ul className="text-cyan-700 dark:text-cyan-300 space-y-1">
                        <li>• ソニーグループ（AI民主化戦略）</li>
                        <li>• 電通デジタル（マーケティング活用）</li>
                        <li>• AtamaPLUS（教育アプリ実践）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                        技術深掘り
                      </h4>
                      <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                        <li>• RAG実装ガイド（40分の技術詳細）</li>
                        <li>• データ基盤設計ベストプラクティス</li>
                        <li>• エージェンティックAI実装手法</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Individual Sessions */}
                <div className="space-y-6">
                  {sessions.map((session) => {
                    const colors = getColorClasses(session.color);
                    return (
                      <div
                        key={session.id}
                        className={`bg-gradient-to-r ${colors.card} rounded-lg border ${colors.border} p-6 hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex flex-col lg:flex-row gap-6">
                          {/* Left: Session Info */}
                          <div className="flex-1">
                            <div className="flex items-start gap-4 mb-4">
                              <div
                                className={`${colors.icon} rounded-lg p-3 text-white flex-shrink-0`}
                              >
                                {session.icon}
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <span
                                    className={`\${colors.badge} text-xs font-medium px-2.5 py-0.5 rounded-full`}
                                  >
                                    {session.company}
                                  </span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {session.duration}
                                  </span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                  {session.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                  {session.subtitle}
                                </p>
                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                  <strong>講演者:</strong>{" "}
                                  {session.speakers.join(", ")}
                                </div>
                              </div>
                            </div>

                            {/* Highlights */}
                            <div className="mb-4">
                              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                                主要トピック
                              </h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {session.highlights.map((highlight, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <div className="w-2 h-2 bg-current rounded-full mr-3 flex-shrink-0 opacity-60"></div>
                                    {highlight}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Target Audience & Technologies */}
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                                  対象読者
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {session.targetAudience}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                                  主要技術
                                </h4>
                                <div className="flex flex-wrap gap-1">
                                  {session.keyTechnologies.map((tech, i) => (
                                    <span
                                      key={i}
                                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right: CTA */}
                          <div className="flex flex-col justify-center lg:w-48">
                            <Button
                              asChild
                              className={`${colors.button} w-full mb-2`}
                            >
                              <Link
                                href={`/aws-summit-2025-report/sessions/${session.id}`}
                                className="inline-flex items-center justify-center gap-2"
                              >
                                詳細レポートを読む
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </Button>
                            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                              詳細分析と実践的知見
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

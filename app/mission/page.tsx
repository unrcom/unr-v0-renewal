import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu currentPath="/mission" />
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 sm:p-8 lg:p-12">
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                弊社の社名は「アンリモート」＝「身近であること」という意味合いで名付けました。
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                コロナ禍最中の2021年に設立したまだ4期目の会社でありますが、2つのミッションを掲げて事業を行っております。
              </p>

              {/* Mission 1 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">ミッション1</h2>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  SaaS開発を通して社会に貢献する
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  SaaSの定義は諸説ありますが、弊社では「ネットワーク越しにサービスを提供するもの」としています。
                  Wikipediaにも記載がありますので詳しくはこちらをご確認ください。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  弊社では2022年にsirokuro.siteというSNSのようなサイトを公開し半年運営しましたが、全く認知されることもなくサービス終了しました。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  その後しばらくの間同業者様技術の開発支援をして学ぶ機会をいただいたのですが、つい先日（2025年4月）より、新しいSaaSの開発を始めました。
                  競争形は違うものになりますが、今は試行錯誤を繰り返してカオスの中を奮闘しています。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">link.bkiban</p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  また先日AWSさんより株式用のクレジットをいただくことが出来ましたので「
                  <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                    AWSにおけるマルチテナントSaaSの実装パターンとサーバーレス活用
                  </span>
                  」を参照していこうと思っているところです。
                </p>
              </div>

              {/* Mission 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">ミッション2</h2>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  お客様主導のSaaS運用チームを構築する
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  SaaSで業務をまかなうことができれば、それはとても重要なこと。またはとっぷり開発にメッチしているかのいずれかだと思います。
                  前者の場合でもシステムの安定した運用や、システム間のデータ連携や方に慣れたデータの保全などを担う運用チームを検討する必要があります。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  スクラッチ開発の場合は、システム間の連携部分や運用サポートもベンダー任せでざんていましたが、SaaSの時代ではここは自社の運用チームの仕事となってきます。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  SaaSの管理機能を理解して運用することだけでなく、データのバックアップ、システム間のデータ連携やデータ移行の技術を持った、新しい運用チームを社内に構築するお手伝いをしたいと思っております。
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  SaaSのおかげでawsさんが大きく成功される先にあるものの1つあった、その後成功できるものの何か、というビジネス可能になったと思っています。
                  そんな中でここでシステムの維持、管理、データ操作のプロが必要です。
                </p>
              </div>
            </div>
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

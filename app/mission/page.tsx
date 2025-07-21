import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SiteHeader currentPath="/mission" />

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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  ミッション1
                </h2>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  SaaS開発を通じて社会に貢献する
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  SaaSの定義は諸説ありますが、弊社では「ネットワーク越しにサービスを提供するもの」としています。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  2022年にsirokuro.siteというSNSのようなサイトを公開し半年運営しましたが、全く認知されることもなくサービス終了しました。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  その後しばらくの間は、同業者様のプロジェクトで開発支援をして、学びと命を繋ぐ活動をしていました。
                  つい先日（2025年4月）より、新しいSaaSの開発を始めました。
                  今は試行錯誤を繰り返してカオスの中を奮闘しています。
                  とりあえずの作品がこちらです。
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-4 font-semibold">
                  <Link
                    href="https://link.bkiban.com"
                    className="hover:text-cyan-200 dark:hover:text-gray-300 transition-colors"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    link.bkiban
                  </Link>
                </p>
              </div>

              {/* Mission 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                  ミッション2
                </h2>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  AI駆動開発
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  生成AI
                  でコードを生成するようになって３か月経過しました。(2025年6月現在です)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  トライの連続ではありますが、こんな感じで日々を過ごしています。
                </p>
                <Image
                  src="/style.png"
                  width={1000}
                  height={1000}
                  alt="style"
                />
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  　
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  生成AI と SaaS のおかげで aws
                  さんがよく言われている「先に成功するのはあなた、次に成功できるのが私」というビジネスが可能になりました。
                </p>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  RAG でどうにかする
                </h3>
                <Image src="/RAG.png" width={1000} height={1000} alt="style" />
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  　
                </p>
                <Image src="/RAG2.png" width={1000} height={1000} alt="style" />
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  　
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Modular RAG &gt; Advanced RAG &gt; Naive RAG
                  の順に高機能で複雑な実装になる。
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  これらは異なる実装ではなくて、Naive RAG から開発を開始し、
                  十分な回答が得られなかった場合に Advanced RAG
                  へ機能を拡張する、 といった開発が可能となります。
                </p>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  Agentic AI でどうにかする
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  これまでは「プロンプトでどうにかする」
                  という「一発出し」の生成結果に一喜一憂していました。 Claude 4
                  (2025年５月22日リリース) の登場により、 LLM
                  側で回答の自己評価を行うようになり、
                  回答が不十分と判断された場合は LLM
                  側で再思考を行なって回答を作り直すようになりました。 LLM は
                  再思考の際に自己の知識が不足していると判断した場合には
                  Web検索ツールを用いて
                  Web検索を実行し複数のページから情報を取得します。
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  (Amazon Bedrock から Claude 4 model
                  を利用する場合は、セキュリティを確保
                  (検索クエリーから情報漏洩するリスクを回避) するため、この
                  Web検索は利用不可になっています)
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  このように LLM
                  が自力で再思考、調査を行うようになったことから、
                  回答のクオリティは格段に高まりました。 しかしながら LLM
                  任せの「回答評価」「Web検索による調査」「再思考」「再評価」は
                  予想外の結果に至ることも多く、まだまだ確率的というか、
                  再現性の低いギャンブルのような印象を受けます。
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Agentic AI は
                  「自律的に意思決定を行い、人間の介入を最小限に抑えながら、
                  複雑なタスクを継続的に実行できるAI」 と定義されており、 生成AI
                  の利用体験を大きく変えるものになります。
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  しかしながらその実現は「普段使い」の現場ではまだ先の話し、と言う印象です。
                  調査方法をある程度は実装し
                  (これには拡張検索技術が有効になります) 、
                  思考を繋ぐ仕組みを実装する (ひとつのエージェントではなくて、
                  いくつかの専門性を有するエージェントの思考を組み合わせる
                  Modular RAG の技術が有効です)
                  ことで、有効な回答を再現性を確保し、かつ責任あるAIとして提供できるようになります。
                </p>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  じゃあどうする？
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  PoC に尽きると思います。{" "}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  ソニーグループではこれまで (2025年6月現在) で 260 件以上の PoC
                  を実施しており、 そのうちの 40
                  件が本番運用に移行したそうです。 丁寧に PoC
                  を回して、良い筋のユースケースを発見するのが最初の一歩になるんだと思います。
                </p>
                <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                  旅に出よう
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  成功を収めた SaaS 開発はとても息の長い挑戦になります。
                  これを誰かが「SaaS
                  ジャーニー」と呼ぶようになり、最近の開発現場は「〇〇ジャーニー」だらけになっています。
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  「生成AI」や「LLM」の利用も、何年間も苦楽を共にする息の長い挑戦になる可能性があります。
                  PoC
                  を丁寧に回して、良い筋のユースケースを「最速で」に見つけることと、
                  上手に「最速で」失敗を経験することがとても重要だと思います。
                  弊社ではこのようなお客様の PoC
                  の実践を支援することで、お客様の AI
                  ジャーニーに貢献したいと考えています。
                </p>
                　{" "}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

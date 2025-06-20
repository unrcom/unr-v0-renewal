import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function TimesPage() {
  const timelineData = [
    {
      period: "2025年4月",
      events: ["自社プロダクト bkiban の検討を開始"],
    },
    {
      period: "2023年3月",
      events: ["sirokuro.site 閉鎖"],
    },
    {
      period: "2022年12月",
      events: ["自社プロダクトでは当社が立ち上げ同業者のプロジェクト支援をはじめる"],
    },
    {
      period: "2022年10月",
      events: ["sirokuro.site を開始"],
    },
    {
      period: "2022年5月",
      events: ["sirokuro[CONCEPT].siteを開始"],
    },
    {
      period: "2022年4月",
      events: [
        "自社プロダクト sirokuro の検討を開始",
        "WordPress を用いた当社のウェブページを React + Nextjs に変更 (aws Route53 + Vercel CDN による)",
      ],
    },
    {
      period: "2022年3月",
      events: ["自社プロダクト emsa (emergency messaging service anonymous) の検討を開始"],
    },
    {
      period: "2021年12月",
      events: ["シングルページアプリケーション (SPA) を体験できるサイトをオープン"],
    },
    {
      period: "2021年5月〜2月",
      events: ["React を用いたシングルページWebアプリケーション (SPA) の開発方式の検討を開始"],
    },
    {
      period: "2021年4月〜12月",
      events: ["プログラミング学習を希望する新中学生のお子様とのプログラミング教室を実施 (3時間の授業を月2回)"],
      subEvents: [
        "Scratchによるプログラミング体験",
        "Python によるオブジェクト指向プログラミング体験",
        "React による Webプログラミング体験",
      ],
    },
    {
      period: "2021年4月",
      events: [
        "4月13日に弊社を設立し、WordPress を用いた当社のウェブページをスタート (aws Lightsail + Route53 による)",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-cyan-500 dark:bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <MobileMenu currentPath="/times" />
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
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <div key={index} className="border-l-2 border-cyan-500 dark:border-cyan-400 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">{item.period}</h3>
                  <ul className="space-y-2">
                    {item.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        • {event}
                      </li>
                    ))}
                    {item.subEvents && (
                      <li className="ml-4">
                        <ul className="space-y-1 mt-2">
                          {item.subEvents.map((subEvent, subIndex) => (
                            <li key={subIndex} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                              ◦ {subEvent}
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
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

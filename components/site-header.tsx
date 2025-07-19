import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

interface SiteHeaderProps {
  currentPath: string;
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Mission" },
    { href: "/prof", label: "Profile" },
    { href: "/style", label: "Style" },
    { href: "/times", label: "Times" },
    { href: "/contact", label: "Contact" },
  ];

  // console.log("SiteHeader - currentPath:", currentPath);

  return (
    <header className="bg-cyan-500 dark:bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <MobileMenu currentPath={currentPath} />
            <Link href="/" className="text-xl font-semibold">
              unremoted.com
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              // console.log(
              //   `Link: \${link.href}, currentPath: \${currentPath}, isActive: \${isActive}`
              // );

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-cyan-600 dark:bg-gray-700 text-white font-bold"
                      : "hover:text-cyan-200 dark:hover:text-gray-300 hover:bg-cyan-600/20 dark:hover:bg-gray-700/20"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

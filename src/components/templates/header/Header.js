import Image from "next/image";
import Link from "next/link";

import ThemeChangerBtn from "./components/ThemeChangerBtn";
import GithubBtn from "./components/GithubBtn";
import MobileMenu from "./components/MobileMenu";

export default function Header() {
  const navItems = [
    {
      id: 1,
      name: "Products",
      link: "/products",
    },
    {
      id: 2,
      name: "Docs",
      link: "/docs",
    },
    {
      id: 3,
      name: "Pricing",
      link: "/pricing",
    },
    {
      id: 4,
      name: "About",
      link: "/about",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <>
      <header className="border-border flex items-center justify-between border-b py-4">
        <nav className="flex items-center gap-5">
          <Link href="/" className="flex size-10 items-center justify-center">
            <Image
              src="/images/logo/logo.png"
              alt="Atlas UI"
              width={80}
              height={80}
            />
          </Link>
          <MobileMenu />

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="text-muted hover:border-border hover:bg-surface hover:text-foreground inline-flex h-10 items-center rounded-lg border border-transparent px-3 text-sm font-medium transition-all active:scale-95"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <GithubBtn />
          <ThemeChangerBtn />
        </div>
      </header>
    </>
  );
}

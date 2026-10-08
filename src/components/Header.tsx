import Link from "next/link";
import { site } from "@/content/site";

interface HeaderProps {
  className?: string;
}

// TODO: 모바일 메뉴(햄버거) 구현
export default function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`${className} fixed left-0 top-0 z-50 w-full bg-gray-900/30`} >
      <nav className="mx-auto flex h-[108] w-full max-w-screen-2xl items-center justify-between px-8">
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm font-medium text-white lg:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="font-mbc text-lg transition-colors hover:text-gray-300 ">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
      </nav>
    </header>
  );
}

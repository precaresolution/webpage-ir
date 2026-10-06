import Link from "next/link";
import { site } from "@/content/site";

// TODO: 모바일 메뉴(햄버거) 구현
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">
          {site.nameEn}
        </Link>
        <ul className="flex gap-6 text-sm font-medium">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-blue-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

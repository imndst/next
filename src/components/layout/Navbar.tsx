"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-orange-500 font-semibold"
      : "text-gray-600 dark:text-gray-300 hover:text-orange-500";

  return (
    <header className="border-b bg-white dark:bg-[#0B0F19]">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* 👤 BRAND */}
        <Link href="/" className="text-xl font-bold text-orange-500">
          ALI IMNDOUST
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 text-sm items-center">

          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/chat" className={linkClass("/chat")}>
            AI Resume
          </Link>

        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">

          <a
            href="mailto:imndst@gmail.com"
            className="text-xs px-4 py-2 rounded-full bg-black text-white hover:opacity-90"
          >
            Hire Me
          </a>

        </div>

      </div>
    </header>
  );
}
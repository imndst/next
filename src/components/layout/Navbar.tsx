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
      <div className="max-w-6xl mx-auto flex justify-between p-4">

        <Link href="/" className="text-xl font-bold text-orange-500">
          abanro.
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/chat" className={linkClass("/chat")}>
            Demo
          </Link>
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
          <Link href="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>
        </nav>

      </div>
    </header>
  );
}
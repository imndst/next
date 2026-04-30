"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-white dark:bg-[#0B0F19] dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-indigo-500">
            abanro.
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/chat">Demo</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>

          {/* CTA */}
          <button className="hidden md:block bg-indigo-500 text-white px-4 py-2 rounded-xl">
            Start free
          </button>

          {/* HAMBURGER BUTTON (MOBILE) */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(true)}
          >
            <span className="w-5 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-5 h-0.5 bg-black dark:bg-white"></span>
            <span className="w-5 h-0.5 bg-black dark:bg-white"></span>
          </button>

        </div>
      </header>

      {/* OVERLAY MENU (MOBILE) */}
      {open && (
        <div className="fixed inset-0 bg-black/50 z-50">

          <div className="w-72 h-full bg-white dark:bg-[#0B0F19] p-6">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="text-sm mb-6"
            >
              ✕ Close
            </button>

            {/* LINKS */}
            <div className="flex flex-col gap-4 text-lg">

              <Link onClick={() => setOpen(false)} href="/chat">
                💬 Demo
              </Link>

              <Link onClick={() => setOpen(false)} href="/pricing">
                💳 Pricing
              </Link>

              <Link onClick={() => setOpen(false)} href="/dashboard">
                📊 Dashboard
              </Link>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
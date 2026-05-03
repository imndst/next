"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-sm text-gray-600 hover:text-black transition py-2 md:py-0";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">

      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="font-semibold tracking-tight text-black">
          AI Portfolio
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          <a href="/" className={linkClass}>
            Home
          </a>

          <a href="/chat" className={linkClass}>
            AI Resume
          </a>

          <a href="/vault" className={linkClass}>
            Security Vault
          </a>

        </div>

        {/* CTA (desktop) */}
        <div className="hidden md:flex">
          <a
            href="mailto:imndst@gmail.com"
            className="text-xs px-4 py-2 rounded-full bg-black text-white hover:opacity-90 transition"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm border px-3 py-1 rounded-full"
        >
          {open ? "Close" : "Menu"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-3 bg-white">

          <a href="/" className={linkClass}>
            Home
          </a>

          <a href="/chat" className={linkClass}>
            AI Resume
          </a>

          <a href="/lamps" className={linkClass}>
            Security Vault
          </a>

          <a
            href="mailto:imndst@gmail.com"
            className="mt-2 text-center text-xs px-4 py-2 rounded-full bg-black text-white"
          >
            Hire Me
          </a>

        </div>
      )}

    </nav>
  );
}
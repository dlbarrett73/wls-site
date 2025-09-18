// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "./CtaButton";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 flex h-16 items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-brand-700">
              Whitetail Land Solutions
            </span>
            <span className="text-xs text-brand-700">
              Engineered for Giants. Built for Legacy.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/properties" className="text-zinc-800 hover:text-brand-700">
            Land for Sale
          </Link>
          <Link href="/services" className="text-zinc-800 hover:text-brand-700">
            Services
          </Link>
          <Link href="/about" className="text-zinc-800 hover:text-brand-700">
            About
          </Link>
          <Link href="/contact" className="text-zinc-800 hover:text-brand-700">
            Contact
          </Link>
          <CtaButton href="/contact">Free Strategy Call</CtaButton>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-zinc-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200">
          <nav className="flex flex-col p-4 space-y-3">
            <Link
              href="/properties"
              onClick={() => setOpen(false)}
              className="text-zinc-800 hover:text-brand-700"
            >
              Land for Sale
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-zinc-800 hover:text-brand-700"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-zinc-800 hover:text-brand-700"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-zinc-800 hover:text-brand-700"
            >
              Contact
            </Link>
            <CtaButton href="/contact">Free Strategy Call</CtaButton>
          </nav>
        </div>
      )}
    </header>
  );
}

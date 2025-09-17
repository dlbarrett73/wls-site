// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV = [
  { href: "/properties", label: "Properties" },
  { href: "/consulting", label: "Consulting" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo-400.png" /* ensure this file exists in /public */
            alt="Whitetail Land Solutions"
            width={40}
            height={40}
            priority
          />
          <span className="sr-only">Whitetail Land Solutions</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-800 hover:text-brand-700 no-underline"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-brand-700 text-white hover:bg-brand-600">
            Book a Strategy Call
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-zinc-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile panel *

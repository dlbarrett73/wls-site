"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 flex h-16 items-center justify-between">
        {/* Logo + Business Name */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-zinc-900">
              Whitetail Land Solutions
            </span>
            <span className="text-xs text-zinc-600">
              Engineered for Giants. Built for Legacy.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-zinc-700">
          <Link href="/properties" className="hover:text-brand-700">
            Properties
          </Link>
          <Link href="/services/consulting" className="hover:text-brand-700">
            Consulting
          </Link>
          <Link href="/services/habitat" className="hover:text-brand-700">
            Habitat Implementation
          </Link>
          <Link href="/contact" className="hover:text-brand-700">
            Contact
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100"
        >
          <span className="sr-only">Open main menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-6 py-4 space-y-4 text-sm font-medium text-zinc-700">
          <Link href="/properties" className="block hover:text-brand-700">
            Properties
          </Link>
          <Link href="/services/consulting" className="block hover:text-brand-700">
            Consulting
          </Link>
          <Link href="/services/habitat" className="block hover:text-brand-700">
            Habitat Implementation
          </Link>
          <Link href="/contact" className="block hover:text-brand-700">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

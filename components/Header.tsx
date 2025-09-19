"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 flex h-16 items-center justify-between">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions"
            width={40}
            height={40}
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-emerald-800">
              Whitetail Land Solutions
            </span>
            <span className="text-xs text-emerald-700">
              Engineered for Giants. Built for Legacy.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/properties" className="text-sm font-medium hover:text-emerald-700">
            Land for Sale
          </Link>
          <Link href="/services/consulting" className="text-sm font-medium hover:text-emerald-700">
            Consulting
          </Link>
          <Link href="/services/habitat-implementation" className="text-sm font-medium hover:text-emerald-700">
            Habitat Implementation
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-emerald-700">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-emerald-700">
            Contact
          </Link>
          <Link
            href="/contact"
            className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Free Strategy Call
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-700 hover:bg-zinc-100 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          ☰
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-2">
            <Link href="/properties">Land for Sale</Link>
            <Link href="/services/consulting">Consulting</Link>
            <Link href="/services/habitat-implementation">Habitat Implementation</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link
              href="/contact"
              className="mt-2 rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800 text-center"
            >
              Free Strategy Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

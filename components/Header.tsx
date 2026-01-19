import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold tracking-tight text-slate-900">
          Whitetail Land Solutions
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
          <Link href="/services" className="hover:text-slate-900">Services</Link>
          <Link href="/properties" className="hover:text-slate-900">Properties</Link>
          <Link href="/about" className="hover:text-slate-900">About</Link>
          <Link href="/contact" className="hover:text-slate-900">Contact</Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Book a Call
        </Link>
      </div>
    </header>
  );
}

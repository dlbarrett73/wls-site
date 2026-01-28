import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions"
            width={160}
            height={40}
            priority
            className="h-auto w-[150px] sm:w-[160px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 sm:flex">
          <Link href="/property-audit" className="hover:text-slate-900">
            Property Audit
          </Link>
          <Link href="/why-it-matters" className="hover:text-slate-900">
            Why It Matters
          </Link>
          <Link href="/consulting" className="hover:text-slate-900">
            System Plan
          </Link>
          <Link
            href="/services/implementation"
            className="hover:text-slate-900"
          >
            Execution
          </Link>
          <Link href="/properties" className="hover:text-slate-900">
            Properties
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </nav>

        {/* Primary CTA */}
        <Link
          href="/capture/property-audit"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/40"
        >
          Apply for a Property Audit
        </Link>
      </div>
    </header>
  );
}

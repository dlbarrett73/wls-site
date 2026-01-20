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
          <Link href="/property-audit">Property Audit</Link>
<Link href="/why-it-matters">Why It Matters</Link>
<Link href="/properties">Properties</Link>
<Link href="/consulting">Consulting</Link>
<Link href="/services/implementation">Implementation</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
        </nav>

        {/* Update CTA to direct visitors to the dedicated audit application */}
        <Link
          href="/capture/property-audit"
          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Apply for a Property Audit
        </Link>
      </div>
    </header>
  );
}

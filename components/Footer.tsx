import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions"
            width={40}
            height={40}
          />
          <span className="text-sm font-semibold text-emerald-800">
            Whitetail Land Solutions
          </span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-zinc-600">
          <Link href="/properties">Land for Sale</Link>
          <Link href="/services/consulting">Consulting</Link>
          <Link href="/services/habitat-implementation">Habitat</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Free Strategy Call
        </Link>
      </div>

      <div className="mt-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Whitetail Land Solutions. All rights reserved.
      </div>
    </footer>
  );
}

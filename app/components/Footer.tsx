"use client";

import React from "react";
import Link from "next/link";
import CtaButton from "./CtaButton"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Brand + tagline */}
        <div className="space-y-2">
          <div className="text-xl font-extrabold tracking-tight">
            Whitetail Land Solutions
          </div>
          <p className="max-w-prose text-sm text-zinc-600">
            Engineered for Giants. Built for Legacy.
          </p>

          {/* Mini nav (optional) */}
          <nav className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-700">
            <Link href="/properties" className="hover:text-zinc-900">
              Properties
            </Link>
            <Link href="/services/consulting" className="hover:text-zinc-900">
              Consulting
            </Link>
            <Link href="/about" className="hover:text-zinc-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-zinc-900">
              Contact
            </Link>
          </nav>
        </div>

        {/* Persistent CTA */}
        <div className="shrink-0">
          <CtaButton
            href="/contact" // ✅ consistent with your other CTAs
            label="Book a Free Strategy Call"
          />
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Whitetail Land Solutions</span>
          <span>NuMine, PA</span>
        </div>
      </div>
    </footer>
  );
}

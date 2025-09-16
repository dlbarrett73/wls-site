// app/components/Footer.tsx
import React from "react";
import Link from "next/link";
// If you already have a shared CTA button, we’ll use it for brand consistency:
import { CtaButton } from "../components/CtaButton"; // <-- adjust the path if your components live elsewhere

export default function Footer() {
  // Change this later to your Calendly link if/when you want direct booking:
  const CONTACT_URL = "/contact";

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        {/* Left: brand + small nav (optional) */}
        <div className="space-y-2">
          <div className="text-xl font-extrabold tracking-tight">
            Whitetail Land Solutions
          </div>
          <p className="max-w-prose text-sm text-zinc-600">
            Engineered for Giants. Built for Legacy.
          </p>

          {/* Optional mini nav; remove or customize */}
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

        {/* Right: Persistent CTA */}
        <div className="shrink-0">
          {/* If your CtaButton supports props like href/variant/size, this keeps styling on-brand */}
          <CtaButton href={CONTACT_URL} variant="primary" size="lg">
            Book a Free Strategy Call
          </CtaButton>

          {/*
            If you DON'T want to use CtaButton, comment the line above and
            uncomment the on-brand tailwind button below (forest-green feel):

            <Link
              href={CONTACT_URL}
              className="inline-flex items-center rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              Book a Free Strategy Call
            </Link>
          */}
        </div>
      </div>

      <div className="border-t border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500">
          <span>© {new Date().getFullYear()} Whitetail Land Solutions. All rights reserved.</span>
          <span>NuMine, PA</span>
        </div>
      </div>
    </footer>
  );
}

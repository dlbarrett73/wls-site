// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Whitetail Land Solutions",
  description:
    "Turnkey whitetail properties engineered for giants, built for legacy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* MAIN CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER WITH ON-BRAND CTA (inline, no external component needed) */}
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
              {/* Brand + tagline + (optional) logo */}
              <div className="flex items-start gap-4">
                {/* If you have a logo file in /public, use it here.
                   Update the src below to your actual file name.
                   If you don’t have a logo file, you can delete this <Image> block. */}
                <div className="mt-1 hidden md:block">
                  <Image
                    src="/wls-logo.png"     // <-- change if your logo file has a different name
                    alt="Whitetail Land Solutions"
                    width={36}
                    height={36}
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-xl font-extrabold tracking-tight">
                    Whitetail Land Solutions
                  </div>
                  <p className="max-w-prose text-sm text-zinc-600">
                    Engineered for Giants. Built for Legacy.
                  </p>

                  {/* Mini nav (optional) */}
                  <nav className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-700">
                    <Link href="/properties" className="hover:text-zinc-900">Properties</Link>
                    <Link href="/services/consulting" className="hover:text-zinc-900">Consulting</Link>
                    <Link href="/land-for-sale" className="hover:text-zinc-900">Land for Sale</Link>
                    <Link href="/about" className="hover:text-zinc-900">About</Link>
                    <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
                  </nav>
                </div>
              </div>

              {/* Persistent CTA – on-brand green from your Tailwind palette */}
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg px-6 py-3 font-semibold text-white shadow-md transition
                             bg-brand-700 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="border-t border-zinc-100">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500">
                <span>© {new Date().getFullYear()} Whitetail Land Solutions · PO Box 167, NuMine, PA 16244 · info@whitetaillandsolutions.com</span>
                <span>Engineered for Giants. Built for Legacy.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";

// If this path errors, change to:  import Header from "../components/Header";
import Header from "./components/Header";

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
          {/* HEADER back in place */}
          <Header />

          {/* MAIN CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER WITH LOGO + CTA */}
          <footer className="border-t border-zinc-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
              {/* Brand + tagline + logo */}
              <div className="flex items-start gap-4">
                <div className="mt-1 hidden md:block">
                  <Image
                    src="/logo-400.png" // your logo in /public
                    alt="Whitetail Land Solutions"
                    width={48}
                    height={48}
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

                  <nav className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-700">
                    <Link href="/properties" className="hover:text-zinc-900">Properties</Link>
                    <Link href="/services/consulting" className="hover:text-zinc-900">Consulting</Link>
                    <Link href="/about" className="hover:text-zinc-900">About</Link>
                    <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
                  </nav>
                </div>
              </div>

              {/* Persistent CTA */}
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

            <div className="border-t border-zinc-100">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500">
                <span>© {new Date().getFullYear()} Whitetail Land Solutions · PO Box 167, NuMine, PA 16244</span>
                <span>Engineered for Giants. Built for Legacy.</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

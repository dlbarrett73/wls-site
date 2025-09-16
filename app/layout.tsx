import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Whitetail Land Solutions",
  description: "Engineered for Giants. Built for Legacy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900">
        {/* HEADER */}
        <header className="border-b">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-400.png"
                alt="Whitetail Land Solutions"
                width={48}
                height={48}
                priority
              />
              <span className="font-semibold tracking-tight">
                Whitetail Land Solutions
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/properties">Properties</Link>
              <Link href="/services/consulting">Consulting</Link>
              <Link href="/services/implementation">Implementation</Link>
              <Link
                href="/contact"
                className="rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white hover:bg-brand-600"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 border-t">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="text-zinc-600">
                © {new Date().getFullYear()} Whitetail Land Solutions. All rights reserved.
              </p>
              <Link
                href="/contact"
                className="rounded-lg bg-brand-500 px-5 py-2.5 font-semibold text-white shadow-soft hover:bg-brand-600"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

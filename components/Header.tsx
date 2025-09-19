// /components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import CtaButton from "@/components/CtaButton";

const NAV = [
  { label: "Land for Sale", href: "/properties" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    // consider subroutes active (e.g., /properties/mahaffey-131)
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      {/* Skip link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] rounded-md bg-brand-800 px-3 py-2 text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            {/* Ensure your file is at /public/logo-400.png (do not prefix /public in the src) */}
            <Image
              src="/logo-400.png"
              alt="Whitetail Land Solutions"
              width={40}
              height={40}
              priority
              className="shrink-0"
            />
            <div className="leading-tight">
              <div className="font-extrabold tracking-tight text-brand-900">
                Whitetail Land Solutions
              </div>
              <div className="text-sm text-brand-800">
                Engineered for Giants. Built for Legacy.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "transition-colors",
                  isActive(item.href)
                    ? "text-brand-900 font-semibold"
                    : "text-zinc-800 hover:text-brand-800",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}

            <CtaButton
              href="/contact"
              className="shadow-sm"
              aria-label="Book a Free Strategy Call"
              // CtaButton should already be styled to brand; this ensures color consistency
            >
              Free Strategy Call
            </CtaButton>
          </nav>

          {/* Mobile: hamburger + CTA shortcut */}
          <div className="flex items-center gap-3 md:hidden">
            <CtaButton
              href="/contact"
              size="sm"
              aria-label="Book a Free Strategy Call"
            >
              Free Call
            </CtaButton>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 p-2 text-zinc-800 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-brand-600"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden origin-top transition-all duration-200 ease-out",
            open ? "scale-y-100 opacity-100" : "scale-y-95 opacity-0 pointer-events-none h-0",
          ].join(" ")}
        >
          <div className="mt-2 rounded-xl border border-zinc-200 bg-white p-2 shadow-soft">
            <nav aria-label="Mobile Primary" className="flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-2 text-base transition-colors",
                    isActive(item.href)
                      ? "bg-brand-50 text-brand-900 font-semibold"
                      : "text-zinc-800 hover:bg-zinc-50 hover:text-brand-800",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <CtaButton
                href="/contact"
                className="mt-1"
                aria-label="Book a Free Strategy Call"
              >
                Book a Free Strategy Call
              </CtaButton>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

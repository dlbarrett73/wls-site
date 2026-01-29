"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const primaryFlowLinks = [
  { href: "/property-audit", label: "Property Audit" },
  { href: "/system-plan", label: "System Plan" },
  { href: "/services/execution", label: "Execution" },
] as const;

const secondaryLinks = [
  { href: "/why-it-matters", label: "Why It Matters" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Close on ESC
  React.useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Prevent background scroll when menu is open
  React.useEffect(() => {
    if (!mobileOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions"
            width={160}
            height={40}
            priority
            className="h-auto w-[130px] sm:w-[160px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 text-sm font-semibold text-slate-700 sm:flex">
          {/* Primary doctrine flow: Audit → Plan → Execution */}
          <div className="flex items-center gap-4">
            {primaryFlowLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-slate-900">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <span className="mx-1 h-5 w-px bg-slate-200" aria-hidden="true" />

          {/* Supporting pages */}
          <div className="flex items-center gap-4">
            {secondaryLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-slate-900">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side: CTA + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Primary CTA (always visible; compact on mobile) */}
          <Link
            href="/property-audit"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/40 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="sm:hidden">Start</span>
            <span className="hidden sm:inline">Start with the Property Audit</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-700/40 sm:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {/* Simple hamburger / X */}
            <span className="relative block h-5 w-5">
              <span
                className={[
                  "absolute left-0 top-[4px] h-[2px] w-5 bg-current transition",
                  mobileOpen ? "translate-y-[6px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[10px] h-[2px] w-5 bg-current transition",
                  mobileOpen ? "opacity-0" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[16px] h-[2px] w-5 bg-current transition",
                  mobileOpen ? "translate-y-[-6px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay + Panel */}
      {mobileOpen && (
        <div className="sm:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 cursor-default bg-black/30"
            onClick={() => setMobileOpen(false)}
          />

          {/* Panel */}
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-[73px] z-50 border-b border-slate-200 bg-white shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="mx-auto max-w-6xl px-4 py-4">
              {/* Primary doctrine flow first */}
              <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-2">
                <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Audit → Plan → Execution
                </div>
                <nav className="flex flex-col gap-1 text-base font-semibold text-slate-900">
                  {primaryFlowLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg px-3 py-2 hover:bg-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Supporting links */}
              <nav className="flex flex-col gap-2 text-base font-semibold text-slate-800">
                {secondaryLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

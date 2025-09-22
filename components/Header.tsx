"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const menuBtnRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown on outside click / ESC
  React.useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (
        open &&
        !menuRef.current.contains(e.target as Node) &&
        e.target !== menuBtnRef.current
      ) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const navLink =
    "inline-flex items-center px-3 py-2 text-sm font-medium text-slate-800 hover:text-emerald-700";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* If you have a logo file in /public/images, replace src below */}
          <span className="sr-only">Whitetail Land Solutions</span>
          <Image
            src="public/logo-400.png"
            alt="Whitetail Land Solutions"
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
          {/* 2) TEXT (always visible, so you never “lose” your brand) */}
  <div className="flex min-w-0 flex-col leading-tight">
    <span className="truncate text-base font-semibold text-slate-900">
      Whitetail Land Solutions
    </span>
    <span className="hidden truncate text-xs text-slate-600 sm:block">
      Engineered for Giants. Built for Legacy.
    </span>
  </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link href="/properties" className={navLink}>
            Properties
          </Link>
          <Link href="/services/consulting" className={navLink}>
            Consulting
          </Link>
          <Link href="/services/implementation" className={navLink}>
            Implementation
          </Link>
          <Link href="/about" className={navLink}>
            About
          </Link>
          <Link href="/contact" className={navLink}>
            Contact
          </Link>

          {/* Get Started dropdown (replaces Strategy Call button) */}
          <div className="relative ml-2" ref={menuRef}>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="menu"
              aria-expanded={open}
              className="inline-flex items-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/40"
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
              >
                <div className="p-2">
                  <Link
                    href="/properties"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
                    role="menuitem"
                  >
                    Buy Land → Browse Properties
                  </Link>
                  <Link
                    href="/services/consulting"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
                    role="menuitem"
                  >
                    Consulting → Blueprint for Giants
                  </Link>
                  <Link
                    href="/services/implementation"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
                    role="menuitem"
                  >
                    Habitat Implementation → Build It Right
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-800"
                    role="menuitem"
                  >
                    Contact Us → Send a Message
                  </Link>
                </div>
                <div className="border-t border-slate-200 p-2">
                  {/* Keep the call option discoverable but secondary */}
                  <Link
                    href="https://calendly.com/"
                    target="_blank"
                    className="block rounded-lg bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800"
                    role="menuitem"
                  >
                    Or, Book a 15-Minute Call
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="inline-flex items-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-4">
            <div className="space-y-1">
              <Link href="/properties" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100">
                Properties
              </Link>
              <Link href="/services/consulting" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100">
                Consulting
              </Link>
              <Link href="/services/implementation" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100">
                Implementation
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100">
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-100">
                Contact
              </Link>
            </div>

            <div className="mt-4 space-y-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-emerald-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-800"
              >
                Get Started
              </Link>
              <Link
                href="https://calendly.com/"
                target="_blank"
                className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                onClick={() => setMobileOpen(false)}
              >
                Or, Book a 15-Minute Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

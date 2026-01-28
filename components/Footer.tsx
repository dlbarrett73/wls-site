import Link from "next/link";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Company Info */}
          <div>
            <div className="font-semibold text-slate-900">
              Whitetail Land Solutions, LLC
            </div>
            <div className="mt-1 text-sm text-slate-600">
              PO Box 167 • NuMine, PA 16244
            </div>
            <div className="mt-1 text-sm text-slate-600">
              © {year} • All rights reserved
            </div>
          </div>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-4 text-sm font-medium text-slate-700"
          >
            {/* Orientation-first */}
            <Link
              href="/property-audit"
              className="hover:text-slate-900"
            >
              Start with the Property Audit
            </Link>

            {/* Supporting pages */}
            <Link href="/why-it-matters" className="hover:text-slate-900">
              Why It Matters
            </Link>
            <Link href="/properties" className="hover:text-slate-900">
              Properties
            </Link>
            <Link href="/consulting" className="hover:text-slate-900">
              Consulting
            </Link>
            <Link href="/services/implementation" className="hover:text-slate-900">
              Execution
            </Link>
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>
        </div>

        {/* Disclosure */}
        <p className="mt-6 text-xs text-slate-500">
          We are not real estate brokers. We buy and sell our own properties.
        </p>
      </div>
    </footer>
  );
}

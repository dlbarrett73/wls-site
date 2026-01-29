import Link from "next/link";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Company Info */}
          <div className="max-w-sm">
            <div className="font-semibold text-slate-900">
              Whitetail Land Solutions, LLC
            </div>

            <div className="mt-1 text-sm text-slate-600">
              Engineered for Giants. Built for Legacy.
            </div>

            <div className="mt-2 text-sm text-slate-600">
              PO Box 167 • NuMine, PA 16244
            </div>

            <div className="mt-2 text-xs text-slate-500">
              © {year} • All rights reserved
            </div>
          </div>

          {/* Footer Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-700"
          >
            {/* Doctrine-first flow */}
            <Link href="/property-audit" className="hover:text-slate-900">
              Property Audit
            </Link>
            <Link href="/system-plan" className="hover:text-slate-900">
              System Plan
            </Link>
            <Link
              href="/services/execution"
              className="hover:text-slate-900"
            >
              Execution
            </Link>

            {/* Supporting pages */}
            <Link href="/properties" className="hover:text-slate-900">
              Properties
            </Link>
            <Link href="/why-it-matters" className="hover:text-slate-900">
              Why It Matters
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
        <p className="mt-8 text-xs text-slate-500">
          Whitetail Land Solutions is not a real estate brokerage. We buy,
          optimize, and sell our own properties, and provide consulting services
          to private landowners.
        </p>
      </div>
    </footer>
  );
}

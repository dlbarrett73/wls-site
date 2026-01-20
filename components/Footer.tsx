import Link from "next/link";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-slate-900">Whitetail Land Solutions, LLC</div>
            <div className="mt-1 text-sm text-slate-600">PO Box 167 • NuMine, PA 16244</div>
            <div className="mt-1 text-sm text-slate-600">© {year} • All rights reserved</div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <Link href="/property-audit">Property Audit</Link>
<Link href="/why-it-matters">Why It Matters</Link>
<Link href="/properties">Properties</Link>
<Link href="/consulting">Consulting</Link>
<Link href="/services/implementation">Implementation</Link>
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          We are not real estate brokers. We buy and sell our own properties.
        </p>
      </div>
    </footer>
  );
}

// app/properties/page.tsx
import React from "react";
import Link from "next/link";
import PropertyCard, { type Property } from "@/components/PropertyCard";
// If your tsconfig doesn't have "@/..." paths, swap this for:
// import PropertyCard, { type Property } from "../components/PropertyCard";
import propertiesBySlug from "../data/properties"; // or: import { propertiesBySlug } from "../data/properties";

export const metadata = {
  title: "Turnkey Whitetail Hunting Properties | Whitetail Land Solutions",
  description:
    "Engineered for Giants. Built for Legacy. Explore turnkey whitetail hunting properties in Pennsylvania—optimized with access, plots, and stand sites so you can hunt big bucks Day One.",
};

function computeStatus(p: Property): "available" | "pending" | "sold" {
  const raw =
    (typeof p.status === "string" ? p.status : undefined) ??
    (p.sold ? "sold" : "available");
  const s = raw.toLowerCase();
  if (s.includes("pend")) return "pending";
  if (s.includes("sold")) return "sold";
  return "available";
}

export default function PropertiesIndexPage() {
  const entries = Object.entries(propertiesBySlug as Record<string, Property>);
  const items = entries
    .map(([slug, p]) => ({ ...p, slug: p.slug ?? slug }))
    .sort((a, b) => {
      const rank = { available: 0, pending: 1, sold: 2 } as const;
      return (
        rank[computeStatus(a)] - rank[computeStatus(b)] ||
        (a.title || "").localeCompare(b.title || "")
      );
    });

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      {/* Header / Positioning */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Turnkey Whitetail Hunting Properties
        </h1>
        <p className="mt-3 text-zinc-700">
          Engineered for Giants. Built for Legacy. Every listing is designed to
          maximize opportunities at mature bucks within the first hunting season.
        </p>

        {/* Scarcity / Waitlist CTA */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
            Limited inventory
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
          >
            Join the Waitlist
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </header>

      {/* Grid */}
      {items.length > 0 ? (
        <section aria-labelledby="properties-grid" className="mt-10">
          <h2 id="properties-grid" className="sr-only">
            Property Listings
          </h2>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </ul>
        </section>
      ) : (
        /* Empty State */
        <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold">Nothing available right now</h2>
          <p className="mx-auto mt-2 max-w-xl text-zinc-700">
            Inventory moves fast. Join the waitlist and we’ll notify you the
            moment a new property is ready—or book a free strategy call to tell
            us exactly what you’re looking for.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-5 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}

// app/properties/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import propertiesBySlug from "../data/properties"; // default export keyed by slug

export const metadata = {
  title: "Turnkey Whitetail Hunting Properties | Whitetail Land Solutions",
  description:
    "Engineered for Giants. Built for Legacy. Explore turnkey whitetail hunting properties in Pennsylvania—optimized with access, plots, and stand sites so you can hunt big bucks Day One.",
};

type Property = {
  slug?: string;
  title: string;
  price?: string | number;
  acres?: number | string;
  heroImage?: string;
  heroSrc?: string;
  gallery?: string[];
  location?: string;
  highlights?: string[];
  status?: "available" | "pending" | "sold" | string;
  sold?: boolean;
  [key: string]: unknown;
};

function formatPrice(price: Property["price"]) {
  if (price == null || price === "") return "";
  if (typeof price === "number") return `$${price.toLocaleString()}`;
  const s = String(price).trim();
  return s ? (s.startsWith("$") ? s : `$${s}`) : "";
}

function formatAcres(acres: Property["acres"]) {
  if (acres == null || acres === "") return "";
  if (typeof acres === "number") return `${acres.toLocaleString()}± acres`;
  const s = String(acres).trim();
  return s ? `${s}± acres` : "";
}

function computeStatus(p: Property): "available" | "pending" | "sold" {
  const raw =
    (typeof p.status === "string" ? p.status : undefined) ??
    (p.sold ? "sold" : "available");
  const s = raw.toLowerCase();
  if (s.includes("pend")) return "pending";
  if (s.includes("sold")) return "sold";
  return "available";
}

function badgeStyles(status: "available" | "pending" | "sold") {
  switch (status) {
    case "available":
      return "bg-emerald-600 text-white";
    case "pending":
      return "bg-amber-600 text-white";
    case "sold":
      return "bg-zinc-800 text-white";
  }
}

function heroFor(p: Property) {
  return p.heroImage ?? p.heroSrc ?? "/images/properties/fallback.jpg";
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

      {/* Grid or Empty State */}
      {items.length > 0 ? (
        <section aria-labelledby="properties-grid" className="mt-10">
          <h2 id="properties-grid" className="sr-only">
            Property Listings
          </h2>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => {
              const status = computeStatus(p);
              const price = formatPrice(p.price);
              const acres = formatAcres(p.acres);
              const hero = heroFor(p);
              const href = `/properties/${p.slug}`;
              const showCallCta = status !== "sold";
              const showWaitlistCta = status === "sold" || status === "pending";

              return (
                <li
                  key={p.slug}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={hero}
                      alt={p.title ?? "Property hero image"}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      priority={false}
                    />
                    {/* Status Badge */}
                    <div className="absolute left-3 top-3">
                      <span
                        className={
                          "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm " +
                          badgeStyles(status)
                        }
                      >
                        {status === "available"
                          ? "Available"
                          : status === "pending"
                          ? "Pending"
                          : "Sold"}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-zinc-900">
                      <Link href={href} className="hover:underline">
                        {p.title}
                      </Link>
                    </h3>

                    <div className="mt-1 text-sm text-zinc-600">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {acres && <span>{acres}</span>}
                        {p.location && <span className="text-zinc-500">•</span>}
                        {p.location && <span>{p.location}</span>}
                      </div>
                      {price && (
                        <div className="mt-1 font-semibold text-zinc-900">
                          {price}
                        </div>
                      )}
                    </div>

                    {/* Optional highlights (first 3) */}
                    {Array.isArray(p.highlights) && p.highlights.length > 0 && (
                      <ul className="mt-3 list-inside list-disc text-sm text-zinc-700">
                        {p.highlights.slice(0, 3).map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}

                    {/* CTAs */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      <Link
                        href={href}
                        className="inline-flex flex-1 items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:flex-none"
                      >
                        View Details
                      </Link>

                      {showCallCta && (
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
                        >
                          Free Strategy Call
                        </Link>
                      )}

                      {showWaitlistCta && (
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
                        >
                          Join Waitlist
                        </Link>
                      )}
                    </div>

                    {/* Proof nudge */}
                    <p className="mt-3 text-xs text-zinc-500">
                      Turnkey habitat design • Access & stand strategy • “Hunt
                      big bucks Day One”
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      ) : (
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

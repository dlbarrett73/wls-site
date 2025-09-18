// app/properties/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Use a **relative** import to avoid tsconfig alias issues:
import { propertiesBySlug } from "../data/properties";

type Property = {
  slug?: string;
  title?: string;
  subtitle?: string;
  acres?: number | string;
  price?: number | string;
  county?: string;
  state?: string;
  // preferred image fields if present:
  cardImage?: string;
  heroUrl?: string;
  heroImage?: string;
  gallery?: string[];
  // sometimes people store a path field
  path?: string;
};

function formatPrice(price: number | string | undefined) {
  if (price == null || price === "") return "";
  if (typeof price === "number") {
    return `$${price.toLocaleString()}`;
  }
  const trimmed = String(price).trim();
  // strip any leading $ then re-add to keep things consistent
  const numeric = trimmed.replace(/^\$/, "");
  return `$${numeric}`;
}

function formatAcres(acres: number | string | undefined) {
  if (acres == null || acres === "") return "";
  if (typeof acres === "number") return `${acres.toLocaleString()}± acres`;
  const s = String(acres).trim();
  return s ? `${s}± acres` : "";
}

function deriveSlug(key: string, p: Property): string | null {
  if (p?.slug && typeof p.slug === "string") return p.slug;
  if (key && key !== "undefined") return key;
  if (p?.path) {
    const parts = p.path.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    if (last) return last;
  }
  return null;
}

function pickCardImage(slug: string, p: Property): string {
  // Try the most specific fields first, then fall back to a conventional path, then generic fallback
  return (
    p.cardImage ||
    p.heroUrl ||
    p.heroImage ||
    (slug ? `/images/properties/${slug}/hero.jpg` : "") ||
    "/images/properties/fallback.jpg"
  );
}

export default function PropertiesIndexPage() {
  const entries = Object.entries(propertiesBySlug as Record<string, Property>);

  const items = entries
    .map(([key, p]) => {
      const slug = deriveSlug(key, p);
      if (!slug) return null; // filter out anything we can't safely link
      const title =
        p.title ||
        // derive a friendly title from slug if needed, e.g. "mahaffey-131" -> "Mahaffey 131"
        slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());

      const acresText = formatAcres(p.acres);
      const priceText = formatPrice(p.price);
      const locationText = [p.county, p.state].filter(Boolean).join(", ");
      const img = pickCardImage(slug, p);

      return {
        slug,
        title,
        acresText,
        priceText,
        locationText,
        img,
      };
    })
    .filter(Boolean) as Array<{
      slug: string;
      title: string;
      acresText: string;
      priceText: string;
      locationText: string;
      img: string;
    }>;

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Available Properties
        </h1>
        <p className="mt-3 text-zinc-700">
          Turnkey whitetail properties engineered for giants, built for legacy.
        </p>
      </header>

      {/* Listings / Empty State */}
      {items.length > 0 ? (
        <section aria-labelledby="properties-grid" className="mt-8">
          <h2 id="properties-grid" className="sr-only">
            Property Listings
          </h2>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li key={item.slug} className="group">
                <Link
                  href={`/properties/${item.slug}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-xl"
                >
                  <div className="overflow-hidden rounded-xl bg-zinc-100">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.img}
                        alt={`${item.title} — ${item.acresText || "Property"}${
                          item.locationText ? ` — ${item.locationText}` : ""
                        }`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        priority={false}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="text-lg font-semibold leading-tight">
                          {item.title}
                        </h3>
                        {item.priceText && (
                          <span className="text-base font-bold text-emerald-800">
                            {item.priceText}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex flex-wrap gap-2 text-sm text-zinc-600">
                        {item.acresText && (
                          <span className="inline-block">{item.acresText}</span>
                        )}
                        {item.locationText && (
                          <>
                            <span aria-hidden="true">•</span>
                            <span className="inline-block">
                              {item.locationText}
                            </span>
                          </>
                        )}
                      </div>

                      <div className="mt-4">
                        <span className="inline-flex items-center justify-center rounded-lg border border-emerald-900/20 bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800">
                          View details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="mt-12 rounded-xl border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-bold">Don’t see the right property today?</h2>
          <p className="mt-2 text-zinc-700">
            Inventory changes fast. Join the waitlist to get first look at new
            acquisitions, off-market deals, and turn-key properties engineered
            for mature bucks.
          </p>
          <ul className="mt-4 list-disc space-y-1 pl-6 text-zinc-700">
            <li>Early access to upcoming listings</li>
            <li>Options within your budget & acreage targets</li>
            <li>Alerts for properties in your preferred counties</li>
          </ul>
          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800"
            >
              Join the Waitlist
            </Link>
          </div>
        </section>
      )}

      {/* Always-on Waitlist CTA (below grid) */}
      <section className="mt-14 rounded-xl border border-emerald-900/15 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold">
          Ready to design your big-buck paradise?
        </h2>
        <p className="mt-2 text-emerald-900/90">
          Turnkey properties and expert habitat consulting—engineered for
          giants, built for legacy.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800"
          >
            Join the Waitlist / Contact
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-lg border border-emerald-900/20 bg-white px-5 py-2.5 text-sm font-medium text-emerald-900 shadow-sm transition hover:bg-emerald-50"
          >
            View Properties
          </Link>
        </div>
      </section>
    </main>
  );
}

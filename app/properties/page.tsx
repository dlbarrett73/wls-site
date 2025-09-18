"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// Use a **relative** import to avoid tsconfig alias pitfalls
import { propertiesBySlug } from "../data/properties";

/** ---------- Types & Utilities ---------- */

type Property = {
  slug?: string;
  title?: string;
  subtitle?: string;
  acres?: number | string;
  price?: number | string;
  county?: string;
  state?: string;
  cardImage?: string;
  heroUrl?: string;
  heroImage?: string;
  gallery?: string[];
  path?: string;
};

function toNumber(x: unknown): number | null {
  if (x == null) return null;
  if (typeof x === "number" && Number.isFinite(x)) return x;
  if (typeof x === "string") {
    const digits = x.replace(/[^0-9.]/g, "");
    const n = Number(digits);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function formatPrice(price: number | string | undefined) {
  const n = toNumber(price);
  if (n == null) return "";
  return `$${n.toLocaleString()}`;
}

function formatAcres(acres: number | string | undefined) {
  const n = toNumber(acres);
  if (n == null) {
    const s = typeof acres === "string" ? acres.trim() : "";
    return s ? `${s}± acres` : "";
  }
  return `${n.toLocaleString()}± acres`;
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
  return (
    p.cardImage ||
    p.heroUrl ||
    p.heroImage ||
    (slug ? `/images/properties/${slug}/hero.jpg` : "") ||
    "/images/properties/fallback.jpg"
  );
}

function titleFromSlug(slug: string) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (m) => m.toUpperCase());
}

/** ---------- Main Page ---------- */

export default function PropertiesIndexPage() {
  const pathname = usePathname();

  // Materialize & normalize all properties
  const rawItems = useMemo(() => {
    const entries = Object.entries(propertiesBySlug as Record<string, Property>);
    return entries
      .map(([key, p]) => {
        const slug = deriveSlug(key, p);
        if (!slug) return null;
        const title = p.title || titleFromSlug(slug);
        const acresNum = toNumber(p.acres);
        const priceNum = toNumber(p.price);
        const acresText = formatAcres(p.acres);
        const priceText = formatPrice(p.price);
        const locationText = [p.county, p.state].filter(Boolean).join(", ");
        const img = pickCardImage(slug, p);
        return {
          slug,
          title,
          acresNum,
          priceNum,
          acresText,
          priceText,
          county: p.county || "",
          state: p.state || "",
          locationText,
          img,
        };
      })
      .filter(Boolean) as Array<{
      slug: string;
      title: string;
      acresNum: number | null;
      priceNum: number | null;
      acresText: string;
      priceText: string;
      county: string;
      state: string;
      locationText: string;
      img: string;
    }>;
  }, []);

  /** ---------- Filters & Sort ---------- */

  const counties = useMemo(() => {
    const set = new Set(
      rawItems
        .map((i) => i.county?.trim())
        .filter(Boolean)
        .map((c) => c!)
    );
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [rawItems]);

  const [q, setQ] = useState("");
  const [county, setCounty] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [minAcres, setMinAcres] = useState<string>("");
  const [maxAcres, setMaxAcres] = useState<string>("");
  const [sortBy, setSortBy] = useState<"newest" | "priceAsc" | "priceDesc" | "acresAsc" | "acresDesc">("newest");

  const filtered = useMemo(() => {
    let list = rawItems;

    // Search by title/location
    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(needle) ||
          i.locationText.toLowerCase().includes(needle)
      );
    }

    // County filter
    if (county !== "all") {
      list = list.filter((i) => i.county.toLowerCase() === county.toLowerCase());
    }

    // Price range
    const minP = toNumber(minPrice);
    const maxP = toNumber(maxPrice);
    if (minP != null) list = list.filter((i) => (i.priceNum ?? Infinity) >= minP);
    if (maxP != null) list = list.filter((i) => (i.priceNum ?? -Infinity) <= maxP);

    // Acres range
    const minA = toNumber(minAcres);
    const maxA = toNumber(maxAcres);
    if (minA != null) list = list.filter((i) => (i.acresNum ?? Infinity) >= minA);
    if (maxA != null) list = list.filter((i) => (i.acresNum ?? -Infinity) <= maxA);

    // Sort
    const copy = [...list];
    switch (sortBy) {
      case "priceAsc":
        copy.sort((a, b) => (a.priceNum ?? Infinity) - (b.priceNum ?? Infinity));
        break;
      case "priceDesc":
        copy.sort((a, b) => (b.priceNum ?? -Infinity) - (a.priceNum ?? -Infinity));
        break;
      case "acresAsc":
        copy.sort((a, b) => (a.acresNum ?? Infinity) - (b.acresNum ?? Infinity));
        break;
      case "acresDesc":
        copy.sort((a, b) => (b.acresNum ?? -Infinity) - (a.acresNum ?? -Infinity));
        break;
      case "newest":
      default:
        // With static data, "newest" ≈ no-op; if you later add a date field, sort here.
        break;
    }
    return copy;
  }, [rawItems, q, county, minPrice, maxPrice, minAcres, maxAcres, sortBy]);

  /** ---------- JSON-LD (Breadcrumbs + ItemList) ---------- */

  const siteUrl = "https://www.whitetaillandsolutions.com";
  const pageUrl = `${siteUrl}${pathname || "/properties"}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Properties",
        item: pageUrl,
      },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filtered.slice(0, 12).map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteUrl}/properties/${i.slug}`,
      name: i.title,
    })),
  };

  /** ---------- Render ---------- */

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">
      {/* Visible breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-zinc-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-emerald-800 underline-offset-2 hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-zinc-900 font-medium">Properties</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold tracking-tight">Available Properties</h1>
        <p className="mt-3 text-zinc-700">
          Turnkey whitetail properties engineered for giants, built for legacy.
        </p>
      </header>

      {/* Filter / Sort Bar */}
      <section className="mb-8 rounded-xl border border-zinc-200 bg-white p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Search */}
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-zinc-700">Search</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Title, county…"
              className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
            />
          </label>

          {/* County */}
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-zinc-700">County</span>
            <select
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
            >
              <option value="all">All counties</option>
              {counties.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          {/* Price range */}
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Min price</span>
              <input
                inputMode="numeric"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="$"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Max price</span>
              <input
                inputMode="numeric"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="$"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
              />
            </label>
          </div>

          {/* Acres range */}
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Min acres</span>
              <input
                inputMode="numeric"
                value={minAcres}
                onChange={(e) => setMinAcres(e.target.value)}
                placeholder="0"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-zinc-700">Max acres</span>
              <input
                inputMode="numeric"
                value={maxAcres}
                onChange={(e) => setMaxAcres(e.target.value)}
                placeholder="1000"
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
              />
            </label>
          </div>
        </div>

        {/* Sort & Reset */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label className="text-sm text-zinc-700">
            Sort by:&nbsp;
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-md border border-zinc-300 bg-white px-2 py-1 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200"
            >
              <option value="newest">Newest</option>
              <option value="priceAsc">Price: Low → High</option>
              <option value="priceDesc">Price: High → Low</option>
              <option value="acresAsc">Acres: Small → Large</option>
              <option value="acresDesc">Acres: Large → Small</option>
            </select>
          </label>
          <button
            type="button"
            onClick={() => {
              setQ("");
              setCounty("all");
              setMinPrice("");
              setMaxPrice("");
              setMinAcres("");
              setMaxAcres("");
              setSortBy("newest");
            }}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
          >
            Reset
          </button>
        </div>
      </section>

      {/* Listings / Empty State */}
      {filtered.length > 0 ? (
        <section aria-labelledby="properties-grid" className="mt-2">
          <h2 id="properties-grid" className="sr-only">
            Property Listings
          </h2>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, idx) => (
              <li key={item.slug} className="group">
                <Link
                  href={`/properties/${item.slug}`}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-xl"
                >
                  <div className="overflow-hidden rounded-xl bg-zinc-100">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.img}
                        alt={`${item.title}${
                          item.acresText ? ` — ${item.acresText}` : ""
                        }${item.locationText ? ` — ${item.locationText}` : ""}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        // Smart image loading: only first one is priority
                        priority={idx === 0}
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
                        {item.acresText && <span>{item.acresText}</span>}
                        {item.locationText && (
                          <>
                            <span aria-hidden="true">•</span>
                            <span>{item.locationText}</span>
                          </>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex items-center justify-center rounded-lg border border-emerald-900/20 bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800">
                          View details
                        </span>

                        {/* Optional: direct “I’m interested” to Contact with UTM + property */}
                        <Link
                          href={`/contact?property=${encodeURIComponent(
                            item.slug
                          )}&utm_source=site&utm_medium=properties_index_grid&utm_campaign=interested_button`}
                          className="inline-flex items-center justify-center rounded-lg border border-emerald-900/20 bg-white px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm transition hover:bg-emerald-50"
                          onClick={(e) => e.stopPropagation()}
                        >
                          I’m interested
                        </Link>
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
              href="/contact?utm_source=site&utm_medium=properties_index&utm_campaign=waitlist_cta"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800"
            >
              Join the Waitlist
            </Link>
          </div>
        </section>
      )}

      {/* Always-on Waitlist CTA (below grid) */}
      <section className="mt-14 rounded-xl border border-emerald-900/15 bg-emerald-50 p-6">
        <h2 className="text-xl font-semibold">Ready to design your big-buck paradise?</h2>
        <p className="mt-2 text-emerald-900/90">
          Turnkey properties and expert habitat consulting—engineered for giants, built for legacy.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact?utm_source=site&utm_medium=properties_index&utm_campaign=below_grid_cta"
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

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </main>
  );
}

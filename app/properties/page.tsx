// app/properties/page.tsx
import Link from "next/link";
import propertiesBySlug from "../data/properties";
import { ClientGrid } from "./ClientGrid";

type Property = {
  slug?: string;
  title?: string;
  price?: number | string;
  acres?: number | string;
  county?: string;
  state?: string;
  cardImage?: string;
  heroUrl?: string;
  heroImage?: string;
  gallery?: string[];
  path?: string;
};

export type Item = {
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
};

// ---------- FIXED: empty strings return null (no filtering) ----------
function toNumber(x: unknown): number | null {
  if (x == null) return null;
  if (typeof x === "number" && Number.isFinite(x)) return x;
  if (typeof x === "string") {
    const cleaned = x.replace(/[^0-9.]/g, "").trim();
    if (cleaned === "") return null;            // <-- key fix
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function formatPrice(price: number | string | undefined) {
  const n = toNumber(price);
  return n == null ? "" : `$${n.toLocaleString()}`;
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

export default function PropertiesIndexPage() {
  const raw = Object.entries(propertiesBySlug as Record<string, Property>);
  const items: Item[] = raw
    .map(([key, p]) => {
      const slug = deriveSlug(key, p);
      if (!slug) return null;

      const title = p.title || titleFromSlug(slug);
      const acresNum = toNumber(p.acres);
      const priceNum = toNumber(p.price);
      const acresText = formatAcres(p.acres);
      const priceText = formatPrice(p.price);
      const county = p.county || "";
      const state = p.state || "";
      const locationText = [county, state].filter(Boolean).join(", ");
      const img = pickCardImage(slug, p);

      return {
        slug,
        title,
        acresNum,
        priceNum,
        acresText,
        priceText,
        county,
        state,
        locationText,
        img,
      } as Item;
    })
    .filter(Boolean) as Item[];

  const siteUrl = "https://www.whitetaillandsolutions.com";
  const pageUrl = `${siteUrl}/properties`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Properties", item: pageUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.slice(0, 12).map((i, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${siteUrl}/properties/${i.slug}`,
      name: i.title,
    })),
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">
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

      <header className="mb-3">
        <h1 className="text-4xl font-extrabold tracking-tight">Available Properties</h1>
        <p className="mt-3 text-zinc-700">
          Turnkey whitetail properties engineered for giants, built for legacy.
        </p>
      </header>

      {/* Debug/result counter – remove anytime */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-sm text-emerald-900">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
        <span>{items.length} propert{items.length === 1 ? "y" : "ies"} found</span>
      </div>

      <ClientGrid items={items} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
    </main>
  );
}

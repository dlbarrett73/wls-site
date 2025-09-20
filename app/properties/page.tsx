// app/properties/page.tsx
import Image from "next/image";
import Link from "next/link";
import { propertiesBySlug } from "../data/properties"; // keep named import to match your detail page

type Property = {
  slug: string;
  title: string;
  price?: string | number;
  acres?: number | string;
  heroSrc?: string;
  heroImage?: string;
  gallery?: string[];
  location?: string;
  highlights?: string[];
  status?: string; // optional (Sold, Pending, etc.)
};

function formatPrice(price: string | number | undefined | null) {
  if (price == null) return "Call";
  if (typeof price === "string") return price;
  return `$${price.toLocaleString()}`;
}

function formatAcres(acres: number | string | undefined) {
  if (acres == null) return "";
  if (typeof acres === "number") return `${acres.toLocaleString()}± acres`;
  const s = String(acres).trim();
  return s.length ? s : "";
}

export const metadata = {
  title: "Properties — Whitetail Land Solutions",
  description:
    "Turnkey land engineered for mature whitetails. Explore our latest properties optimized for big-buck success.",
};

export default function PropertiesPage() {
  // Ensure we have a plain array of properties
  const items: Property[] = Object.values(propertiesBySlug as Record<string, Property>);

  return (
    <main>
      {/* Hero / Header */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
          PROPERTIES
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
          Properties Engineered for Giants. <span className="text-brand-700"><br></br>Built for Legacy.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700">
          Explore hunt-ready properties and premium acreage engineered for mature whitetails.
          Every tract is planned with access, habitat, and huntability in mind.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 p-8 text-center shadow-soft">
            <p className="text-neutral-600">No properties available right now. Check back soon.</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => {
              const href = `/properties/${p.slug}`;
              const hero = p.heroImage ?? p.heroSrc ?? "/images/properties/fallback.jpg";
              const price = formatPrice(p.price);
              const acres = formatAcres(p.acres);

              // Show a lightweight status if price is "Sold" or has an explicit p.status
              const status =
                (typeof p.price === "string" && ["sold", "pending"].includes(p.price.toLowerCase()))
                  ? p.price
                  : p.status;

              return (
                <Link
                  key={p.slug}
                  href={href}
                  className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={hero}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      priority={false}
                    />
                    {status ? (
                      <span className="absolute left-3 top-3 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {status}
                      </span>
                    ) : null}
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-bold leading-snug">
                      {p.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                      {acres ? (
                        <span className="rounded-md bg-brand-50 px-2 py-1 font-medium text-brand-800">
                          {acres}
                        </span>
                      ) : null}
                      <span className="rounded-md border border-neutral-200 px-2 py-1 font-semibold text-neutral-800">
                        {price}
                      </span>
                    </div>

                    {p.location ? (
                      <p className="mt-3 line-clamp-2 text-sm text-neutral-600">
                        {p.location}
                      </p>
                    ) : null}

                    {/* Highlights preview (first 2) */}
                    {Array.isArray(p.highlights) && p.highlights.length > 0 ? (
                      <ul className="mt-4 space-y-1 text-sm text-neutral-700">
                        {p.highlights.slice(0, 2).map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-700" />
                            <span className="line-clamp-1">{h}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <div className="mt-5">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                        View details
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a.997.997 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

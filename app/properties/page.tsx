// app/properties/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import propertiesBySlug from "../data/properties";

function formatPrice(price: number | string | undefined | null) {
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

export default function PropertiesPage() {
  const properties = Object.values(propertiesBySlug);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Available Properties
      </h1>

      {/* Property Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p: any) => {
          const hero =
            p.heroImage ?? p.heroSrc ?? "/images/properties/fallback.jpg";
          const acresText = formatAcres(p.acres);
          return (
            <Link
              key={p.slug}
              href={`/properties/${p.slug}`}
              className="group block overflow-hidden rounded-xl border border-zinc-200 bg-white shadow transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={hero}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  {p.title}
                </h2>
                <p className="text-sm text-zinc-600">
                  {acresText}
                  {acresText && " • "}
                  {formatPrice(p.price)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Waitlist Section (kept simple & self-contained) */}
      <section className="mt-16 rounded-xl bg-green-50 px-6 py-10 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-green-900">
          Don’t See What You’re Looking For?
        </h2>
        <p className="mt-3 text-zinc-700">
          Inventory moves quickly. Join our waitlist to be the first to know
          when new properties become available.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Join the Waitlist
        </Link>
      </section>
    </main>
  );
}

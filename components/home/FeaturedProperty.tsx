// components/home/FeaturedProperty.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Reuse your existing data source used by the properties pages
// (Matches the import style you used in /app/properties/page.tsx)
import { propertiesBySlug } from "@/app/data/properties";

type Props = {
  /** Override if you ever want to feature a different property */
  slug?: string;
};

export default function FeaturedProperty({ slug = "mahaffey-131" }: Props) {
  const property = propertiesBySlug[slug];

  if (!property) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 p-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Featured Property
          </h2>
          <p className="mt-3 text-slate-600">
            We couldn’t find <span className="font-semibold">"{slug}"</span> in your
            properties dataset. Double-check the slug or add it to{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5">propertiesBySlug</code>.
          </p>
        </div>
      </section>
    );
  }

  const {
    title,
    price,
    acres,
    heroImage,
    heroSrc,
    highlights = [],
    location,
  } = property as {
    title: string;
    price?: string | number;
    acres?: number | string;
    heroImage?: string;
    heroSrc?: string;
    highlights?: string[];
    location?: string;
  };

  const imgSrc = heroImage || heroSrc || "/images/property.jpg";
  const prettyPrice =
    typeof price === "number"
      ? price.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
      : price;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8 flex items-baseline justify-between gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Featured Property
          </h2>
          <Link
            href="/properties"
            className="text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            See all properties →
          </Link>
        </header>

        <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-2">
          {/* IMAGE */}
          <div className="relative h-72 w-full md:h-full">
            <Image
              src={imgSrc}
              alt={title}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-700">
                Engineered for Giants. Built for Legacy.
              </div>

              <h3 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                {title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-700">
                {location ? (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
                    📍 {location}
                  </span>
                ) : null}
                {acres ? (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
                    🗺️ {acres} acres
                  </span>
                ) : null}
                {prettyPrice ? (
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1">
                    💲 {prettyPrice}
                  </span>
                ) : null}
              </div>

              {highlights.length > 0 && (
                <ul className="mt-6 grid grid-cols-1 gap-2 text-slate-700 sm:grid-cols-2">
                  {highlights.slice(0, 6).map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/properties/${slug}`}
                className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-5 py-3 text-white shadow-sm transition hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                View Property
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

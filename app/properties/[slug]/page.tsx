// app/properties/[slug]/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { propertiesBySlug } from "../../data/properties";

type PageProps = {
  params: { slug: string };
};

function formatAcres(acres: number | string | undefined) {
  if (acres == null) return "";
  if (typeof acres === "number") return `${acres.toLocaleString()}± acres`;
  const s = String(acres).trim();
  return s.length ? s : "";
}

function formatPrice(price: unknown): string | null {
  if (price == null) return null;

  // If it’s a number, format directly
  if (typeof price === "number" && !Number.isNaN(price)) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  }

  // If it’s a string, pull out digits and format
  const raw = String(price).replace(/[^\d.]/g, "");
  if (!raw) return null;

  const asNum = Number(raw);
  if (Number.isNaN(asNum)) return null;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(asNum);
}

export default function PropertyDetailPage({ params }: PageProps) {
  const p = (propertiesBySlug as Record<string, any>)[params.slug];
  if (!p) return notFound();

  // Be liberal about accepted keys so the hero never ends up undefined
  const hero: string =
    p.heroUrl ||
    p.heroImage ||
    p.heroSrc ||
    (Array.isArray(p.gallery) && p.gallery.length > 0 ? p.gallery[0] : "") ||
    "/images/properties/fallback.jpg";

  const acresText = formatAcres(p.acres);
  const priceText = formatPrice(p.price);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full">
          {/* If hero is missing or empty, show the fallback to avoid a blank img */}
          <Image
            src={hero && typeof hero === "string" ? hero : "/images/properties/fallback.jpg"}
            alt={p.title ? `${p.title} hero` : "Property hero"}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="grid gap-8 p-6 md:grid-cols-3 md:p-8">
          {/* Summary */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {p.title ?? "Property"}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-zinc-700">
              {p.location && <span>{p.location}</span>}

              {acresText && (
                <span className="inline-flex items-center rounded-full border border-zinc-300 px-3 py-1 text-sm">
                  {acresText}
                </span>
              )}

              {priceText && (
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                  {priceText}
                </span>
              )}
            </div>

            {Array.isArray(p.highlights) && p.highlights.length > 0 && (
              <ul className="mt-6 grid list-disc gap-2 pl-5 text-zinc-800">
                {p.highlights.map((h: string, i: number) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            {p.description && (
              <p className="mt-6 text-zinc-700">{p.description}</p>
            )}

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-1">
            {p.mapEmbedUrl ? (
              <div className="overflow-hidden rounded-2xl border border-zinc-200">
                <iframe
                  src={p.mapEmbedUrl}
                  title="Property Location Map"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-300 p-6 text-center text-sm text-zinc-500">
                Map coming soon
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="mt-12 rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 text-center shadow-sm">
        <h2 className="text-2xl font-extrabold tracking-tight">
          Want details, maps, or a walkthrough?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          Tell us what you’re looking for and we’ll tailor a plan—access,
          stands, food, and improvements—to help you hunt mature bucks from day
          one.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(propertiesBySlug as Record<string, any>).map((slug) => ({
    slug,
  }));
}

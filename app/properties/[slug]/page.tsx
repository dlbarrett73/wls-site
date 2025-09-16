// app/properties/[slug]/page.tsx
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/CtaButton";
import { propertiesBySlug } from "@/app/data/properties";

// Base type inferred from your data object
type Property = (typeof propertiesBySlug)[string];

// Extend with optional keys some items may use
type WithOptionalMedia = Property & {
  heroImage?: string;
  hero?: string;
  image?: string;
  cover?: string;
  gallery?: string[];
  highlights?: string[];
  price?: string;
  location?: string;
  acres?: number | string;
  title?: string;
};

type PageProps = {
  params: { slug: string };
};

// Pre-generate static params (safe for Next 14 app dir)
export function generateStaticParams() {
  return Object.keys(propertiesBySlug).map((slug) => ({ slug }));
}

export default function PropertyPage({ params: { slug } }: PageProps) {
  const base = propertiesBySlug[slug];

  if (!base) return notFound();

  // Cast once into a shape that tolerates optional media fields
  const property = base as WithOptionalMedia;

  const {
    title = "Property",
    price,
    location,
    acres,
    highlights = [],
  } = property;

  // Resolve a hero image from any commonly used key, or from gallery[0]
  const heroSrc =
    property.heroImage ??
    property.hero ??
    property.image ??
    property.cover ??
    (property.gallery && property.gallery.length > 0 ? property.gallery[0] : undefined);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-2 text-zinc-700">
          {acres ? `${acres} acres` : null}
          {acres && (location || price) ? " • " : null}
          {location ?? null}
          {location && price ? " • " : null}
          {price ?? null}
        </p>

        <div className="mt-6">
          <CtaButton href="/contact" size="lg">
            Talk to Us About This Property
          </CtaButton>
        </div>
      </header>

      {/* Hero Image */}
      {heroSrc && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={heroSrc}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Highlights */}
      {Array.isArray(highlights) && highlights.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <li
                key={i}
                className="rounded-xl border border-zinc-200 bg-white p-4"
              >
                {h}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Gallery */}
      {Array.isArray(property.gallery) && property.gallery.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {property.gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100"
              >
                <Image
                  src={src}
                  alt={`${title} photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <div className="mt-16">
        <CtaButton href="/contact" size="lg">
          Get On the Waitlist / Ask About This Property
        </CtaButton>
      </div>
    </main>
  );
}

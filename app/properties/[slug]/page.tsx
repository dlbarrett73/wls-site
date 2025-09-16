// app/properties/[slug]/page.tsx
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaButton } from "@/components/CtaButton";
import { propertiesBySlug } from "@/app/data/properties";

// ✅ Derive the type from the data object instead of importing it
type Property = (typeof propertiesBySlug)[string];

type PageProps = {
  params: { slug: string };
};

// (Optional but nice for static builds)
export function generateStaticParams() {
  return Object.keys(propertiesBySlug).map((slug) => ({ slug }));
}

export default function PropertyPage({ params: { slug } }: PageProps) {
  const property: Property | undefined = propertiesBySlug[slug];

  if (!property) {
    return notFound();
  }

  const {
    title,
    price,
    location,
    acres,
    heroImage,
    gallery = [],
    highlights = [],
  } = property;

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
      {heroImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
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
      {gallery.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100"
              >
                <Image src={src} alt={`${title} photo ${i + 1}`} fill className="object-cover" />
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

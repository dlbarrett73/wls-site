import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaButton } from "../../components/CtaButton";
import { MapEmbed } from "../../components/MapEmbed";
import { propertiesBySlug } from "../../data/properties";

export async function generateStaticParams() {
  return Object.keys(propertiesBySlug).map((slug) => ({ slug }));
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = propertiesBySlug[params.slug];
  if (!property) return notFound();

  const {
    title,
    price,
    acres,
    location,
    heroImage,
    highlights,
    map,
    ctaHref = "/book",
    ctaLabel = "Book a Free Strategy Call",
  } = property;

  const priceText = typeof price === "number"
    ? `$${price.toLocaleString()}`
    : String(price);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
      {/* Hero */}
      <section className="relative mb-10 overflow-hidden rounded-2xl">
        <div className="relative aspect-[16/7] w-full">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Title / price / quick facts */}
      <section className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-zinc-600">{location}{acres ? ` • ${acres.toLocaleString()}± acres` : ""}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">{priceText}</div>
          <CtaButton href={ctaHref} label={ctaLabel} />
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-12 grid gap-6 rounded-2xl bg-zinc-50 p-6 sm:grid-cols-2">
        {highlights.map((h) => (
          <div key={h} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1F3D2B]" />
            <p className="text-zinc-800">{h}</p>
          </div>
        ))}
      </section>

      {/* Map + Contact CTA */}
      <section className="grid gap-8 sm:grid-cols-5">
        <div className="sm:col-span-3">
          {"lat" in map ? (
            <MapEmbed lat={map.lat} lng={map.lng} />
          ) : (
            <MapEmbed q={map.q} />
          )}
        </div>
        <div className="sm:col-span-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h2 className="text-xl font-bold">Interested in this Property?</h2>
            <p className="mt-3 text-zinc-700">
              Schedule a private tour or request more details. We’ll get back to you quickly.
            </p>
            <div className="mt-6">
              <CtaButton href={ctaHref} label={ctaLabel} className="w-full text-center" />
            </div>
            {/* Optional: drop in a contact email/phone */}
            {/* <p className="mt-4 text-sm text-zinc-500">Or email: info@whitetaillandsolutions.com</p> */}
          </div>
        </div>
      </section>
    </main>
  );
}

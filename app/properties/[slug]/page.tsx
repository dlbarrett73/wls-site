import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";
import { propertiesBySlug } from "@/app/data/properties";

type Props = {
  params: { slug: string };
};

export default function PropertyDetailPage({ params }: Props) {
  const property = propertiesBySlug[params.slug];

  if (!property) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Hero Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
        <Image
          src={property.heroUrl}
          alt={property.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title & Price */}
      <header className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight">
          {property.title}
        </h1>
        <span className="text-2xl font-bold text-brand-600">{property.price}</span>
      </header>

      {/* Highlights */}
      <ul className="mt-6 grid list-disc gap-2 pl-6 text-zinc-700">
        {property.highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>

      {/* Contact CTA */}
      <div className="mt-10">
        <CtaButton label="Inquire About This Property" href="/contact" />
      </div>
    </main>
  );
}

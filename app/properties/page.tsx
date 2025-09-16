import React from "react";
import Link from "next/link";
import Image from "next/image";
import { propertiesBySlug } from "../data/properties";

export default function PropertiesIndexPage() {
  const items = Object.values(propertiesBySlug);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
      <h1 className="text-4xl font-extrabold tracking-tight">Available Properties</h1>
      <p className="mt-3 text-zinc-700">Turnkey whitetail properties engineered for giants, built for legacy.</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/properties/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white"
          >
            <div className="relative aspect-[16/10]">
              <Image src={p.heroImage} alt={p.title} fill className="object-cover transition-transform duration-200 group-hover:scale-[1.02]" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold">{p.title}</h2>
              <p className="mt-1 text-sm text-zinc-600">
                {p.location}{p.acres ? ` • ${p.acres.toLocaleString()}± acres` : ""}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

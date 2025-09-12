import Link from "next/link";
import Image from "next/image";
import { PROPERTIES, type Property } from "../../lib/properties";

export const metadata = {
  title: "Land for Sale — Whitetail Land Solutions",
  description:
    "Turnkey, whitetail-optimized properties engineered for mature bucks. Hunt Day One.",
};

export default function PropertiesPage() {
  const hasProps = PROPERTIES.length > 0;

  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">LAND FOR SALE</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Turnkey properties engineered to hunt.
        </h1>
        <p className="mt-6 max-w-3xl text-neutral-600">
          We buy undervalued tracts, engineer them with access-first design, habitat diversity, and
          stand strategy — then offer them ready to hunt on Day One. If you don’t see the right fit,
          tell us what you want and we’ll find or build it.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">Tell us what you’re looking for</Link>
        </div>
      </section>

      {/* Listings or Empty State */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14">
          {hasProps ? (
            <>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Available Properties</h2>
              <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROPERTIES.map((p) => (
                  <PropertyCard key={p.id} p={p} />
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Want first shot at new listings?</h2>
        <p className="mt-2 text-neutral-600">Join the list and we’ll alert you before properties hit the site.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">Join Buyer List</Link>
          <Link href="/services" className="btn btn-outline">See How We Build Hunt-Ready</Link>
        </div>
      </section>
    </main>
  );
}

/* --- Components --- */

function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="card overflow-hidden bg-white">
      <div className="relative aspect-[4/3] bg-neutral-100">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${p.title} — ${p.acres} acres in ${p.county} County, ${p.state}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="w-full h-full grid place-items-center text-xs text-neutral-400">
            Add a photo at /public/props/&lt;file&gt;.jpg
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          {p.price && <div className="text-brand-700 font-semibold">{p.price}</div>}
        </div>
        <div className="mt-1 text-sm text-neutral-600">
          {p.acres} acres — {p.county} County, {p.state}
        </div>

        <ul className="mt-4 space-y-2 text-sm text-neutral-700">
          {p.highlights.slice(0, 4).map((h) => (
            <li key={h}>• {h}</li>
          ))}
        </ul>

        <div className="mt-5 flex gap-3">
          {p.slug ? (
            <Link href={`/properties/${p.slug}`} className="btn btn-primary">View Details</Link>
          ) : (
            <Link href="/contact" className="btn btn-primary">Ask About This Property</Link>
          )}
          <Link href="/contact" className="btn btn-outline">Request a Walkthrough</Link>
        </div>
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="card p-8 bg-white text-center">
      <h3 className="text-lg font-semibold">No active listings — yet.</h3>
      <p className="mt-2 text-neutral-700">
        We’re engineering the next properties now. Tell us what you’re after and we’ll
        let you know when a match is ready.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/contact" className="btn btn-primary">Describe Your Ideal Property</Link>
        <Link href="/services" className="btn btn-outline">How We Build Hunt-Ready</Link>
      </div>
    </div>
  );
}

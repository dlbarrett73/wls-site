// app/properties/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { getBySlug } from "../../../lib/properties";

// Render at request time so new slugs work without a rebuild
export const dynamic = "force-dynamic";

type PageProps = { params: { slug: string } };

export function generateMetadata({ params }: PageProps) {
  const p = getBySlug(params.slug);
  if (!p) {
    return {
      title: "Property not found — Whitetail Land Solutions",
      description: "This property is unavailable.",
    };
  }
  return {
    title: `${p.title} — ${p.acres} acres in ${p.county} Co, ${p.state} — Whitetail Land Solutions`,
    description:
      p.description ?? "Turnkey, whitetail-optimized property engineered to hunt.",
  };
}

export default function PropertyDetail({ params }: PageProps) {
  const p = getBySlug(params.slug);

  if (!p) {
    return (
      <main className="container py-16 md:py-24">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Property not found</h1>
        <p className="mt-4 text-neutral-600">This listing may have been sold or moved.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/properties" className="btn btn-outline">Back to Properties</Link>
          <Link href="/contact" className="btn btn-primary">Tell us what you’re looking for</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-sm font-semibold tracking-widest text-neutral-500">LAND FOR SALE</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{p.title}</h1>
          <p className="mt-3 text-neutral-600">
            {p.acres} acres — {p.county} County, {p.state}
            {p.price ? <span className="ml-2 font-semibold text-brand-700">• {p.price}</span> : null}
          </p>

          {p.description ? (
            <p className="mt-6 max-w-prose text-neutral-700">{p.description}</p>
          ) : null}

          <ul className="mt-6 space-y-2 text-sm text-neutral-700">
            {p.highlights?.map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>

          <div className="mt-8 flex gap-3">
            <Link href="/contact" className="btn btn-primary">Ask About This Property</Link>
            <Link href="/contact" className="btn btn-outline">Request a Walkthrough</Link>
          </div>
        </div>

        <div className="card overflow-hidden bg-white">
          <div className="relative w-full aspect-[4/3] bg-neutral-100">
            {p.image ? (
              <Image
                src={p.image}
                alt={`${p.title} — ${p.acres} acres in ${p.county} County, ${p.state}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            ) : null}
          </div>
        </div>
      </section>

      {/* Gallery + Map */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 grid lg:grid-cols-2 gap-8">
          {/* Gallery */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Gallery</h2>
            {p.gallery?.length ? (
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {p.gallery.map((src) => (
                  <div key={src} className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                    <Image src={src} alt={`${p.title} photo`} fill sizes="50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm text-neutral-600">
                Add photos to <code>/public/props</code> and list them in <code>gallery</code>.
              </p>
            )}
          </div>

          {/* Map */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Map</h2>
            {p.mapEmbedUrl ? (
              <div className="mt-4 aspect-video rounded-xl overflow-hidden border">
                <iframe
                  className="w-full h-full"
                  src={p.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            ) : (
              <p className="mt-4 text-sm text-neutral-600">
                Add a Google Maps embed URL as <code>mapEmbedUrl</code> in <code>lib/properties.ts</code>.
              </p>
            )}
          </div>
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

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

// ✅ Your folders are app/components and app/data, so use RELATIVE paths
import { propertiesBySlug, type Property } from "../../data/properties";
import CtaButton from "../../components/CtaButton";

export function generateStaticParams() {
  return Object.keys(propertiesBySlug).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const property = propertiesBySlug[params.slug];
  if (!property) return {};

  const title = `${property.title} | Whitetail Land Solutions`;
  const description = `${property.acres ? `${property.acres}± acres • ` : ""}${property.location} • Turnkey whitetail property.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://yourdomain.com/properties/${property.slug}`,
      images: property.heroImage ? [{ url: property.heroImage }] : undefined,
    },
    alternates: { canonical: `https://yourdomain.com/properties/${property.slug}` },
  };
}

function formatUSD(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function getGoogleMapSrc(map: Property["map"]) {
  if ("q" in map) return `https://www.google.com/maps?q=${encodeURIComponent(map.q)}&output=embed`;
  const { lat, lng } = map;
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=13&output=embed`;
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
    photos = [],
    ctaHref = "/book",
    ctaLabel = "Book a Free Strategy Call",
  } = property;

  const mapSrc = getGoogleMapSrc(map);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* HERO */}
      <section className="mb-10 overflow-hidden rounded-3xl shadow">
        <div className="relative h-[42vh] min-h-[320px] w-full md:h-[56vh]">
          <Image src={heroImage} alt={title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
            <p className="mt-2 text-lg opacity-90">
              <span className="font-semibold">{formatUSD(price)}</span>
              {acres ? <span> • {acres}± acres</span> : null} • {location}
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS + CTA */}
      <section className="mb-12 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">Highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl border border-neutral-200 p-5 shadow-sm">
          <CtaButton href={ctaHref} label={ctaLabel} className="w-full flex items-center justify-center" />
          <p className="mt-2 text-sm text-neutral-600">
            Prefer email? <a className="underline" href="/contact">Contact us</a>.
          </p>
        </aside>
      </section>

      {/* GALLERY */}
      {photos.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-3 text-xl font-bold">Image Gallery</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {photos.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-neutral-200">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1} for ${title}`}
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MAP */}
      <section className="mb-12">
        <h2 className="mb-3 text-xl font-bold">Location</h2>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <iframe src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[420px] w-full" />
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="mb-6 flex items-center justify-between rounded-2xl border border-neutral-200 p-5">
        <div>
          <h3 className="text-lg font-semibold">Ready to see it in person?</h3>
          <p className="text-sm text-neutral-600">
            Private tours by appointment. Turnkey properties are limited — don’t miss out.
          </p>
        </div>
        <CtaButton href={ctaHref} label={ctaLabel} className="flex items-center justify-center" />
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { propertiesBySlug, type Property } from "@/app/data/properties";

// Pre-generate static params
export function generateStaticParams() {
  return Object.keys(propertiesBySlug).map((slug) => ({ slug }));
}

// Build SEO metadata per property
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const property = propertiesBySlug[params.slug];
  if (!property) return {};

  const title = `${property.title} | Whitetail Land Solutions`;
  const description =
    property.seo?.description ??
    `${property.acres ? `${property.acres}± acres • ` : ""}${property.location} • Turnkey whitetail property.`;

  const ogImage = property.seo?.image ?? property.heroImage;

  return {
    title,
    description,
    keywords: property.seo?.keywords,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://yourdomain.com/properties/${property.slug}`,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    alternates: {
      canonical: `https://yourdomain.com/properties/${property.slug}`,
    },
  };
}

// Helpers
function formatUSD(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function getGoogleMapSrc(map: Property["map"]) {
  if ("q" in map) {
    return `https://www.google.com/maps?q=${encodeURIComponent(map.q)}&output=embed`;
  }
  const { lat, lng } = map;
  return `https://www.google.com/maps?q=${lat},${lng}&hl=en&z=13&output=embed`;
}

function YouTubeEmbed({ url }: { url: string }) {
  // Accepts full YouTube URL, extracts v param if present.
  const match = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  const id = match ? match[1] : null;
  if (!id) {
    // Fallback: raw video
    return (
      <video controls preload="metadata" className="w-full rounded-2xl shadow" src={url} />
    );
  }
  const src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="absolute left-0 top-0 h-full w-full"
        src={src}
        title="Drone flyover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
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
    photos = [],
    trailCam = [],
    droneVideoUrl,
    documents = [],
    facts = {},
  } = property;

  const mapSrc = getGoogleMapSrc(map);

  // JSON-LD (Product/Offer styled for land listing)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description:
      property.seo?.description ??
      `${acres ? `${acres} acres • ` : ""}${location} • Turnkey whitetail property.`,
    image: [heroImage, ...photos].slice(0, 10),
    brand: { "@type": "Brand", name: "Whitetail Land Solutions" },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://yourdomain.com/properties/${property.slug}`,
    },
    additionalProperty: Object.entries(facts).map(([k, v]) => ({
      "@type": "PropertyValue",
      name: k,
      value: String(v),
    })),
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="mb-10 overflow-hidden rounded-3xl shadow">
        <div className="relative h-[42vh] min-h-[320px] w-full md:h-[56vh]">
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
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

      {/* TOP ROW: Highlights + CTA + Quick Facts */}
      <section className="mb-12 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">Highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          {documents.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Downloads</h3>
              <ul className="mt-2 space-y-2">
                {documents.map((d, i) => (
                  <li key={i}>
                    <a
                      className="underline decoration-2 underline-offset-2 hover:opacity-80"
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {d.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="rounded-2xl border border-neutral-200 p-5 shadow-sm">
          <div className="space-y-3">
            <a
              href={ctaHref}
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-700"
            >
              {ctaLabel}
            </a>
            <div className="text-sm text-neutral-600">Prefer email? <a className="underline" href="/contact">Contact us</a>.</div>
          </div>

          {Object.keys(facts).length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {Object.entries(facts).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm text-neutral-500">{k}</dt>
                    <dd className="text-sm font-medium">{String(v)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </aside>
      </section>

      {/* DRONE VIDEO */}
      {droneVideoUrl && (
        <section className="mb-12">
          <h2 className="mb-3 text-xl font-bold">Drone Flyover</h2>
          <YouTubeEmbed url={droneVideoUrl} />
        </section>
      )}

      {/* IMAGE GALLERY */}
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

      {/* TRAIL CAM MEDIA */}
      {trailCam.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-3 text-xl font-bold">Trail Cam Proof</h2>
          <p className="mb-4 text-sm text-neutral-600">Biological proof of deer usage and mature buck movement.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {trailCam.map((m, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-neutral-200">
                {m.type === "image" ? (
                  <>
                    <Image
                      src={m.src}
                      alt={m.alt ?? `Trail cam ${i + 1} for ${title}`}
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover"
                    />
                    {m.caption && <div className="px-3 py-2 text-sm text-neutral-700">{m.caption}</div>}
                  </>
                ) : (
                  <>
                    <video className="h-full w-full" controls preload="metadata" src={m.src} />
                    {m.caption && <div className="px-3 py-2 text-sm text-neutral-700">{m.caption}</div>}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MAP */}
      <section className="mb-12">
        <h2 className="mb-3 text-xl font-bold">Location</h2>
        <div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <iframe
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full"
          />
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
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-700"
        >
          {ctaLabel}
        </a>
      </section>
    </main>
  );
}

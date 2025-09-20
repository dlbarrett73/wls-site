// app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/** Try to import CtaButton (works with both named and default exports).
 *  If it's missing or mismatched, we fall back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  const Btn =
    // @ts-ignore
    (Cta && (Cta.CtaButton || Cta.default)) as
      | React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>
      | undefined;

  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  // Fallback link styled like your CTA
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-soft " +
        "bg-brand-700 text-white hover:bg-brand-600 transition " +
        className
      }
    >
      {children}
    </Link>
  );
}

/** Local helper so we don't need "@/utils/formatPrice" */
function formatPrice(price: number | string | undefined | null) {
  if (price == null) return "Call";
  if (typeof price === "string") return price; // supports "Sold", "Pending", etc.
  return `$${price.toLocaleString()}`;
}

/** Featured property data (self-contained; no "@/data/properties" import) */
const FEATURED = {
  title: "Mahaffey 131",
  href: "/properties/mahaffey-131",
  image: "/images/properties/mahaffey-131/hero.jpg",
  acreage: 131,
  price: "$849,000",
  county: "Clearfield County, PA",
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative w-full h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Whitetail Land Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Properties Engineered for Giants.
              <br />
              Built for Legacy.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto">
              Turnkey whitetail hunting properties and custom habitat plans.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <CtaSafe href="/services/consulting">Consulting</CtaSafe>
              <CtaSafe href="/services/implementation">Implementation</CtaSafe>
              <CtaSafe href="/properties">Land for Sale</CtaSafe>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Property */}
      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold">Featured Property</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
          <Image
            src={FEATURED.image}
            alt={FEATURED.title}
            width={800}
            height={500}
            className="rounded-2xl shadow-soft object-cover w-full h-auto"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{FEATURED.title}</h3>
            <p className="mt-2 text-neutral-600">
              {FEATURED.acreage} acres — {FEATURED.county}
            </p>
            <p className="mt-2 text-lg font-bold">{formatPrice(FEATURED.price)}</p>
            <div className="mt-4">
              <CtaSafe href={FEATURED.href}>View Property</CtaSafe>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Embed */}
      <section className="container py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold">From Our Channel</h2>
        <div className="mt-6 aspect-video w-full rounded-2xl overflow-hidden shadow-soft">
          <iframe
            src="https://www.youtube.com/embed?listType=playlist&list=UU"
            title="Whitetail Land Solutions YouTube"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      <Script id="schema-org" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Whitetail Land Solutions",
          url: "https://www.whitetaillandsolutions.com",
          logo: "/logo-400.png",
        })}
      </Script>
    </main>
  );
}

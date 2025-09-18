import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { CtaButton } from "@/components/CtaButton";
import { formatPrice } from "@/utils/formatPrice";
import { propertiesBySlug } from "@/data/properties"; // adjust path if your file lives elsewhere

/**
 * === Featured Property Constants (edit these anytime) ===
 * If you later want to wire these to your data file, I can swap this
 * block for a typed import. For now, this guarantees a clean build.
 */
const FEATURED = {
  title: "Mahaffey — Turnkey Whitetail Tract",
  href: "/properties/mahaffey-131",
  image: "/images/properties/mahaffey-131/hero.jpg", // you provided this path
  acreage: "131± Acres", // update if you want exact, e.g., "136.38± Acres"
  county: "Clearfield County, PA", // change if needed
  price: "$499,000"
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* ========================== */}
      {/* Hero                       */}
      {/* ========================== */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: Headline & Copy */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Properties Engineered for Giants. Built for Legacy.
          </h1>

          <p className="mt-6 text-lg text-zinc-700">
            Turnkey whitetail hunting properties and expert consulting engineered to put mature bucks
            in front of you — fast. Serving Western &amp; Central Pennsylvania.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
              Book a Free Strategy Call
            </CtaButton>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400"
            >
              Find Your Property
            </Link>
          </div>

          {/* Fast facts */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Service Area</div>
              <div className="mt-1 font-semibold">
                Armstrong • Clearfield • Jefferson • Forest • Clarion • Indiana • Elk
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Core Services</div>
              <div className="mt-1 font-semibold">
                <Link href="/properties" className="hover:underline">
                  Land for Sale
                </Link>{" "}
                ·{" "}
                <Link href="/services/consulting" className="hover:underline">
                  Consulting
                </Link>{" "}
                ·{" "}
                <Link href="/services/habitat-implementation" className="hover:underline">
                  Habitat Implementation
                </Link>
              </div>
            </div>
          </div>

          {/* Lead Magnet (simple GET to /contact so it can't break) */}
          <form
            method="GET"
            action="/contact"
            className="mt-10 grid gap-3 rounded-2xl border border-zinc-200 p-4 sm:grid-cols-[1fr_1fr_auto]"
            aria-label="Get Property Alerts + Whitetail Design Checklist"
          >
            <input type="hidden" name="source" value="homepage_hero_lead" />
            <label className="sr-only" htmlFor="lead-name">
              First name
            </label>
            <input
              id="lead-name"
              name="first_name"
              placeholder="First name"
              className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-400"
              required
            />
            <label className="sr-only" htmlFor="lead-email">
              Email
            </label>
            <input
              id="lead-email"
              type="email"
              name="email"
              placeholder="Email"
              className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-400"
              required
            />
            <button
              type="submit"
              className="h-11 rounded-xl bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Get Alerts + Checklist
            </button>
            <p className="col-span-full text-xs text-zinc-500">
              Get property alerts and our Whitetail Design Checklist (PDF). Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* Right: Hero Image (fill container, bias crop upward) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-zinc-200">
          {/* Ensure this exists in /public/images/hero.jpg */}
          <Image
            src="/images/hero.jpg"
            alt="Engineered whitetail habitat with screened plot, access, and stand strategy"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover object-[50%_20%]"
            priority
          />
        </div>
      </section>

      {/* ========================== */}
      {/* Two Paths (Clear Offers)   */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Choose Your Path</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Whether you want a turnkey hunting property or you want to transform your current land into a big-buck
          paradise, we have a proven system to get you there.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Path 1 */}
          <article className="group flex flex-col justify-between rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <div>
              <h3 className="text-xl font-semibold">Buy a Turnkey Property</h3>
              <ul className="mt-2 grid gap-1 text-sm text-zinc-700">
                <li>• Year-one huntability (plots, screens, access, stands)</li>
                <li>• Undetectable entry & exit to reduce pressure</li>
                <li>• Strategy built for mature buck encounters</li>
              </ul>
            </div>
            <div className="mt-6">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
              >
                Browse Available Properties →
              </Link>
            </div>
          </article>

          {/* Path 2 */}
          <article className="group flex flex-col justify-between rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <div>
              <h3 className="text-xl font-semibold">Transform My Property</h3>
              <ul className="mt-2 grid gap-1 text-sm text-zinc-700">
                <li>• Blueprint for Giants: custom design map & plan</li>
                <li>• Access, bedding, food, and stand placement by wind</li>
                <li>• We can implement the plan for you end-to-end</li>
              </ul>
            </div>
            <div className="mt-6">
              <Link
                href="/services/consulting"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
              >
                Learn About Consulting →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ========================== */}
      {/* Biological Proof (Gallery) */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Biological Proof</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Mature deer respond to great design. These snapshots show calm, daylight deer using engineered access,
          screened plots, and wind-safe stand locations.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/images/proof-1.jpg",
              alt: "Daylight mature buck using screened food plot with undetectable entry",
              label: "Screened Plot → Daylight Feeding",
            },
            {
              src: "/images/proof-2.jpg",
              alt: "Access trail hugging terrain for low-impact entry/exit",
              label: "Undetectable Access → Low Pressure",
            },
            {
              src: "/images/proof-3.jpg",
              alt: "Stand and blind placements set by wind & season",
              label: "Wind-Based Stands → Predictability",
            },
          ].map((img) => (
            <figure
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-black/50 px-3 py-2 text-xs font-medium text-white">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* Featured Property          */}
      {/* ========================== */}
      <section className="mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Property</h2>
          <Link
            href="/properties"
            className="text-sm font-semibold text-brand-700 hover:underline underline-offset-4"
          >
            See All Properties →
          </Link>
        </div>

        <article className="mt-6 grid gap-6 overflow-hidden rounded-2xl border border-zinc-200 p-4 sm:grid-cols-2">
          <Link href={FEATURED.href} className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src={FEATURED.image}
              alt={`${FEATURED.title} — ${FEATURED.acreage}, ${FEATURED.county}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </Link>
          <div className="flex flex-col justify-between p-2">
            <div>
              <h3 className="text-xl font-semibold">{FEATURED.title}</h3>
              <div className="mt-1 text-sm text-zinc-600">
                {FEATURED.acreage} • {FEATURED.county}
              </div>
              <div className="mt-1 text-base font-semibold text-zinc-900">{FEATURED.price}</div>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-800">
                <li>• Undetectable access for calm daylight movement</li>
                <li>• Year-one huntability—plots, screens, stands in place</li>
                <li>• Wind-based stand/blind strategy to reduce pressure</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
                Inquire About This Property
              </CtaButton>
              <Link
                href={FEATURED.href}
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400"
              >
                View Details
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* ========================== */}
      {/* Values / Story             */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Engineered for Giants. Built for Legacy.
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          We combine whitetail biology, habitat design, and forestry to engineer properties that consistently
          attract and hold mature deer. Our work is guided by Integrity, Stewardship, Service, and the Golden Rule —
          so you can create a legacy of memories with family and friends on land you’re proud to own.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Integrity", desc: "Do the right thing, every time." },
            { title: "Stewardship", desc: "Improve the land for deer and people." },
            { title: "Service", desc: "Treat clients like family — Golden Rule." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-zinc-200 p-4">
              <div className="text-sm uppercase tracking-widest text-zinc-500">{v.title}</div>
              <div className="mt-1 text-sm text-zinc-700">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* FAQ (SEO-friendly)         */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-3">
          {[
            {
              q: "What is a turnkey whitetail property?",
              a: "Land with access, habitat, food, and stand strategy ready to hunt on day one — engineered to create safe, predictable, daylight movement.",
            },
            {
              q: "How fast can I hunt a new property?",
              a: "Immediately. Our goal is year-one huntability with undetectable access, screened plots, and wind-based stand locations.",
            },
            {
              q: "Do you consult outside Pennsylvania?",
              a: "Our primary service area is PA and nearby states. If you’re outside the area, contact us — we evaluate on a case-by-case basis.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-zinc-200 p-4 open:shadow-sm transition"
            >
              <summary className="cursor-pointer text-sm font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-zinc-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* Final CTA + Email Capture  */}
      {/* ========================== */}
      <section className="mt-20 rounded-2xl border border-zinc-200 p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to Secure Your Hunting Legacy?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          Inventory is limited. Book a free strategy call or join the waitlist — we’ll help you
          find or build a property engineered to put mature bucks in front of you.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
            Book a Free Strategy Call
          </CtaButton>
        </div>

        {/* Smaller email capture near footer */}
        <form
          method="GET"
          action="/contact"
          className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-[1fr_auto]"
          aria-label="Get Property Alerts"
        >
          <input type="hidden" name="source" value="homepage_footer_lead" />
          <label className="sr-only" htmlFor="lead-email-footer">
            Email
          </label>
          <input
            id="lead-email-footer"
            type="email"
            name="email"
            placeholder="Email for Property Alerts"
            className="h-11 rounded-xl border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-400"
            required
          />
          <button
            type="submit"
            className="h-11 rounded-xl bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Get Alerts
          </button>
        </form>
      </section>

      {/* ========================== */}
      {/* JSON-LD (Organization + Service) */}
      {/* ========================== */}
      <Script id="ld-org" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Whitetail Land Solutions",
          url: "https://www.whitetaillandsolutions.com/",
          logo: "https://www.whitetaillandsolutions.com/logo-400.png",
          sameAs: [],
          areaServed: "US-PA",
        })}
      </Script>
      <Script id="ld-service-consulting" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Whitetail Property Consulting",
          provider: { "@type": "Organization", name: "Whitetail Land Solutions" },
          areaServed: "US-PA",
          serviceType: "Habitat design and hunting access strategy",
          url: "https://www.whitetaillandsolutions.com/services/consulting",
        })}
      </Script>
    </main>
  );
}

// app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Try to import CtaButton (works with both named and default exports).
 *  If it's missing or mismatched, we fall back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  // Support both: export function CtaButton() {}  OR  export default function CtaButton() {}
  // If neither is present, render a Link with the same styling.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Comp = (Cta as any).CtaButton ?? (Cta as any).default;
  if (!Comp) {
    return (
      <Link
        href={href}
        className={
          "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white transition bg-brand-700 hover:bg-brand-800 " +
          className
        }
      >
        {children}
      </Link>
    );
  }
  return (
    <Comp href={href} className={className}>
      {children}
    </Comp>
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
  county: "Clearfield County, PA",
  price: 500000,
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* ========================== */}
      {/* Hero                       */}
      {/* ========================== */}
      <section className="relative rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50/80 via-white to-white p-6 md:p-10 overflow-hidden">
        {/* subtle decorative gradient ring */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-brand-200/50 to-brand-400/20 blur-2xl" />
        <div className="grid items-center gap-10 md:grid-cols-2 relative">
          {/* Left: Headline & Copy */}
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-widest text-brand-800">
              ENGINEERED FOR GIANTS
            </span>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl text-brand-900">
              Properties Engineered for Giants. Built for Legacy.
            </h1>

            <p className="mt-6 text-lg text-zinc-700">
              Turnkey whitetail hunting properties and expert consulting engineered to put mature bucks
              in front of you — fast. Serving Western &amp; Central Pennsylvania.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaSafe href="/contact" className="bg-brand-700 hover:bg-brand-800 shadow-soft">
                Book a Free Strategy Call
              </CtaSafe>

              {/* Secondary button uses consistent border + hover treatment */}
              <Link
                href="/properties"
                className="inline-flex items-center justify-center rounded-full border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
              >
                Find Your Property
              </Link>
            </div>

            {/* Fast facts */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-100 bg-white/70 p-4">
                <div className="text-xs uppercase tracking-widest text-brand-700">Service Area</div>
                <div className="mt-1 font-semibold text-zinc-900">
                  Western and Central Pennsylvania plus neighboring areas
                </div>
              </div>
              <div className="rounded-2xl border border-brand-100 bg-white/70 p-4">
                <div className="text-xs uppercase tracking-widest text-brand-700">Core Services</div>
                <div className="mt-1 font-semibold text-zinc-900">
                  <Link href="/properties" className="text-brand-800 hover:underline">
                    Land for Sale
                  </Link>{" "}
                  ·{" "}
                  <Link href="/services/consulting" className="text-brand-800 hover:underline">
                    Consulting
                  </Link>{" "}
                  ·{" "}
                  <Link href="/services/habitat-implementation" className="text-brand-800 hover:underline">
                    Habitat Implementation
                  </Link>
                </div>
              </div>
            </div>

            {/* Lead Magnet (simple GET to /contact so it can't break) */}
            <form
              method="GET"
              action="/contact"
              className="mt-10 grid gap-3 rounded-2xl border border-brand-200 bg-white/80 p-4 shadow-soft sm:grid-cols-[1fr_1fr_auto]"
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
                className="h-11 rounded-xl border border-brand-300 px-3 text-sm outline-none focus:border-brand-500"
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
                className="h-11 rounded-xl border border-brand-300 px-3 text-sm outline-none focus:border-brand-500"
                required
              />
              <button
                type="submit"
                className="h-11 rounded-xl bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Get Alerts + Checklist
              </button>
              <p className="col-span-full text-xs text-zinc-600">
                Get property alerts and our Whitetail Design Checklist (PDF). Unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Right: Hero Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-brand-200 bg-brand-50 shadow-soft">
            <Image
              src="/images/hero.jpg"
              alt="Kent Shick with a trophy buck"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              className="object-cover object-[50%_20%]"
              priority
            />
            {/* subtle gradient overlay for polish */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto mt-16 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

      {/* ========================== */}
      {/* Choose Your Path           */}
      {/* ========================== */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-brand-900">Choose Your Path</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Whether you want a turnkey hunting property or you want to transform your current land into a big-buck
          paradise, we have a proven system to get you there.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Path 1 */}
          <article className="group flex flex-col justify-between rounded-2xl border border-brand-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <h3 className="text-xl font-semibold text-brand-900">Buy a Turnkey Property</h3>
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
          <article className="group flex flex-col justify-between rounded-2xl border border-brand-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <h3 className="text-xl font-semibold text-brand-900">Transform My Property</h3>
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
      <section className="mt-20 rounded-3xl border border-brand-100 bg-brand-50/50 p-6 md:p-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-brand-900">Biological Proof</h2>
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
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-brand-200 bg-white shadow-soft"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                loading="lazy" // performance-friendly: gallery images lazy-load
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-3 py-2 text-xs font-medium text-white">
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
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-brand-900">Featured Property</h2>
          <Link
            href="/properties"
            className="text-sm font-semibold text-brand-700 hover:underline underline-offset-4"
          >
            See All Properties →
          </Link>
        </div>

        <article className="mt-6 grid gap-6 overflow-hidden rounded-2xl border border-brand-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-2">
          <Link href={FEATURED.href} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brand-50">
            <Image
              src={FEATURED.image}
              alt={`${FEATURED.title} — ${FEATURED.acreage}± Acres, ${FEATURED.county}`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </Link>
          <div className="flex flex-col justify-between p-2">
            <div>
              <h3 className="text-xl font-semibold text-brand-900">{FEATURED.title}</h3>
              <div className="mt-1 text-sm text-zinc-600">
                {FEATURED.acreage}± Acres • {FEATURED.county}
              </div>
              <div className="mt-1 text-base font-semibold text-brand-900">
                {formatPrice(FEATURED.price)}
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-800">
                <li>• Undetectable access for calm daylight movement</li>
                <li>• Year-one huntability—plots, screens, stands in place</li>
                <li>• Wind-based stand/blind strategy to reduce pressure</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaSafe href="/contact" className="bg-brand-700 hover:bg-brand-800 shadow-soft">
                Inquire About This Property
              </CtaSafe>
              {/* Secondary button uses consistent border + hover treatment */}
              <Link
                href={FEATURED.href}
                className="inline-flex items-center justify-center rounded-full border border-brand-300 px-5 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
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
      <section className="mt-20 rounded-3xl border border-brand-100 bg-gradient-to-br from-white via-brand-50/60 to-white p-6 md:p-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-brand-900">
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
            <div key={v.title} className="rounded-2xl border border-brand-200 bg-white p-4 shadow-soft">
              <div className="text-sm uppercase tracking-widest text-brand-700">{v.title}</div>
              <div className="mt-1 text-sm text-zinc-700">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* FAQ (SEO-friendly)         */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-brand-900">Frequently Asked Questions</h2>
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
              className="rounded-2xl border border-brand-200 bg-white p-4 open:shadow-sm transition"
            >
              <summary className="cursor-pointer text-sm font-semibold text-brand-900">{item.q}</summary>
              <p className="mt-2 text-sm text-zinc-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* Final CTA + Email Capture  */}
      {/* ========================== */}
      <section className="mt-20 rounded-3xl border border-brand-100 bg-brand-50/60 p-8 text-center shadow-soft">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-brand-900">
          Ready to Secure Your Hunting Legacy?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          Inventory is limited. Book a free strategy call or join the waitlist — we’ll help you
          find or build a property engineered to put mature bucks in front of you.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <CtaSafe href="/contact" className="bg-brand-700 hover:bg-brand-800 shadow-soft">
            Book a Free Strategy Call
          </CtaSafe>
        </div>

        {/* Smaller email capture near footer */}
        <form
          method="GET"
          action="/contact"
          className="mx-auto mt-8 grid max-w-2xl gap-3 rounded-2xl border border-brand-200 bg-white p-4 shadow-soft sm:grid-cols-[1fr_auto]"
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
            className="h-11 rounded-xl border border-brand-300 px-3 text-sm outline-none focus:border-brand-500"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Whitetail Land Solutions",
            url: "https://www.whitetaillandsolutions.com/",
            logo: "https://www.whitetaillandsolutions.com/logo-400.png",
            sameAs: [],
            areaServed: "US-PA",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Whitetail Property Consulting",
            provider: { "@type": "Organization", name: "Whitetail Land Solutions" },
            areaServed: "US-PA",
            serviceType: "Habitat design and hunting access strategy",
            url: "https://www.whitetaillandsolutions.com/services/consulting",
          }),
        }}
      />
    </main>
  );
}

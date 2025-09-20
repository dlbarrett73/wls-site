// app/about/page.tsx
import React from "react";
import Link from "next/link";

/** Try to import CtaButton (works with both named and default exports).
 *  If it's missing or mismatched, we fall back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  const Btn = (Cta as any).CtaButton || (Cta as any).default;
  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-soft transition hover:opacity-90 bg-brand-700 text-white ${className}`}
    >
      {children}
    </Link>
  );
}

export const metadata = {
  title: "About — Whitetail Land Solutions",
  description:
    "Engineered for Giants. Built for Legacy. Learn who we are, why we exist, and how we design hunt-ready properties and custom habitat plans in Pennsylvania.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      {/* Hero (brand gradient; white text for contrast) */}
      <section className="relative -mx-6 mb-16 rounded-3xl bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold tracking-widest/loose text-white/80">
            ABOUT US
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Engineered for Giants. Built for Legacy.
          </h1>
          <p className="mt-4 text-lg/8 text-white/90">
            We design and build hunt-ready properties for serious whitetail
            hunters in Pennsylvania. Our work blends whitetail biology, forestry,
            and access engineering so you can consistently encounter mature
            bucks—and create a legacy your family will talk about for decades.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/40 text-white hover:bg-white/10"
            >
              Explore our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="mx-auto mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Our Purpose</h2>
          <p className="mt-3 text-zinc-700">
            Help whitetail hunters secure their legacy with properties optimized
            for consistent encounters with big, mature bucks—without wasting
            seasons on guesswork. We combine data-driven design with practical,
            field-tested implementation so every move on your property makes you
            less detectable and more effective.
          </p>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-6">
          <h3 className="text-lg font-semibold">What this means for you</h3>
          <ul className="mt-3 space-y-2 text-zinc-700">
            <li>• Clear, actionable plans you can actually build.</li>
            <li>• Undetectable access that protects daylight movement.</li>
            <li>• Habitat that matures with your woods and your goals.</li>
            <li>• A property you’re proud to hand down.</li>
          </ul>
        </div>
      </section>

      {/* What we do (tie to Services decision logic) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight">What We Do</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          We offer two core service paths, so you can choose how you want to
          build your big-buck paradise—DIY or DFY.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Consulting (DIY) */}
          <div className="rounded-2xl border border-zinc-200 p-6 shadow-soft">
            <p className="text-sm font-semibold tracking-widest text-brand-700">
              CONSULTING + DIY
            </p>
            <h3 className="mt-2 text-xl font-bold">Blueprint for Giants</h3>
            <p className="mt-2 text-zinc-700">
              A custom, property-specific plan: stand/Blind locations, access,
              food/cover/water strategy, timber &amp; edge work, and seasonal
              hunt routes—all centered on <span className="font-semibold">undetectable access</span> and mature buck behavior.
            </p>
            <div className="mt-4 flex gap-3">
              <CtaSafe href="/services/consulting">Learn More</CtaSafe>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-zinc-300 text-zinc-900 hover:bg-zinc-50"
              >
                Free Strategy Call
              </Link>
            </div>
          </div>

          {/* Implementation (DFY) */}
          <div className="rounded-2xl border border-zinc-200 p-6 shadow-soft">
            <p className="text-sm font-semibold tracking-widest text-brand-700">
              CONSULTING + DFY
            </p>
            <h3 className="mt-2 text-xl font-bold">Habitat Implementation</h3>
            <p className="mt-2 text-zinc-700">
              Prefer a turnkey build? We manage the heavy lifting—road &amp; trail
              access, TSI, plots, screens, watering, stand installs—so your plan
              gets installed the right way, the first time.
            </p>
            <div className="mt-4 flex gap-3">
              <CtaSafe href="/services/implementation">Learn More</CtaSafe>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-zinc-300 text-zinc-900 hover:bg-zinc-50"
              >
                Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Approach pillars (brand block w/ white headings) */}
      <section className="mb-16 rounded-3xl bg-brand-700 p-6 text-white md:p-10">
        <h2 className="text-2xl font-bold tracking-tight">Our Approach</h2>
        <p className="mt-3 max-w-3xl text-white/90">
          Everything we design ladders up to one goal: repeatable, high-odds
          encounters with mature whitetails—without burning the property.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Undetectable Access</h3>
            <p className="mt-2 text-white/90">
              Routes, winds, screens, and entry timing that keep you invisible,
              silent, and scent-controlled. If access is wrong, nothing else
              matters.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Biology-Led Design</h3>
            <p className="mt-2 text-white/90">
              Bedding, security cover, and daylight edge structure aligned with
              how mature bucks actually use terrain across seasons.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Forestry Integration</h3>
            <p className="mt-2 text-white/90">
              Timber work and habitat cuts that compound benefit: light, food,
              cover, access corridors, and long-term stand health.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Build-Ready Plans</h3>
            <p className="mt-2 text-white/90">
              Clear maps and step-by-step priorities so you or our crew can
              install confidently without rework.
            </p>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight">Who We Are</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 p-6 shadow-soft">
            <h3 className="text-lg font-semibold">Kent Shick — Habitat & Forestry</h3>
            <p className="mt-2 text-zinc-700">
              Professional consulting forester and habitat designer with
              hands-on experience building high-odds properties across PA.
              Educated in wildlife &amp; habitat at Penn State and mentored by the
              woods. Kent leads field design and implementation.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 p-6 shadow-soft">
            <h3 className="text-lg font-semibold">David Barrett — Strategy & Growth</h3>
            <p className="mt-2 text-zinc-700">
              Business and marketing operator focused on clarity, systems, and
              client results. David leads marketing, finance, and partnerships so
              the vision and execution stay aligned with your outcomes.
            </p>
          </article>
        </div>
      </section>

      {/* Credibility / Standards */}
      <section className="mb-16 rounded-2xl bg-zinc-50 p-6">
        <h2 className="text-2xl font-bold tracking-tight">Standards That Don’t Bend</h2>
        <ul className="mt-4 grid gap-3 text-zinc-700 md:grid-cols-2">
          <li>• Access first: every plan is tested against wind &amp; intrusion.</li>
          <li>• Seasonal routes that protect core areas and daylight use.</li>
          <li>• Forestry that improves both habitat and long-term value.</li>
          <li>• Clear phasing: do the right work in the right order.</li>
          <li>• Stewardship: design decisions that honor the land and legacy.</li>
        </ul>
      </section>

      {/* Final CTA (brand block w/ white text) */}
      <section className="rounded-3xl bg-brand-700 p-6 text-white md:p-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to engineer your property for giants?
          </h2>
          <p className="mt-3 text-white/90">
            Start with a quick, no-pressure call. We’ll ask about your acreage,
            goals, and timeline, then recommend the best path—Consulting + DIY or
            Consulting + DFY.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/40 text-white hover:bg-white/10"
            >
              Compare Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

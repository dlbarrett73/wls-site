// app/about/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** ---- LOCAL TILE IMAGES (prevents ReferenceError) ---- */
const TILE_IMAGES = {
  properties: "/images/property.jpg",
  consulting: "/images/consulting.png",
  implementation: "/images/implementation.jpg",
};

/** Safe CTA import (works if CtaButton is default or named export) */
import * as Cta from "../../components/CtaButton";
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
      {/* ================= HERO (Full-Width) ================= */}
      <section className="relative mb-16 overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)]">
        <div className="relative h-[85vh] min-h-[500px] w-full">
          <Image
            src="/images/about.jpg"
            alt="About Whitetail Land Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
          {/* Contrast overlays for text legibility on any screen */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="pointer-events-auto mx-auto w-full max-w-6xl px-6 pb-10">
            <p className="text-sm font-semibold tracking-widest text-white/80">ABOUT US</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Engineered for Giants.<br className="hidden sm:block" /> Built for Legacy.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90">
              We design and build hunt-ready properties for serious whitetail hunters in Pennsylvania.
              By blending whitetail biology, forestry, and <span className="font-semibold">undetectable access</span>,
              we create consistent, high-odds encounters with mature bucks—without burning your property.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/40 text-white hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STATS (quick credibility) ================= */}
      <section className="mx-auto mb-16">
        <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 md:grid-cols-3">
          <Stat label="Engineered Acres" value="130+" note="Designed & improved across PA" />
          <Stat label="Years in the Woods" value="20+" note="Forestry + habitat + whitetail strategy" />
          <Stat label="Core Focus" value="Mature Bucks" note="High-odds access, edge, and daylight use" />
        </div>
      </section>

      {/* ================= PURPOSE & PROMISE ================= */}
      <section className="mx-auto mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Our Purpose</h2>
          <p className="mt-3 text-zinc-700">
            Help whitetail hunters secure their legacy with properties optimized
            for consistent, daylight encounters with big, mature bucks—without
            wasting seasons on guesswork. Every design decision protects
            movement, maximizes opportunity, and respects the land.
          </p>
          <div className="mt-6 rounded-2xl bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold">Our Promise</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>• A clear, phased build plan you can actually execute.</li>
              <li>• <span className="font-semibold">Undetectable access</span> as a first-principle.</li>
              <li>• Biology-led design that matches how mature bucks move.</li>
              <li>• Forestry that improves habitat <em>and</em> property value.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-brand-700 p-6 text-white md:p-8">
          <h3 className="text-lg font-semibold">Core Values</h3>
          <ul className="mt-3 space-y-2 text-white/90">
            <li>• Stewardship: Honor the land and wildlife.</li>
            <li>• Integrity: Say it straight, build it right.</li>
            <li>• Craft: Details that compound over seasons.</li>
            <li>• Legacy: Properties worthy of your family name.</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-white/80">Where we work</p>
              <p className="text-base font-semibold">Pennsylvania</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-white/80">How we help</p>
              <p className="text-base font-semibold">Consult • Build • Sell</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPROACH (kept, tightened copy) ================= */}
      <section className="mb-16 rounded-3xl bg-brand-700 p-6 text-white md:p-10">
        <h2 className="text-2xl font-bold tracking-tight">Our Approach</h2>
        <p className="mt-3 max-w-3xl text-white/90">
          Everything ladders up to repeatable, high-odds encounters with mature
          whitetails—without burning the property.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Undetectable Access</h3>
            <p className="mt-2 text-white/90">
              Routes, winds, screens, and timing that keep you invisible, silent,
              and scent-controlled. If access is wrong, nothing else matters.
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
              Timber work that compounds benefit: light, food, cover, corridors,
              and long-term stand health.
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

      {/* ================= TEAM (UNCHANGED per your request) ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight">Who We Are</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* David */}
          <article className="overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/team-david.jpg"
                alt="David Barrett — Strategy & Growth"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">David Barrett — Strategy &amp; Growth</h3>
              <p className="mt-2 text-zinc-700">
                Business and marketing operator focused on clarity, systems, and
                client results. David leads marketing, finance, and partnerships
                so the vision and execution stay aligned with your outcomes.
              </p>
            </div>
          </article>

          {/* Kent */}
          <article className="overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/team-kent.jpg"
                alt="Kent Shick — Habitat & Forestry"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Kent Shick — Habitat &amp; Forestry</h3>
              <p className="mt-2 text-zinc-700">
                Professional consulting forester and habitat designer with
                hands-on experience building high-odds properties across PA.
                Educated in wildlife &amp; habitat at Penn State and mentored by the
                woods. Kent leads field design and implementation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= STANDARDS ================= */}
      <section className="mb-16 rounded-2xl bg-zinc-50 p-6">
        <h2 className="text-2xl font-bold tracking-tight">Standards That Don’t Bend</h2>
        <ul className="mt-4 grid gap-3 text-zinc-700 md:grid-cols-2">
          <li>• Access first: every plan is tested against wind &amp; intrusion.</li>
          <li>• Seasonal routes that protect core areas and daylight use.</li>
          <li>• Forestry that improves both habitat and long-term value.</li>
          <li>• Clear phasing: do the right work in the right order.</li>
          <li>• Stewardship: designs that honor the land and your legacy.</li>
        </ul>
      </section>

      {/* ================= VISION & MISSION (adds EOS clarity) ================= */}
      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">Vision</h2>
          <p className="mt-3 text-zinc-700">
            Be Pennsylvania’s leader in turnkey, hunt-ready properties engineered
            for mature whitetails—and the trusted partner for landowners who want
            a property worthy of being passed down.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">Mission</h2>
          <p className="mt-3 text-zinc-700">
            Design and build habitat that creates consistent, daylight encounters
            with mature bucks by integrating undetectable access, biology-led
            structure, and value-adding forestry.
          </p>
        </div>
      </section>

      {/* ================= CHOOSE YOUR PATH (unchanged content, improved contrast) ================= */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Choose Your Path</h2>
        <p className="mt-2 text-zinc-700">
          Whether you’re buying land, optimizing your property, or wanting us to
          build it for you—we’ll meet you where you are.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Land for Sale",
              href: "/properties",
              img: TILE_IMAGES.properties,
              badge: "Turnkey",
              desc: "Hunt-ready properties engineered for mature bucks—access, food/cover, and stand placements built in.",
            },
            {
              title: "Consulting",
              href: "/services/consulting",
              img: TILE_IMAGES.consulting,
              badge: "Blueprint",
              desc: "Custom habitat design maps & action plan to transform your acreage into a big-buck paradise.",
            },
            {
              title: "Habitat Implementation",
              href: "/services/implementation",
              img: TILE_IMAGES.implementation,
              badge: "Done-For-You",
              desc: "We build the plan: trails, plots, screening, stand/blind installs, and access—start hunting sooner.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`${item.title} — Learn more`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
              <div className="relative p-6 text-white">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-white/90">{item.desc}</p>
                <span className="mt-4 inline-flex items-center">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-16 rounded-3xl bg-gradient-to-br from-zinc-50 to-white p-8 ring-1 ring-zinc-200">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Ready to engineer a property worthy of your family name?
            </h2>
            <p className="mt-3 text-zinc-700">
              Start with a short strategy call. We’ll map your goals, evaluate constraints,
              and recommend the fastest path to high-odds encounters—DIY or done-for-you.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <CtaSafe href="/contact" className="min-w-[200px]">Book a Free Strategy Call</CtaSafe>
            <Link
              href="/services"
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl px-5 py-3 font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-100"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/** =============== Local UI Bits =============== */
function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <p className="text-sm tracking-wide text-zinc-600">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900">{value}</p>
      {note ? <p className="mt-1 text-sm text-zinc-600">{note}</p> : null}
    </div>
  );
}

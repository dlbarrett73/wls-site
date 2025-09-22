// app/services/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Safe CTA import helper (works whether CtaButton is a default or named export).
 * If the component isn't found, it falls back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  // @ts-ignore
  const Btn =
    (Cta && (Cta.CtaButton || Cta.default)) as
      | React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>
      | undefined;

  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-md transition
                  bg-emerald-700 text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 ${className}`}
    >
      {children}
    </Link>
  );
}

// Hard-hint SSG and allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = {
  title:
    "Services — Consulting (DIY/DFY) & Habitat Implementation | Whitetail Land Solutions",
  description:
    "Two clear paths: Consulting (DIY/DFY ‘Blueprint for Giants’) and Habitat Implementation. We design and build hunt-ready properties engineered for mature whitetails.",
};

export default function Services() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO (Full-Width) ================= */}
      <section className="relative w-full h-[72vh] sm:h-screen">
        {/* Full-bleed image */}
        <Image
          src="/images/consulting.jpg" // ← ensure this exists; change if your file is .png
          alt="Custom whitetail habitat design and implementation in Pennsylvania"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/20" />

        {/* Hero copy */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-md">
              Consulting & Habitat Implementation
            </h1>
            <p className="mt-4 max-w-3xl text-white/90 text-lg sm:text-xl">
              Get a proven blueprint to engineer your property for mature whitetails—or have our team build it for you.
              Already have a plan? We can execute it with precision.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <CtaSafe href="/contact">Book a Free Strategy Call →</CtaSafe>
              <Link
                href="/services/consulting"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition
                           bg-white/15 text-white ring-1 ring-white/30 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                Explore Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TWO PATHS ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Two Ways We Help
          </h2>
          <p className="mt-2 text-slate-600">
            Choose the best fit for where you are today.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Consulting Card */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold">
                DIY or DFY Consulting — <span className="italic">Blueprint for Giants</span>
              </h3>
              <p className="mt-2 text-slate-700">
                Custom design maps and a step-by-step plan—access, bedding, food, setups, and pressure control—so you
                can implement yourself or have us do it for you.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Custom maps & priority actions</li>
                <li>• Seasonal timeline & how-to guide</li>
                <li>• Option to have our team build it (DFY)</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/services/consulting"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold
                             bg-emerald-700 text-white hover:bg-emerald-800"
                >
                  Learn About Consulting
                </Link>
              </div>
            </div>
          </div>

          {/* Implementation Card */}
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold">Done-For-You Habitat Implementation</h3>
              <p className="mt-2 text-slate-700">
                We build the plan—roads, plots, screening, stand/blind installs, and access—so your property hunts
                sooner and smarter.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Build from our blueprint or your plan</li>
                <li>• Food plots, trails/roads, screening & TSI</li>
                <li>• Stand/blind placement & access optimization</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/services/implementation"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-2 font-semibold
                             bg-emerald-700 text-white hover:bg-emerald-800"
                >
                  See Implementation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROVEN PROCESS ================= */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Proven Process</h2>
            <p className="mt-2 text-slate-600">
              Clarity first, then confident execution—so you can hunt giants on purpose.
            </p>
          </header>

          <ol className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {[
              { step: "1", title: "Intake", desc: "Goals, constraints, property context" },
              { step: "2", title: "Site Visit", desc: "Boots on ground, pressure & movement study" },
              { step: "3", title: "Design Map", desc: "Access, bedding, food, setups, sequencing" },
              { step: "4", title: "Action Plan", desc: "Seasonal tasks, priority order, how-to" },
              { step: "5", title: "Build", desc: "DFY implementation or coach-supported DIY" },
            ].map(({ step, title, desc }) => (
              <li key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-bold text-emerald-700">Step {step}</div>
                <div className="mt-1 text-lg font-semibold">{title}</div>
                <div className="mt-1 text-slate-700">{desc}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= PRICING ANCHOR ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Transparent Pricing</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold">Blueprint for Giants — Consulting</h3>
              <p className="mt-1 text-slate-700">Plans from <span className="font-semibold">$7,500</span>.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Done-For-You Habitat Implementation</h3>
              <p className="mt-1 text-slate-700">
                Typical projects <span className="font-semibold">$20K–$30K+</span>, scope-dependent (acreage, roads, plots, TSI, access work).
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Why the range? Terrain, access, timber work, food plot acreage, materials, and equipment time vary by property.
            We’ll scope the work precisely after your design.
          </p>
          <div className="mt-6">
            <CtaSafe href="/contact">Book a Free Strategy Call →</CtaSafe>
          </div>
        </div>
      </section>

      {/* ================= LEGACY BAND ================= */}
      <section className="relative isolate overflow-hidden bg-emerald-800 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-white text-2xl sm:text-3xl font-bold">
                Engineered for Giants. Built for Legacy.
              </h2>
              <p className="mt-1 text-emerald-100">
                Ready to turn your land into a big-buck paradise your family will enjoy for generations?
              </p>
            </div>
            <CtaSafe href="/contact" className="bg-white text-emerald-900 hover:bg-emerald-50">
              Book a Free Strategy Call →
            </CtaSafe>
          </div>
        </div>
      </section>
    </main>
  );
}

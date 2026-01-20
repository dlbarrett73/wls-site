// app/why-it-matters/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "../../components/CtaButton";

/**
 * Page metadata used by Next.js for SEO.
 * This page explains why starting with a data‑driven property audit
 * is critical before embarking on habitat projects or other tactics.
 */
export const metadata = {
  title: "Why Audit First? | Whitetail Land Solutions",
  description:
    "Learn why a comprehensive property audit should be your first step. Avoid guesswork and invest wisely with data‑backed insights that reveal your land's true ceiling for mature whitetails.",
};

/**
 * WhyAuditPage – a standalone educational page detailing the importance
 * of beginning with a property audit. The page contrasts the common
 * habitat project approach with the strategic, data‑first WLS Audit and
 * invites visitors to book an audit. Copy and layout mirror existing
 * pages: hero image, explanatory text, comparison grid, and CTA.
 */
export default function WhyAuditPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative mb-12 h-[60vh] w-screen max-w-none mx-[calc(50%-50vw)]">
        <div className="relative h-full w-full">
          <Image
            src="/images/property.jpg"
            alt="Property audit in progress — boots on the ground to collect data"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlays for text legibility */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="pointer-events-auto mx-auto w-full max-w-4xl px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
              Why Audit First?
            </h1>
            <p className="mt-4 max-w-3xl text-lg sm:text-xl text-white/90">
              Clarity before action: discover your land’s true potential and
              avoid costly guesswork by starting with a data‑driven audit.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Start with Data, Not Hype
        </h2>
        <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-700">
          Many landowners jump into habitat projects, food plots, or trending
          tactics hoping for quick results. Without understanding your
          property’s unique constraints—topography, wind patterns, hunting
          pressure, existing cover—you’re throwing darts in the dark. A
          comprehensive WLS Audit uncovers the structural and biological
          factors that actually matter, so every dollar and hour moves you
          closer to a mature‑buck paradise.
        </p>
      </section>

      {/* ================= COMPARISON GRID ================= */}
      <section className="mb-16">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Common Approach vs. WLS Audit
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Common Approach card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h4 className="text-lg font-semibold mb-4">Common Approach</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Guesswork</li>
              <li>• Tactical projects</li>
              <li>• Buy before planning</li>
              <li>• Guessing value</li>
            </ul>
          </div>
          {/* WLS Audit card */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 shadow-soft">
            <h4 className="text-lg font-semibold mb-4">WLS Audit</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Data + Verification</li>
              <li>• System diagnosis</li>
              <li>• Plan before investment</li>
              <li>• True ceiling score</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 max-w-4xl text-base sm:text-lg text-slate-700">
          Where the typical path jumps straight to buying seed mixes or
          clearing an opening, the WLS Audit acts like a doctor’s exam:
          measuring, testing, and diagnosing the whole system. We confirm
          deer movement with boots on the ground and camera data, study wind
          and access, evaluate timber and soils, and assess hunting pressure.
          That information feeds a phased roadmap tailored to your goals and
          budget.
        </p>
      </section>

      {/* ================= WHY IT MATTERS (ADDITIONAL CONTEXT) ================= */}
      <section className="mb-16">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Why an Audit First Approach Transforms Everything
        </h3>
        <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-700">
          By diagnosing before prescribing, you avoid wasted effort and focus
          on actions with the highest return—whether that’s improving access,
          enhancing bedding, optimizing food sources, or adjusting pressure.
          An audit reveals opportunities and risks that generic strategies
          miss. It also gives you confidence to invest, because you know the
          true ceiling of your property and have a prioritized plan to reach
          it.
        </p>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Ready to Uncover Your Land’s Hidden Potential?
        </h3>
        <p className="mt-2 max-w-4xl text-base sm:text-lg text-slate-700">
          Schedule a Property Audit and get a clear, prioritized plan before
          you spend a dime on habitat projects or equipment.
        </p>
        <div className="mt-6">
          <CtaButton href="/contact">Book Your Audit →</CtaButton>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          Want to learn how a WLS Audit compares to other options? Explore our
          <Link href="/services/consulting" className="text-emerald-700 hover:underline">
            Consulting
          </Link>{" "}
          and
          <Link href="/services/implementation" className="ml-1 text-emerald-700 hover:underline">
            Implementation
          </Link>{" "}
          services for a deeper dive.
        </p>
      </section>
    </main>
  );
}

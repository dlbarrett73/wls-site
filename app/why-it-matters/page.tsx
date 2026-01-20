// app/why-it-matters/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "../../components/CtaButton";

/**
 * Why It Matters (Belief Page)
 * Purpose: Build conviction around truth-first hunting property outcomes.
 * This page should NOT describe audit mechanics, deliverables, or pricing.
 * CTA should point to the Property Audit page.
 */
export const metadata = {
  title: "Why It Matters | Whitetail Land Solutions",
  description:
    "Most properties don’t fail because of effort—they fail because of unseen limits and unmanaged pressure. Learn why truth must come before tactics, and why every serious plan starts with diagnosis.",
};

export default function WhyItMattersPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative mb-12 h-[60vh] w-screen max-w-none mx-[calc(50%-50vw)]">
        <div className="relative h-full w-full">
          <Image
            src="/images/property.jpg"
            alt="A quiet ridge at first light — where truth reveals itself"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient overlays for text legibility */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/60" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center">
          <div className="pointer-events-auto mx-auto w-full max-w-4xl px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
              Why It Matters
            </h1>
            <p className="mt-4 max-w-3xl text-lg sm:text-xl text-white/90">
              Most properties don’t fall short because of effort. They fall short
              because the truth was never established.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="/property-audit">Start With the Property Audit →</CtaButton>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                View Properties for Sale
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE BELIEF ================= */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Truth Precedes Tactics
        </h2>
        <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-700">
          Habitat work, gear, seed, hinge cuts—those things can be useful. But
          they are not the governing force behind mature-buck outcomes. What
          governs outcomes is what your property is capable of supporting{" "}
          <span className="font-semibold">and</span> how human pressure changes
          deer behavior on that specific ground.
        </p>
        <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-700">
          If you don’t establish the truth first, you end up doing “good work” in
          the wrong places, for the wrong reasons, while expecting results the
          property can’t consistently produce.
        </p>
      </section>

      {/* ================= THE REAL REASONS ================= */}
      <section className="mb-16">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Why Most “Improved” Properties Still Underperform
        </h3>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h4 className="text-lg font-semibold">The Illusion</h4>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• “If I work harder, the bucks will show up.”</li>
              <li>• “More food fixes everything.”</li>
              <li>• “The right stand location is the answer.”</li>
              <li>• “I just need one more tactic.”</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 shadow-soft">
            <h4 className="text-lg font-semibold">The Reality</h4>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Behavior changes before biology.</li>
              <li>• Pressure reshapes daylight movement.</li>
              <li>• Access and intrusion create invisible limits.</li>
              <li>• Some ceilings are structural, not motivational.</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-base sm:text-lg text-slate-700">
          Mature bucks don’t respond to optimism. They respond to security. When
          access, pressure, and predictability are mismanaged—even subtly—deer
          adapt. They shift bedding. They go nocturnal. They relocate. And your
          “better habitat” becomes a better place to avoid you.
        </p>
      </section>

      {/* ================= CEILING / PRESSURE BELIEF ================= */}
      <section className="mb-16">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          The Two Questions That Decide Everything
        </h3>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Question 1
            </p>
            <h4 className="mt-2 text-lg font-semibold">
              What is your property’s true ceiling?
            </h4>
            <p className="mt-3 text-slate-700">
              Not what you wish it was. Not what a neighbor claims. The ceiling
              is the structural potential your ground can consistently support
              under real-world conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Question 2
            </p>
            <h4 className="mt-2 text-lg font-semibold">
              How is pressure shaping deer behavior right now?
            </h4>
            <p className="mt-3 text-slate-700">
              Mature bucks are not “somewhere else” by accident. They move, bed,
              and travel based on risk. Pressure is the tax you pay on every
              decision.
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-base sm:text-lg text-slate-700">
          When you get honest about those two questions, the noise falls away.
          False options disappear. And you stop spending money and time chasing
          outcomes that your current reality cannot deliver.
        </p>
      </section>

      {/* ================= BRIDGE TO AUDIT (NO MECHANICS) ================= */}
      <section className="mb-16">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Diagnosis Isn’t a Luxury. It’s the Starting Line.
        </h3>
        <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-700">
          Serious results require serious honesty. Before you “build,” you must
          establish what’s true—about your land, your access, your pressure, and
          your real potential.
        </p>
        <p className="mt-4 max-w-4xl text-base sm:text-lg text-slate-700">
          That’s why the first step at Whitetail Land Solutions is always the
          same: begin with a Property Audit. Not because it’s a product we want
          to sell—but because it’s the only responsible way to pursue a mature-buck
          outcome with confidence.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          Ready to Stop Guessing?
        </h3>
        <p className="mt-3 max-w-3xl text-base sm:text-lg text-slate-700">
          If you want a property that’s engineered for giants and built for
          legacy, you start by establishing the truth.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaButton href="/property-audit">Start With the Property Audit →</CtaButton>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Ask a Question First
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Already convinced? Go straight to the{" "}
          <Link href="/property-audit" className="font-semibold underline">
            Property Audit
          </Link>
          .
        </p>
      </section>
    </main>
  );
}

// app/services/implementation/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "../../../components/CtaButton";

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = {
  title: "Habitat Implementation — Turnkey Build-Out | Whitetail Land Solutions",
  description:
    "Done-for-you habitat implementation engineered for mature whitetails. We turn a proven design into roads, plots, bedding, access, stands, and results.",
};

export default function ImplementationPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO (Full-Screen) ================= */}
      <section className="relative w-full h-[72vh] sm:h-screen">
        <Image
          src="/images/implementation.jpg"
          alt="Habitat implementation engineered for mature whitetails"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Moved hero content UP: center on mobile/tablet, slightly high-center on desktop */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center lg:justify-center px-6 pt-24 sm:pt-28 md:pt-32 pb-6 lg:pb-8">
          <h1 className="text-white leading-tight tracking-tight text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
            Done-For-You Habitat Implementation
          </h1>
          <p className="mt-4 max-w-2xl text-white/90 text-lg sm:text-xl">
            Engineered for Giants. Built for Legacy. We turn your blueprint into roads,
            plots, bedding, access, and stand setups that hunt right away.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/capture/implementation/">Book a Free Strategy Call</CtaButton>
            <Link
              href="/services/consulting"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold border border-white/70 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              See Consulting (Design First)
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/15" />
            <p className="font-semibold">Forestry + Whitetail Expertise</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/15" />
            <p className="font-semibold">Licensed · Insured · Turnkey Crews</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/15" />
            <p className="font-semibold">Built for Access, Wind, & Huntability</p>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              From Plan to Property That Hunts
            </h2>
            <p className="mt-4 text-slate-700">
              Most properties have potential; few are engineered to consistently produce mature bucks.
              We implement your design with precision—roads and trails for silent access, strategic food plots,
              timber work and bedding to hold deer, and stand locations that keep you undetected.
            </p>
            <ul className="mt-6 space-y-3 text-slate-800">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Access & wind architecture: roads, trails, screening
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Food plots & soil prep: layout, seed, soil tests, lime/fert
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Timber stand improvement & bedding creation
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-700" />
                Stand/blind selection, placement, and entry/exit discipline
              </li>
            </ul>
            <div className="mt-8">
              <CtaSafe href="/capture/implementation">Start Your Build</CtaSafe>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm bg-white">
            <h3 className="text-xl font-bold text-slate-900">Typical Investment</h3>
            <p className="mt-2 text-slate-700">
              Scope varies by acreage, access, and objectives. Transparency builds trust—most turnkey builds land in the ranges below.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm uppercase tracking-wide text-slate-500">Design-Led Buildouts</p>
                <p className="mt-1 text-2xl font-extrabold text-slate-900">$20k–$60k+</p>
                <p className="mt-2 text-sm text-slate-600">Roads, plots, timber work, bedding, stands, access, and screening.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-4">
                <p className="text-sm uppercase tracking-wide text-slate-500">Phase-Based</p>
                <p className="mt-1 text-2xl font-extrabold text-slate-900">$8k–$25k / phase</p>
                <p className="mt-2 text-sm text-slate-600">Prioritize highest ROI elements first; expand as you see results.</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              *Actual pricing depends on terrain, materials, distances, and scope. We’ll give you a clean, line-item estimate before we start.
            </p>
          </div>
        </div>
      </section>

      {/* ================= DECISION LOGIC ================= */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Is Implementation Right for You?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-emerald-100">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">You value time & outcomes</h3>
              <p className="mt-2 text-slate-700">
                You want it done right, fast, and to a standard that reliably hunts.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-emerald-100">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">You have a plan (or want one)</h3>
              <p className="mt-2 text-slate-700">
                We can build from your existing plan—or start with our Blueprint for Giants.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-emerald-100">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <h3 className="mt-4 text-lg font-bold text-slate-900">You want legacy-grade results</h3>
              <p className="mt-2 text-slate-700">
                The goal: a property that produces memories—and mature bucks—for decades.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CtaSafe href="/capture/implementation" className="bg-emerald-700 hover:bg-emerald-800">
              Talk Implementation Details
            </CtaSafe>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">How Implementation Works</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">Site Walk & Scope</h3>
                <p className="mt-2 text-slate-700">
                  Confirm the plan, walk key features, finalize phases, timeline, and materials.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">Access & Infrastructure</h3>
                <p className="mt-2 text-slate-700">
                  Roads, trails, crossings, and screening to move like a ghost—entry, hunt, exit.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">Food Plots & Bedding</h3>
                <p className="mt-2 text-slate-700">
                  Soil tests, prep, seed, and timber work to hold deer and structure daily movement.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-700/10" />
              <div>
                <h3 className="font-bold text-lg text-slate-900">Stands, Blinds & Setup</h3>
                <p className="mt-2 text-slate-700">
                  Stand/blind selection, precise placement, and access routes to protect the spot.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-slate-600">
          We’ll document progress with photos/video and provide a simple maintenance plan so it continues hunting better each season.
        </p>
      </section>

      {/* ================= BEFORE / AFTER PREVIEW ================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">See the Difference</h2>
          <p className="mt-2 text-slate-700">
            A few snapshots from recent projects. Ask us for a walkthrough of a build similar to your acreage and goals.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200" />
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200" />
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200" />
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200" />
          </div>
          <div className="mt-8">
            <CtaSafe href="/capture/implementation">Request a Project Tour</CtaSafe>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-emerald-700 text-white p-8 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to Build Your Big-Buck Property?</h2>
          <p className="mt-3 text-white/90">
            We’ll scope phases, budget, and timeline—then get your land hunting the way it should.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaSafe href="/capture/implementation" className="bg-white text-emerald-900 hover:bg-white/90">
              Book a Free Strategy Call
            </CtaSafe>
            <Link
              href="/services/consulting"
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold border border-white/70 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Start with a Design
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

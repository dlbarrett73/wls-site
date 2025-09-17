import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Consulting | Whitetail Land Solutions",
  description:
    "Blueprints and strategy to engineer your property for mature whitetails.",
};

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* Hero */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Expert Consulting to Engineer Your Big Buck Paradise
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          We design properties for undetectable access, predictable movement,
          and season-long opportunity—so you can hunt mature bucks sooner.
        </p>
      </header>

      {/* 2-up productized offers */}
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white/50 p-6 shadow-sm">
          <h2 className="text-xl font-bold">Blueprint for Giants (Plan Only)</h2>
          <p className="mt-2 text-zinc-700">
            A complete, ready-to-implement design tailored to your goals.
          </p>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>• On-site or virtual assessment</li>
            <li>• Property design map (access, food, bedding, stands/blinds)</li>
            <li>• Prioritized action plan with timelines</li>
            <li>• Review call with Q&A</li>
          </ul>
        </div>

        <div className="rounded-2xl border bg-white/50 p-6 shadow-sm">
          <h2 className="text-xl font-bold">Plan + Implementation</h2>
          <p className="mt-2 text-zinc-700">
            We manage the work and deliver a turnkey hunting property.
          </p>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>• Everything in Plan Only</li>
            <li>• Access roads/trails & screening cover</li>
            <li>• Food plots, TSI, and blind/stand installation</li>
            <li>• Budgeting, scheduling, and field supervision</li>
          </ul>
        </div>
      </section>

      {/* Process strip */}
      <section className="mt-12 rounded-2xl border bg-white/40 p-6">
        <h3 className="text-lg font-semibold">Our Proven Process</h3>
        <ol className="mt-3 grid gap-3 text-zinc-700 md:grid-cols-3">
          <li className="rounded-xl border p-4">
            <span className="font-semibold">1) Assess</span>
            <div className="text-sm">Goals, constraints, current habitat.</div>
          </li>
          <li className="rounded-xl border p-4">
            <span className="font-semibold">2) Design</span>
            <div className="text-sm">Map + written plan with priorities.</div>
          </li>
          <li className="rounded-xl border p-4">
            <span className="font-semibold">3) Execute</span>
            <div className="text-sm">DIY or done-for-you implementation.</div>
          </li>
        </ol>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-brand-700 px-6 py-3 font-semibold text-white transition hover:opacity-95"
        >
          Book a Free Strategy Call
        </Link>
      </section>
    </main>
  );
}

// app/services/consulting/page.tsx
import React from "react";
import Link from "next/link";
// If you have a CTA component, keep this import. If not, the Link below is fine.
// import { CtaButton } from "@/components/CtaButton";

export const metadata = {
  title: "Consulting | Whitetail Land Solutions",
  description:
    "Expert habitat design and strategy to engineer your property for mature whitetails.",
};

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Expert Consulting to Engineer Your Big Buck Paradise
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Practical, proven design focused on access, bedding, food, and
          undetectable movement—so you can hunt mature bucks sooner.
        </p>
      </section>

      {/* What you get */}
      <section className="grid gap-6 sm:grid-cols-2 mb-12">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-bold">Blueprint for Giants (Plan Only)</h2>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-2">
            <li>On-site or virtual assessment</li>
            <li>Property design map (access, food, bedding, stands/blinds)</li>
            <li>Prioritized action plan</li>
            <li>Q&A review call</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-bold">Plan + Implementation</h2>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-2">
            <li>Everything in Plan Only</li>
            <li>Managed habitat work (food plots, access, TSI, blinds)</li>
            <li>Budget, schedule, and field supervision</li>
            <li>Results tracked with cameras and in-season tweaks</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-8">
        {/* If you have <CtaButton href="/contact" label="Book a Free Strategy Call" />, use it here */}
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-brand-700 px-6 py-3 font-semibold text-white hover:opacity-95"
        >
          Book a Free Strategy Call
        </Link>
      </section>
    </main>
  );
}

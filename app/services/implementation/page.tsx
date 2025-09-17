// app/services/implementation/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Habitat Implementation | Whitetail Land Solutions",
  description:
    "Turn your plan into a turnkey hunting property with proven improvements and clean access.",
};

export default function ImplementationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Habitat Implementation Done Right
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          We manage the work: access trails, screening cover, food plots,
          blinds, and timber improvements—installed to match the plan and your
          budget.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3 mb-12">
        <div className="rounded-2xl border p-6">
          <h2 className="font-bold">Access & Trails</h2>
          <p className="mt-2 text-zinc-700">
            Undetectable entry/exit with screening and wind-first routing.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-bold">Food & Forage</h2>
          <p className="mt-2 text-zinc-700">
            Kill plots, destination food, soil prep, and annual/perennial blends.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h2 className="font-bold">Stands & Blinds</h2>
          <p className="mt-2 text-zinc-700">
            Stand trees, ladders, and blinds set for specific winds and phases.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-brand-700 px-6 py-3 font-semibold text-white hover:opacity-95"
        >
          Talk About Your Property
        </Link>
      </section>
    </main>
  );
}

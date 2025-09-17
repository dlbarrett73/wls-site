import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Habitat Implementation | Whitetail Land Solutions",
  description:
    "From plan to turnkey: access, food, cover, and stands installed the right way.",
};

export default function ImplementationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* Hero */}
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Habitat Implementation Done Right
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          We manage contractors and details so your improvements match the plan
          and hunt the way they should—this season.
        </p>
      </header>

      {/* Feature grid */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-white/50 p-6 shadow-sm">
          <h2 className="font-bold">Access & Trails</h2>
          <p className="mt-2 text-zinc-700">
            Wind-first routing, screens, and quiet surfaces for undetectable
            entry and exit.
          </p>
        </div>
        <div className="rounded-2xl border bg-white/50 p-6 shadow-sm">
          <h2 className="font-bold">Food & Forage</h2>
          <p className="mt-2 text-zinc-700">
            Kill plots and destination food with correct sizing, shape, and
            blends for your soils and pressure.
          </p>
        </div>
        <div className="rounded-2xl border bg-white/50 p-6 shadow-sm">
          <h2 className="font-bold">Stands & Blinds</h2>
          <p className="mt-2 text-zinc-700">
            Stand trees, ladders, and blinds set for exact winds and phases,
            with safe access and exit.
          </p>
        </div>
      </section>

      {/* Deliverables strip */}
      <section className="mt-12 rounded-2xl border bg-white/40 p-6">
        <h3 className="text-lg font-semibold">What We Deliver</h3>
        <ul className="mt-3 grid gap-3 text-zinc-700 md:grid-cols-2">
          <li className="rounded-xl border p-4">Project budget & schedule</li>
          <li className="rounded-xl border p-4">Contractor coordination</li>
          <li className="rounded-xl border p-4">On-site supervision</li>
          <li className="rounded-xl border p-4">Before/after media package</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl bg-brand-700 px-6 py-3 font-semibold text-white transition hover:opacity-95"
        >
          Talk About Your P

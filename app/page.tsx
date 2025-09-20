// app/page.tsx
import React from "react";
import Link from "next/link";

// Simple, local CTA so we don't rely on any external component
function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* HERO — brand gradient, no image required */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-brand-800 via-brand-700 to-brand-800 p-10 text-white shadow-soft">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-white/70">
            WHITETAIL LAND SOLUTIONS
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Properties Engineered for Giants. Built for Legacy.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Turnkey hunting properties and habitat design — expert strategy,
            proven access, food, cover, and stand placement so you can hunt big,
            mature whitetails sooner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="/contact">Book Your Free Strategy Call</Cta>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Soft topographic accent (pure CSS, no image) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full border border-white/10 [mask-image:radial-gradient(closest-side,black,transparent)]"
        />
      </section>

      {/* CHOOSE YOUR PATH — three tiles */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Choose Your Path</h2>
        <p className="mt-2 text-zinc-700">
          Whether you’re buying land, optimizing your property, or wanting us to
          build it for you — we’ll meet you where you are.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Land for Sale */}
          <Link
            href="/properties"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Land for Sale</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Turnkey
              </span>
            </div>
            <p className="mt-2 text-zinc-700">
              Hunt-ready properties engineered for mature bucks — access,
              food/cover, and stand placements built in.
            </p>
            <span className="mt-4 inline-flex items-center text-brand-700">
              Browse Properties
              <svg
                className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </span>
          </Link>

          {/* Consulting */}
          <Link
            href="/consulting"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Consulting</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Blueprint
              </span>
            </div>
            <p className="mt-2 text-zinc-700">
              Custom habitat design maps and action plan to transform your
              acreage into a big-buck paradise.
            </p>
            <span className="mt-4 inline-flex items-center text-brand-700">
              See Consulting
              <svg
                className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </span>
          </Link>

          {/* Habitat Implementation */}
          <Link
            href="/implementation"
            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Habitat Implementation</h3>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Done-For-You
              </span>
            </div>
            <p className="mt-2 text-zinc-700">
              We build the plan: trails, plots, screening, stand/blind installs,
              and access — start hunting sooner.
            </p>
            <span className="mt-4 inline-flex items-center text-brand-700">
              Build My Property
              <svg
                className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* SITE-WIDE CTA STRIP */}
      <section className="mt-16 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-brand-900">
              Free 15-Minute Property Strategy Call
            </h3>
            <p className="mt-1 text-brand-900/80">
              Talk through goals, acreage, and timeline — get expert next steps.
            </p>
          </div>
          <Cta href="/contact">Book Now</Cta>
        </div>
      </section>
    </main>
  );
}

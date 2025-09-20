// app/services/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Services — Whitetail Land Solutions",
  description:
    "Whitetail Land Solutions offers Consulting, Habitat Implementation, and Turnkey Land for Sale engineered for mature whitetails.",
};

export default function Services() {
  return (
    <main>
      {/* Hero (brand-matched) */}
      <section className="bg-brand-800 text-white">
        <div className="container py-16 md:py-24">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-brand-200">
            SERVICES
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
            Engineered for Giants. Built for Legacy.
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg/7 text-brand-100">
            From strategy and habitat work to turnkey properties, we help you
            create hunt-ready land that consistently attracts and holds mature
            whitetails—without guesswork.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-800 shadow-soft hover:bg-brand-50 transition"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid (brand cards) */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Consulting */}
          <article className="group rounded-2xl border border-brand-200/60 bg-white p-6 shadow-soft hover:shadow-lg transition">
            <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Strategy
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900">
              Consulting: Blueprint for Giants
            </h2>
            <p className="mt-3 text-zinc-700">
              A custom, step-by-step plan to engineer your acreage for mature
              whitetails—access, bedding, food, and pressure management dialed
              to your terrain and goals.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Property walk-through and mapping</li>
              <li>• Stand locations, entry/exit routes, sanctuaries</li>
              <li>• Food plots, TSI, screening, travel corridor design</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/consulting"
                className="inline-flex items-center rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition"
              >
                Explore Consulting
              </Link>
            </div>
          </article>

          {/* Habitat Implementation */}
          <article className="group rounded-2xl border border-brand-200/60 bg-white p-6 shadow-soft hover:shadow-lg transition">
            <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Build
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900">
              Habitat Implementation
            </h2>
            <p className="mt-3 text-zinc-700">
              We take the blueprint and build it—food plots, roads, screening,
              stand sets, and timber work—so your property hunts right from day
              one.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Food plot layout &amp; installation</li>
              <li>• TSI &amp; bedding creation</li>
              <li>• Access roads, screening, stand/blind placement</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/implementation"
                className="inline-flex items-center rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition"
              >
                See Implementation
              </Link>
            </div>
          </article>

          {/* Turnkey Land for Sale */}
          <article className="group rounded-2xl border border-brand-200/60 bg-white p-6 shadow-soft hover:shadow-lg transition">
            <div className="inline-flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              Turnkey
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900">
              Land for Sale (Hunt-Ready)
            </h2>
            <p className="mt-3 text-zinc-700">
              Properties we acquire and optimize using the same proven
              playbook—hunt day one with access, food, and setups already in
              place.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>• Known big-buck potential</li>
              <li>• Access &amp; pressure plan built-in</li>
              <li>• Clear next-step improvement roadmap</li>
            </ul>
            <div className="mt-6">
              <Link
                href="/properties"
                className="inline-flex items-center rounded-lg bg-brand-800 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition"
              >
                Browse Properties
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* CTA band (brand-matched, white text on green) */}
      <section className="bg-brand-900 text-white">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Ready to engineer your property for mature whitetails?
              </h3>
              <p className="mt-2 text-brand-100">
                Get a free 15-minute strategy call to map your next best step.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-900 shadow-soft hover:bg-brand-50 transition"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

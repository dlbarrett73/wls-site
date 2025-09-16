// app/properties/page.tsx  (or pages/properties/index.tsx if you're in the pages/ router)
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { propertiesBySlug } from "../data/properties";

/** Forest-green CTA used site-wide */
function CtaGreen({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center rounded-xl bg-emerald-800 px-5 py-3 text-sm font-semibold text-white shadow " +
        "hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 " +
        "disabled:pointer-events-none disabled:opacity-60 " +
        className
      }
    >
      {children}
    </Link>
  );
}

export default function PropertiesIndexPage() {
  const items = Object.values(propertiesBySlug);

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      {/* Header */}
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight">
          Available Properties
        </h1>
        <p className="mt-3 text-zinc-700">
          Turnkey whitetail properties engineered for giants, built for legacy.
        </p>
      </header>

      {/* Listings or Empty State */}
      {items.length > 0 ? (
        <section aria-labelledby="properties-grid" className="mt-10">
          <h2 id="properties-grid" className="sr-only">
            Property Listings
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/properties/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">
                    {p.location}
                    {p.acres ? ` • ${p.acres.toLocaleString()}± acres` : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <EmptyStateWaitlist />
      )}

      {/* Waitlist CTA (always visible) */}
      <WaitlistCTA />
    </main>
  );
}

/* ---------- Components ---------- */

function WaitlistCTA() {
  return (
    <section
      aria-labelledby="waitlist-cta"
      className="mt-16 rounded-3xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-8 shadow-sm"
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 id="waitlist-cta" className="text-2xl font-extrabold tracking-tight">
            Don’t see the right property today?
          </h2>
          <p className="mt-3 text-zinc-700">
            Inventory changes fast. Join the waitlist to get first look at new
            acquisitions, off-market deals, and turn-key properties engineered for mature bucks.
          </p>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>• Early access to upcoming listings</li>
            <li>• Options within your budget & acreage targets</li>
            <li>• Alerts for properties in your preferred counties</li>
          </ul>

          <div className="mt-6">
            <CtaGreen href="/contact">Join the Waitlist</CtaGreen>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm font-semibold tracking-wide text-zinc-500">
            What we’ll ask for
          </p>
          <dl className="mt-3 grid grid-cols-1 gap-3 text-sm text-zinc-800 sm:grid-cols-2">
            <div className="rounded-xl bg-zinc-50 p-3">
              <dt className="font-medium">Target counties</dt>
              <dd className="text-zinc-600">
                e.g., Armstrong, Clearfield, Jefferson
              </dd>
            </div>
            <div className="rounded-xl bg-zinc-50 p-3">
              <dt className="font-medium">Acreage &amp; budget</dt>
              <dd className="text-zinc-600">Your range and readiness</dd>
            </div>
            <div className="rounded-xl bg-zinc-50 p-3">
              <dt className="font-medium">Property goals</dt>
              <dd className="text-zinc-600">
                Turnkey, timber, cabin site, flip, etc.
              </dd>
            </div>
            <div className="rounded-xl bg-zinc-50 p-3">
              <dt className="font-medium">Timeline</dt>
              <dd className="text-zinc-600">Ready now or next 3–12 months</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function EmptyStateWaitlist() {
  return (
    <section
      aria-labelledby="empty-state"
      className="mt-10 rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center"
    >
      <h2 id="empty-state" className="text-2xl font-extrabold tracking-tight">
        No listings are available right now.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
        We’re actively acquiring and improving new tracts. Join the waitlist for
        first dibs on upcoming properties that match your acreage, budget, and county preferences.
      </p>

      <div className="mt-6 flex justify-center">
        <CtaGreen href="/contact">Join the Waitlist</CtaGreen>
      </div>
    </section>
  );
}

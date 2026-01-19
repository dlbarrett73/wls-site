import Link from "next/link";
import React from "react";

export default function FeaturedProperty() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-900">Featured Property</h2>
        <p className="mt-2 text-slate-600">
          New listings move fast. Browse available properties and get alerts when a new turnkey
          opportunity is released.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
          >
            View Properties
          </Link>
          <Link
            href="/capture/buyer"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
          >
            Get Property Alerts
          </Link>
        </div>
      </div>
    </section>
  );
}

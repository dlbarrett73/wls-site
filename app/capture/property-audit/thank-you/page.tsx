// wls-site/app/capture/property-audit/thank-you/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Application Received | Whitetail Land Solutions",
  description:
    "Your Whitetail Land Solutions Property Audit application has been received.",
};

export default function PropertyAuditThankYouPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
          <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-200">
            Application received
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Thank you for applying.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Your Property Audit application has been submitted to Whitetail Land
            Solutions. We will review it personally and determine whether the
            Blueprint for Giants® Property Audit is the right next step.
          </p>

          <div className="mt-8 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">
              What happens next
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-700">
              <p>
                <strong>1. We review your application.</strong> We look at your
                property context, goals, timeline, decision authority, and whether
                your situation fits our process.
              </p>

              <p>
                <strong>2. We determine fit.</strong> If there appears to be a
                strong fit, we will follow up with next steps for the Property
                Audit.
              </p>

              <p>
                <strong>3. If it is not the right fit, we will be honest.</strong>{" "}
                The Audit exists to protect decision quality, not to force every
                applicant into the process.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white">
            <h2 className="text-lg font-semibold">
              The Audit is the truth layer.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              If the Audit confirms a strong path forward, the next step may be a
              Blueprint for Giants® System Plan. If not, the Audit still gives
              you clarity on what your property can realistically support and
              what may be limiting mature buck daylight opportunity.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/property-audit"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Review the Property Audit
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm ring-1 ring-slate-300 transition hover:bg-slate-50"
            >
              Return home
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 py-10 text-xs leading-relaxed text-slate-500">
          Whitetail Land Solutions designs pressure-aware hunting systems.
          Results depend on property constraints, regional hunting pressure,
          surrounding land use, timing, and execution discipline.
        </div>
      </section>
    </main>
  );
}

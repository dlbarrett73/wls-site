// app/capture/property-audit/page.tsx
//
// This page provides a dedicated lead‑capture and pre‑qualification form
// for land owners who want to book a Whitetail Land Solutions Property Audit.
// It follows the same structure as the other capture pages (buyer, consulting,
// implementation) with a hero section, a simple process overview, and a
// comprehensive form that gathers the details needed to determine fit.  The
// hidden leadSource and offer fields route submissions through the existing
// `/api/lead` handler used by the rest of the site.

import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Simple CTA component that renders a link styled as a button.
 * We define it here to avoid fragile imports from other components.
 */
function Cta({
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
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition " +
        "bg-emerald-700 text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 " +
        className
      }
    >
      {children}
    </Link>
  );
}

// Generate a static page with light revalidation to allow copy tweaks without
// requiring a full rebuild.  See other capture pages for the same pattern.
export const dynamic = "force-static";
export const revalidate = 1800;

// Metadata defines the document title and description for SEO and sharing.
export const metadata = {
  title:
    "Property Audit Application — Lead Capture | Whitetail Land Solutions",
  description:
    "Apply for a Property Audit: get objective truth about your land’s potential, what’s holding it back, and exactly what to do next.",
};

export default function PropertyAuditCapture() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[68vh] sm:h-[82vh]">
        <Image
          src="/images/hero.jpg"
          alt="Property audit evaluation of a whitetail property"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10 sm:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Property Audit Application
            </h1>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-2xl">
              Get objective truth about your land’s potential and a clear path
              forward. Apply now for your Property Audit.
            </p>
            <div className="mt-6">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Start My Application
              </a>
              {/* Pricing clarity line */}
              <p className="mt-3 text-sm text-white/90">
                Audits start at <span className="font-semibold">$1,500</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PROCESS / WHAT HAPPENS NEXT ============= */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            What Happens Next
          </h2>
          <p className="mt-2 text-slate-600">
            A simple, proven process to uncover the truth about your property and
            unlock its potential.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Submit Your Details",
              body:
                "Tell us about your land, goals, and challenges—location, acreage, current access, and key questions.",
            },
            {
              step: "2",
              title: "We Review & Reach Out",
              body:
                "Our team reviews your submission, verifies fit, and connects to schedule your audit.",
            },
            {
              step: "3",
              title: "Receive Your Audit",
              body:
                "Get a comprehensive evaluation and actionable next steps to create mature-buck opportunity.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white font-bold">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section id="start" className="relative">
        {/* Subtle tinted background to tie into the theme */}
        <div className="absolute inset-0 -z-10 bg-emerald-700/10" />
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* ===== Left copy ===== */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Apply for Your Property Audit
              </h2>
              <p className="mt-3 text-slate-700">
                Share a few details and we’ll confirm fit and schedule your audit.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>
                    Objective assessment of ceiling, pressure, and execution
                    reality
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Actionable next steps tailored to your property</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>No hype, tactics, or guesswork—just truth</span>
                </li>
              </ul>

              <div className="mt-6">
                <Cta href="#lead-form">Start My Application</Cta>
                <p className="mt-3 text-sm text-slate-500">
                  We’ll respond within one business day.
                </p>
              </div>
            </div>

            {/* ===== Right form ===== */}
            <div
              id="lead-form"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <form method="POST" action="/api/lead" className="space-y-5">
                {/* Hidden routing metadata to aid lead attribution */}
                <input
                  type="hidden"
                  name="leadSource"
                  value="Property Audit Application"
                />
                <input type="hidden" name="offer" value="Property Audit" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      First Name
                    </label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone (optional)
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      County / State
                    </label>
                    <input
                      name="county"
                      type="text"
                      placeholder="e.g., Armstrong, PA"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Acreage
                    </label>
                    <input
                      name="acreage"
                      type="number"
                      min={1}
                      placeholder="e.g., 120"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Primary Goal
                    </label>
                    <select
                      name="goal"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>Assess potential for mature bucks</option>
                      <option>Identify habitat improvements</option>
                      <option>Evaluate access & layout</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Timeline to Start
                    </label>
                    <select
                      name="timeline"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>ASAP</option>
                      <option>Within 3 months</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>1+ year</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>Under $2K</option>
                      <option>$2K–$5K</option>
                      <option>$5K–$10K</option>
                      <option>$10K+</option>
                      <option>Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Do you have a current habitat plan?
                    </label>
                    <select
                      name="havePlan"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>No, this is my first plan</option>
                      <option>Yes, but needs evaluation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Top Questions / Challenges
                  </label>
                  <textarea
                    name="questions"
                    rows={4}
                    placeholder="What concerns or questions do you want the audit to address?"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Apply Now
                  </button>
                  <p className="text-xs text-slate-500">
                    We respect your privacy. Your information is secure.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

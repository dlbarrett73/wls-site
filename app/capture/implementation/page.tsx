// app/capture/implementation/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Local, safe CTA */
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

export const dynamic = "force-static";
export const revalidate = 1800;

export const metadata = {
  title:
    "Done-For-You Habitat Implementation — Lead Capture | Whitetail Land Solutions",
  description:
    "We build the plan and do the work: access, food plots, bedding, screening, and stand/blind placement engineered for giants.",
};

export default function ImplementationCapture() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* HERO */}
      <section className="relative w-full h-[68vh] sm:h-[82vh]">
        <Image
          src="/images/implementation.jpg"
          alt="Habitat implementation team installing food plots and access"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10 sm:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Done-For-You Habitat Implementation
            </h1>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-2xl">
              We execute your plan—roads, plots, screening, bedding, and stands—
              so you can hunt big bucks on Day One.
            </p>
            <div className="mt-6">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Schedule My Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How Implementation Works
          </h2>
          <p className="mt-2 text-slate-600">
            We turn your plan into reality with proven improvements and tight
            project management.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Scope & Budget",
              body:
                "Align on priorities, phases, budget range, and timeline.",
            },
            {
              step: "2",
              title: "Site Work",
              body:
                "Access roads, screening, food plots, TSI, water, stands/blinds.",
            },
            {
              step: "3",
              title: "Hunt Day One",
              body:
                "Your property is turnkey for high-odds sits with protected access.",
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

      {/* FORM */}
      <section id="start" className="relative">
        <div className="absolute inset-0 -z-10 bg-emerald-700/10" />
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left copy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Schedule Your Implementation
              </h2>
              <p className="mt-3 text-slate-700">
                Tell us about your property and the work you want done. We’ll
                align scope and get you on the schedule quickly.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Access roads/trails & screening cover</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Food plots, seed/soil prep, water features</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>TSI / bedding creation + stand/blind install</span>
                </li>
              </ul>

              <div className="mt-6">
                <Cta href="#lead-form">Request My Quote</Cta>
                <p className="mt-3 text-sm text-slate-500">
                  We’ll give you a clear scope, timeline, and budget range.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div id="lead-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form method="POST" action="/api/lead" className="space-y-5">
                {/* Hidden routing metadata */}
                <input type="hidden" name="leadSource" value="Implementation Capture" />
                <input type="hidden" name="offer" value="Done-For-You Implementation" />

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
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
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
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      County (PA)
                    </label>
                    <input
                      name="county"
                      type="text"
                      placeholder="e.g., Armstrong"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>ASAP (next 30–60 days)</option>
                      <option>This season</option>
                      <option>6–12 months</option>
                      <option>12+ months</option>
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
                      <option>$10k–$25k</option>
                      <option>$25k–$50k</option>
                      <option>$50k–$100k</option>
                      <option>$100k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Need a Design Plan?
                    </label>
                    <select
                      name="needsPlan"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>I already have a plan</option>
                      <option>I need a Blueprint for Giants</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Scope & Priorities
                  </label>
                  <textarea
                    required
                    name="scope"
                    rows={5}
                    placeholder="Access & trails, screening, plots & soil work, TSI/bedding, water, stands/blinds…"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Request My Quote
                  </button>
                  <p className="text-xs text-slate-500">
                    We’ll follow up to align scope, schedule, and budget.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="bg-emerald-700">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                Proven, Practical, Hunt-Ready
              </h3>
              <p className="mt-3 text-emerald-50">
                We install only improvements that{" "}
                <span className="font-semibold">move the needle fast</span>:
                access-first design, protected entry/exit, and high-odds sits.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Clear scope, phased budgets, dependable timelines",
                "Forestry + whitetail behavior expertise in one team",
                "Option to layer ongoing advisory/check-ins",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span className="text-emerald-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

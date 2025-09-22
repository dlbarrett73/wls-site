// app/capture/consulting/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** --- Safe local CTA (no fragile imports) --- */
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

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 1800;

export const metadata = {
  title:
    "Blueprint for Giants — Consulting Lead Capture | Whitetail Land Solutions",
  description:
    "Start your Blueprint for Giants: a custom whitetail habitat design and action plan engineered for mature bucks and family legacy.",
};

export default function ConsultingCapture() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[68vh] sm:h-[82vh]">
        <Image
          src="/images/consulting.png"
          alt="On-site habitat design consultation for a legacy whitetail property"
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
              Blueprint for Giants
            </h1>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-2xl">
              Transform your land into a big buck paradise—engineered for mature
              whitetails and built for family legacy.
            </p>
            <div className="mt-6">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Start My Plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PROVEN PROCESS (3 steps) ============= */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-slate-600">
            A simple, guided path to a property engineered for giants.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Submit Your Goals",
              body:
                "Tell us about your land and vision—acreage, county, access, past hunting pressure, and goals.",
            },
            {
              step: "2",
              title: "Strategy Call",
              body:
                "We review maps and your objectives, share high-value insights, and align on the best path.",
            },
            {
              step: "3",
              title: "Blueprint for Giants",
              body:
                "Receive a prioritized design map + action plan to create immediate mature-buck opportunity.",
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

      {/* ================== FORM ================== */}
      <section id="start" className="relative">
        <div className="absolute inset-0 -z-10 bg-emerald-700/10" />
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: Value framing */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Start Your Blueprint for Giants
              </h2>
              <p className="mt-3 text-slate-700">
                We’ll review your property, goals, and constraints—then outline
                an engineered plan that creates more high-odds sits, protects
                access, and accelerates trophy potential.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Action-ready design map (access, bedding, plots, stands)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Prioritized checklist (what to do first for max impact)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Implementation option if you want it done-for-you</span>
                </li>
              </ul>

              <div className="mt-6">
                <Cta href="#lead-form">Book My Strategy Call</Cta>
                <p className="mt-3 text-sm text-slate-500">
                  No hard sell. If we’re not the best fit, we’ll point you in
                  the right direction.
                </p>
              </div>
            </div>

            {/* Right: The Form */}
            <div id="lead-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form
                method="POST"
                action="/api/lead"
                className="space-y-5"
              >
                {/* Hidden routing metadata for CRM/Zapier */}
                <input type="hidden" name="leadSource" value="Consulting Capture" />
                <input type="hidden" name="offer" value="Blueprint for Giants" />

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
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
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
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      County (PA)
                    </label>
                    <input
                      name="county"
                      type="text"
                      placeholder="e.g., Clearfield"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
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
                      Budget (for habitat/implementation)
                    </label>
                    <select
                      name="budget"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">Choose…</option>
                      <option>$5k–$10k</option>
                      <option>$10k–$25k</option>
                      <option>$25k–$50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      I’m also interested in
                    </label>
                    <select
                      name="secondaryInterest"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">(optional)</option>
                      <option>Done-For-You Implementation</option>
                      <option>Buying a Turnkey Property</option>
                      <option>Annual Advisory / Check-ins</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Goals & Challenges
                  </label>
                  <textarea
                    required
                    name="goals"
                    rows={5}
                    placeholder="Tell us about your current setup, pressure, access, and your vision for the property…"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Book My Strategy Call
                  </button>
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about your project.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TRUST / GUARANTEE BAND ============== */}
      <section className="bg-emerald-700">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                Our Guarantee
              </h3>
              <p className="mt-3 text-emerald-50">
                Every property is engineered to{" "}
                <span className="font-semibold">
                  maximize opportunities at mature bucks within the first hunting
                  season
                </span>
                . If we’re not the right fit, we’ll tell you—and point you to the
                best next step.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Whitetail behavior + forestry expertise",
                "Access-first design that protects your best sits",
                "Prioritized actions for ROI and results",
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

      {/* ============== SOCIAL PROOF / FAQ ============== */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Testimonial */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">
              “Within the first season after following the plan, we had trail cam
              proof of mature bucks using our new access and bedding. The design map
              made it simple to execute—and it worked.”
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-600">
              — Satisfied WLS Consulting Client
            </p>
          </div>

          {/* FAQs (native details/summary = no JS) */}
          <div className="space-y-4">
            {[
              {
                q: "What do I receive with the Blueprint for Giants?",
                a: "A property design map (access, bedding, plots, stand/blind locations) plus a prioritized action plan tailored to your land, goals, and budget.",
              },
              {
                q: "Do you also handle the work?",
                a: "Yes—if you prefer done-for-you, we can manage implementation (roads, plantings, plots, blinds) with a clear scope and timeline.",
              },
              {
                q: "I don’t own land yet—should I still apply?",
                a: "Yes. We can advise on target properties and help you avoid expensive mistakes before you buy.",
              },
            ].map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer text-base font-semibold">
                  {f.q}
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
        </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 flex flex-col items-center">
          <Cta href="#lead-form">Start My Blueprint</Cta>
          <p className="mt-3 text-sm text-slate-500">
            Engineered for Giants. Built for Legacy.
          </p>
        </div>
      </section>
    </main>
  );
}

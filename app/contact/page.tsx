// /app/contact/page.tsx
import React from "react";
import Link from "next/link";

// SSG hint + light ISR for copy edits
export const dynamic = "force-static";
export const revalidate = 3600;

function Stat({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
      {label}
    </div>
  );
}

function PathCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-700/30"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-600 group-hover:bg-emerald-700" />
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
          <span className="mt-3 inline-flex items-center text-sm font-semibold text-emerald-700 group-hover:underline">
            Explore →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-14 sm:pt-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Contact
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              How can we help you own a big-buck property?
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              Tell us about your acreage, goals, and timeline. We’ll reply
              within <span className="font-semibold text-slate-800">1 business day</span>
              with clear next steps.
            </p>

            {/* Quick trust chips (subtle) */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Stat label="PA-Based" />
              <Stat label="Forestry & Habitat Expertise" />
              <Stat label="Whitetail-First Designs" />
              <Stat label="Transparent Pricing" />
            </div>
          </div>

          {/* Pathways */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <PathCard
              title="Buy Land"
              desc="See hunt-ready properties engineered for giants. Tours and waitlist available."
              href="/properties"
            />
            <PathCard
              title="Consulting — Blueprint for Giants"
              desc="Site walk, map, and step-by-step action plan for your exact goals and terrain."
              href="/services/consulting"
            />
            <PathCard
              title="Habitat Implementation"
              desc="We build roads, plots, access, stands, and structure so the plan gets done right."
              href="/services/implementation"
            />
          </div>
        </div>
      </section>

      {/* ============== MAIN: Form + Optional Call CTA ============== */}
      <section className="relative border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Send us a message
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Prefer email over a call? Use the form and we’ll get back to you
                within one business day.
              </p>

              {/* Replace action with your AWeber/API endpoint */}
              <form
                action="/api/contact" // ← swap to AWeber embed or handler when ready
                method="POST"
                className="mt-6 space-y-5"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="county"
                      className="block text-sm font-medium text-slate-700"
                    >
                      County / State
                    </label>
                    <input
                      id="county"
                      name="county"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      placeholder="Armstrong, PA"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="acreage"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Acreage
                    </label>
                    <input
                      id="acreage"
                      name="acreage"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      placeholder="e.g., 80"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option>ASAP</option>
                      <option>30–60 days</option>
                      <option>60–90 days</option>
                      <option>90+ days</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="goal"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Primary Goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>Buy Land</option>
                    <option>Tour a Property</option>
                    <option>Improve My Current Property</option>
                    <option>Attract & Kill Mature Bucks</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    placeholder="Share any details about your property, access, pressure, or goals."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  By submitting, you agree to be contacted by Whitetail Land
                  Solutions. We respect your privacy.
                </p>
              </form>
            </div>
          </div>

          {/* Secondary: Quick Call CTA */}
          <aside className="md:col-span-1">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Prefer a quick call instead?
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Book a free 15-minute strategy call. We’ll quickly map your
                  situation and next steps. Zero pressure.
                </p>
                <Link
                  href="https://calendly.com/"
                  target="_blank"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700/40"
                >
                  Book Free 15-Minute Call
                </Link>
                <p className="mt-2 text-xs text-slate-500">
                  Opens in a new tab. You’ll receive confirmation & reminders.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h4 className="text-sm font-semibold text-slate-900">
                  Office
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Physical: 1463 State Route 1042, NuMine, PA 16244
                  <br />
                  Mailing: PO Box 167, NuMine, PA 16244
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  We are not a real estate broker; we acquire and sell our own
                  properties and offer consulting & habitat implementation.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

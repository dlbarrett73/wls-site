// /app/contact/page.tsx
import React from "react";
import Link from "next/link";

// SSG hint + light ISR for copy edits
export const dynamic = "force-static";
export const revalidate = 3600;

function Chip({ label }: { label: string }) {
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

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
    </div>
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
              Start with clarity. Build with confidence.
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
              If you’re serious about owning a property engineered to consistently
              produce encounters with mature whitetails, the first step is not a
              project.
              <span className="font-semibold text-slate-800">
                {" "}
                The first step is establishing truth.
              </span>
            </p>

            {/* Trust / positioning chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip label="PA-Based" />
              <Chip label="Forestry & Habitat Expertise" />
              <Chip label="Pressure & Access Discipline" />
              <Chip label="Audit-First Process" />
            </div>
          </div>

          {/* Pathways */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <PathCard
              title="Property Audit"
              desc="Establish the truth: ceiling, pressure variables, constraints, and the real opportunity."
              href="/property-audit"
            />
            <PathCard
              title="Why It Matters"
              desc="Understand why tactics without truth waste money—and why audit-first protects outcomes."
              href="/why-it-matters"
            />
            <PathCard
              title="Properties"
              desc="Explore hunt-ready properties engineered for giants (limited availability)."
              href="/properties"
            />
          </div>
        </div>
      </section>

      {/* ============== MAIN: Form + Sidebar ============== */}
      <section className="relative border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
          {/* Contact / Pre-Qual Form */}
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">
                Request next steps
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                This form is for serious inquiries only. We don’t provide quick
                opinions, free evaluations, or tactical recommendations without a
                completed audit. If your property and objectives align, we’ll
                invite you to apply for the{" "}
                <span className="font-semibold text-slate-800">
                  Blueprint for Giants® Property Audit
                </span>
                .
              </p>

              {/* Replace action with your API endpoint / CRM handler */}
              <form
                action="/api/contact"
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
                      htmlFor="location"
                      className="block text-sm font-medium text-slate-700"
                    >
                      County / State
                    </label>
                    <input
                      id="location"
                      name="location"
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
                      Approx. Acreage
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
                      htmlFor="ownershipStatus"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Ownership Status
                    </label>
                    <select
                      id="ownershipStatus"
                      name="ownershipStatus"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option>Owned</option>
                      <option>Under Contract</option>
                      <option>Exploring Purchase</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

                  <div>
                    <label
                      htmlFor="primaryObjective"
                      className="block text-sm font-medium text-slate-700"
                    >
                      Primary Objective
                    </label>
                    <select
                      id="primaryObjective"
                      name="primaryObjective"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option>Apply for a Property Audit</option>
                      <option>Improve My Current Property (Audit First)</option>
                      <option>Evaluate a Property Before Purchase</option>
                      <option>Buy a Hunt-Ready Property</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="howHeard"
                    className="block text-sm font-medium text-slate-700"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="howHeard"
                    name="howHeard"
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    <option>YouTube</option>
                    <option>Google Search</option>
                    <option>Referral</option>
                    <option>Social Media</option>
                    <option>Podcast / Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Notes (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    placeholder="Share your goals, constraints, and any known pressure/access realities. (No need to write a novel.)"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600/40 sm:w-auto"
                  >
                    Submit Inquiry
                  </button>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-700">
                    <span className="font-semibold text-slate-900">
                      What happens next:
                    </span>{" "}
                    We review every submission personally. If your property and
                    objectives align with our process, you’ll receive next-step
                    instructions for the{" "}
                    <span className="font-semibold text-slate-900">
                      Blueprint for Giants® Property Audit
                    </span>
                    . Please allow{" "}
                    <span className="font-semibold text-slate-900">
                      2–3 business days
                    </span>{" "}
                    for review.
                  </p>
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  By submitting, you agree to be contacted by Whitetail Land
                  Solutions. We respect your privacy.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="sticky top-6 space-y-6">
              <InfoCard title="Before you reach out">
                <ul className="mt-2 list-disc space-y-2 pl-5">
                  <li>
                    We do <span className="font-semibold">not</span> provide quick
                    opinions or free evaluations.
                  </li>
                  <li>
                    We do <span className="font-semibold">not</span> start with
                    habitat projects or tactics.
                  </li>
                  <li>
                    Every engagement begins with the{" "}
                    <span className="font-semibold">
                      Blueprint for Giants® Property Audit
                    </span>
                    .
                  </li>
                  <li>
                    If you want truth-first clarity and disciplined execution,
                    you’re in the right place.
                  </li>
                </ul>
              </InfoCard>

              <InfoCard title="Explore the process">
                <div className="mt-3 space-y-3">
                  <Link
                    href="/property-audit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700/40"
                  >
                    View Property Audit
                  </Link>
                  <Link
                    href="/why-it-matters"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-700/20"
                  >
                    Why Audit First?
                  </Link>
                </div>
              </InfoCard>

              <InfoCard title="Office">
                <p className="mt-1">
                  Mailing: PO Box 167, NuMine, PA 16244
                  <br />
                  Physical: 1463 State Route 1042, NuMine, PA 16244
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Whitetail Land Solutions, LLC is not a real estate broker. We
                  acquire and sell our own properties and offer consulting and
                  implementation services.
                </p>
              </InfoCard>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

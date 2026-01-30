// app/capture/execution/page.tsx
//
// Execution Application — lead-capture + pre-qualification form for clients
// who want Whitetail Land Solutions to help implement a System Plan.
// Aligned with the Audit → Plan → Execution doctrine and styled to match the
// other capture pages (simple hero, clear process, expectations, and a strong form).
//
// Submits to the existing `/api/lead` handler used by other capture pages.
// Hidden fields:
// - leadSource: "capture_execution"
// - offer: "Execution"

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Execution Application | Whitetail Land Solutions",
  description:
    "Apply for hands-on execution support to implement your Whitetail Land Solutions System Plan: access, pressure governance, habitat upgrades, and build-out sequencing.",
};

function Section({
  id,
  eyebrow,
  title,
  sub,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold tracking-wide text-slate-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {sub ? (
            <p className="mt-3 text-base leading-7 text-slate-600">{sub}</p>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  hint,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-slate-900"
      >
        {label} {required ? <span className="text-slate-500">*</span> : null}
      </label>
      {children}
      {hint ? <p className="text-xs text-slate-500">{hint}</p> : null}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400",
        "focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200",
      ].join(" ")}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900",
        "focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200",
      ].join(" ")}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={[
        "w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900",
        "placeholder:text-slate-400",
        "focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200",
      ].join(" ")}
    />
  );
}

function Divider() {
  return <div className="my-8 h-px w-full bg-slate-200" />;
}

function PrimaryButton({
  children,
  type = "button",
}: {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      className={[
        "inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold",
        "bg-slate-900 text-white shadow-sm transition",
        "hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function SecondaryLinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold",
        "border border-slate-300 bg-white text-slate-900 shadow-sm transition",
        "hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function ExecutionApplicationPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <div className="border-b border-slate-200 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-slate-200">
            Execution Application
          </p>

          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Implement your System Plan without guesswork, wasted weekends, or
            “random improvements.”
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            Execution is optional and selective. We help you build the property
            in the right order—so improvements add <em>capital</em> (security)
            and preserve daylight opportunities, instead of making pressure
            cheaper.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:max-w-xl">
            <PrimaryButton type="submit" form="execution-application">
              Apply for Execution
            </PrimaryButton>
            <SecondaryLinkButton href="/services/system-plan">
              Review the System Plan
            </SecondaryLinkButton>
          </div>

          <p className="mt-4 text-sm text-slate-300">
            Already have an Audit? Execution typically follows a{" "}
            <Link
              href="/services/system-plan"
              className="font-semibold text-white underline underline-offset-4"
            >
              System Plan
            </Link>{" "}
            so we’re building the right things for the right reasons.
          </p>
        </div>
      </div>

      {/* WHAT THIS IS / ISN’T */}
      <Section
        eyebrow="Before you apply"
        title="What Execution is (and what it isn’t)"
        sub="Execution exists to protect the system. We build what the plan calls for—sequenced to preserve security, access, and pressure governance."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Execution is…">
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Implementation support for a defined System Plan</li>
              <li>Sequenced work that increases security and reduces risk</li>
              <li>Access-first thinking (undetectable access, minimal intrusion)</li>
              <li>Clear scope, clear expectations, and clean handoffs</li>
            </ul>
          </Card>

          <Card title="Execution is not…">
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>A “do everything” renovation project</li>
              <li>Random habitat work without a system strategy</li>
              <li>Food-plot-first, movement-forcing design</li>
              <li>A promise of outcomes if pressure governance is ignored</li>
            </ul>
          </Card>

          <Card title="Best-fit clients">
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Want a property that can hold and hunt mature bucks ethically</li>
              <li>Value truth-first decisions over hype</li>
              <li>Can follow pressure rules and seasonal sequencing</li>
              <li>Prefer a professional, repeatable build process</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* PROCESS */}
      <div className="bg-slate-50">
        <Section
          id="process"
          eyebrow="How it works"
          title="Simple, high-integrity execution process"
          sub="We only take on execution when it protects the system and the client’s goals."
        >
          <div className="grid gap-6 md:grid-cols-4">
            <Card title="1) Apply">
              Answer a few questions so we can determine fit, timing, and scope.
            </Card>
            <Card title="2) Review">
              We review your Audit/System Plan status, goals, and constraints.
            </Card>
            <Card title="3) Alignment call">
              If it’s a fit, we confirm scope, sequencing, roles, and next steps.
            </Card>
            <Card title="4) Execute">
              Work begins with access + pressure governance, then habitat + food
              in the correct order.
            </Card>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Typical execution categories
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Scope varies by property. We’ll prioritize the work that protects
              the system first.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  t: "Access & intrusion control",
                  d: "Entry/exit routes, screening, and “silent” approaches that keep pressure expensive.",
                },
                {
                  t: "Security improvements",
                  d: "Bedding security and cover work that supports resident buck ownership.",
                },
                {
                  t: "Pressure governance setup",
                  d: "Rules, zones, sit budgets, and participation reality—so the plan actually works.",
                },
                {
                  t: "Habitat + structure upgrades",
                  d: "Timber work, edge work, and layout changes that raise structural ceiling.",
                },
                {
                  t: "Food as a supporting tool",
                  d: "Food that holds and stages inside a protected system—never the foundation.",
                },
                {
                  t: "Hunt-ready mapping + handoff",
                  d: "Clear maps, steps, and sequencing so you can maintain the system long term.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {x.t}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{x.d}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* APPLICATION FORM */}
      <Section
        id="apply"
        eyebrow="Execution application"
        title="Tell us what you’re working with"
        sub="This helps us determine fit, scope, and timing. If it looks aligned, we’ll follow up with next steps."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <form
              id="execution-application"
              action="/api/lead"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden routing fields for your API handler */}
              <input type="hidden" name="leadSource" value="capture_execution" />
              <input type="hidden" name="offer" value="Execution" />

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" name="name" required>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="First + last"
                  />
                </Field>

                <Field label="Email" name="email" required>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                  />
                </Field>

                <Field label="Phone" name="phone">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 555-5555"
                  />
                </Field>

                <Field label="State" name="state" required>
                  <Input
                    id="state"
                    name="state"
                    required
                    placeholder="PA, OH, NY…"
                  />
                </Field>
              </div>

              <Divider />

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Property acreage" name="acreage" required>
                  <Input
                    id="acreage"
                    name="acreage"
                    required
                    placeholder="e.g., 80, 160, 420"
                    inputMode="numeric"
                  />
                </Field>

                <Field label="Primary goal" name="primaryGoal" required>
                  <Select id="primaryGoal" name="primaryGoal" required>
                    <option value="">Select one</option>
                    <option value="consistent-mature-buck-opportunities">
                      Consistent mature buck opportunities
                    </option>
                    <option value="build-legacy-family-hunting">
                      Build a legacy / family hunting property
                    </option>
                    <option value="better-hunts-with-less-pressure">
                      Better hunts with less pressure risk
                    </option>
                    <option value="increase-holding-capacity">
                      Increase holding capacity / resident ownership
                    </option>
                    <option value="other">Other / mixed</option>
                  </Select>
                </Field>

                <Field
                  label="Do you already have a WLS System Plan?"
                  name="hasSystemPlan"
                  required
                >
                  <Select id="hasSystemPlan" name="hasSystemPlan" required>
                    <option value="">Select one</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="not-sure">Not sure</option>
                  </Select>
                </Field>

                <Field
                  label="Timeline"
                  name="timeline"
                  required
                  hint="When would you like to begin implementation work?"
                >
                  <Select id="timeline" name="timeline" required>
                    <option value="">Select one</option>
                    <option value="asap-next-30-days">ASAP (next 30 days)</option>
                    <option value="next-60-90-days">Next 60–90 days</option>
                    <option value="next-3-6-months">Next 3–6 months</option>
                    <option value="next-season">Next season</option>
                    <option value="planning-only">Planning only for now</option>
                  </Select>
                </Field>
              </div>

              <Divider />

              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Who will do the physical work?"
                  name="whoDoesWork"
                  required
                >
                  <Select id="whoDoesWork" name="whoDoesWork" required>
                    <option value="">Select one</option>
                    <option value="me">Me / my family</option>
                    <option value="my-contractors">My contractors</option>
                    <option value="wls-lead">WLS-led / WLS coordination</option>
                    <option value="not-sure">Not sure yet</option>
                  </Select>
                </Field>

                <Field
                  label="Participation level"
                  name="participationLevel"
                  required
                  hint="How many hunters will use the property most seasons?"
                >
                  <Select
                    id="participationLevel"
                    name="participationLevel"
                    required
                  >
                    <option value="">Select one</option>
                    <option value="1">1</option>
                    <option value="2-3">2–3</option>
                    <option value="4-6">4–6</option>
                    <option value="7+">7+</option>
                  </Select>
                </Field>
              </div>

              <Field
                label="What’s the #1 problem you’re trying to solve?"
                name="problem"
                required
                hint="Examples: can’t keep mature bucks daylight-active, access is blown, too many hunters, neighbors, etc."
              >
                <Textarea
                  id="problem"
                  name="problem"
                  required
                  rows={4}
                  placeholder="Describe the situation in plain language…"
                />
              </Field>

              <Field
                label="Current constraints"
                name="constraints"
                hint="Budget, time, equipment access, neighbors, easements, rules, etc."
              >
                <Textarea
                  id="constraints"
                  name="constraints"
                  rows={4}
                  placeholder="Anything we should know up front…"
                />
              </Field>

              <Field
                label="Links (optional)"
                name="links"
                hint="If you have them: OnX/CalTopo share link, Google Drive folder, images, aerial screenshots, etc."
              >
                <Input
                  id="links"
                  name="links"
                  placeholder="Paste any links here…"
                />
              </Field>

              <Divider />

              <Field
                label="Anything else we should know?"
                name="notes"
                hint="If you’re unsure, that’s fine. Just be honest."
              >
                <Textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Additional context…"
                />
              </Field>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm text-slate-600">
                  By submitting, you agree to be contacted by Whitetail Land
                  Solutions regarding your application. We don’t sell your
                  information. You can request deletion any time.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link
                    href="/privacy"
                    className="text-slate-900 underline underline-offset-4"
                  >
                    Privacy
                  </Link>
                  <Link
                    href="/terms"
                    className="text-slate-900 underline underline-offset-4"
                  >
                    Terms
                  </Link>
                </div>
              </div>

              <PrimaryButton type="submit">Submit execution application</PrimaryButton>

              <p className="text-xs text-slate-500">
                Prefer to start with truth-first diagnostics?{" "}
                <Link
                  href="/services/property-audit"
                  className="font-semibold text-slate-900 underline underline-offset-4"
                >
                  Begin with a Property Audit
                </Link>
                .
              </p>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                What we protect during execution
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">
                    Security first:
                  </span>{" "}
                  bedding = ownership; ownership = ceiling.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Access integrity:
                  </span>{" "}
                  we don’t “win” if your access blows the property up.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Pressure governance:
                  </span>{" "}
                  more participation lowers the floor unless it’s governed.
                </li>
                <li>
                  <span className="font-semibold text-slate-900">
                    Sequencing:
                  </span>{" "}
                  food and habitat are tools—only after structure is protected.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white">
                Not ready for execution?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                If you don’t have a System Plan yet, that’s normal. The clean
                path is:
              </p>
              <ol className="mt-4 space-y-2 text-sm text-slate-200">
                <li>
                  <span className="font-semibold text-white">1)</span>{" "}
                  <Link
                    href="/services/property-audit"
                    className="underline underline-offset-4"
                  >
                    Property Audit
                  </Link>{" "}
                  (truth + constraints)
                </li>
                <li>
                  <span className="font-semibold text-white">2)</span>{" "}
                  <Link
                    href="/services/system-plan"
                    className="underline underline-offset-4"
                  >
                    System Plan
                  </Link>{" "}
                  (the blueprint)
                </li>
                <li>
                  <span className="font-semibold text-white">3)</span> Execution
                  (optional implementation support)
                </li>
              </ol>

              <div className="mt-6 grid gap-3">
                <Link
                  href="/services/property-audit"
                  className={[
                    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold",
                    "bg-white text-slate-900 shadow-sm transition",
                    "hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/30",
                  ].join(" ")}
                >
                  Start with a Property Audit
                </Link>
                <Link
                  href="/services/system-plan"
                  className={[
                    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold",
                    "border border-white/30 bg-transparent text-white shadow-sm transition",
                    "hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30",
                  ].join(" ")}
                >
                  See the System Plan
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Response expectations
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We respond as quickly as possible. If you include links (maps,
                photos, etc.), it speeds up the review.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

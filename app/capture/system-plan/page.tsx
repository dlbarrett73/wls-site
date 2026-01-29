// wls-site/app/capture/system-plan/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Apply for a System Plan | Whitetail Land Solutions",
  description:
    "Apply for a Whitetail Land Solutions System Plan. Convert your Property Audit into a clear, huntable system that protects daylight movement and long-term results.",
};

function Button({
  children,
  type = "submit",
}: {
  children: React.ReactNode;
  type?: "submit" | "button";
}) {
  return (
    <button
      type={type}
      className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
    >
      {children}
    </button>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base text-slate-600">{subtitle}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export default function SystemPlanCapturePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex flex-wrap gap-2">
            <Badge>Blueprint for Giants® System Design</Badge>
            <Badge>Audit → Plan → Execution</Badge>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Apply for a System Plan
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            The System Plan turns your Property Audit into a clear, huntable
            strategy—so you know where, when, and how to hunt without damaging
            daylight movement or long-term results.
          </p>

          <p className="mt-4 text-sm text-slate-600">
            Built on the <strong>Blueprint for Giants®</strong> framework, this
            plan focuses on controlling human impact, protecting deer security,
            and creating repeatable opportunity.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <Section
        title="Before you apply"
        subtitle="The System Plan is not for everyone. This quick application helps us confirm fit."
      >
        <ul className="space-y-3 text-sm text-slate-700">
          <li>• You’ve completed (or are completing) a WLS Property Audit</li>
          <li>• You want repeatable mature buck opportunities, not shortcuts</li>
          <li>• You’re open to structure and discipline in how the property is hunted</li>
          <li>• You want clarity on what to do—and what to stop doing</li>
        </ul>

        <p className="mt-4 text-sm text-slate-600">
          If you’re looking for stand locations, movement tricks, or quick fixes,
          this is probably not a fit.
        </p>
      </Section>

      {/* FORM */}
      <Section
        title="System Plan application"
        subtitle="Answer honestly. This helps us design a plan that actually works."
      >
        <form
          action="/api/lead"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden fields */}
          <input type="hidden" name="leadSource" value="system-plan" />
          <input type="hidden" name="offer" value="system_plan" />

          {/* Contact */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-900">
                First name
              </label>
              <input
                name="firstName"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">
                Last name
              </label>
              <input
                name="lastName"
                required
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* Property context */}
          <div>
            <label className="block text-sm font-medium text-slate-900">
              Property location (state / county)
            </label>
            <input
              name="propertyLocation"
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900">
              Approximate property size (acres)
            </label>
            <input
              name="propertySize"
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900">
              What problem are you most trying to solve?
            </label>
            <textarea
              name="primaryProblem"
              rows={3}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              placeholder="Ex: daylight sightings disappeared, access feels risky, overhunting concerns, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900">
              How is the property currently hunted?
            </label>
            <textarea
              name="huntingPressure"
              rows={3}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              placeholder="Ex: number of hunters, frequency, seasons hunted"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-900">
              Why do you feel a System Plan is the right next step?
            </label>
            <textarea
              name="whySystemPlan"
              rows={3}
              required
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <Button>Submit application</Button>

          <p className="text-xs text-slate-500">
            We review applications personally. If you’re a fit, we’ll follow up
            with next steps. If not, we’ll tell you honestly.
          </p>
        </form>
      </Section>

      {/* FOOTNOTE */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-8 text-xs text-slate-500">
          Whitetail Land Solutions designs pressure-aware hunting systems. Results
          depend on property constraints, regional hunting pressure, timing, and
          execution discipline.
        </div>
      </div>
    </main>
  );
}

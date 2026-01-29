// wls-site/app/system-plan/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "System Plan | Whitetail Land Solutions",
  description:
    "The System Plan converts your Property Audit into a pressure-governed, security-first hunting system—built on the Blueprint for Giants® framework.",
};

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white shadow-sm hover:bg-slate-800"
      : variant === "secondary"
      ? "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
      : "text-slate-900 hover:bg-slate-50";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
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
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-3">
              <Badge>{eyebrow}</Badge>
            </div>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export default function SystemPlanPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge>Blueprint for Giants® System Design</Badge>
              <Badge>Audit → Plan → Execution</Badge>
              <Badge>Pressure-governed</Badge>
              <Badge>Security-first</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The System Plan
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              The System Plan converts your Property Audit into a pressure-governed,
              security-first hunting system—built on the Blueprint for Giants®
              framework to protect mature buck daylight opportunity.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/capture/system-plan" variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href="/capture/property-audit" variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              <strong>Blueprint for Giants®</strong> is the proprietary framework
              behind every WLS Audit, System Plan, and Execution project. It governs
              pressure, preserves security, and ensures hunting opportunities cost
              less than they produce.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <Section
        eyebrow="Framework → Application"
        title="Blueprint for Giants®, applied"
        subtitle="The System Plan is not generic consulting. It is applied system engineering—built from truth, constrained by reality, and governed by pressure."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              What the System Plan does
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li>• Converts Audit diagnostics into a coherent property-wide system</li>
              <li>• Allocates security, access, and opportunity—not stand locations</li>
              <li>• Identifies high-quality interception points without forcing movement</li>
              <li>• Governs pressure so participation doesn’t collapse daylight activity</li>
              <li>• Sequences seasons, sits, and builds to preserve capital</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              What Blueprint for Giants® prevents
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li>• Turning core security into ambush zones</li>
              <li>• Designing deer movement instead of managing pressure</li>
              <li>• Destination-food-driven hunting strategies</li>
              <li>• Stand-per-wind fantasies that ignore intrusion reality</li>
              <li>• Expensive “improvements” that make pressure cheaper</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section
        eyebrow="System outputs"
        title="What you receive"
        subtitle="Each System Plan deliverable is a direct application of the Blueprint for Giants® framework—designed to be executed without guesswork."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            "Pressure-governed system maps",
            "Access & intrusion risk protocols",
            "Hunt structure & sit budgets",
            "Seasonal & pressure sequencing",
            "Phased build priorities",
            "Executive action plan",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-medium text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        eyebrow="Next step"
        title="Turn truth into a huntable system"
        subtitle="If you’ve completed a Property Audit, the System Plan is the disciplined next step. If not, start with truth."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/capture/system-plan" variant="primary">
            Apply for a System Plan
          </ButtonLink>
          <ButtonLink href="/capture/property-audit" variant="secondary">
            Start with the Property Audit
          </ButtonLink>
        </div>
      </Section>

      {/* FOOTNOTE */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 text-xs text-slate-500">
          Blueprint for Giants® is the proprietary framework of Whitetail Land
          Solutions. Results depend on property constraints, regional pressure,
          timing, and execution discipline. We design systems to preserve security
          and make pressure expensive—not to force movement.
        </div>
      </div>
    </main>
  );
}

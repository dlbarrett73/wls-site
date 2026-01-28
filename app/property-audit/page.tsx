// app/property-audit/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "The Blueprint for Giants® Property Audit | Whitetail Land Solutions",
  description:
    "A truth-first, pressure-first property evaluation that defines what your land can realistically support and clarifies the safest next step—before planning or execution.",
};

function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600"
      : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 focus:ring-white";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
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
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-zinc-700">{children}</div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  subtitle,
  children,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mx-auto w-full max-w-6xl px-6">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="h-px w-full bg-black/10" />
    </div>
  );
}

export default function PropertyAuditPage() {
  return (
    <main className="bg-white">
      {/* HERO (Minimal, grounded) */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Start here
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The Blueprint for Giants® Property Audit
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            A comprehensive, pressure-first evaluation that defines what your property
            can realistically support — before you invest further time, money, or seasons.
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300">
            This audit is the required first step before any planning or execution work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/capture/property-audit" variant="primary">
              Apply for a Property Audit
            </ButtonLink>
            <ButtonLink href="#what-you-get" variant="secondary">
              What you receive
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* WHAT THIS AUDIT IS */}
      <Section
        eyebrow="What it is"
        title="What this audit is"
        subtitle="A structured evaluation of property structure, pressure, and risk — designed to define the governing constraints and decision boundaries before you do anything else."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="In plain terms">
            The Property Audit establishes what’s realistically possible, what’s quietly
            working against you, and what the safest path forward is — or the smartest place to stop.
          </Card>

          <Card title="What this is">
            <ul className="mt-1 space-y-2">
              <li>• A diagnostic evaluation (not a design engagement)</li>
              <li>• Pressure-first, truth-first, decision-grade findings</li>
              <li>• Built to clarify whether further investment makes sense</li>
            </ul>
          </Card>

          <Card title="What this is not">
            <ul className="mt-1 space-y-2">
              <li>• Not a habitat plan</li>
              <li>• Not stand locations or a hunting plan</li>
              <li>• Not guaranteed outcomes</li>
              <li>• Not an obligation to proceed further</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Divider />

      {/* WHAT YOU RECEIVE */}
      <Section
        id="what-you-get"
        eyebrow="What you receive"
        title="What you receive"
        subtitle="Each audit culminates in a set of clear findings and diagnostics you can rely on — whether you move forward or not."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Deliverables">
            <ul className="mt-1 space-y-2">
              <li>• Executive Truth Summary</li>
              <li>• Structural Ceiling Qualification</li>
              <li>• Pressure Scoring &amp; Risk Diagnostics</li>
              <li>• Daylight Opportunity Assessment</li>
              <li>• Capital Preservation &amp; Opportunity Guidance</li>
              <li>• Clear next-step recommendations (or hard stops)</li>
            </ul>

            <p className="mt-4 text-sm italic text-zinc-600">
              No fluff. No false hope. No selling execution before truth.
            </p>
          </Card>

          <Card title="What it does for you">
            It turns uncertainty into a decision you can trust: what to do next, what not to do,
            and what would be premature based on the realities governing your property.
          </Card>

          <Card title="What you keep">
            The audit deliverables are yours to keep and use — regardless of whether you ever engage
            WLS for planning or execution.
          </Card>
        </div>
      </Section>

      <Divider />

      {/* HOW THE PROCESS WORKS */}
      <Section
        id="how-it-works"
        eyebrow="How it works"
        title="How the process works"
        subtitle="A simple, intentional sequence that protects you from wasted seasons and misallocated effort."
      >
        <div className="grid gap-6 lg:grid-cols-5">
          <Card title="1) Application review">
            Not every property qualifies. Applications are reviewed individually to confirm fit and expectations.
          </Card>

          <Card title="2) Data collection">
            We gather maps, context, hunting history, and pressure inputs needed to evaluate your reality.
          </Card>

          <Card title="3) Evaluation">
            Structure, pressure, access, and surrounding context are assessed to identify governing constraints and risks.
          </Card>

          <Card title="4) Delivery">
            You receive your audit package — with clear findings, diagnostics, and decision paths.
          </Card>

          <Card title="5) Decision">
            You decide whether to proceed to System Planning, Execution, or stop. There is no obligation to continue.
          </Card>
        </div>
      </Section>

      <Divider />

      {/* TIMING & EXPECTATIONS */}
      <Section
        eyebrow="Timing"
        title="Timeline & expectations"
        subtitle="Clear expectations keep the engagement clean — and protect outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Timeline">
            <ul className="mt-1 space-y-2">
              <li>• Typical timeline: 2–4 weeks from acceptance (season and scope may vary)</li>
              <li>• Communication occurs at defined points in the process</li>
              <li>• You receive a complete audit package — not fragments</li>
            </ul>
          </Card>

          <Card title="What to expect">
            <ul className="mt-1 space-y-2">
              <li>• This is an evaluation, not an ongoing retainer</li>
              <li>• The audit defines what’s true, what’s false, and what’s next</li>
              <li>• If the smartest decision is to stop, we will say so</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Divider />

      {/* FIT (CONDENSED) */}
      <Section
        eyebrow="Fit"
        title="Who this is for — and who it isn’t"
        subtitle="A quick filter to protect you (and protect results)."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-zinc-900">This is a fit if:</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
              <li>• You want clarity before investing further</li>
              <li>• You value truth over optimism</li>
              <li>• You’re open to hearing limits and hard stops</li>
              <li>• You want a clean, disciplined path forward — even if you don’t hire us after</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-zinc-900">This is not a fit if:</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
              <li>• You want guaranteed outcomes</li>
              <li>• You want tactical instructions without evaluation</li>
              <li>• You’re unwilling to change pressure behavior</li>
              <li>• You’re looking for a free opinion or a casual consultation call</li>
            </ul>
          </div>
        </div>
      </Section>

      <Divider />

      {/* WHAT COMES AFTER */}
      <Section
        eyebrow="After the audit"
        title="What comes after the audit"
        subtitle="The audit is designed to make the next decision obvious — including the decision to stop."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="System Plan (optional)">
            Some clients proceed to a Blueprint for Giants® System Plan after the audit clarifies the governing constraints and paths forward.
          </Card>

          <Card title="Execution (optional)">
            Some clients proceed to Execution after the audit confirms the plan is viable and the rules for success are clear.
          </Card>

          <Card title="Stop (acceptable outcome)">
            Some clients choose not to proceed further. If that is the safest decision, the audit has done its job.
          </Card>
        </div>
      </Section>

      <Divider />

      {/* APPLY */}
      <Section
        eyebrow="Apply"
        title="Apply for a Property Audit"
        subtitle="Applications are reviewed individually. Not every property qualifies."
      >
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 bg-zinc-50 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-zinc-900">Ready to start?</p>
            <p className="mt-1 text-sm text-zinc-700">
              Clarity first. Execution only if it makes sense.
            </p>
          </div>

          <ButtonLink href="/capture/property-audit" variant="primary">
            Apply for a Property Audit
          </ButtonLink>
        </div>

        <div className="mt-6">
          <Link
            href="/contact"
            className="text-sm font-semibold text-zinc-900 underline decoration-black/20 underline-offset-4 transition hover:decoration-black/40"
          >
            Questions first? Contact us →
          </Link>
        </div>
      </Section>
    </main>
  );
}

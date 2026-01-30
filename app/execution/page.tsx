// app/execution/page.tsx
//
// WLS Execution — optional implementation support after a Property Audit + System Plan.
// This page is written to align with the locked doctrine: Audit → Plan → Execution.
// “Truth first.” We protect the system, preserve capital (deer & pressure), and engineer
// repeatable opportunities that cost less than they produce.
//
// Notes:
// - No fragile imports. Self-contained components.
// - No data fetching. Static, fast, safe.
// - Routes referenced here assume:
//   /property-audit (offer page)
//   /system-plan    (offer page)
//   /capture/execution (lead-capture application page)
//   /capture/property-audit (audit application)
//   /contact (optional)
//
// If your repo uses different routes, update the hrefs below.

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Execution | Whitetail Land Solutions",
  description:
    "Optional implementation support after your Property Audit and System Plan. We install the system without breaking it—access, pressure governance, security, and habitat improvements engineered for repeatable mature-buck opportunities.",
};

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : variant === "secondary"
        ? "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
        : "bg-transparent text-slate-900 hover:bg-slate-50";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="ml-2 text-lg leading-none">→</span>
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
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
  className = "",
}: {
  id?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {eyebrow ? <div className="mb-4">{eyebrow}</div> : null}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
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
  icon,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 ring-1 ring-slate-200">
            {icon}
          </div>
        ) : null}
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <div className="mt-3 text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-white">
        ✓
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function XItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-100 text-slate-900 ring-1 ring-slate-200">
        ✕
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-slate-200" />;
}

function FAQItem({
  q,
  a,
}: {
  q: React.ReactNode;
  a: React.ReactNode;
}) {
  return (
    <details className="group rounded-2xl bg-white p-6 ring-1 ring-slate-200">
      <summary className="cursor-pointer list-none font-semibold text-slate-900">
        <span className="flex items-center justify-between gap-6">
          <span>{q}</span>
          <span className="text-slate-400 transition group-open:rotate-45">+</span>
        </span>
      </summary>
      <div className="mt-4 text-slate-600">{a}</div>
    </details>
  );
}

export default function ExecutionPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Offer</Badge>
              <Badge>Optional</Badge>
              <Badge>After Audit + System Plan</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Execution that installs the system <span className="text-slate-200">without breaking it.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              You don’t need more “projects.” You need a pressure-safe sequence that protects security,
              improves access, and upgrades habitat in a way that preserves capital (deer & pressure).
              Execution is where we help you implement the System Plan with ruthless discipline.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/capture/execution" variant="primary">
                Apply for Execution
              </ButtonLink>
              <ButtonLink href="/system-plan" variant="secondary">
                See the System Plan
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              Not sure you’re ready? Start with{" "}
              <Link
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100"
                href="/property-audit"
              >
                the Property Audit
              </Link>{" "}
              — truth first.
            </p>
          </div>

          {/* Doctrine strip */}
          <div className="mt-12 grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">1) Audit</div>
              <div className="mt-2 text-sm text-slate-200">
                Establish what’s true: structure, pressure, access, security, ceiling & limiting factors.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">2) Plan</div>
              <div className="mt-2 text-sm text-slate-200">
                Engineer the system: pressure governance, access strategy, habitat sequence, sit budgets.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">3) Execution</div>
              <div className="mt-2 text-sm text-slate-200">
                Implement with discipline: install, verify, and keep the system intact through season.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <Section
        id="what-it-is"
        eyebrow={<Badge>What Execution is</Badge>}
        title="Implementation support designed to protect outcomes."
        subtitle={
          <>
            Execution is not “do more work.” It’s doing the <span className="font-semibold text-slate-900">right work</span>{" "}
            in the <span className="font-semibold text-slate-900">right order</span> without creating pressure debt that
            collapses daylight movement of mature bucks.
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card
            title="Sequence-first execution"
            icon={<span aria-hidden>🧭</span>}
          >
            We execute the System Plan in a pressure-safe sequence. The goal is not “more habitat.” The goal
            is a system that keeps mature bucks owning the property and exposes them in daylight at interception points.
          </Card>

          <Card
            title="Access & intrusion discipline"
            icon={<span aria-hidden>🕵️</span>}
          >
            We help install undetectable access standards: routes, timing, entry/exit behavior, and stand-area governance
            so you can hunt opportunities that cost less than they produce.
          </Card>

          <Card
            title="Verification & governance"
            icon={<span aria-hidden>📋</span>}
          >
            We verify that installed elements match the plan (and the doctrine). If something threatens security or
            makes pressure cheaper, we flag it, redesign it, or defer it.
          </Card>
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section
        id="who-its-for"
        className="bg-slate-50"
        eyebrow={<Badge>Fit</Badge>}
        title="Who Execution is for (and who it’s not)."
        subtitle="Execution is a high-touch partnership. We only take projects where the system can be protected and the work can be sequenced correctly."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Best fit</h3>
            <ul className="mt-6 space-y-4">
              <CheckItem>
                You’ve completed the <Link className="font-semibold underline underline-offset-4" href="/property-audit">Property Audit</Link>{" "}
                and have a validated diagnosis (ceiling, floor, limiting factors).
              </CheckItem>
              <CheckItem>
                You have a <Link className="font-semibold underline underline-offset-4" href="/system-plan">System Plan</Link>{" "}
                with clear sequence, access standards, pressure governance, and sit budgets.
              </CheckItem>
              <CheckItem>
                You care more about repeatable mature-buck opportunities than “cool projects.”
              </CheckItem>
              <CheckItem>
                You want accountability, clarity, and a pressure-safe build that won’t sabotage season.
              </CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Not a fit</h3>
            <ul className="mt-6 space-y-4">
              <XItem>
                You want us to “create movement,” force travel, or turn security into an ambush zone.
              </XItem>
              <XItem>
                You want food plots to compensate for broken access/pressure, or you refuse to govern pressure.
              </XItem>
              <XItem>
                You want to skip diagnosis and jump straight to implementation.
                (We won’t install guesses.)
              </XItem>
              <XItem>
                Your objective is maximum participation with no governance, regardless of impact on mature-buck ownership.
              </XItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* DELIVERABLES */}
      <Section
        id="what-you-get"
        eyebrow={<Badge>What you receive</Badge>}
        title="What Execution includes"
        subtitle="Execution is modular. We scope it to your plan, your constraints, and your timeline—without compromising the doctrine."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Implementation kickoff + sequencing" icon={<span aria-hidden>🚦</span>}>
            We translate the System Plan into an execution roadmap:
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Phase sequencing by pressure risk</li>
              <li>Install priorities vs deferrals</li>
              <li>Seasonal windows & “no-go” periods</li>
              <li>Owner participation plan (who does what)</li>
            </ul>
          </Card>

          <Card title="Access install & stand-area governance" icon={<span aria-hidden>🥾</span>}>
            We help implement access standards that protect daylight:
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Route refinement and entry/exit behavior</li>
              <li>Stand access hardening (screening, noise control)</li>
              <li>Pressure governance rules (sit budgets, rotations)</li>
              <li>Audit-grade intrusion risk checks</li>
            </ul>
          </Card>

          <Card title="Habitat work aligned to security" icon={<span aria-hidden>🌲</span>}>
            We focus on habitat that increases ownership and security:
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Security upgrades and bedding protection</li>
              <li>Edge/transition refinement (without forcing)</li>
              <li>Holding food that fits the system</li>
              <li>Pressure-safe screening & visual barriers</li>
            </ul>
          </Card>
        </div>

        <Divider />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Optional add-ons (when appropriate)</h3>
            <ul className="mt-6 space-y-4">
              <CheckItem>
                Contractor coordination (we help you manage the build so the system stays true to the plan)
              </CheckItem>
              <CheckItem>
                In-season governance support (pressure, timing, sequencing decisions)
              </CheckItem>
              <CheckItem>
                Post-season review + next-year upgrades (iterate without breaking the foundation)
              </CheckItem>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              We only recommend add-ons that protect outcomes. If something increases intrusion risk or makes pressure
              cheaper, it doesn’t get installed.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">What we will not do</h3>
            <p className="mt-4 text-slate-600">
              Execution is governed by the doctrine. That means we don’t trade short-term “action” for long-term system
              collapse.
            </p>
            <ul className="mt-6 space-y-4">
              <XItem>Design “mandatory paths,” pinch manipulation, or forced movement.</XItem>
              <XItem>Turn core security into hunt zones.</XItem>
              <XItem>Use food as a substitute for pressure governance.</XItem>
              <XItem>Recommend tactics that require luck, heroics, or constant intrusion.</XItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        className="bg-slate-50"
        eyebrow={<Badge>How it works</Badge>}
        title="A simple process that protects the system."
        subtitle="No confusion. No guessing. Clear gates, clear scope, clear outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 1</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">Eligibility</div>
            <p className="mt-3 text-slate-600">
              Execution is only available after a completed Audit + System Plan (or equivalent WLS-approved diagnosis).
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 2</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">Scope</div>
            <p className="mt-3 text-slate-600">
              We define phases, responsibilities, timelines, and constraints—then lock the sequence.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 3</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">Install</div>
            <p className="mt-3 text-slate-600">
              We implement access, security, and habitat improvements with pressure-safe standards.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 4</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">Govern</div>
            <p className="mt-3 text-slate-600">
              We verify the build, then help you govern pressure so the system holds through season.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-semibold text-slate-900">
                The only goal: repeatable opportunities on mature bucks.
              </h3>
              <p className="mt-3 text-slate-600">
                Execution is measured by system integrity—security held, pressure governed, and opportunities that cost
                less than they produce.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/capture/execution" variant="primary">
                Apply for Execution
              </ButtonLink>
              <ButtonLink href="/capture/property-audit" variant="secondary">
                Start with an Audit
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* INVESTMENT */}
      <Section
        id="investment"
        eyebrow={<Badge>Investment</Badge>}
        title="Transparent pricing. Custom scope."
        subtitle="Execution is scoped to your System Plan, your property, and your timeline. We price by phase and complexity—not by vague promises."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Phase-based scope" icon={<span aria-hidden>🧱</span>}>
            Most clients execute in phases (access/security first, then habitat refinements).
            This keeps pressure risk low and results predictable.
          </Card>
          <Card title="Owner-led or contractor-led" icon={<span aria-hidden>🤝</span>}>
            You can implement yourself, use your contractor, or have us coordinate execution support.
            We adapt to your reality without compromising the doctrine.
          </Card>
          <Card title="Built for accountability" icon={<span aria-hidden>🧾</span>}>
            Clear deliverables, clear responsibilities, and clear “stop rules” if conditions would threaten system integrity.
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-slate-900">What you can expect</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ul className="space-y-4">
              <CheckItem>Scoped proposal with phases, timeline windows, and responsibilities</CheckItem>
              <CheckItem>Execution standards that match the plan (access, security, pressure governance)</CheckItem>
              <CheckItem>Verification checkpoints to ensure the system stays intact</CheckItem>
            </ul>
            <ul className="space-y-4">
              <CheckItem>Clear constraints: what we do now vs what we defer</CheckItem>
              <CheckItem>Options for in-season governance support (when appropriate)</CheckItem>
              <CheckItem>A path to iterate next year without restarting from zero</CheckItem>
            </ul>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/capture/execution" variant="primary">
              Request a scoped proposal
            </ButtonLink>
            <ButtonLink href="/system-plan#investment" variant="ghost">
              See System Plan investment
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        className="bg-slate-50"
        eyebrow={<Badge>FAQ</Badge>}
        title="Execution questions, answered."
        subtitle="If you’re serious about outcomes, you’ll appreciate clear answers."
      >
        <div className="grid gap-4">
          <FAQItem
            q="Can I buy Execution without an Audit and System Plan?"
            a={
              <>
                No. Execution is implementation of a verified plan. Without diagnosis and a pressure-safe sequence,
                “execution” becomes expensive guessing. Start with the{" "}
                <Link className="font-semibold underline underline-offset-4" href="/property-audit">
                  Property Audit
                </Link>
                .
              </>
            }
          />
          <FAQItem
            q="Do you do the physical work?"
            a={
              <>
                Execution is support and governance. Depending on scope, we may coordinate contractors and guide install
                standards, but many clients implement owner-led work. Either way, the non-negotiable is system integrity:
                access, security, and pressure governance come first.
              </>
            }
          />
          <FAQItem
            q="Will you design movement or force deer to use certain paths?"
            a={
              <>
                No. We manage capital (deer & pressure), not deer movement. We protect security and build conditions for
                daylight exposure at ethical interception points. Forced movement systems collapse under pressure.
              </>
            }
          />
          <FAQItem
            q="What’s the typical timeline?"
            a={
              <>
                It depends on phases, seasonal windows, and contractor availability. The plan defines what must happen
                before season and what should wait. We will not rush work that increases intrusion risk or compromises
                security.
              </>
            }
          />
          <FAQItem
            q="What if my family hunts too?"
            a={
              <>
                We can support multi-hunter participation when governance is honest. In many cases, the property’s
                ceiling is fixed and the floor is what drops with participation. Execution helps install the rules,
                access, and rotations so participation doesn’t destroy outcomes.
              </>
            }
          />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-10 rounded-3xl bg-slate-900 p-10 text-white ring-1 ring-slate-800 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Truth-first</Badge>
                <Badge>System integrity</Badge>
                <Badge>Pressure governance</Badge>
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to implement the plan the right way?
              </h2>
              <p className="mt-4 text-slate-200">
                If you’ve completed the Audit and System Plan, Execution is how you install the system without
                compromising the very thing that makes mature bucks stay: security.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                If you haven’t started yet, begin with the{" "}
                <Link
                  className="font-semibold text-white underline underline-offset-4 hover:text-slate-100"
                  href="/capture/property-audit"
                >
                  Property Audit application
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <ButtonLink href="/capture/execution" variant="primary" className="bg-white text-slate-900 hover:bg-slate-100">
                Apply for Execution
              </ButtonLink>
              <ButtonLink href="/property-audit" variant="secondary" className="bg-transparent text-white ring-white/20 hover:bg-white/5">
                Review the Audit
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-600">
            <div>
              Prefer email?{" "}
              <Link className="font-semibold underline underline-offset-4" href="/contact">
                Contact us
              </Link>
              .
            </div>
            <div>
              Next step:{" "}
              <Link className="font-semibold underline underline-offset-4" href="/system-plan">
                System Plan
              </Link>{" "}
              →{" "}
              <span className="font-semibold text-slate-900">Execution</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

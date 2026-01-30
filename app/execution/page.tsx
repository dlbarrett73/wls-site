// app/execution/page.tsx
//
// WLS Execution — optional implementation support after a Property Audit + System Plan.
// Doctrine: Audit → Plan → Execution (truth-first). We protect the system, preserve
// capital (deer & pressure), and engineer repeatable opportunities that cost less than they produce.
//
// Notes:
// - Self-contained components (no fragile imports).
// - No data fetching. Static + fast.
// - Routes referenced (adjust if your repo differs):
//   /property-audit
//   /system-plan
//   /capture/execution
//   /capture/property-audit
//   /contact

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Execution | Whitetail Land Solutions",
  description:
    "Optional implementation support after your Property Audit and System Plan. We can install the system with our field crew—or guide an owner-led build—without breaking security, access, or pressure governance.",
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
          <span className="text-slate-400 transition group-open:rotate-45">
            +
          </span>
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
              Execution that installs the system{" "}
              <span className="text-slate-200">without breaking it.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              You don’t need more “projects.” You need a pressure-safe sequence
              that protects security, improves access, and upgrades habitat in a
              way that preserves capital (deer &amp; pressure). Execution is
              where we help you implement the System Plan with discipline.
            </p>

            {/* Updated CTAs: Execution-focused only */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/capture/execution" variant="primary">
                Apply for Execution
              </ButtonLink>
              <ButtonLink href="#scope-options" variant="secondary">
                Scope &amp; options
              </ButtonLink>
            </div>

            {/* Prereq line: keep Plan reference as small text, not a CTA */}
            <p className="mt-4 text-sm text-slate-300">
              Execution requires a completed{" "}
              <Link
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100"
                href="/system-plan"
              >
                System Plan
              </Link>{" "}
              (built from a truth-first{" "}
              <Link
                className="font-semibold text-white underline underline-offset-4 hover:text-slate-100"
                href="/property-audit"
              >
                Property Audit
              </Link>
              ).
            </p>

            {/* New capability note (without exposing subcontract structure) */}
            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">
                Owner-led or WLS-installed
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Choose your lane: implement it yourself with our guidance, or
                have WLS execute the build with our experienced field crew and
                equipment—always governed by the doctrine.
              </p>
            </div>
          </div>

          {/* Doctrine strip */}
          <div className="mt-12 grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">1) Audit</div>
              <div className="mt-2 text-sm text-slate-200">
                Establish what’s true: structure, pressure, access, security,
                ceiling &amp; limiting factors.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">2) Plan</div>
              <div className="mt-2 text-sm text-slate-200">
                Engineer the system: pressure governance, access strategy,
                habitat sequence, sit budgets.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">
                3) Execution
              </div>
              <div className="mt-2 text-sm text-slate-200">
                Implement with discipline: install, verify, and keep the system
                intact through season.
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
            Execution is not “do more work.” It’s doing the{" "}
            <span className="font-semibold text-slate-900">right work</span> in
            the <span className="font-semibold text-slate-900">right order</span>{" "}
            without creating pressure debt that collapses daylight movement of
            mature bucks.
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Sequence-first execution" icon={<span aria-hidden>🧭</span>}>
            We execute the System Plan in a pressure-safe sequence. The goal is
            not “more habitat.” The goal is a system that keeps mature bucks
            owning the property and exposes them in daylight at ethical
            interception points.
          </Card>

          <Card title="Access & intrusion discipline" icon={<span aria-hidden>🕵️</span>}>
            We help install undetectable access standards: routes, timing,
            entry/exit behavior, and stand-area governance so you can hunt
            opportunities that cost less than they produce.
          </Card>

          <Card title="WLS-installed or owner-led" icon={<span aria-hidden>🛠️</span>}>
            You can implement yourself (with guardrails) or have WLS install the
            system with our field crew and equipment. Either way, we verify the
            build against the plan and the doctrine.
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
                You’ve completed the{" "}
                <Link
                  className="font-semibold underline underline-offset-4"
                  href="/property-audit"
                >
                  Property Audit
                </Link>{" "}
                and have a validated diagnosis (ceiling, floor, limiting
                factors).
              </CheckItem>
              <CheckItem>
                You have a{" "}
                <Link
                  className="font-semibold underline underline-offset-4"
                  href="/system-plan"
                >
                  System Plan
                </Link>{" "}
                with clear sequence, access standards, pressure governance, and
                sit budgets.
              </CheckItem>
              <CheckItem>
                You care more about repeatable mature-buck opportunities than
                “cool projects.”
              </CheckItem>
              <CheckItem>
                You want accountability, clarity, and a pressure-safe build that
                won’t sabotage season.
              </CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Not a fit</h3>
            <ul className="mt-6 space-y-4">
              <XItem>
                You want us to “create movement,” force travel, or turn security
                into an ambush zone.
              </XItem>
              <XItem>
                You want food plots to compensate for broken access/pressure, or
                you refuse to govern pressure.
              </XItem>
              <XItem>
                You want to skip diagnosis and jump straight to implementation.
                (We won’t install guesses.)
              </XItem>
              <XItem>
                Your objective is maximum participation with no governance,
                regardless of impact on mature-buck ownership.
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
              <li>Seasonal windows &amp; “no-go” periods</li>
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
              <li>Pressure-safe screening &amp; visual barriers</li>
            </ul>
          </Card>
        </div>

        <Divider />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Optional add-ons (when appropriate)
            </h3>
            <ul className="mt-6 space-y-4">
              <CheckItem>
                Contractor coordination (we help manage the build so the system
                stays true to the plan)
              </CheckItem>
              <CheckItem>
                In-season governance support (pressure, timing, sequencing
                decisions)
              </CheckItem>
              <CheckItem>
                Post-season review + next-year upgrades (iterate without
                breaking the foundation)
              </CheckItem>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              We only recommend add-ons that protect outcomes. If something
              increases intrusion risk or makes pressure cheaper, it doesn’t get
              installed.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              What we will not do
            </h3>
            <p className="mt-4 text-slate-600">
              Execution is governed by the doctrine. That means we don’t trade
              short-term “action” for long-term system collapse.
            </p>
            <ul className="mt-6 space-y-4">
              <XItem>
                Design “mandatory paths,” pinch manipulation, or forced
                movement.
              </XItem>
              <XItem>Turn core security into hunt zones.</XItem>
              <XItem>Use food as a substitute for pressure governance.</XItem>
              <XItem>
                Recommend tactics that require luck, heroics, or constant
                intrusion.
              </XItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* NEW: HABITAT & IMPLEMENTATION EXAMPLES */}
      <Section
        id="habitat-examples"
        className="bg-slate-50"
        eyebrow={<Badge>Field work</Badge>}
        title="Habitat & implementation examples"
        subtitle={
          <>
            Execution isn’t a generic “habitat list.” We install the{" "}
            <span className="font-semibold text-slate-900">
              specific sequence
            </span>{" "}
            your System Plan requires—only where the system can protect it.
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Access + intrusion control
            </h3>
            <p className="mt-3 text-slate-600">
              The goal is undetectable access and pressure governance that
              preserves daylight.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Access route clearing &amp; hardening (low-impact)</CheckItem>
              <CheckItem>Screening for entry/exit concealment</CheckItem>
              <CheckItem>Stand-area approach refinements to reduce noise/visibility</CheckItem>
              <CheckItem>Trail and edge work only when it lowers intrusion risk</CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Security + structure
            </h3>
            <p className="mt-3 text-slate-600">
              We increase ownership by improving security—without turning
              security into an ambush zone.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Edge feathering / soft-edge structure where appropriate</CheckItem>
              <CheckItem>
                Timber stand improvement (TSI) aligned to security objectives
              </CheckItem>
              <CheckItem>
                Select hinge-cutting when it increases security and does not
                compromise governance
              </CheckItem>
              <CheckItem>Screening trees/shrubs where they protect access or security</CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Food + holding (system-governed)
            </h3>
            <p className="mt-3 text-slate-600">
              Food matters—but only inside a system that can protect it. We use
              food to support holding, not to “pull” through broken access.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Spraying / weed control</CheckItem>
              <CheckItem>Soil conditioning and amendments (as needed)</CheckItem>
              <CheckItem>Seedbed prep, planting, and plot renovation</CheckItem>
              <CheckItem>Maintenance plans that respect pressure windows</CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Hunt infrastructure (installed to standards)
            </h3>
            <p className="mt-3 text-slate-600">
              We install infrastructure only where access and governance can
              keep it viable.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Stand/blind installation with access-first sit criteria</CheckItem>
              <CheckItem>Low-impact observation options (when appropriate)</CheckItem>
              <CheckItem>Screening and approach standards at each setup</CheckItem>
              <CheckItem>Verification against the System Plan before “go-live”</CheckItem>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white ring-1 ring-slate-800">
          <h3 className="text-xl font-semibold">Our stop rules (non-negotiable)</h3>
          <p className="mt-3 text-slate-200">
            If an install would raise intrusion risk, compromise core security,
            or make pressure cheaper, we redesign it, defer it, or remove it.
            Execution exists to protect outcomes—not to rack up “projects.”
          </p>
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow={<Badge>How it works</Badge>}
        title="A simple process that protects the system."
        subtitle="No confusion. No guessing. Clear gates, clear scope, clear outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 1</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">
              Eligibility
            </div>
            <p className="mt-3 text-slate-600">
              Execution is only available after a completed Audit + System Plan
              (or equivalent WLS-approved diagnosis).
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 2</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">Scope</div>
            <p className="mt-3 text-slate-600">
              We define phases, responsibilities, timeline windows, and
              constraints—then lock the sequence.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 3</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">
              Install
            </div>
            <p className="mt-3 text-slate-600">
              Owner-led or WLS-installed: we implement access, security, and
              habitat improvements with pressure-safe standards.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
            <div className="text-xs font-semibold text-slate-500">STEP 4</div>
            <div className="mt-2 text-lg font-semibold text-slate-900">
              Govern
            </div>
            <p className="mt-3 text-slate-600">
              We verify the build, then help you govern pressure so the system
              holds through season.
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
                Execution is measured by system integrity—security held, pressure
                governed, and opportunities that cost less than they produce.
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

      {/* UPDATED: SCOPE & OPTIONS (replaces Investment) */}
      <Section
        id="scope-options"
        eyebrow={<Badge>Scope &amp; options</Badge>}
        title="Transparent scope. Options that match reality."
        subtitle="Execution is scoped to your System Plan, your property, and your timeline. We price and schedule by phase and complexity—not by vague promises."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Phase-based execution" icon={<span aria-hidden>🧱</span>}>
            Most clients execute in phases (access/security first, then habitat
            refinements). This keeps pressure risk low and results predictable.
          </Card>

          <Card title="Owner-led or WLS-installed" icon={<span aria-hidden>🚜</span>}>
            Implement it yourself with guardrails—or have WLS install the build
            with our crew and equipment. Either way, the doctrine governs what
            happens and when.
          </Card>

          <Card title="Accountability + stop rules" icon={<span aria-hidden>🧾</span>}>
            Clear responsibilities, clear checkpoints, and clear “stop rules” if
            a change would compromise security or make pressure cheaper.
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-slate-900">
            What you receive in your scoped proposal
          </h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ul className="space-y-4">
              <CheckItem>
                Phase plan with timeline windows (and what must wait)
              </CheckItem>
              <CheckItem>
                Responsibilities (owner vs WLS crew vs contractor)
              </CheckItem>
              <CheckItem>
                Execution standards that match your System Plan
              </CheckItem>
            </ul>
            <ul className="space-y-4">
              <CheckItem>
                Verification checkpoints (install quality + pressure risk)
              </CheckItem>
              <CheckItem>
                Clear constraints and deferrals (what we do not touch right now)
              </CheckItem>
              <CheckItem>
                Optional governance support if participation/pressure requires it
              </CheckItem>
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/capture/execution" variant="primary">
              Request a scoped proposal
            </ButtonLink>
            <ButtonLink href="#habitat-examples" variant="secondary">
              See field work examples
            </ButtonLink>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            If you haven’t completed the Audit + System Plan, Execution isn’t the
            next step. Start with the{" "}
            <Link
              className="font-semibold underline underline-offset-4"
              href="/capture/property-audit"
            >
              Property Audit application
            </Link>
            .
          </p>
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
                No. Execution is implementation of a verified plan. Without
                diagnosis and a pressure-safe sequence, “execution” becomes
                expensive guessing. Start with the{" "}
                <Link
                  className="font-semibold underline underline-offset-4"
                  href="/property-audit"
                >
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
                Yes—Execution can be owner-led or WLS-installed. If you want a
                done-with-you build, we can install key elements with our field
                crew and equipment, then verify everything against the System
                Plan and the doctrine.
              </>
            }
          />
          <FAQItem
            q="Will you design movement or force deer to use certain paths?"
            a={
              <>
                No. We manage capital (deer &amp; pressure), not deer movement.
                We protect security and build conditions for daylight exposure at
                ethical interception points. Forced movement systems collapse
                under pressure.
              </>
            }
          />
          <FAQItem
            q="What’s the typical timeline?"
            a={
              <>
                It depends on phases, seasonal windows, and availability. The
                plan defines what must happen before season and what should
                wait. We will not rush work that increases intrusion risk or
                compromises security.
              </>
            }
          />
          <FAQItem
            q="What if my family hunts too?"
            a={
              <>
                We can support multi-hunter participation when governance is
                honest. In many cases, the property’s ceiling is fixed and the
                floor is what drops with participation. Execution helps install
                the rules, access, and rotations so participation doesn’t
                destroy outcomes.
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
                If you’ve completed the Audit and System Plan, Execution is how
                you install the system without compromising the very thing that
                makes mature bucks stay: security.
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
              <ButtonLink
                href="/capture/execution"
                variant="primary"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                Apply for Execution
              </ButtonLink>
              <ButtonLink
                href="/property-audit"
                variant="secondary"
                className="bg-transparent text-white ring-white/20 hover:bg-white/5"
              >
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
              <Link
                className="font-semibold underline underline-offset-4"
                href="/system-plan"
              >
                System Plan
              </Link>{" "}
              → <span className="font-semibold text-slate-900">Execution</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

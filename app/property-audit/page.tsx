// app/property-audit/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blueprint for Giants® Property Audit | Whitetail Land Solutions",
  description:
    "Stop guessing. Start knowing. A pressure-first diagnostic that reveals what your property can truly produce—and why.",
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
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950";
  const styles =
    variant === "primary"
      ? "bg-emerald-500 text-zinc-950 shadow-[0_10px_30px_rgba(16,185,129,0.22)] hover:bg-emerald-400 focus:ring-emerald-400"
      : "bg-white/8 text-white ring-1 ring-white/15 backdrop-blur-sm hover:bg-white/12 focus:ring-white";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function Section({
  title,
  children,
  muted = false,
}: {
  title: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={`py-20 sm:py-24 ${muted ? "bg-zinc-50/70" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="mb-4 h-px w-14 bg-emerald-500/70" />
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-8 max-w-4xl text-lg leading-relaxed text-zinc-700">
          {children}
        </div>
      </div>
    </section>
  );
}

function StatementCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
}

function AuditPreview() {
  return (
    <div className="mt-16 rounded-3xl bg-zinc-100/60 px-6 py-12">
      <div className="flex flex-col items-center">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
          Sample Deliverable
        </p>

        <p className="mt-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-zinc-700">
          18+ Page System Audit
        </p>

        <div className="relative mt-6 w-full max-w-5xl">
          <div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.15)]">
            <Image
              src="/images/property-audit-mockup.png"
              alt="Blueprint for Giants Property Audit sample deliverable"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-center text-sm text-zinc-500">
          Every Blueprint for Giants® Property Audit is a comprehensive, 18+ page
          report that includes system diagnostics, pressure analysis, movement
          evaluation, and clear decision paths.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-500">
          <span>18+ Pages</span>
          <span>System Diagnostics</span>
          <span>Property Mapping</span>
          <span>Decision Framework</span>
        </div>

        <p className="mt-3 text-center text-xs text-zinc-400">
          Based on real client properties in Pennsylvania and similar pressure-heavy regions.
        </p>
      </div>
    </div>
  );
}

export default function PropertyAuditPage() {
  return (
    <main className="bg-white text-zinc-950">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_20%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-sm">
              Blueprint for Giants®
            </div>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Stop Guessing. Start Knowing.
            </h1>

            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              If your property isn’t producing consistent daylight opportunities
              at mature bucks, it’s not a deer problem—it’s a system failure.
            </p>

           <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
  <p>
    Most landowners spend years improving habitat, adding food, and hanging stands—yet still experience inconsistent or declining results.
  </p>

  <p>
    Not because they lack effort. Not because they lack deer.
  </p>

  <p className="font-semibold text-white">
    Because the property is being hunted in a way the system cannot support.
  </p>

  <p>
    Access routes educate deer. Pressure accumulates. Movement shifts. Daylight opportunity disappears.
  </p>

  <p>
    The stand that “should” work never produces. The field gets activity—after dark. The buck you’re hunting changes patterns the moment you hunt him.
  </p>

  <p>
    The result is a property that looks good on paper—but fails when it matters.
  </p>

  <p className="pt-2 text-white font-semibold">
    The Property Audit exposes how your property actually functions under pressure—and what is truly limiting your results.
  </p>

  <p>
    This is Step 1 in the Blueprint for Giants® process. Diagnose the system first. Only then decide whether a full System Plan or execution work is justified.
  </p>
</div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/capture/property-audit" variant="primary">
                Apply for Your Property Audit
              </ButtonLink>
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
              $2,500 Diagnostic • 30-Day Credit Toward System Plan
            </p>

            <p className="mt-4 text-sm text-zinc-400">
              Limited monthly availability. Serious landowners only.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section title="Why Most Properties Underperform">
        <div className="space-y-6">
          <p>Most properties fail for one reason:</p>

          <StatementCard className="border-zinc-300 bg-zinc-50">
            <p className="text-xl font-semibold text-zinc-950">
              Pressure is mismanaged—and the system breaks because of it.
            </p>
          </StatementCard>

          <p>Not habitat. Not genetics. Not “not enough deer.”</p>

          <p className="font-semibold text-zinc-950">Pressure.</p>

          <BulletList
            items={[
              <>Entry and exit routes contaminate movement</>,
              <>“Good spots” get overhunted</>,
              <>Daylight movement disappears</>,
            ]}
          />

          <p className="pt-2">
            If you don’t understand how pressure interacts with your property’s
            structure, you are guessing—no matter how experienced you are.
          </p>
        </div>
      </Section>

      <Divider />

      {/* WHAT THIS IS */}
      <Section title="What the Property Audit Actually Does" muted>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p>This is not a consultation.</p>
            <p>This is not a habitat walk-through.</p>
            <p>This is not generic advice.</p>

            <StatementCard className="bg-white">
              <p className="text-xl font-semibold leading-relaxed text-zinc-950">
                This is a truth-first diagnostic of your property as a system.
              </p>
            </StatementCard>

            <p>We identify:</p>

            <BulletList
              items={[
                <>Your property’s true structural ceiling</>,
                <>Your current functional floor under pressure</>,
                <>The gap between potential and reality</>,
                <>The primary limiting factor</>,
              ]}
            />
          </div>

          <div>
            <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-300">
                Outcome
              </p>
              <p className="mt-4 text-2xl font-semibold leading-relaxed">
                You will leave knowing exactly what your property can produce—and
                why it isn’t right now.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* PROCESS */}
      <Section title="One Process. Up to Three Steps.">
        <div className="grid gap-6 lg:grid-cols-3">
          <StatementCard className="border-emerald-200 bg-emerald-50/40">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Step 1
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-950">
              Property Audit
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              Diagnose the truth about the property, identify constraints, and
              define decision boundaries before money is spent in the wrong place.
            </p>
          </StatementCard>

          <StatementCard>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Step 2
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-950">
              System Plan
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              If the audit confirms a viable opportunity, we engineer the
              property system: access, stands, pressure rules, movement, habitat,
              food, and implementation priorities.
            </p>
          </StatementCard>

          <StatementCard>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Step 3
            </p>
            <h3 className="mt-3 text-xl font-semibold text-zinc-950">
              Execution
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              When appropriate, we help bring the system to life in the field
              through disciplined implementation.
            </p>
          </StatementCard>
        </div>

        <StatementCard className="mt-8 border-zinc-300 bg-zinc-50">
          <p className="text-lg font-semibold leading-relaxed text-zinc-950">
            Most serious clients already know they want a plan. The audit simply
            makes sure the plan is built on truth.
          </p>
        </StatementCard>
      </Section>

      <Divider />

      {/* DIFFERENTIATOR */}
      <Section title="Built on Pressure Governance" muted>
        <div className="grid gap-6 lg:grid-cols-3">
          <StatementCard>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Most strategies focus on
            </p>
            <p className="mt-4 text-lg font-semibold text-zinc-950">
              Food, habitat, and stand placement
            </p>
          </StatementCard>

          <StatementCard className="border-emerald-200 bg-emerald-50/50">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-700">
              We focus on
            </p>
            <p className="mt-4 text-lg font-semibold text-zinc-950">
              Pressure Governance
            </p>
          </StatementCard>

          <StatementCard>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
              Why it matters
            </p>
            <p className="mt-4 text-lg font-semibold text-zinc-950">
              If pressure is mismanaged, everything else collapses.
            </p>
          </StatementCard>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-5 text-center shadow-sm">
            <p className="text-base font-semibold text-zinc-950">
              Pressure controls movement
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-5 text-center shadow-sm">
            <p className="text-base font-semibold text-zinc-950">
              Movement creates opportunity
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-5 text-center shadow-sm">
            <p className="text-base font-semibold text-zinc-950">
              Opportunity determines success
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <p>
            This doesn’t mean habitat, food, or deer management don’t matter.
          </p>
          <p>
            It means they only work when the system supports them.
          </p>
          <p>
            Pressure Governance does not mean we ignore habitat, food, bedding,
            timber, travel corridors, or stand placement. It means we evaluate all
            of them through the factor that determines whether mature bucks
            actually remain killable in daylight: human pressure.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Habitat</p>
            <p className="mt-1 text-xs text-zinc-500">
              Only works if security is protected
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Food</p>
            <p className="mt-1 text-xs text-zinc-500">
              Shapes movement, doesn’t create it
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center shadow-sm">
            <p className="text-sm font-semibold text-zinc-900">Deer Management</p>
            <p className="mt-1 text-xs text-zinc-500">
              Fails without system alignment
            </p>
          </div>
        </div>

        <StatementCard className="mt-10 border-zinc-300 bg-zinc-50">
          <p className="text-lg font-semibold text-zinc-950">
            We don’t design what your system can’t support.
          </p>
        </StatementCard>
      </Section>

      <Divider />

      {/* WHAT YOU GET */}
      <Section title="What You Walk Away With">
        <div className="space-y-6">
          <p>
            Every audit produces a structured, decision-grade report — often 18+
            pages — built to show you how your property actually functions under
            pressure.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Executive Truth Summary",
              "Structural Ceiling Assessment",
              "Pressure Risk Analysis",
              "Movement & Corridor Evaluation",
              "Primary Limiting Factor Diagnosis",
              "Clear decision path: what to do, not do, ignore",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-200 bg-white px-5 py-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-base font-medium leading-relaxed text-zinc-800">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <StatementCard className="mt-8 border-zinc-300 bg-zinc-950 text-white shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
          <p className="text-xl font-semibold leading-relaxed">
            You will know exactly where you stand—and what it will take to
            improve it.
          </p>
        </StatementCard>

        <AuditPreview />
      </Section>

      <Divider />

      {/* INVESTMENT */}
      <Section title="Investment" muted>
        <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
          Fixed Investment • Decision-Grade Engagement
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <StatementCard className="border-zinc-300 bg-zinc-50">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Blueprint for Giants® Property Audit
            </p>
            <p className="mt-4 text-5xl font-bold tracking-tight text-zinc-950">
              $2,500
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-700">
              100% of your audit is credited toward a System Plan if the audit
              confirms the right path and you proceed within 30 days.
            </p>
          </StatementCard>

          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-[0_20px_50px_rgba(16,185,129,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Audit Confidence Guarantee
            </p>
            <p className="mt-4 text-xl font-semibold leading-relaxed text-zinc-950">
              If we cannot clearly identify what is limiting your property and
              provide a defensible path forward, you don’t pay.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* FILTER */}
      <Section title="This Is Not for Everyone">
        <div className="grid gap-6 lg:grid-cols-2">
          <StatementCard>
            <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">
              This is not for
            </p>
            <BulletList
              items={[
                <>Casual hunters looking for tips</>,
                <>Landowners unwilling to change</>,
                <>Anyone seeking validation instead of truth</>,
              ]}
            />
          </StatementCard>

          <div className="rounded-3xl border border-zinc-950 bg-zinc-950 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <p className="text-sm uppercase tracking-[0.16em] text-zinc-400">
              This is for
            </p>
            <p className="mt-5 text-2xl font-semibold leading-relaxed">
              Serious landowners who want predictable, repeatable results.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* SCARCITY */}
      <Section title="Limited Availability" muted>
        <p>
          We take on a limited number of audits each month to maintain quality.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            "Long-term landowners",
            "Serious about results",
            "Committed to disciplined systems",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-6 shadow-sm"
            >
              <p className="text-center text-base font-semibold text-zinc-950">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-zinc-950 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_32%)]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Start with the Audit. Advance Only if the Truth Supports It.
            </h2>

            <div className="mt-8">
              <ButtonLink href="/capture/property-audit" variant="primary">
                Apply for Your Property Audit
              </ButtonLink>
            </div>

            <p className="mt-5 text-base text-zinc-400">
              The audit is the first step. The right next step may be a System
              Plan, Execution, or a disciplined stop.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

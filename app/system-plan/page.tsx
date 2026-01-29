// wls-site/app/system-plan/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "System Plan | Whitetail Land Solutions",
  description:
    "Turn truth into a huntable system. The System Plan converts your Property Audit into a pressure-aware, security-first design you can execute with confidence.",
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
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white shadow-sm hover:bg-slate-800"
      : variant === "secondary"
      ? "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
      : "text-slate-900 hover:bg-slate-50";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
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
    <section id={id} className="py-14 sm:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className="mb-3">
              <Badge>{eyebrow}</Badge>
            </div>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{children}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-slate-200" aria-hidden="true" />;
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16.25 5.75L8.5 13.5L3.75 8.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div className="mt-0.5 text-slate-900">
            <CheckIcon />
          </div>
          <span className="text-sm leading-relaxed text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Quote({
  children,
  author,
}: {
  children: React.ReactNode;
  author?: string;
}) {
  return (
    <figure className="rounded-3xl bg-slate-900 px-8 py-10 text-white shadow-sm">
      <blockquote className="text-lg leading-relaxed text-white/90">
        “{children}”
      </blockquote>
      {author ? (
        <figcaption className="mt-4 text-sm font-semibold text-white/80">
          — {author}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default function SystemPlanPage() {
  const applyHref = "/capture/system-plan";
  const auditHref = "/capture/property-audit";
  const executionHref = "/execution";

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_20%_10%,rgba(15,23,42,0.08),transparent_50%),radial-gradient(50rem_50rem_at_90%_40%,rgba(15,23,42,0.06),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Blueprint for Giants® System Design</Badge>
              <Badge>Audit → Plan → Execution</Badge>
              <Badge>Security-first</Badge>
              <Badge>Pressure-aware</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The System Plan
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A Property Audit tells you what’s true about your land. The System
              Plan turns that truth into a clear, huntable strategy—so you know
              where, when, and how to hunt without damaging daylight movement or
              long-term results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={applyHref} variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href={auditHref} variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>

            <p className="mt-4 max-w-2xl text-sm text-slate-600">
              <span className="font-semibold text-slate-900">
                Blueprint for Giants®
              </span>{" "}
              is the proprietary framework behind every WLS Audit, System Plan,
              and Execution project. It focuses on human impact, deer security,
              and repeatable hunting opportunity—without forcing movement.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Card title="Built from your Audit">
              This isn’t a generic map pack. We start with your Audit diagnostics
              and build a system that fits your property’s real constraints.
            </Card>
            <Card title="Protects daylight activity">
              The plan is designed to reduce the chance you “burn” the property
              by overhunting, poor access, or bad timing.
            </Card>
            <Card title="Execution-ready clarity">
              You’ll know what to do, what to avoid, and what to prioritize—so
              your improvements help instead of backfiring.
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT THIS DOES */}
      <Section
        id="what-it-does"
        eyebrow="Truth → System"
        title="What the System Plan actually does"
        subtitle="Most hunting plans fail for one reason: human impact overwhelms deer behavior. The System Plan shows you how to hunt your property without educating deer or burning your best areas."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              What you get (in plain English)
            </h3>
            <div className="mt-5">
              <BulletList
                items={[
                  "A huntable system built from your Property Audit—not guesswork.",
                  "Where deer already want to travel during daylight—without forcing movement.",
                  "Access guidance so you can enter and exit with minimal disturbance.",
                  "Clear sit guidance: when to hunt, when not to, and why.",
                  "Build priorities that protect the system while you improve it.",
                ]}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              This is not what we do
            </h3>
            <div className="mt-5">
              <BulletList
                items={[
                  "We don’t sell stand-per-wind fantasies that ignore intrusion reality.",
                  "We don’t ‘create movement’ by dragging deer out of secure areas.",
                  "We don’t build the plan around destination food as the hunt solution.",
                  "We don’t turn core security into ambush zones (that’s where systems collapse).",
                  "We don’t hand you a map pack that falls apart after a few hunts.",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Quote author="WLS Doctrine">
            We don’t try to make deer do something unnatural. We build systems
            that let deer behave naturally—without being disturbed.
          </Quote>
        </div>
      </Section>

      <Divider />

      {/* PRESSURE DEFINITION */}
      <Section
        id="pressure"
        eyebrow="Quick definition"
        title="What we mean by “pressure”"
        subtitle="No jargon—just clarity. “Pressure” simply means any human activity that changes how deer use your property."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              Pressure includes things like:
            </h3>
            <div className="mt-5">
              <BulletList
                items={[
                  "Entry and exit routes",
                  "Stand access and frequency of hunts",
                  "Noise, scent, and visual intrusion",
                  "Poor timing (hunting when conditions aren’t right)",
                  "Overuse of the best areas",
                ]}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">
              What the System Plan does with pressure
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              The goal is simple: control human impact so mature bucks continue
              using your property during daylight hours. That’s how “good”
              properties stay good season after season.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              We don’t need complicated theory. We need a plan that protects the
              right areas, defines huntable areas, and keeps disturbance low.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* BLUEPRINT FOR GIANTS */}
      <Section
        id="bfg"
        eyebrow="Blueprint for Giants®"
        title="Blueprint for Giants®, applied"
        subtitle="Blueprint for Giants® is the proprietary framework behind every WLS project. It’s built on one simple principle: if deer feel safe, daylight opportunity becomes repeatable."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Protect security first">
            We preserve the areas deer rely on—so mature bucks stay on the
            property and behave naturally.
          </Card>
          <Card title="Control human impact">
            We design access and timing so your hunting activity doesn’t educate
            deer or collapse daylight movement.
          </Card>
          <Card title="Create repeatable opportunity">
            Instead of chasing luck, the system helps you generate consistent
            chances that don’t “wear out” over time.
          </Card>
        </div>
      </Section>

      <Divider />

      {/* DELIVERABLES */}
      <Section
        id="deliverables"
        eyebrow="What you receive"
        title="System Plan deliverables"
        subtitle="Every System Plan is designed to be used in the real world—clear, practical, and execution-ready."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="System Map Pack (pressure-aware)">
            Maps that communicate the system: security distribution, access
            routes, huntable areas, and no-go zones.
          </Card>
          <Card title="Access & intrusion guidance">
            Entry/exit strategy and rules that reduce disturbance and protect
            daylight activity.
          </Card>
          <Card title="Hunt structure & sit guidance">
            Clear sit decisions: when to hunt, when to hold back, and how to
            avoid burning the property.
          </Card>
          <Card title="Seasonal sequencing">
            How to approach early, mid, late, and rut periods in a way that
            preserves opportunity.
          </Card>
          <Card title="Build priorities">
            What to do first, what to delay, and what to avoid so improvements
            don’t backfire.
          </Card>
          <Card title="Executive action plan">
            A clear list of priorities and next steps—so you can execute or
            delegate with confidence.
          </Card>
        </div>
      </Section>

      <Divider />

      {/* WHO IT'S FOR */}
      <Section
        id="who-its-for"
        eyebrow="Fit"
        title="Who the System Plan is for"
        subtitle="This is for owners who want repeatable mature buck opportunities—without guessing, overhunting, or slowly making the property worse."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Legacy-minded owners">
            You want a property your family can hunt for years—without the usual
            boom-and-bust cycle.
          </Card>
          <Card title="Serious hunters who want clarity">
            You’d rather know the constraints and hunt them well than chase hype
            and hope.
          </Card>
          <Card title="Multi-hunter properties">
            You need structure so participation doesn’t ruin the best parts of
            the property.
          </Card>
        </div>
      </Section>

      <Divider />

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="How it works"
        title="From truth to a huntable system"
        subtitle="Simple, rigorous, and designed to protect your time and money."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            {
              step: "Step 1",
              title: "Confirm fit",
              desc: "Short application so we understand your property, goals, and constraints.",
            },
            {
              step: "Step 2",
              title: "Audit foundation",
              desc: "Your Property Audit establishes the truth layer we build from.",
            },
            {
              step: "Step 3",
              title: "System design",
              desc: "We translate diagnostics into a huntable, low-impact system.",
            },
            {
              step: "Step 4",
              title: "Delivery + walkthrough",
              desc: "You receive the plan and know exactly how to apply it.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-xs font-semibold text-slate-500">{s.step}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-sm font-semibold text-white/80">
                Important note
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                The plan protects you from expensive mistakes.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                Many owners spend money on “improvements” that accidentally
                increase disturbance and reduce daylight activity. The System
                Plan is designed to prevent that by governing access, timing,
                and priorities before you build.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">
                Your next best step
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                If you haven’t completed a WLS Property Audit yet, start there.
                The Audit is the truth layer that makes a System Plan honest and
                effective.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={auditHref} variant="secondary">
                  Apply for the Property Audit
                </ButtonLink>
                <ButtonLink href={applyHref} variant="primary">
                  Apply for a System Plan
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* INVESTMENT */}
      <Section
        id="investment"
        eyebrow="Investment & next steps"
        title="Pricing that stays ethical"
        subtitle="We price the System Plan for clarity and outcomes—not hype. Final pricing depends on property size, complexity, and scope."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              System Plan investment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Most projects fall in the range below. We confirm fit and quote
              after your application.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">
                  Typical range
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  $3,750–$5,000
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Most properties fall here.
                </div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">
                  Audit credit
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  Applied
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Your Audit investment is credited toward the Plan.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                Execution is optional
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Some clients want us to help implement. Others prefer to build
                it themselves. Either is fine—the plan stands on its own.
              </p>
              <div className="mt-4">
                <ButtonLink href={executionHref} variant="ghost">
                  Explore Execution options <span className="ml-1">→</span>
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Ready to apply?</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We review applications quickly. If you’re a fit, we’ll confirm
              scope and next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={applyHref} variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href={auditHref} variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Note: We don’t sell “stand locations.” We design pressure-aware,
              security-first systems that protect deer behavior and preserve
              daylight opportunity.
            </p>
          </div>
        </div>
      </Section>

      <Divider />

      {/* FAQ */}
      <Section
        id="faq"
        eyebrow="FAQ"
        title="Common questions"
        subtitle="If you’re thinking it, you’re not the only one."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            {
              q: "Do I need a Property Audit first?",
              a: "Yes. The Audit is the truth layer that makes the System Plan honest. Without diagnostics, a plan becomes guesswork—and guesswork gets expensive fast.",
            },
            {
              q: "Will you design movement patterns from bedding to food?",
              a: "No. We don’t try to force movement. We identify where daylight opportunity already exists and protect it with access, timing, and low-impact hunting decisions.",
            },
            {
              q: "Does food matter in the System Plan?",
              a: "Food matters—but only inside a system that can protect it. We address food in a way that supports holding and security, not as the primary hunt solution.",
            },
            {
              q: "What if multiple hunters need to use the property?",
              a: "That’s common. The plan supports participation by allocating access and sit decisions so disturbance stays low and outcomes don’t collapse.",
            },
            {
              q: "Is Execution required?",
              a: "No. Execution is optional. Many clients implement on their own. Others want help. The System Plan is designed to stand on its own either way.",
            },
            {
              q: "What is Blueprint for Giants®?",
              a: "Blueprint for Giants® is the proprietary framework behind WLS. It focuses on human impact, deer security, and repeatable opportunity—so your property stays productive season after season.",
            },
          ].map((item) => (
            <div
              key={item.q}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-lg font-semibold text-slate-900">{item.q}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-slate-900 p-10 text-white">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                Stop guessing. Build a system.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                If you want consistent mature buck opportunities, the system has
                to protect security and keep disturbance low. The System Plan is
                how you get there—cleanly, ethically, and professionally.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <ButtonLink href={applyHref} variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href={auditHref} variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTNOTE */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-xs leading-relaxed text-slate-500">
            Whitetail Land Solutions designs pressure-aware hunting systems.
            Results depend on property constraints, regional hunting pressure,
            weather, timing, and execution discipline. Our work is designed to
            protect deer security and preserve daylight opportunity—not to force
            movement.
          </p>
        </div>
      </div>
    </main>
  );
}

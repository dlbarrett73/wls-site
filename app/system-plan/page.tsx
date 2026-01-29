// wls-site/app/system-plan/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "System Plan | Whitetail Land Solutions",
  description:
    "Turn truth into a huntable system. The WLS System Plan converts your Property Audit into a pressure-governed, security-first design you can execute with confidence.",
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
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start gap-3">
        {icon ? (
          <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-white">
            {icon}
          </div>
        ) : null}
        <div>
          <div className="text-lg font-semibold text-slate-900">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-slate-600">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
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

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

function Divider() {
  return <div className="h-px w-full bg-slate-200" aria-hidden="true" />;
}

function MiniList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div className="mt-0.5 text-slate-900">
            <Check />
          </div>
          <span className="text-sm leading-relaxed text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function SystemPlanPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_20%_10%,rgba(15,23,42,0.08),transparent_50%),radial-gradient(50rem_50rem_at_90%_40%,rgba(15,23,42,0.06),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Audit → Plan → Execution</Badge>
              <Badge>Security-first</Badge>
              <Badge>Pressure-governed</Badge>
              <Badge>Truth-first</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The System Plan
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A Property Audit tells you what’s true. The System Plan turns that
              truth into a pressure-governed design you can actually hunt—without
              guessing, forcing movement, or collapsing the system.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/capture/system-plan" variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href="/capture/property-audit" variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>

            <p className="mt-4 max-w-2xl text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Doctrine:</span>{" "}
              We manage capital (deer &amp; pressure)—not deer movement. The plan
              is built to preserve security, increase “pressure cost,” and
              generate repeatable opportunities that cost less than they produce.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Card
              title="Built from your Audit"
              icon={<span className="text-sm font-bold">1</span>}
            >
              The System Plan is not a generic map pack. It starts with your
              Audit diagnostics and converts constraints into a coherent,
              huntable system.
            </Card>
            <Card
              title="Pressure-governed design"
              icon={<span className="text-sm font-bold">2</span>}
            >
              Access, entry/exit, sit selection, and season sequencing are
              designed to keep mature buck daylight movement from collapsing.
            </Card>
            <Card
              title="Execution-ready clarity"
              icon={<span className="text-sm font-bold">3</span>}
            >
              You’ll know what to build, what to hunt, what to avoid, and how to
              phase the system so your improvements don’t make pressure cheaper.
            </Card>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS / ISN'T */}
      <Section
        id="what-this-is"
        eyebrow="Truth → Design"
        title="What the System Plan is (and isn’t)"
        subtitle="We don’t sell hope. We sell clarity. This plan exists to protect your investment and preserve mature-buck daylight opportunity."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              This is what we do
            </h3>
            <div className="mt-5">
              <MiniList
                items={[
                  "Convert Audit diagnostics into a property-wide system (security, access, pressure governance, and hunt structure).",
                  "Design for consistent opportunity without hunting bedding or destination food.",
                  "Identify high-quality interception points—found, not forced—where opportunities cost less than they produce.",
                  "Create a season + pressure sequence so participation doesn’t lower your results.",
                  "Specify build priorities that increase security and make pressure expensive.",
                ]}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              This is what we refuse to do
            </h3>
            <div className="mt-5">
              <MiniList
                items={[
                  "We don’t ‘create deer flow’ by forcing movement or dragging deer out of security.",
                  "We don’t turn core security into ambush zones (that’s where systems collapse).",
                  "We don’t build a plan around destination food as the hunt solution.",
                  "We don’t prescribe stand-per-wind fantasies that ignore pressure reality.",
                  "We don’t sell a ‘one-and-done’ map pack that collapses the first time you hunt it hard.",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Quote author="WLS Doctrine">
            Flow is a byproduct, not a goal. Preserve security, govern pressure,
            and daylight opportunity becomes repeatable.
          </Quote>
        </div>
      </Section>

      <Divider />

      {/* WHO IT'S FOR */}
      <Section
        id="who-its-for"
        eyebrow="Fit matters"
        title="Who this is for"
        subtitle="The System Plan is designed for owners who want repeatable, ethical opportunities for mature bucks—without turning their property into a pressure trap."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Legacy-minded owners">
            You want a property your family can hunt for years without the usual
            cycle of “improvements” that actually reduce daylight movement.
          </Card>
          <Card title="Serious hunters who value truth">
            You’d rather know the constraints than chase hype. You’re willing to
            hunt the system instead of hunting your feelings.
          </Card>
          <Card title="Multi-hunter properties">
            You need participation options without lowering outcomes. The plan
            helps you allocate access and sits so pressure doesn’t get cheap.
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                Common problems this solves
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Most properties don’t fail because “food didn’t work.” They fail
                because access and pressure made mature buck daylight behavior
                more expensive than the system could afford.
              </p>
              <div className="mt-5">
                <MiniList
                  items={[
                    "You’ve improved habitat but daylight movement got worse.",
                    "You have stands, but no confident sit decisions.",
                    "You can’t hunt without bumping deer or burning the best areas.",
                    "You’re unsure where to focus money (and what to stop doing).",
                    "The property ‘feels’ good but mature buck encounters are inconsistent.",
                  ]}
                />
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                The WLS sequencing (non-negotiable)
              </div>
              <ol className="mt-4 space-y-4">
                {[
                  {
                    k: "Audit",
                    v: "Truth + diagnostics. Identify ceiling, floor, and limiting factors.",
                    href: "/capture/property-audit",
                  },
                  {
                    k: "System Plan",
                    v: "Convert truth into a pressure-governed design you can hunt.",
                    href: "/capture/system-plan",
                  },
                  {
                    k: "Execution (optional)",
                    v: "Build + implement with confidence—without breaking the system.",
                    href: "/execution",
                  },
                ].map((step) => (
                  <li
                    key={step.k}
                    className="flex items-start justify-between gap-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900">
                        {step.k}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">{step.v}</div>
                    </div>
                    <Link
                      href={step.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:underline"
                    >
                      Learn <ArrowRight />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* DELIVERABLES */}
      <Section
        id="deliverables"
        eyebrow="What you receive"
        title="System Plan deliverables"
        subtitle="This is the bridge between diagnosis and results. You’ll receive a clear, execution-ready system designed to protect mature buck security and preserve daylight opportunity."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="System Map Pack (governed)">
            A set of maps that communicate the system—security distribution,
            access routes, no-go zones, interception opportunities, and pressure
            governance boundaries.
          </Card>
          <Card title="Hunt Structure & Sit Budget">
            Where hunting is allowed, what conditions qualify a sit, and how
            often each opportunity can be used before it becomes too expensive.
          </Card>
          <Card title="Access & Intrusion Protocols">
            Entry/exit routes, wind/thermal considerations, noise/light
            discipline, and the “undetectable access” principles that keep
            encounters repeatable.
          </Card>

          <Card title="Phased Build & Priority Sequence">
            A practical build plan that protects the system while you improve it
            (what to do first, what to delay, and what to stop doing).
          </Card>
          <Card title="Season & Pressure Sequencing">
            A coherent plan for early/mid/late and rut transitions so timing and
            participation don’t collapse daylight movement.
          </Card>
          <Card title="Executive Action Plan">
            Clear priorities, decisions, and next steps—so you can execute,
            delegate, and invest with confidence.
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                How this aligns with our locked deliverables
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                The System Plan builds directly on the Audit outputs. You’re not
                buying new “stuff.” You’re buying design clarity built from
                truth.
              </p>
              <div className="mt-5">
                <MiniList
                  items={[
                    "Executive Truth Summary (Audit) → Executive Action Plan (Plan)",
                    "Pressure Scoring Report (Audit) → Hunt Structure, Sit Budget, and Sequencing (Plan)",
                    "Ceiling Qualification Report (Audit) → Design constraints + priorities (Plan)",
                  ]}
                />
              </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                Outcome focus
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                We’re not trying to make deer do what we want. We’re building a
                system that makes mature buck daylight opportunity{" "}
                <span className="font-semibold">repeatable</span> by preserving
                security and governing pressure—so hunting opportunity costs
                less than it produces.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">
                    Preserve
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Security &amp; resident buck ownership
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">
                    Govern
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Pressure cost &amp; intrusion risk
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">
                    Identify
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    High-quality interception points
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <div className="text-sm font-semibold text-slate-900">
                    Sequence
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Sits &amp; seasons without drawdown
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* PROCESS */}
      <Section
        id="process"
        eyebrow="How it works"
        title="From truth to a huntable system"
        subtitle="Simple, rigorous, and built to protect your time and money."
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
              title: "Audit baseline",
              desc: "We use your Property Audit diagnostics as the non-negotiable truth layer.",
            },
            {
              step: "Step 3",
              title: "Design the system",
              desc: "Access, pressure governance, hunt structure, and sequencing—aligned to your ceiling and limiting factors.",
            },
            {
              step: "Step 4",
              title: "Deliver + review",
              desc: "You receive the plan and we walk through it so you know exactly how to hunt and build it.",
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
                Most owners spend money on “improvements” that accidentally make
                pressure cheaper. The System Plan is designed to prevent that by
                governing access, sequencing, and hunting opportunity before you
                build.
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
                <ButtonLink href="/capture/property-audit" variant="secondary">
                  Apply for the Property Audit
                </ButtonLink>
                <ButtonLink href="/capture/system-plan" variant="primary">
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
        subtitle="We price the System Plan for clarity and outcomes—not for hype. You’ll know what you’re buying and why it matters."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              System Plan investment
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Final pricing depends on property size, complexity, and scope. We
              confirm fit and quote after your application.
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
                it themselves or with their local contractor. Either is fine.
                The plan stands on its own.
              </p>
              <div className="mt-4">
                <ButtonLink href="/execution" variant="ghost">
                  Explore Execution options <span className="ml-1">→</span>
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Ready to apply?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              We review applications quickly. If you’re a fit, we’ll confirm
              scope and next steps.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href="/capture/system-plan" variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href="/capture/property-audit" variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Note: We do not sell “stand locations.” We sell a governed system
              designed to preserve mature buck daylight opportunity.
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
              a: "Yes. The Audit is the truth layer that makes the System Plan honest. Without diagnostics, a plan becomes guesswork—and guesswork is expensive.",
            },
            {
              q: "Will you design movement patterns from bedding to food?",
              a: "No. We don’t manage movement. We manage capital (deer & pressure). We identify high-quality interception points that already exist within a secure system—and we protect them with access and governance.",
            },
            {
              q: "Does food matter in the System Plan?",
              a: "Food matters—but only inside a system that can protect it. We’ll address food in a way that supports holding and security, not pulling deer across risk or turning destination food into the hunt solution.",
            },
            {
              q: "What if multiple hunters need to use the property?",
              a: "That’s common. The plan can support participation by allocating access, sits, and sequencing so pressure doesn’t get cheap and outcomes don’t collapse.",
            },
            {
              q: "Is Execution required?",
              a: "No. Execution is optional. Many clients implement on their own. Others want help. The System Plan is designed to stand on its own either way.",
            },
            {
              q: "What makes WLS different from other consultants?",
              a: "We lead with truth, then engineer a governed system that protects mature buck security and daylight opportunity. No hype. No movement manipulation. No collapse-by-design.",
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
                to protect security and govern pressure. The System Plan is how
                you get there—cleanly, ethically, and professionally.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <ButtonLink href="/capture/system-plan" variant="primary">
                Apply for a System Plan
              </ButtonLink>
              <ButtonLink href="/capture/property-audit" variant="secondary">
                Start with the Property Audit
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* SMALL FOOTNOTE */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-xs leading-relaxed text-slate-500">
            Whitetail Land Solutions designs pressure-governed hunting systems.
            Results depend on property constraints, regional pressure context,
            weather, timing, and execution discipline. Our work is designed to
            increase repeatable opportunity by preserving mature buck security
            and making pressure expensive—not by forcing movement.
          </p>
        </div>
      </div>
    </main>
  );
}

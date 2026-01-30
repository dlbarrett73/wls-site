// app/execution/page.tsx
//
// WLS Execution — optional implementation support after a Property Audit + System Plan.
// Public-facing language: outcome-first, hunter-native.
// Structure, layout, and styling are consistent with the rest of the site.
//
// Routes referenced (adjust if your repo differs):
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
    "Optional implementation support after your Property Audit and System Plan. We can install the system with our field crew—or guide an owner-led build—so mature bucks feel safe living on your property and move in daylight.",
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

function FAQItem({ q, a }: { q: React.ReactNode; a: React.ReactNode }) {
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
              Execution that installs the system{" "}
              <span className="text-slate-200">without educating deer you’re there.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              Execution is where plans succeed or fail. The goal isn’t to “do projects.”
              The goal is to build access, security, and habitat in a way that lets mature bucks
              feel safe living on the property—and move naturally in daylight.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/capture/execution" variant="primary">
                Apply for Execution
              </ButtonLink>
              <ButtonLink href="#scope-options" variant="secondary">
                Scope &amp; options
              </ButtonLink>
            </div>

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

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">Owner-led or WLS-installed</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">
                Choose your lane: implement it yourself with guardrails, or have WLS execute the build
                with an experienced field crew and equipment—always protecting security and daylight movement.
              </p>
            </div>
          </div>

          {/* Doctrine strip (kept as steps, not “doctrine” language) */}
          <div className="mt-12 grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">1) Audit</div>
              <div className="mt-2 text-sm text-slate-200">
                Identify what’s true: structure, pressure, access, security, and limiting factors.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">2) Plan</div>
              <div className="mt-2 text-sm text-slate-200">
                Build the playbook: access standards, hunting rules, habitat sequence, and sit budgets.
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white">3) Execution</div>
              <div className="mt-2 text-sm text-slate-200">
                Install with discipline: build, verify, and keep it effective through season.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <Section
        id="what-it-is"
        eyebrow={<Badge>What Execution is</Badge>}
        title="Implementation designed to protect daylight movement."
        subtitle="Do the right work, in the right order, without teaching deer to avoid your property during shooting light."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Sequence-first execution" icon={<span aria-hidden>🧭</span>}>
            We follow a clear build order so improvements don’t backfire. Access and security come first.
            Habitat comes second. Everything is done with the season—and deer behavior—in mind.
          </Card>

          <Card title="Access & intrusion control" icon={<span aria-hidden>🥾</span>}>
            How you enter, exit, and move around the property matters as much as what you build.
            Execution installs access that deer don’t learn to pattern.
          </Card>

          <Card title="Owner-led or WLS-installed" icon={<span aria-hidden>🛠️</span>}>
            You can implement the work yourself with guidance, or have WLS handle installation with our field crew.
            Either way, the goal is the same: keep mature bucks comfortable using the property.
          </Card>
        </div>
      </Section>

      {/* WHO IT'S FOR */}
      <Section
        id="who-its-for"
        className="bg-slate-50"
        eyebrow={<Badge>Fit</Badge>}
        title="Who Execution is for (and who it’s not)."
        subtitle="Execution is high-touch. We only take projects where the plan is clear and the system can be protected."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Best fit</h3>
            <ul className="mt-6 space-y-4">
              <CheckItem>
                You’ve completed the{" "}
                <Link className="font-semibold underline underline-offset-4" href="/property-audit">
                  Property Audit
                </Link>{" "}
                and have a clear diagnosis.
              </CheckItem>
              <CheckItem>
                You have a{" "}
                <Link className="font-semibold underline underline-offset-4" href="/system-plan">
                  System Plan
                </Link>{" "}
                with access standards, hunting rules, and a build sequence.
              </CheckItem>
              <CheckItem>
                You want mature bucks to feel like they <span className="font-semibold text-slate-900">own</span> the property.
              </CheckItem>
              <CheckItem>
                You want a build that stays effective—not a flurry of work that burns out in-season.
              </CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Not a fit</h3>
            <ul className="mt-6 space-y-4">
              <XItem>You want “funnels” that force travel or turn bedding into an ambush zone.</XItem>
              <XItem>You want plots to compensate for broken access or constant intrusion.</XItem>
              <XItem>You want to skip diagnosis and jump straight to implementation.</XItem>
              <XItem>You want maximum participation with no hunting rules, regardless of impact.</XItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* WHAT YOU GET */}
      <Section
        id="what-you-get"
        eyebrow={<Badge>What you receive</Badge>}
        title="What Execution includes"
        subtitle="Execution is modular. We scope it to your plan, your constraints, and your timeline—without sacrificing what makes it work."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Kickoff + sequencing" icon={<span aria-hidden>🚦</span>}>
            We translate the System Plan into a build roadmap:
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Phases based on season timing and intrusion risk</li>
              <li>Install priorities vs. what should wait</li>
              <li>Who does what (owner vs. WLS crew)</li>
              <li>Quality checkpoints before anything goes “live”</li>
            </ul>
          </Card>

          <Card title="Access + hunting rules install" icon={<span aria-hidden>🧭</span>}>
            We help implement standards that keep deer calm:
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Routes, entries/exits, and approach behavior</li>
              <li>Stand-area access hardening (screening, noise control)</li>
              <li>Hunting rules (sit budgets, rotations, timing)</li>
              <li>Checks to avoid “teaching deer” patterns</li>
            </ul>
          </Card>

          <Card title="Habitat work aligned to security" icon={<span aria-hidden>🌲</span>}>
            We install habitat improvements that support mature-buck ownership:
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Security upgrades and bedding protection</li>
              <li>Edge/transition refinement (without forcing)</li>
              <li>Holding food that fits the system</li>
              <li>Screening that protects access and daylight</li>
            </ul>
          </Card>
        </div>

        <Divider />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Optional add-ons (when appropriate)</h3>
            <ul className="mt-6 space-y-4">
              <CheckItem>Contractor coordination (so the build matches the plan)</CheckItem>
              <CheckItem>In-season decision support (timing, sequencing, participation)</CheckItem>
              <CheckItem>Post-season review + next-year upgrades</CheckItem>
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              If something would increase intrusion or burn out daylight movement, we don’t recommend it.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">What we will not do</h3>
            <p className="mt-4 text-slate-600">
              Execution is about protecting results. We don’t trade short-term “action” for long-term failure.
            </p>
            <ul className="mt-6 space-y-4">
              <XItem>Turn core security into hunt zones.</XItem>
              <XItem>Build “mandatory paths” or force movement.</XItem>
              <XItem>Use food as a substitute for access and hunting rules.</XItem>
              <XItem>Encourage constant intrusion that trains deer to go nocturnal.</XItem>
            </ul>
          </div>
        </div>
      </Section>

      {/* FIELD WORK EXAMPLES */}
      <Section
        id="habitat-examples"
        className="bg-slate-50"
        eyebrow={<Badge>Field work</Badge>}
        title="Habitat & implementation examples"
        subtitle={
          <>
            We don’t sell a generic “habitat package.” We install the{" "}
            <span className="font-semibold text-slate-900">specific sequence</span>{" "}
            your System Plan calls for—only where it helps mature bucks feel like they own the property.
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Security + structure</h3>
            <p className="mt-3 text-slate-600">
              We improve cover and structure so mature bucks feel comfortable living here—without turning bedding into an ambush zone.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Edge feathering / soft-edge structure</CheckItem>
              <CheckItem>Timber stand improvement (TSI) aligned to security</CheckItem>
              <CheckItem>Select hinge-cutting where it improves security</CheckItem>
              <CheckItem>Screening trees/shrubs that protect access or security</CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Access + intrusion control</h3>
            <p className="mt-3 text-slate-600">
              We reduce how often deer encounter people—and how predictable that intrusion becomes.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Access route clearing &amp; hardening (low-impact)</CheckItem>
              <CheckItem>Screening for entry/exit concealment</CheckItem>
              <CheckItem>Stand-area approach refinements (noise/visibility)</CheckItem>
              <CheckItem>Trail work only when it lowers intrusion risk</CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Food + holding (system-governed)</h3>
            <p className="mt-3 text-slate-600">
              Food matters—but only when access and hunting rules can protect it. We use food to support holding, not to “pull” through broken access.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Spraying / weed control</CheckItem>
              <CheckItem>Soil conditioning and amendments (as needed)</CheckItem>
              <CheckItem>Seedbed prep, planting, and plot renovation</CheckItem>
              <CheckItem>Maintenance plans that respect intrusion windows</CheckItem>
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">Hunt infrastructure</h3>
            <p className="mt-3 text-slate-600">
              We install stands/blinds only where access, wind options, and hunting frequency allow them to stay effective.
            </p>
            <ul className="mt-6 space-y-4">
              <CheckItem>Stand/blind installation with access-first sit criteria</CheckItem>
              <CheckItem>Screening and approach standards at each setup</CheckItem>
              <CheckItem>Verification against the System Plan before “go-live”</CheckItem>
              <CheckItem>Low-impact observation options (when appropriate)</CheckItem>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white ring-1 ring-slate-800">
          <h3 className="text-xl font-semibold">Our stop rules (non-negotiable)</h3>
          <p className="mt-3 text-slate-200">
            If a project would increase intrusion, teach deer patterns, or make daylight movement less reliable,
            we redesign it, defer it, or remove it. Execution exists to protect results—not rack up “projects.”
          </p>
        </div>
      </Section>

      {/* SCOPE & OPTIONS */}
      <Section
        id="scope-options"
        eyebrow={<Badge>Scope &amp; options</Badge>}
        title="Transparent scope. Options that match reality."
        subtitle="Execution is scoped to your System Plan, your property, and your timeline. We price and schedule by phase and complexity—not by vague promises."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Phase-based execution" icon={<span aria-hidden>🧱</span>}>
            Most clients execute in phases (access/security first, then habitat refinements).
            This keeps disturbance low and results predictable.
          </Card>

          <Card title="Owner-led or WLS-installed" icon={<span aria-hidden>🚜</span>}>
            Implement it yourself with guardrails—or have WLS install the build with our crew and equipment.
            Either way, standards stay the same.
          </Card>

          <Card title="Accountability + stop rules" icon={<span aria-hidden>🧾</span>}>
            Clear responsibilities, clear checkpoints, and clear stop rules if a change would compromise security
            or hurt daylight movement.
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
          <h3 className="text-xl font-semibold text-slate-900">What you receive in your scoped proposal</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ul className="space-y-4">
              <CheckItem>Phase plan with timeline windows (and what must wait)</CheckItem>
              <CheckItem>Responsibilities (owner vs WLS crew vs contractor)</CheckItem>
              <CheckItem>Execution standards that match your System Plan</CheckItem>
            </ul>
            <ul className="space-y-4">
              <CheckItem>Verification checkpoints (install quality + intrusion risk)</CheckItem>
              <CheckItem>Clear constraints and deferrals (what we do not touch right now)</CheckItem>
              <CheckItem>Optional in-season governance support (when appropriate)</CheckItem>
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
            If you haven’t completed the Audit + System Plan, Execution isn’t the next step. Start with the{" "}
            <Link className="font-semibold underline underline-offset-4" href="/capture/property-audit">
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
        subtitle="Clear answers for serious hunters who care about repeatable results."
      >
        <div className="grid gap-4">
          <FAQItem
            q="Can I buy Execution without an Audit and System Plan?"
            a={
              <>
                No. Execution is implementation of a verified plan. Without a diagnosis and a build sequence,
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
                Yes—Execution can be owner-led or WLS-installed. If you want it installed, we can execute the work with an
                experienced field crew and equipment, then verify everything against the System Plan.
              </>
            }
          />
          <FAQItem
            q="Will you force movement or hunt bedding areas?"
            a={
              <>
                No. We protect core security. We build conditions that keep mature bucks comfortable living on the property
                and allow daylight movement to stay reliable—without turning bedding into an ambush zone.
              </>
            }
          />
          <FAQItem
            q="What’s the typical timeline?"
            a={
              <>
                It depends on phases, seasonal windows, and availability. The plan defines what must happen before season
                and what should wait. We won’t rush work that increases intrusion or burns daylight movement.
              </>
            }
          />
        </div>
      </Section>

      {/* FINAL CTA (this was missing) */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-10 rounded-3xl bg-slate-900 p-10 text-white ring-1 ring-slate-800 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Daylight movement</Badge>
                <Badge>Security-first</Badge>
                <Badge>Done right</Badge>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to build it without burning it out?
              </h2>

              <p className="mt-4 text-slate-200">
                If you’ve completed the Audit and System Plan, Execution is how we install the work—access, security,
                habitat, and hunting rules—so mature bucks stay comfortable and daylight movement holds.
              </p>

              <p className="mt-4 text-sm text-slate-300">
                Not eligible yet? Start with the{" "}
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
                className="!bg-white !text-slate-900 hover:!bg-slate-100"
              >
                Apply for Execution
              </ButtonLink>
              <ButtonLink
                href="/capture/property-audit"
                variant="secondary"
                className="!bg-transparent !text-white !ring-white/20 hover:!bg-white/5"
              >
                Start with an Audit
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
              Flow:{" "}
              <Link className="font-semibold underline underline-offset-4" href="/property-audit">
                Audit
              </Link>{" "}
              →{" "}
              <Link className="font-semibold underline underline-offset-4" href="/system-plan">
                Plan
              </Link>{" "}
              → <span className="font-semibold text-slate-900">Execution</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

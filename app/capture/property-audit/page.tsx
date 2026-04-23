// wls-site/app/capture/property-audit/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Apply for a Property Audit | Whitetail Land Solutions",
  description:
    "Apply for a Blueprint for Giants® Property Audit. Get the truth about your property before you spend more money, pressure more deer, or make another wrong move.",
};

function Button({
  children,
  type = "submit",
  variant = "primary",
}: {
  children: React.ReactNode;
  type?: "submit" | "button";
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900"
      : "bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50 focus-visible:ring-slate-400";

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles}`}
    >
      {children}
    </button>
  );
}

function Badge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "dark";
}) {
  return (
    <span
      className={
        tone === "dark"
          ? "inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white"
          : "inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-800 ring-1 ring-slate-200"
      }
    >
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
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = "text",
  required,
  placeholder,
  help,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  help?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      {help ? <p className="mt-1 text-xs text-slate-500">{help}</p> : null}
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
  rows = 4,
  required,
  placeholder,
  help,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  help?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      {help ? <p className="mt-1 text-xs text-slate-500">{help}</p> : null}
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-500 focus:outline-none"
      />
    </div>
  );
}

function Select({
  label,
  name,
  required,
  defaultLabel = "Select one",
  options,
  help,
}: {
  label: string;
  name: string;
  required?: boolean;
  defaultLabel?: string;
  help?: string;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-900">
        {label}
      </label>
      {help ? <p className="mt-1 text-xs text-slate-500">{help}</p> : null}
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-slate-500 focus:outline-none"
      >
        <option value="" disabled>
          {defaultLabel}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Card({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="text-base font-semibold text-slate-900">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{body}</p>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PropertyAuditCapturePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="flex flex-wrap gap-2">
            <Badge>Blueprint for Giants®</Badge>
            <Badge>Truth-first</Badge>
            <Badge>Pressure-first</Badge>
            <Badge>Audit → Plan → Execution</Badge>
          </div>

          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Apply for a Property Audit
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              This is where serious landowners stop guessing.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
              The <strong>Blueprint for Giants® Property Audit</strong> is the first
              step in our process. It tells you what is actually true on your
              property, what is limiting mature buck daylight opportunity, and
              whether a stronger path forward really exists.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              It is not a “tell me where to hang a stand” call. It is a
              truth-first diagnostic designed to protect you from wasted money,
              bad improvements, misrouted pressure, and false confidence.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                1. Property Audit
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Diagnose reality. Identify ceilings, limiting factors, pressure
                problems, and decision boundaries.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                2. System Plan
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                If the Audit supports it, we convert truth into a huntable system:
                access, structure, timing, sequencing, and sit rules.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <div className="text-sm font-semibold text-slate-900">
                3. Execution
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Only after the system is sound do we discuss implementation,
                physical work, and field-level deployment.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-900 p-6 text-white">
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="dark">Current Audit Investment</Badge>
              <span className="text-2xl font-bold">$2,500</span>
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
              If you move forward with a System Plan within 30 days of Audit
              delivery, your full Audit investment is credited toward the Plan.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#application">
              <Button>Apply now</Button>
            </a>
            <Link href="/property-audit" className="inline-flex">
              <Button type="button" variant="secondary">
                Review the Audit first
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FIT */}
      <Section
        title="Who this is for"
        subtitle="The best Audit clients are serious enough to want the truth, even if the truth costs them convenience, ego, or favorite habits."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
            <div className="text-base font-semibold text-slate-900">
              Strong fit
            </div>
            <div className="mt-5">
              <CheckList
                items={[
                  "You want mature buck daylight opportunity that holds up over time, not just random encounters.",
                  "You are willing to hear that the problem may be pressure, access, intrusion, or system misuse—not just habitat.",
                  "You want clarity on what to do, what to stop doing, and what your property can realistically support.",
                  "You are open to a staged process: Audit first, then Plan, then Execution if justified.",
                  "You are serious enough to invest in getting the diagnosis right before making more moves.",
                ]}
              />
            </div>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <div className="text-base font-semibold text-slate-900">
              Probably not a fit
            </div>
            <div className="mt-5">
              <CheckList
                items={[
                  "You only want a few quick stand tips or generic habitat ideas.",
                  "You mainly want validation for a plan you have already decided to force.",
                  "You are not willing to change hunting behavior, access patterns, or pressure habits.",
                  "You are looking for a cheap tactic list instead of a decision-grade diagnostic.",
                  "You do not control the property or cannot materially influence decisions.",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* WHAT THEY RECEIVE */}
      <Section
        title="What the Audit gives you"
        subtitle="This is not a vague consultation. It is a diagnostic designed to create decision clarity."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card
            title="Executive Truth Summary"
            body="A direct explanation of what is helping, what is hurting, and what is actually limiting results."
          />
          <Card
            title="System reality diagnosis"
            body="A decision-grade read on security, intrusion, pressure patterns, structural limitations, and opportunity."
          />
          <Card
            title="Ceiling + limiting factors"
            body="A clearer view of what the property can realistically support today and what is suppressing it."
          />
          <Card
            title="Priority actions + hard stops"
            body="What to change, what to preserve, and what to stop doing before you quietly burn opportunity."
          />
        </div>

        <div className="mt-8 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
          <h3 className="text-lg font-semibold text-slate-900">
            Important:
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
            The Audit is the first step in one larger process. Some clients stop
            there and self-govern. Some move into a System Plan. Some continue
            into Execution. The Audit exists to tell us which path is legitimate.
          </p>
        </div>
      </Section>

      {/* SALES FLOW */}
      <Section
        title="What happens after you apply"
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            {
              title: "Step 1",
              body: "You apply and give us enough context to evaluate seriousness, fit, ownership, timeline, and current situation.",
            },
            {
              title: "Step 2",
              body: "We review the application personally. If you are a fit, we follow up to confirm next steps and payment.",
            },
            {
              title: "Step 3",
              body: "Once engaged, the Audit becomes the truth layer that defines whether a System Plan should happen next.",
            },
            {
              title: "Step 4",
              body: "If the property and situation justify it, the Audit can lead to a System Plan and then Execution.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {item.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="text-sm font-semibold text-emerald-900">
              Likely good fit
            </div>
            <p className="mt-2 text-sm leading-relaxed text-emerald-800">
              Serious owner, real problem, real goals, realistic timeline, willing
              to hear the truth.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="text-sm font-semibold text-amber-900">
              Needs clarification
            </div>
            <p className="mt-2 text-sm leading-relaxed text-amber-800">
              Shared decisions, unclear goals, uncertain timing, or not yet sure
              how serious they are.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
            <div className="text-sm font-semibold text-rose-900">
              Likely not a fit
            </div>
            <p className="mt-2 text-sm leading-relaxed text-rose-800">
              Wants cheap tips, wants validation, lacks authority, or is not open
              to pressure governance and behavior change.
            </p>
          </div>
        </div>
      </Section>

      {/* APPLICATION */}
      <Section
        title="Property Audit application"
        subtitle="Answer honestly. The goal is not to impress us. The goal is to help us determine whether this is the right next step."
      >
        <div
          id="application"
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
        >
          <form action="/api/lead" method="POST" className="space-y-8">
            {/* Hidden fields for routing / attribution */}
            <input type="hidden" name="leadSource" value="property-audit-application" />
            <input type="hidden" name="offer" value="property_audit" />
            <input type="hidden" name="journeyStage" value="audit_first" />
            <input type="hidden" name="salesFlow" value="audit_to_plan_to_execution" />
            <input type="hidden" name="funnelVersion" value="v2_qualification_funnel" />

            {/* CONTACT */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Contact information
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Input label="First name" name="firstName" required />
                <Input label="Last name" name="lastName" required />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Input label="Email" name="email" type="email" required />
                <Input
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(###) ###-####"
                />
              </div>
            </div>

            {/* PROPERTY */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Property context
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Input
                  label="Property location (state / county)"
                  name="propertyLocation"
                  required
                  placeholder="Ex: PA / Indiana County"
                />
                <Input
                  label="Approximate property size (acres)"
                  name="propertySize"
                  required
                  placeholder="Ex: 80"
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Select
                  label="Ownership / decision authority"
                  name="decisionMaker"
                  required
                  options={[
                    { value: "yes", label: "Yes — I control the decisions" },
                    { value: "shared", label: "Shared decision with others" },
                    { value: "no", label: "No — someone else primarily decides" },
                  ]}
                />
                <Select
                  label="Primary use case"
                  name="useCase"
                  required
                  options={[
                    { value: "personal_hunting", label: "My own hunting property" },
                    { value: "family_property", label: "Family / multi-hunter property" },
                    { value: "recreational_land", label: "Recreational land with hunting value" },
                    { value: "new_acquisition", label: "Recently acquired / evaluating direction" },
                    { value: "other", label: "Other" },
                  ]}
                />
              </div>

              <div className="mt-4">
                <Input
                  label="Map link (optional)"
                  name="mapLink"
                  placeholder="OnX, Google Earth, CalTopo, Dropbox, Drive, etc."
                  help="Optional, but helpful if you already have a map, boundary image, or aerial reference."
                />
              </div>
            </div>

            {/* GOALS + PROBLEMS */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Goals and current reality
              </h3>

              <div className="mt-5 grid gap-4">
                <Textarea
                  label="What are you most trying to achieve?"
                  name="primaryGoal"
                  required
                  rows={4}
                  placeholder="Ex: repeatable mature buck daylight opportunity, better rut structure, safer multi-hunter access, stronger early-season patterning, legacy property improvement"
                />

                <Textarea
                  label="What problem are you most trying to solve?"
                  name="primaryProblem"
                  required
                  rows={4}
                  placeholder="Ex: deer disappear in daylight, the property hunts smaller than it is, access feels risky, pressure is building, bedding feels fragile, the place burns out too quickly"
                />

                <Textarea
                  label="Why now?"
                  name="whyNow"
                  required
                  rows={3}
                  placeholder="What changed? Why is this important now rather than a year from now?"
                />
              </div>
            </div>

            {/* CURRENT HUNTING + PAST WORK */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                How the property is currently being used
              </h3>

              <div className="mt-5 grid gap-4">
                <Textarea
                  label="How is the property currently hunted?"
                  name="currentHunting"
                  rows={4}
                  placeholder="Number of hunters, typical frequency, pressure windows, access routes, favorite stands, how often the property is entered, etc."
                />

                <Textarea
                  label="What have you already tried?"
                  name="pastWork"
                  rows={4}
                  placeholder="Food plots, hinge cutting, stand changes, access work, screening, timber work, trail cameras, sanctuaries, consulting, habitat work, etc."
                />

                <Textarea
                  label="What do you suspect is going wrong?"
                  name="suspectedIssue"
                  rows={3}
                  placeholder="Your honest guess is fine. Pressure? Access? Neighbors? Habitat? Hunting style? Layout? Something else?"
                />
              </div>
            </div>

            {/* QUALIFICATION */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Qualification
              </h3>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Select
                  label="Timeline"
                  name="timeline"
                  required
                  options={[
                    { value: "immediately", label: "Immediately" },
                    { value: "this_season", label: "This season" },
                    { value: "next_season", label: "Next season" },
                    { value: "12_months", label: "Within 12 months" },
                    { value: "multi_year", label: "Long-term / multi-year" },
                  ]}
                />

                <Select
                  label="How ready are you to make changes if the Audit reveals them?"
                  name="changeReadiness"
                  required
                  options={[
                    { value: "very_ready", label: "Very ready" },
                    { value: "somewhat_ready", label: "Somewhat ready" },
                    { value: "depends", label: "Depends on what we find" },
                    { value: "not_sure", label: "Not sure yet" },
                  ]}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Select
                  label="Which best describes your situation?"
                  name="investmentReadiness"
                  required
                  help="This helps qualification. It does not lock you into anything beyond the Audit."
                  options={[
                    {
                      value: "audit_only_now",
                      label: "I am ready for the Audit now",
                    },
                    {
                      value: "audit_then_maybe_plan",
                      label: "I am ready for the Audit and open to a Plan if justified",
                    },
                    {
                      value: "full_process_if_fit",
                      label: "I am open to Audit → Plan → Execution if the property supports it",
                    },
                    {
                      value: "just_exploring",
                      label: "I am mostly exploring right now",
                    },
                  ]}
                />

                <Select
                  label="What level of truth are you looking for?"
                  name="truthOrientation"
                  required
                  options={[
                    {
                      value: "full_truth",
                      label: "Tell me the truth, even if it challenges what I am doing",
                    },
                    {
                      value: "balanced",
                      label: "I want honesty, but I am still sorting things out",
                    },
                    {
                      value: "validation",
                      label: "I mainly want confirmation that I am on the right track",
                    },
                  ]}
                />
              </div>
            </div>

            {/* FINAL NOTES */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold text-slate-900">
                Final notes
              </h3>
              <div className="mt-5 grid gap-4">
                <Textarea
                  label="Anything else we should know?"
                  name="notes"
                  rows={4}
                  placeholder="Neighbor pressure, access limitations, terrain issues, family goals, guest hunting, recent changes, previous consulting experiences, etc."
                />

                <Textarea
                  label="What would a successful outcome look like to you 12–24 months from now?"
                  name="successPicture"
                  rows={4}
                  placeholder="Describe the result you actually want."
                />
              </div>
            </div>

            {/* SUBMIT */}
            <div className="border-t border-slate-200 pt-8">
              <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                <p className="text-sm leading-relaxed text-slate-700">
                  We review applications personally. If there is a fit, we will
                  follow up with next steps. If there is not, we will tell you
                  honestly. The goal is not to force every applicant forward. The
                  goal is to protect the process and protect your investment.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button>Submit application</Button>
                <p className="text-xs leading-relaxed text-slate-500">
                  By applying, you are asking us to evaluate fit for the
                  Blueprint for Giants® Property Audit as the first step in the
                  process.
                </p>
              </div>
            </div>
          </form>
        </div>
      </Section>

      {/* FAQ / OBJECTION HANDLING */}
      <Section
        title="Common questions"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card
            title="Is this just for habitat work?"
            body="No. Habitat can matter, but many properties underperform because of pressure governance failures, access problems, intrusion patterns, or misused structure. The Audit is designed to tell the truth about all of it."
          />
          <Card
            title="What if I already think I need a plan?"
            body="That may be true. But we still start with the Audit because the Plan should be built on diagnosis, not assumptions."
          />
          <Card
            title="Can I stop after the Audit?"
            body="Yes. Some clients use the Audit for clarity and self-govern from there. Others move into a System Plan. The Audit helps determine the legitimate next step."
          />
          <Card
            title="Do you guarantee a result?"
            body="We do not promise fantasy outcomes or force movement. We diagnose constraints, protect deer security, improve decision quality, and design systems that preserve daylight opportunity where the property can support it."
          />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Truth first. Then the right move.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              The best time to stop compounding pressure mistakes is before the
              next season makes them more expensive.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#application">
              <Button>Apply for a Property Audit</Button>
            </a>
            <Link href="/capture/system-plan" className="inline-flex">
              <Button type="button" variant="secondary">
                Already audited? Apply for a System Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTNOTE */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-8 text-xs leading-relaxed text-slate-500">
          Whitetail Land Solutions designs pressure-aware hunting systems.
          Results depend on property constraints, regional hunting pressure,
          surrounding land use, timing, and execution discipline. We do not
          force outcomes. We diagnose systems, protect deer security, and help
          create stronger decision quality.
        </div>
      </div>
    </main>
  );
}

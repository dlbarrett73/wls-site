// wls-site/app/capture/property-audit/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Apply for a Property Audit | Whitetail Land Solutions",
  description:
    "Apply for a Whitetail Land Solutions Property Audit. Get truth and diagnostics on your property so you stop guessing and protect daylight opportunity for mature bucks.",
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
        {subtitle ? (
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {subtitle}
          </p>
        ) : null}
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-900">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
      />
    </div>
  );
}

function Textarea({
  label,
  name,
  rows = 3,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-900">{label}</label>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
      />
    </div>
  );
}

export default function PropertyAuditCapturePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="flex flex-wrap gap-2">
            <Badge>Blueprint for Giants® Audit</Badge>
            <Badge>Truth-first</Badge>
            <Badge>Audit → Plan → Execution</Badge>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Apply for a Property Audit
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            The Property Audit is the truth layer. It tells you what’s real on your
            property—so you stop guessing, stop wasting money, and stop doing things
            that quietly reduce daylight opportunity for mature bucks.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Built on the <strong>Blueprint for Giants®</strong> framework, the Audit
            focuses on <strong>deer security</strong>, <strong>human impact</strong>,
            and the constraints that determine what your property can reliably
            produce.
          </p>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
            <p className="text-sm text-slate-700">
              Already audited and ready for design?
              <span className="ml-2">
                <Link
                  href="/capture/system-plan"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  Apply for a System Plan →
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE YOU APPLY */}
      <Section
        title="Before you apply"
        subtitle="This is not a sales call. It’s a fit check. The Audit exists to protect you from expensive mistakes."
      >
        <ul className="space-y-3 text-sm text-slate-700">
          <li>• You want mature buck opportunity that holds up over time</li>
          <li>• You’re open to truth—even if it’s not what you hoped to hear</li>
          <li>• You care about protecting deer security and daylight activity</li>
          <li>• You want clarity on what to do (and what to stop doing)</li>
        </ul>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          If you’re looking for stand locations or quick fixes, this probably
          isn’t a fit. The Audit is a diagnostic—truth first, then the plan.
        </p>
      </Section>

      {/* WHAT YOU RECEIVE */}
      <Section
        title="What you receive"
        subtitle="Clear diagnostics you can act on—whether you move forward with a System Plan or not."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Executive Truth Summary",
              desc: "The clearest explanation of what’s helping, what’s hurting, and what’s limiting results.",
            },
            {
              title: "Security & intrusion diagnosis",
              desc: "Where deer can truly feel safe—and where human impact is quietly breaking daylight activity.",
            },
            {
              title: "Property ceiling & limiting factors",
              desc: "What the property can realistically support, and the few constraints that matter most.",
            },
            {
              title: "Priority actions (and what to stop doing)",
              desc: "A practical list of moves that protect results—and common mistakes to avoid.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="text-sm font-semibold text-slate-900">
                {item.title}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-relaxed text-slate-600">
          If the Audit confirms a strong path forward, the next step is the{" "}
          <Link href="/system-plan" className="font-semibold text-slate-900 hover:underline">
            System Plan
          </Link>
          , which converts diagnostics into a huntable strategy with access, timing,
          structure, and sequencing.
        </p>
      </Section>

      {/* FORM */}
      <Section
        title="Property Audit application"
        subtitle="Answer honestly. It helps us evaluate fit and make the Audit as accurate as possible."
      >
        <form action="/api/lead" method="POST" className="space-y-6">
          {/* Hidden fields */}
          <input type="hidden" name="leadSource" value="property-audit" />
          <input type="hidden" name="offer" value="property_audit" />

          {/* CONTACT */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="First name" name="firstName" required />
            <Input label="Last name" name="lastName" required />
          </div>

          <Input label="Email" name="email" type="email" required />
          <Input
            label="Phone (optional)"
            name="phone"
            type="tel"
            placeholder="(###) ###-####"
          />

          {/* PROPERTY */}
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

          <Textarea
            label="What are you most trying to achieve?"
            name="primaryGoal"
            required
            placeholder="Ex: consistent mature buck daylight opportunities, better rut hunting, multi-hunter structure, etc."
            rows={3}
          />

          <Textarea
            label="What problem are you most trying to solve?"
            name="primaryProblem"
            required
            placeholder="Ex: daylight sightings disappeared, access feels risky, bedding is fragile, hunted out quickly, etc."
            rows={3}
          />

          <Textarea
            label="How is the property currently hunted?"
            name="currentHunting"
            placeholder="Ex: number of hunters, frequency, seasons hunted, typical access routes, etc."
            rows={3}
          />

          <Textarea
            label="What have you tried so far (food plots, hinge cutting, stands, access work, etc.)?"
            name="pastWork"
            placeholder="Bullet points are fine."
            rows={3}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-900">
                Timeline
              </label>
              <select
                name="timeline"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="this-season">This season</option>
                <option value="next-season">Next season</option>
                <option value="12-months">Within 12 months</option>
                <option value="long-term">Long-term / multi-year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-900">
                Ownership / decision maker?
              </label>
              <select
                name="decisionMaker"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-slate-400 focus:outline-none"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="yes">Yes — I decide</option>
                <option value="shared">Shared decision</option>
                <option value="no">No — someone else decides</option>
              </select>
            </div>
          </div>

          <Textarea
            label="Anything else we should know?"
            name="notes"
            placeholder="Ex: neighboring pressure, access limitations, terrain, goals for kids/guests, etc."
            rows={3}
          />

          <Button>Submit application</Button>

          <p className="text-xs leading-relaxed text-slate-500">
            We review applications personally. If you’re a fit, we’ll follow up
            with next steps. If not, we’ll tell you honestly. The Audit exists to
            protect you from guessing and wasted investment.
          </p>
        </form>
      </Section>

      {/* FOOTNOTE */}
      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-6 py-8 text-xs leading-relaxed text-slate-500">
          Whitetail Land Solutions designs pressure-aware hunting systems. Results
          depend on property constraints, regional hunting pressure, timing, and
          execution discipline. We design systems to protect deer security and
          preserve daylight opportunity—not to force movement.
        </div>
      </div>
    </main>
  );
}

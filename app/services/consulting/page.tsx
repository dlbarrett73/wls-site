// app/consulting/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Consulting — Whitetail Land Solutions",
  description:
    "Custom habitat blueprints and turnkey execution to engineer properties for mature whitetails—stealthy access, predictable movement, season-long opportunity.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] text-neutral-500">
      {children}
    </p>
  );
}

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`mt-12 ${className}`}>{children}</section>;
}

function PrimaryCTA({
  href = "/contact",
  children = "Book a Free Strategy Call",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-xl bg-brand-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:opacity-95"
    >
      {children}
    </Link>
  );
}

export default function ConsultingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* Hero */}
      <header className="max-w-3xl">
        <Eyebrow>CONSULTING</Eyebrow>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Blueprint Consulting to Engineer Your Big-Buck Paradise
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Wildlife &amp; habitat science meets deer behavior. We design properties for
          undetectable access and predictable movement—so you can hunt mature bucks sooner.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <PrimaryCTA />
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-brand-200 bg-white/70 px-5 py-3 font-semibold text-brand-800 hover:bg-white"
          >
            Explore All Services
          </Link>
        </div>
      </header>

      {/* Why WLS / Proof (brand-tinted cards) */}
      <Section>
        <div className="grid gap-4 rounded-2xl border border-brand-100 bg-brand-50/60 p-6 md:grid-cols-4">
          {[
            ["Wildlife & Habitat Expertise", "Educated in wildlife & habitat management (Penn State)."],
            ["PSU Deer Lab Experience", "Applied research background in whitetail behavior & use of space."],
            ["Years of Field Implementation", "Designing & building improvements on real hunting properties."],
            ["Turnkey or DIY", "Get a blueprint to execute—or we’ll deliver it done-for-you."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-xl border border-brand-100 bg-white p-4">
              <div className="text-sm font-semibold text-brand-800">{title}</div>
              <div className="mt-1 text-sm text-zinc-700">{body}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Productized offers */}
      <Section>
        <div className="md:flex md:items-start md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Choose Your Path</h2>
            <p className="mt-2 max-w-2xl text-zinc-700">
              Start with a custom Blueprint for Giants plan, then implement yourself—or have our team
              manage the entire build for a turnkey, day-one hunting experience.
            </p>
          </div>
      
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Plan Only */}
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Blueprint for Giants — Plan Only</h3>
            <p className="mt-2 text-zinc-700">
              A complete, ready-to-implement design tailored to your goals and property.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>• On-site or virtual assessment</li>
              <li>• Property design map (access, food, bedding, stands/blinds)</li>
              <li>• Prioritized action plan with timelines</li>
              <li>• 60-minute review call with Q&amp;A</li>
            </ul>
            <div className="mt-6">
              <PrimaryCTA>Start with a Strategy Call</PrimaryCTA>
            </div>
          </div>

          {/* Plan + Implementation */}
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Blueprint + Turnkey Implementation</h3>
            <p className="mt-2 text-zinc-700">
              We manage the work and deliver a finished, hunt-ready property.
            </p>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>• Everything in Blueprint for Giants — Plan Only</li>
              <li>• Access roads/trails &amp; screening cover</li>
              <li>• Food plots, TSI, and blind/stand installation</li>
              <li>• Budgeting, scheduling, field supervision</li>
            </ul>
            <div className="mt-6">
              <PrimaryCTA>Talk Turnkey Options</PrimaryCTA>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison (simple, mobile-safe) */}
      <Section className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
        <h3 className="text-lg font-semibold">What’s Included</h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold text-zinc-600">Deliverable</th>
                <th className="px-4 py-3 font-semibold text-brand-800">Plan Only</th>
                <th className="px-4 py-3 font-semibold text-brand-800">Plan + Implementation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-100">
              {[
                ["Site assessment (on-site or virtual)", "✓", "✓"],
                ["Custom property map & written plan", "✓", "✓"],
                ["Prioritized action plan & timeline", "✓", "✓"],
                ["Budgeting & materials list", "—", "✓"],
                ["Contractor coordination & supervision", "—", "✓"],
                ["Food plots / TSI / access & screening", "—", "✓"],
                ["Stands & blinds placed to plan", "—", "✓"],
              ].map(([item, plan, full]) => (
                <tr key={item}>
                  <td className="px-4 py-3">{item}</td>
                  <td className="px-4 py-3">{plan}</td>
                  <td className="px-4 py-3">{full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Process */}
      <Section className="rounded-2xl border border-brand-100 bg-white p-6">
        <h3 className="text-lg font-semibold">Our Proven Process</h3>
        <ol className="mt-3 grid gap-3 text-zinc-700 md:grid-cols-3">
          <li className="rounded-xl border border-brand-100 bg-white p-4">
            <span className="font-semibold text-brand-800">1) Assess</span>
            <div className="text-sm">Goals, constraints, current habitat.</div>
          </li>
          <li className="rounded-xl border border-brand-100 bg-white p-4">
            <span className="font-semibold text-brand-800">2) Design</span>
            <div className="text-sm">Map + written plan with priorities.</div>
          </li>
          <li className="rounded-xl border border-brand-100 bg-white p-4">
            <span className="font-semibold text-brand-800">3) Execute</span>
            <div className="text-sm">DIY or done-for-you implementation.</div>
          </li>
        </ol>
      </Section>

      {/* FAQs */}
      <Section className="rounded-2xl border border-brand-100 bg-white p-6">
        <h3 className="text-lg font-semibold">Frequently Asked</h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            [
              "How long does a blueprint take?",
              "Most plans are delivered within 2–4 weeks after your assessment, depending on property size and season.",
            ],
            [
              "Do you travel outside Pennsylvania?",
              "Yes—we prioritize PA and neighboring states. Tell us where your property is on the strategy call.",
            ],
            [
              "What if I already have a plan?",
              "We can audit and refine an existing plan, or implement to our standards where it makes sense.",
            ],
            [
              "What do you need from me?",
              "A short goals questionnaire, property access info (maps/ONX if available), and a quick scheduling window.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="rounded-xl border border-brand-100 bg-brand-50/40 p-4">
              <div className="font-semibold text-brand-800">{q}</div>
              <p className="mt-1 text-sm text-zinc-700">{a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="text-center">
        <h3 className="text-2xl font-bold">Ready to design your big-buck property?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-zinc-700">
          Start with a free strategy call. If it’s a fit, we’ll schedule your assessment and begin your Blueprint for Giants.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <PrimaryCTA />
          <Link
            href="/properties"
            className="inline-flex items-center rounded-xl border border-brand-200 bg-white/70 px-6 py-3 font-semibold text-brand-800 hover:bg-white"
          >
            See Land for Sale
          </Link>
        </div>
      </Section>
    </main>
  );
}

// app/page.tsx
import React from "react";
import Link from "next/link";

// Reusable components (client-safe)
import CtaSafe from "../components/home/CtaSafe";
import HeroDualCta from "../components/HeroDualCta";

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* FULL-WIDTH HERO (Dual CTA) */}
      <section className="w-full">
        <HeroDualCta
          imageSrc="/images/hero.jpg"
          imageAlt="Kent with mature whitetail in engineered habitat"
          title="Stop Guessing. Start Knowing."
          subtitle={`The Blueprint for Giants® Property Audit reveals what your land can truly support — before you spend another dollar, burn another season, or make pressure cheaper.
Built for serious landowners who want consistent opportunities at mature bucks — not hope, hype, or habitat theater.`}
          // Primary CTA = Audit (flagship)
          primaryHref="/property-audit"
          primaryLabel="Apply for a Property Audit"
          // Secondary CTA = Properties
          secondaryHref="/properties"
          secondaryLabel="Explore Hunt-Ready Properties"
        />
      </section>

      {/* Authority Statement */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Most properties don’t fail because of effort — they fail because of unseen limits.
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          Food plots get planted. Stands get hung. Access routes get cut.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          And yet… mature bucks disappear, daylight movement collapses, and pressure quietly compounds.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          The problem isn’t work ethic.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          The problem is investing without understanding your property’s structural ceiling and pressure costs.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          Until those are known, every improvement risks making the system worse — not better.
        </p>
      </section>

      {/* Turth Pivot */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          Every property has a ceiling. Guessing doesn’t change it.
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          Mature bucks operate within strict structural, security, and pressure constraints.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          Some properties can support consistent resident mature buck ownership. Others can’t — no matter how much money is spent.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          The Blueprint for Giants® Property Audit exists for one reason:
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-left text-slate-600">
          <b>To tell the truth about what your land can actually produce — and why.</b>
        </p>
      </section>

      {/* WHAT THE BFG PROPERTY AUDIT IS */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            What is the Blueprint for Giants® Property Audit?
          </h2>
          <p className="mt-4 text-slate-600">
            The Blueprint for Giants® Property Audit is a comprehensive, pressure-first evaluation of your property that defines:
          </p>

          <ul className="mx-auto mt-6 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-600">
            <li>Your Structural Ceiling (what outcomes are possible — and which aren’t)</li>
            <li>Your Pressure Floor (how quickly opportunities decay under hunting use)</li>
            <li>Your Daylight Access Reality (when, where, and why mature bucks are exposed)</li>
            <li>Your Risk Profile (where capital and effort are being silently burned)</li>
          </ul>

          <p className="mt-6 text-slate-600">
            This is not a habitat plan. It is the decision-making framework that determines whether any plan will work.
          </p>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT (POSITIONING VS COMPETITORS) */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            This isn’t another habitat consultation.
          </h2>
          <p className="mt-4 text-slate-600">
            Most consulting starts with tactics: food, bedding, stand locations, access routes.
          </p>
          <p className="mt-4 text-slate-600">
            We start with <b>governance</b>.
          </p>
          <p className="mt-4 text-slate-600">
            Before recommending a single improvement, we evaluate:
          </p>

          <ul className="mx-auto mt-6 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-600">
            <li>Pressure economics</li>
            <li>Security distribution</li>
            <li>Surrounding hunting context</li>
            <li>Structural bottlenecks no tactic can overcome</li>
          </ul>

          <p className="mt-6 text-slate-600">
            Because without those answers, execution becomes expensive guessing.
          </p>
        </div>
      </section>

      {/* WHAT YOU RECEIVE (DELIVERABLES) */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            What you receive from the Property Audit
          </h2>

          <ul className="mx-auto mt-6 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-600">
            <li>Executive Truth Summary — clear, unemotional conclusions</li>
            <li>Structural Ceiling Qualification</li>
            <li>Pressure Scoring & Risk Diagnostics</li>
            <li>Daylight Opportunity Assessment</li>
            <li>Capital Preservation & Opportunity Guidance</li>
            <li>Clear next-step recommendations (or hard stops)</li>
          </ul>

          <p className="mt-6 text-center text-sm italic text-slate-500">
            No fluff. No false hope. No selling execution before truth.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR / WHO IT IS NOT */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Who this is for — and who it isn’t
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                This IS for you if:
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>You own land and want consistent opportunities at mature bucks</li>
                <li>You value truth over optimism</li>
                <li>You’re willing to hear limits before investing more</li>
                <li>You want to protect seasons, capital, and deer movement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                This is NOT for you if:
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>You want guaranteed inches</li>
                <li>You want quick fixes</li>
                <li>You’re unwilling to change pressure behavior</li>
                <li>You just want someone to tell you what you already believe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS OVERVIEW (Simple, Clean) */}
      <section id="process">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            The process is simple — and intentional.
          </h2>

          <h3 className="text-xl font-semibold text-slate-900">
            Steps
          </h3>

          <ol className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
            <li><b>Apply</b> — Not every property qualifies</li>
            <li><b>Evaluate</b> — Pressure, structure, and risk assessed</li>
            <li><b>Deliver Truth</b> — Clear ceiling, floor, and paths forward</li>
            <li><b>Decide</b> — Proceed to System Planning, Execution, or stop</li>
          </ol>

          <p className="mt-2 text-sm text-slate-600">
            The audit protects you whether you move forward or not.
          </p>
        </div>
      </section>

      {/* RISK REVERSAL / TRUST SECTION */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            The audit pays for itself — even if you never work with us again.
          </h2>
          <p className="mt-8 text-center italic text-slate-500">
            Many clients save tens of thousands of dollars by discovering:
          </p>
          <ul className="mx-auto mt-10 max-w-3xl list-disc space-y-2 pl-6 text-slate-600">
            <li>Their ceiling is lower than assumed</li>
            <li>Pressure costs were miscalculated</li>
            <li>Execution would have failed</li>
          </ul>

          <p className="mt-8 text-center italic text-slate-500">
            That clarity alone is the return.
          </p>
        </div>
      </section>

      {/* PRIMARY CTA SECTION (END OF PAGE) */}
      <section>
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            If you want certainty — this is where it starts.
          </h2>
          <p className="mt-4 text-slate-600">
            The Blueprint for Giants® Property Audit is the required first step for every serious landowner we work with.
          </p>
          <p className="mt-4 text-slate-600">
            If your goal is consistent, repeatable opportunities at mature bucks — begin here.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CtaSafe
              href="/property-audit"
              className="bg-emerald-800 hover:bg-emerald-900"
            >
              Apply for a Property Audit
            </CtaSafe>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              Explore Properties →
            </Link>
          </div>

          <div className="mt-4">
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-slate-400"
            >
              Questions first? Contact us →
            </Link>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-10" />
    </main>
  );
}

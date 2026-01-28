// app/page.tsx
import React from "react";
import Link from "next/link";

// Reusable components (client-safe)
import CtaSafe from "../components/home/CtaSafe";
import HeroDualCta from "../components/HeroDualCta";

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

// Consistent layout tokens (tight vertical rhythm)
const SECTION_Y = "py-16 md:py-20";
const CONTAINER = "mx-auto w-full max-w-6xl px-6";
const NARROW = "mx-auto w-full max-w-4xl px-6";
const HEADING = "text-2xl font-bold text-slate-900 sm:text-3xl";
const BODY = "text-slate-600 leading-relaxed";

function SectionTransition({
  from = "white",
  to = "slate-50",
}: {
  from?: "white" | "slate-50";
  to?: "white" | "slate-50";
}) {
  const fromClass = from === "white" ? "from-white" : "from-slate-50";
  const toClass = to === "white" ? "to-white" : "to-slate-50";

  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 bg-gradient-to-b ${fromClass} ${toClass}`} />
      <div className={`relative ${CONTAINER}`}>
        <div className="h-px w-full bg-slate-200/70" />
      </div>
      <div className="h-10 md:h-12" />
    </div>
  );
}

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
Built for serious landowners who want consistent opportunities at mature bucks — not hope, hype, or habitat theater. 
Finally understand why your property behaves the way it does — and whether fixing it is worth it.`}
          primaryHref="/property-audit"
          primaryLabel="Apply for a Property Audit"
          secondaryHref="/properties"
          secondaryLabel="Explore Hunt-Ready Properties"
        />
      </section>

      {/* Authority Statement (White) */}
      <section className={`bg-white ${SECTION_Y}`}>
        <div className={`${NARROW} text-center`}>
          <h2 className={HEADING}>
            Most properties don’t fail because of effort — they fail because of unseen limits.
          </h2>

          <div className="mt-8 space-y-4 text-left">
            <p className={BODY}>Food plots get planted. Stands get hung. Access routes get cut.</p>
            <p className={BODY}>
              And yet… mature bucks disappear, daylight movement collapses, and pressure quietly compounds.
            </p>
            <p className={BODY}>The problem isn’t work ethic.</p>
            <p className={BODY}>
              The problem is investing without understanding your property’s structural ceiling and pressure costs.
            </p>
            <p className={BODY}>
              Until those are known, every improvement risks making the system worse — not better.
            </p>
          </div>
        </div>
      </section>

      <SectionTransition from="white" to="slate-50" />

      {/* Truth Pivot (Slate) */}
      <section className={`bg-slate-50 ${SECTION_Y}`}>
        <div className={`${NARROW} text-center`}>
          <h2 className={HEADING}>Every property has a ceiling. Guessing doesn’t change it.</h2>

          <div className="mt-8 space-y-4 text-left">
            <p className={BODY}>Mature bucks operate within strict structural, security, and pressure constraints.</p>
            <p className={BODY}>
              Some properties can support consistent resident mature buck ownership. Others can’t — no matter how
              much money is spent.
            </p>
            <p className={BODY}>The Blueprint for Giants® Property Audit exists for one reason:</p>
            <p className={BODY}>
              <b>To tell the truth about what your land can actually produce — and why.</b>
            </p>
            <p className={BODY}>
            By the end of the Property Audit, you will have clear, unemotional answers to three questions every serious landowner eventually faces:
            </p>
            <p className={BODY}>
            What is realistically possible here?
            </p>
            <p className={BODY}>
            What is quietly working against me?
            </p>
            <p className={BODY}>
            And what is the safest path forward — or the smartest place to stop?
            </p>
          </div>
        </div>
      </section>

      <SectionTransition from="slate-50" to="white" />

      {/* WHAT THE BFG PROPERTY AUDIT IS (White) */}
      <section className={`bg-white ${SECTION_Y}`}>
        <div className={`${NARROW} text-center`}>
          <h2 className={HEADING}>What is the Blueprint for Giants® Property Audit?</h2>
          <p className={`mt-6 ${BODY}`}>
            The Blueprint for Giants® Property Audit is a comprehensive, pressure-first evaluation of your property that
            defines:
          </p>

          <ul className="mx-auto mt-8 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-600">
            <li>Your Structural Ceiling (what outcomes are possible — and which aren’t)</li>
            <li>Your Pressure Floor (how quickly opportunities decay under hunting use)</li>
            <li>Your Daylight Access Reality (when, where, and why mature bucks are exposed)</li>
            <li>Your Risk Profile (where capital and effort are being silently burned)</li>
          </ul>

          <p className={`mt-8 ${BODY}`}>
            This is not a habitat plan. It is the decision-making framework that determines whether any plan will work.
          </p>
        </div>
      </section>

      <SectionTransition from="white" to="slate-50" />

      {/* WHAT MAKES THIS DIFFERENT (Slate) */}
      <section className={`bg-slate-50 ${SECTION_Y}`}>
        <div className={`${NARROW} text-center`}>
          <h2 className={HEADING}>This isn’t another habitat consultation.</h2>

          <div className="mt-8 space-y-4 text-left">
            <p className={BODY}>Most consulting starts with tactics: food, bedding, stand locations, access routes.</p>
            <p className={BODY}>
              We start with <b>governance</b>.
            </p>
            <p className={BODY}>Before recommending a single improvement, we evaluate:</p>
          </div>

          <ul className="mx-auto mt-6 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-600">
            <li>Pressure economics</li>
            <li>Security distribution</li>
            <li>Surrounding hunting context</li>
            <li>Structural bottlenecks no tactic can overcome</li>
          </ul>

          <p className={`mt-8 ${BODY}`}>Because without those answers, execution becomes expensive guessing.</p>
          <p className={`mt-8 ${BODY}`}>The Property Audit delivers those answers in a clear, structured set of findings — before a single tactic is recommended.</p>
        </div>
      </section>

      <SectionTransition from="slate-50" to="white" />

      {/* WHAT YOU RECEIVE (White) */}
      <section className={`bg-white ${SECTION_Y}`}>
        <div className={`${NARROW} text-center`}>
          <h2 className={HEADING}>What you receive from the Property Audit</h2>

          <div className="mt-8 space-y-4 text-left">
            <p className={BODY}>
              You’ll know what’s possible, what’s not, and the safest path forward before you spend money or seasons.
            </p>
            <p className={BODY}>
              Each audit culminates in a set of governing conclusions and risk diagnostics you can rely on — whether you move forward or not.
            </p>
              <ul className="list-disc space-y-2 pl-6 text-slate-600">
              <li>Executive Truth Summary — clear, unemotional conclusions</li>
              <li>Structural Ceiling Qualification</li>
              <li>Pressure Scoring &amp; Risk Diagnostics</li>
              <li>Daylight Opportunity Assessment</li>
              <li>Capital Preservation &amp; Opportunity Guidance</li>
              <li>Clear next-step recommendations (or hard stops)</li>
            </ul>

            <p className="text-sm italic text-slate-500">
              No fluff. No false hope. No selling execution before truth.
            </p>
          </div>
        </div>
      </section>

      <SectionTransition from="white" to="slate-50" />

      {/* WHO THIS IS FOR / WHO IT IS NOT (Slate) */}
      <section className={`bg-slate-50 ${SECTION_Y}`}>
        <div className={`${CONTAINER}`}>
          <h2 className={`text-center ${HEADING}`}>Who this is for — and who it isn’t</h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">This IS for you if:</h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>You own land and want consistent opportunities at mature bucks</li>
                <li>You value truth over optimism</li>
                <li>You’re willing to hear limits before investing more</li>
                <li>You want to protect seasons, capital, and deer movement</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">This is NOT for you if:</h3>
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

      <SectionTransition from="slate-50" to="white" />

      {/* PROCESS OVERVIEW (White) */}
      <section id="process" className={`bg-white ${SECTION_Y}`}>
        <div className={`${CONTAINER}`}>
          <h2 className={`text-center ${HEADING}`}>The process is simple — and intentional.</h2>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ol className="list-decimal space-y-3 pl-6 text-slate-600">
              <li>
                <b className="text-slate-900">Apply</b> — Not every property qualifies
              </li>
              <li>
                <b className="text-slate-900">Evaluate</b> — Pressure, structure, and risk assessed
              </li>
              <li>
                <b className="text-slate-900">Deliver Truth</b> — Clear ceiling, floor, and paths forward
              </li>
              <li>
                <b className="text-slate-900">Decide</b> — Proceed to System Planning, Execution, or stop
              </li>
            </ol>

            <p className="mt-5 text-sm text-slate-600">The audit protects you whether you move forward or not.</p>
          </div>
        </div>
      </section>

      <SectionTransition from="white" to="slate-50" />

      {/* RISK REVERSAL / TRUST (Slate) */}
      <section className={`bg-slate-50 ${SECTION_Y}`}>
        <div className={`${CONTAINER}`}>
          <h2 className={`text-center ${HEADING}`}>
            The audit pays for itself — even if you never work with us again.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center italic text-slate-500">
            Many clients save tens of thousands of dollars by discovering:
          </p>

          <ul className="mx-auto mt-8 max-w-3xl list-disc space-y-2 pl-6 text-slate-600">
            <li>Their ceiling is lower than assumed</li>
            <li>Pressure costs were miscalculated</li>
            <li>Execution would have failed</li>
          </ul>

          <p className="mx-auto mt-8 max-w-3xl text-center italic text-slate-500">
            That clarity alone is the return.
          </p>
        </div>
      </section>

      <SectionTransition from="slate-50" to="white" />

      {/* PRIMARY CTA (White) */}
      <section className={`bg-white ${SECTION_Y}`}>
        <div className={`${NARROW} text-center`}>
          <h2 className={HEADING}>If you want certainty — this is where it starts.</h2>

          <div className="mt-8 space-y-4 text-left">
            <p className={BODY}>
              The Blueprint for Giants® Property Audit is the required first step for every serious landowner we work
              with.
            </p>
            <p className={BODY}>
              If your goal is consistent, repeatable opportunities at mature bucks — begin here.
            </p>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <CtaSafe href="/property-audit" className="bg-emerald-800 hover:bg-emerald-900">
              Apply for a Property Audit
            </CtaSafe>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              Explore Hunt-Ready Properties →
            </Link>
          </div>

          <div className="mt-6">
            <p className={BODY}>Clarity first. Execution only if it makes sense.</p>
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

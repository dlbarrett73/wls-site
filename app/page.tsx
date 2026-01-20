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
      {/* HERO (Dual CTA) */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-10">
        <HeroDualCta
          imageSrc="/images/hero.jpg"
          imageAlt="Kent with mature whitetail in engineered habitat"
          title="Stop Guessing. Know Exactly What Your Property Can Produce."
          subtitle={`Most landowners waste years — and tens of thousands of dollars — chasing tactics.
We reveal the true ceiling of your land before you invest another dollar.`}
          // Primary CTA = Audit (flagship)
          primaryHref="/property-audit"
          primaryLabel="Get the Truth About Your Property"
          // Secondary CTA = Properties
          secondaryHref="/properties"
          secondaryLabel="Explore Hunt-Ready Properties"
        />
      </section>

      {/* Authority Statement */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Great Habitat Doesn’t Fail. Unmanaged Pressure Does.
        </h2>
        <p className="mt-4 text-slate-600">
          Most hunting properties don’t underperform because of a lack of food
          plots, trees, or stand locations. They fail because pressure isn’t
          measured, governed, or understood.
        </p>
        <p className="mt-4 text-slate-600">
          At Whitetail Land Solutions, we don’t start with projects or
          prescriptions. We start with truth — a rigorous audit that establishes
          what your property can actually support and what is silently limiting
          it.
        </p>
        <p className="mt-4 text-slate-600">
          Because until pressure is governed, improvement is irrelevant.
        </p>
      </section>

      {/* Core Offer Introduction */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The Blueprint for Giants® Property Audit
          </h2>
          <p className="mt-4 text-slate-600">
            The Property Audit is the foundation of everything we do.
          </p>
          <p className="mt-4 text-slate-600">
            It is a disciplined, evidence-based evaluation of your property as
            it exists today — designed to answer the most important questions
            every serious landowner must resolve before investing further:
          </p>
          <ul className="mx-auto mt-6 max-w-2xl list-disc space-y-2 pl-6 text-left text-slate-600">
            <li>What is this property truly capable of producing?</li>
            <li>What pressure variables are working against it?</li>
            <li>Is further investment justified — or wasted?</li>
          </ul>
          <p className="mt-6 text-slate-600">
            This is not a design, a build plan, or a list of projects. It is a
            decision-making instrument that replaces guesswork with clarity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CtaSafe
              href="/property-audit"
              className="bg-emerald-800 hover:bg-emerald-900"
            >
              Apply to Begin the Audit
            </CtaSafe>
            <Link
              href="/why-it-matters"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              Why Audit First? →
            </Link>
          </div>
        </div>
      </section>

      {/* What the Audit Delivers */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            What You Receive
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Ceiling Qualification Report
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A disciplined determination of your property’s true big-buck
                ceiling — based on physical constraints, layout, and landscape
                realities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Pressure Scoring Report
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A documented evaluation of observable pressure variables and how
                they currently function on your property.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Executive Truth Summary
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                A clear, client-ready synthesis of what’s real, what’s limiting
                you, and what decision the truth supports.
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm italic text-slate-500">
            Important: The Property Audit does not prescribe habitat improvements
            or hunting tactics. It establishes the truth that makes the next
            decision obvious.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Who This Is For
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                This Is For You If:
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>You are serious about consistent mature buck outcomes</li>
                <li>You want truth and clarity — not opinions or generic advice</li>
                <li>You are willing to manage access and pressure intentionally</li>
                <li>You refuse to invest more money or seasons without certainty</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                This Is Not For You If:
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                <li>You want a quick map, stand locations, or tactics</li>
                <li>You are looking for guarantees or shortcuts</li>
                <li>You are unwilling to govern pressure</li>
                <li>You prefer ideas over discipline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section id="process">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Our Process
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-4">
            <div>
              <span className="text-4xl font-bold text-emerald-800">1</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Learn more about the Property Audit
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We begin with a short application to ensure fit, readiness, and
                alignment.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-emerald-800">2</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Audit Execution
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We evaluate your property using a standardized, evidence-based
                framework focused on ceiling and pressure mechanics.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-emerald-800">3</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Executive Review & Truth Delivery
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                You receive clear documentation and a guided review so you
                understand exactly what the property can — and cannot — do.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-emerald-800">4</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Next-Phase Engagements
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Only if the truth supports it, we may discuss system architecture
                or implementation. No pressure. No obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Differentiation */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Why Whitetail Land Solutions
          </h2>

          <ul className="mx-auto mt-10 max-w-3xl list-disc space-y-2 pl-6 text-slate-600">
            <li>We prioritize governance over guesswork</li>
            <li>We document observable reality, not opinions</li>
            <li>We protect your investment by preventing false options</li>
            <li>We operate with discipline, restraint, and integrity</li>
            <li>We build legacies — not illusions</li>
          </ul>

          <p className="mt-8 text-center italic text-slate-500">
            Truth Before Tactics. Clarity Before Commitment. Legacy Beyond
            Guesswork.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Ready for the Truth?
          </h2>
          <p className="mt-4 text-slate-600">
            If you want clarity before you invest — and discipline before you
            improve — the Blueprint for Giants® Property Audit is the first step.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CtaSafe
              href="/property-audit"
              className="bg-emerald-800 hover:bg-emerald-900"
            >
              Get the Truth (Apply)
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

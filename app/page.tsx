import React from "react";
import Image from "next/image";
import Link from "next/link";

// Reusable components (client-safe)
import CtaSafe from "../components/home/CtaSafe";

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* HERO Section */}
      <section className="relative w-full h-[72vh] sm:h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Kent with mature whitetail in engineered habitat"
          priority
          fill
          sizes="100vw"
        className="object-cover object-center"
        />
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-3xl">
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Stop Guessing What Your Property Can Do.
      </h1>
              <p className="mt-4 text-base sm:text-lg text-white/90">
                The Blueprint for Giants® Property Audit reveals your property’s true big-buck ceiling and the pressure mechanics that determine outcomes — before you spend another dollar or sacrifice another season.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaSafe
                  href="/capture/consulting"
                  className="bg-emerald-800 hover:bg-emerald-900"
                >
                  Apply for a Property Audit>
                <Link
                  href="#process"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white/90 text-slate-900 border border-slate-200 hover:bg-slate-100 focus:ring-emerald-700"
                >
                  See How the Process Works →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Statement */}
      <section className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Great Habitat Doesn’t Fail. Unmanaged Pressure Does.
        </h2>
        <p className="mt-4 text-slate-600">
          Most hunting properties don’t underperform because of a lack of food plots, trees, or stand locations. They fail because pressure isn’t measured, governed, or understood.
        </p>
        <p className="mt-4 text-slate-600">
          At Whitetail Land Solutions, we don’t start with projects or prescriptions. We start with truth — a rigorous audit that establishes what your property can actually support and what is silently limiting it.
        </p>
        <p className="mt-4 text-slate-600">
          Because until pressure is governed, improvement is irrelevant.
        </p>
      </section>

      {/* Core Offer Introduction */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            The Blueprint for Giants® Property Audit
          </h2>
          <p className="mt-4 text-slate-600">
            The Property Audit is the foundation of everything we do.
          </p>
          <p className="mt-4 text-slate-600">
            It is a disciplined, evidence-based evaluation of your property as it exists today — designed to answer the most important questions every serious landowner must resolve before investing further:
          </p>
          <ul className="mt-6 text-left space-y-2 text-slate-600 max-w-2xl mx-auto list-disc pl-6">
            <li>What is this property truly capable of producing?</li>
            <li>What pressure variables are working against it?</li>
            <li>Is further investment justified — or wasted?</li>
          </ul>
          <p className="mt-6 text-slate-600">
            This is not a design, a build plan, or a list of projects. It is a decision-making instrument that replaces guesswork with clarity.
          </p>
          <div className="mt-8">
            <CtaSafe
              href="/capture/consulting"
              className="bg-emerald-800 hover:bg-emerald-900"
            >
              Apply to Begin the Audit
            </CtaSafe>
          </div>
        </div>
      </section>

      {/* What the Audit Delivers */}
      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            What You Receive
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Ceiling Qualification Report</h3>
              <p className="mt-2 text-sm text-slate-600">
                A disciplined determination of your property’s true big-buck ceiling — based on physical constraints, layout, and landscape realities.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Pressure Scoring Report</h3>
              <p className="mt-2 text-sm text-slate-600">
                A documented evaluation of observable pressure variables and how they currently function on your property.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">Executive Truth Summary</h3>
              <p className="mt-2 text-sm text-slate-600">
                A clear, client-ready synthesis of what’s real, what’s limiting you, and what decision the truth supports.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm italic text-slate-500 text-center">
            Important: The Property Audit does not prescribe habitat improvements or hunting tactics. It establishes the truth that makes the next decision obvious.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Who This Is For
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                This Is For You If:
              </h3>
              <ul className="mt-4 space-y-2 list-disc pl-6 text-slate-600">
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
              <ul className="mt-4 space-y-2 list-disc pl-6 text-slate-600">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Our Process
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-4">
            <div>
              <span className="text-4xl font-bold text-emerald-800">1</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Apply for a Property Audit
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We begin with a short application to ensure fit, readiness, and alignment.
              </p>
            </div>
            <div>
              <span className="text-4xl font-bold text-emerald-800">2</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Audit Execution
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We evaluate your property using a standardized, evidence-based framework focused on ceiling and pressure mechanics.
              </p>
            </div>
            <div>
              <span className="text-4xl font-bold text-emerald-800">3</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Executive Review & Truth Delivery
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                You receive clear documentation and a guided review so you understand exactly what the property can — and cannot — do.
              </p>
            </div>
            <div>
              <span className="text-4xl font-bold text-emerald-800">4</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Next-Phase Engagements
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Only if the truth supports it, we may discuss system architecture or implementation. No pressure. No obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Differentiation */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
            Why Whitetail Land Solutions
          </h2>
          <ul className="mt-10 space-y-2 text-slate-600 max-w-3xl mx-auto list-disc pl-6">
            <li>We prioritize governance over guesswork</li>
            <li>We document observable reality, not opinions</li>
            <li>We protect your investment by preventing false options</li>
            <li>We operate with discipline, restraint, and integrity</li>
            <li>We build legacies — not illusions</li>
          </ul>
          <p className="mt-8 italic text-center text-slate-500">
            Truth Before Tactics. Clarity Before Commitment. Legacy Beyond Guesswork.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready for the Truth?
          </h2>
          <p className="mt-4 text-slate-600">
            If you want clarity before you invest — and discipline before you improve — the Blueprint for Giants® Property Audit is the first step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CtaSafe
              href="/capture/consulting"
              className="bg-emerald-800 hover:bg-emerald-900"
            >
              Apply for a Property Audit
            </CtaSafe>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 focus:ring-emerald-700"
            >
              Questions? Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-10" />
    </main>
  );
}

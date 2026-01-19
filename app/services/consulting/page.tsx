// app/services/consulting/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CtaButton from "../../../components/CtaButton";

export const metadata = {
  title: "Consulting — Whitetail Land Solutions",
  description:
    "Blueprints and strategy to engineer your property for mature whitetails. Engineered for Giants. Built for Legacy.",
};

export default function ConsultingPage() {
  return (
    <>
      {/* =================== FULL-SCREEN HERO =================== */}
      <header className="relative h-[85vh] md:h-screen w-screen overflow-hidden">
        <Image
          src="/images/consulting.png"
          alt="Consulting — Whitetail habitat planning"
          fill
          priority
          className="object-cover"
        />
        {/* Richer contrast for white text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-brand-900/40" />

        <div className="relative z-10 h-full">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6 md:px-10 text-white">
            <p className="text-xs font-semibold tracking-widest text-white/85">
              CONSULTING
            </p>

            {/* Pain-point lead, then flagship name */}
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Most hunters own land. Few own a big buck paradise.
            </h1>
            <p className="mt-4 max-w-3xl text-base md:text-lg text-white/90">
              <span className="font-semibold">Blueprint for Giants</span> is our premium,
              boots-on-the-ground plan that engineers your property for mature whitetails—so
              you know exactly what to do, where, and why.
            </p>

            {/* Pricing transparency chips */}
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-semibold ring-1 ring-white/25">
                Plans from <span className="whitespace-nowrap">$7,500</span>
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-semibold ring-1 ring-white/25">
                Implementation <span className="whitespace-nowrap">$20K–$30K+</span>
              </span>
              <span className="rounded-full bg-white/10 px-4 py-1 text-sm font-semibold ring-1 ring-white/25">
                Engineered for Giants. Built for Legacy.
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href="/capture/consulting">Book a Free Strategy Call</CtaButton>
              <Link
                href="#process"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/30 text-white hover:bg-white/10"
              >
                See the Process
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* =================== PAGE BODY =================== */}
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
        {/* QUICK VALUE PITCH (kept, tightened copy) */}
        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Purpose-Built Plan",
              body:
                "Designed around deer behavior, undetectable access, and your goals—not generic tips.",
            },
            {
              title: "Map-First Clarity",
              body:
                "Actionable maps and a phased plan so you can DIY or hand it to a dozer crew tomorrow.",
            },
            {
              title: "ROI Mindset",
              body:
                "Prioritized for hunting impact and resale value—Engineered for Giants, Built for Legacy.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-zinc-700">{item.body}</p>
            </div>
          ))}
        </section>

        {/* =================== VISUAL PROCESS =================== */}
        <section id="process" className="mt-16">
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 md:p-8">
            <h2 className="text-2xl font-extrabold tracking-tight">Our Proven Process</h2>
            <p className="mt-2 max-w-3xl text-zinc-700">
              Intake ➜ Site Visit ➜ Design Map ➜ Action Plan ➜ Results. We keep pressure low,
              access undetectable, and decisions crystal-clear.
            </p>

            {/* Step cards with arrow separators for a visual “flow” without external icons */}
            <div className="mt-6 grid gap-4 md:grid-cols-5">
              {[
                {
                  t: "Intake",
                  d: "Goals, pressure, acreage, and context. We align on outcomes and timeline.",
                },
                {
                  t: "Site Visit",
                  d: "Walk the property; analyze wind, access, hunting pressure, and sign.",
                },
                {
                  t: "Design Map",
                  d: "Stand sites, access routes, food, TSI, bedding, screening, sanctuaries.",
                },
                {
                  t: "Action Plan",
                  d: "Phased priorities and scope—DIY or DFY with trusted partners.",
                },
                {
                  t: "Results",
                  d: "Hunt a system engineered for mature bucks—and protect resale value.",
                },
              ].map((s, i, arr) => (
                <div key={s.t} className="relative">
                  <div className="rounded-2xl bg-white p-5 shadow-soft border border-zinc-200 h-full">
                    <div className="text-sm font-semibold tracking-widest text-brand-700">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-1 text-lg font-bold">{s.t}</h3>
                    <p className="mt-2 text-sm text-zinc-700">{s.d}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-2xl">
                      <span aria-hidden>→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================== DECISION LOGIC =================== */}
        <section id="decision" className="mt-16">
          <div className="rounded-2xl bg-brand-50 p-6 md:p-8 border border-brand-100">
            <h2 className="text-2xl font-extrabold tracking-tight">Choose Your Path</h2>
            <p className="mt-2 max-w-3xl text-zinc-700">
              Start with a plan. Then either do it yourself or have us build it for you. Already have a plan?
              Skip straight to implementation.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {/* DIY */}
              <div className="rounded-2xl bg-white p-6 shadow-soft border border-zinc-200">
                <div className="text-sm font-semibold tracking-widest text-brand-700">
                  DIY
                </div>
                <h3 className="mt-1 text-xl font-bold">Consulting + DIY</h3>
                <p className="mt-2 text-zinc-700">
                  We create your Blueprint for Giants. You (or your crew) implement with clear maps,
                  priorities, and steps—on your timeline.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li>• Property walk & hunting pressure analysis</li>
                  <li>• Stand & access placement for wind advantage</li>
                  <li>• Undetectable access trail design</li>
                  <li>• Food plots, TSI, bedding, screening, sanctuaries</li>
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-600">
                    Plans from $7,500
                  </span>
                  
                </div>
              </div>

              {/* DFY */}
              <div className="rounded-2xl bg-white p-6 shadow-soft border border-zinc-200">
                <div className="text-sm font-semibold tracking-widest text-brand-700">
                  DFY
                </div>
                <h3 className="mt-1 text-xl font-bold">Consulting + Done-For-You</h3>
                <p className="mt-2 text-zinc-700">
                  We design your blueprint and manage habitat implementation with our trusted partners—
                  built right, the first time.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li>• Everything in DIY consulting, plus build-out</li>
                  <li>• Project management & quality control</li>
                  <li>• Sequencing to minimize pressure</li>
                  <li>• Undetectable access trails implemented</li>
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-600">
                    Typical builds $20K–$30K+
                  </span>
                  
                </div>
              </div>

              {/* Already have a plan */}
              <div className="rounded-2xl bg-white p-6 shadow-soft border border-zinc-200">
                <div className="text-sm font-semibold tracking-widest text-brand-700">
                  BUILD
                </div>
                <h3 className="mt-1 text-xl font-bold">I Already Have a Plan</h3>
                <p className="mt-2 text-zinc-700">
                  Great—let’s turn that plan into reality with{" "}
                  <span className="font-semibold">Habitat Implementation</span>.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li>• Clear scope, budget, and timeline</li>
                  <li>• On-site execution by pros</li>
                  <li>• Undetectable access prioritized</li>
                  <li>• Built for hunting success & resale value</li>
                </ul>
                <div className="mt-5">
                  <Link
                    href="/services/implementation"
                    className="inline-flex w-full justify-center items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-brand-700 text-brand-700 hover:bg-brand-50"
                  >
                    Go to Implementation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================== WHY US (kept, tightened) =================== */}
        <section className="mt-16 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-soft">
          <h2 className="text-2xl font-extrabold tracking-tight">Why Us</h2>
          <p className="mt-3 text-zinc-700 max-w-4xl">
            Our lead consultant, <span className="font-semibold">Kent</span>, blends formal
            training in forestry and wildlife/habitat from Penn State, research with the PSU deer
            lab, and years designing and building improvements on real hunting properties. That
            mix—biology, timber, undetectable access, and on-the-ground execution—produces plans
            that actually work for big, mature bucks.
          </p>
         
        </section>

        {/* =================== LEGACY ANCHOR STRIP =================== */}
        <section className="mt-16 rounded-2xl bg-brand-700 px-6 py-10 text-white">
          <h3 className="text-2xl font-extrabold tracking-tight text-white">
            Leave your children a hunting property engineered for giants.
          </h3>
          <p className="mt-2 text-white/90">
            Start with a free, no-pressure strategy call. We’ll point you to the best next step—
            DIY, DFY, or straight to implementation.
          </p>
         
        </section>
      </main>
    </>
  );
}

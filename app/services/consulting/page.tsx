// app/services/consulting/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Safe CTA import helper:
 * Works whether CtaButton is a default or named export.
 * If the component isn't found, it falls back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  const Button =
    (Cta as any).CtaButton ||
    (Cta as any).default ||
    ((props: CtaProps) => (
      <Link
        href={props.href}
        className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-soft transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-500 bg-brand-700 text-white ${props.className}`}
      >
        {props.children}
      </Link>
    ));
  return <Button href={href} className={className}>{children}</Button>;
}

export const metadata = {
  title: "Consulting — Whitetail Land Solutions",
  description:
    "Blueprints and strategy to engineer your property for mature whitetails. Engineered for Giants. Built for Legacy.",
};

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* HERO — on-brand image + overlay, white text for legibility */}
      <section className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0">
          {/* Replace the path if your image lives elsewhere */}
          <Image
            src="/images/consulting.png"
            alt="Consulting — Whitetail habitat planning"
            fill
            priority
            className="object-cover"
          />
          {/* Brand-tinted overlay for consistent look with Services */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-brand-900/60 to-brand-700/60" />
        </div>

        <div className="relative z-10 px-6 py-16 md:px-10 md:py-20 text-white">
          <p className="text-xs font-semibold tracking-widest text-white/80">
            CONSULTING
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
            Blueprint for Giants
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/90">
            Customized, boots-on-the-ground strategy to engineer your property for
            mature whitetails—without guesswork. You’ll know exactly what to do,
            where, and why.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
            <Link
              href="#decision"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/30 text-white/90 hover:bg-white/10"
            >
              See Your Best Path
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK VALUE PITCH — matches the simple, tidy card vibe from Services */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Purpose-Built Plan",
            body:
              "We design around deer behavior, pressure, access, wind, and your goals—not generic tips.",
          },
          {
            title: "Map-First Clarity",
            body:
              "You get an actionable map and phased plan so you can DIY or hand it to a dozer crew tomorrow.",
          },
          {
            title: "ROI Mindset",
            body:
              "Improvements are prioritized for impact and resale value—Engineered for Giants, Built for Legacy.",
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

      {/* DECISION LOGIC — mirrors Services page choices */}
      <section id="decision" className="mt-16">
        <div className="rounded-2xl bg-brand-50 p-6 md:p-8 border border-brand-100">
          <h2 className="text-2xl font-extrabold tracking-tight">
            Choose Your Path
          </h2>
          <p className="mt-2 max-w-3xl text-zinc-700">
            Start with a plan. Then either do it yourself or have us build it for you.
            Already have a plan? Skip straight to implementation.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* DIY */}
            <div className="rounded-2xl bg-white p-6 shadow-soft border border-zinc-200">
              <div className="text-sm font-semibold tracking-widest text-brand-700">
                DIY
              </div>
              <h3 className="mt-1 text-xl font-bold">Consulting + DIY</h3>
              <p className="mt-2 text-zinc-700">
                We create your Blueprint for Giants. You (or your crew) implement it
                at your pace with clear maps, priorities, and steps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Property walk & pressure/access analysis</li>
                <li>• Stand & access placement for wind advantage</li>
                <li>• Food plots, TSI, bedding, screening, sanctuaries</li>
                <li>• Phased plan: quick wins → high-leverage upgrades</li>
              </ul>
              <div className="mt-5">
                <CtaSafe href="/contact" className="w-full justify-center">
                  Get My Plan
                </CtaSafe>
              </div>
            </div>

            {/* DFY */}
            <div className="rounded-2xl bg-white p-6 shadow-soft border border-zinc-200">
              <div className="text-sm font-semibold tracking-widest text-brand-700">
                DFY
              </div>
              <h3 className="mt-1 text-xl font-bold">Consulting + Done-For-You</h3>
              <p className="mt-2 text-zinc-700">
                We design your blueprint and manage habitat implementation with our
                trusted partners—built right, the first time.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                <li>• Everything in DIY consulting, plus build-out</li>
                <li>• Project management & quality control</li>
                <li>• Sequencing to minimize pressure</li>
                <li>• Hunt-ready outcomes, faster</li>
              </ul>
              <div className="mt-5">
                <CtaSafe href="/contact" className="w-full justify-center">
                  Design & Build It For Me
                </CtaSafe>
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
                <li>• Quality standards aligned to your goals</li>
                <li>• Built for both hunting success & resale value</li>
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

      {/* PROCESS — simple, tidy, brand-matched */}
      <section className="mt-16">
        <h2 className="text-2xl font-extrabold tracking-tight">How It Works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Free Strategy Call",
              d: "We learn your goals, acreage, pressure, and timeline—and confirm fit.",
            },
            {
              n: "02",
              t: "On-Site Assessment",
              d: "We walk the property, analyze access/wind/pressure, and mark improvements.",
            },
            {
              n: "03",
              t: "Blueprint for Giants",
              d: "You receive maps, priorities, and phased steps for DIY or DFY execution.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft"
            >
              <div className="text-sm font-semibold text-brand-700">{s.n}</div>
              <h3 className="mt-1 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-zinc-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE — balanced message about Kent without over-emphasizing one title */}
      <section className="mt-16 rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-soft">
        <h2 className="text-2xl font-extrabold tracking-tight">Why Us</h2>
        <p className="mt-3 text-zinc-700 max-w-4xl">
          Our lead consultant, <span className="font-semibold">Kent</span>, blends
          formal training in forestry and wildlife/habitat from Penn State, research
          experience with the PSU deer lab, and years of designing and building
          improvements on real hunting properties. That mix—biology, timber,
          access/wind discipline, and on-the-ground execution—produces plans that
          actually work for big, mature bucks.
        </p>
        <div className="mt-5">
          <CtaSafe href="/contact">Talk With Us</CtaSafe>
        </div>
      </section>

      {/* CTA STRIP — consistent brand band with white text */}
      <section className="mt-16 rounded-2xl bg-brand-700 px-6 py-10 text-white">
        <h3 className="text-2xl font-extrabold tracking-tight">
          Ready to engineer your property for giants?
        </h3>
        <p className="mt-2 text-white/90">
          Start with a free, no-pressure strategy call. We’ll point you to the best
          next step—DIY, DFY, or straight to implementation.
        </p>
        <div className="mt-5">
          <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
        </div>
      </section>
    </main>
  );
}

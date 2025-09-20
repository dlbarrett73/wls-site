// app/services/implementation/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Try to import CtaButton (works with both named and default exports).
 *  If it's missing or mismatched, we fall back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  const Btn =
    // @ts-ignore
    (Cta && (Cta.CtaButton || Cta.default)) as
      | React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>
      | undefined;

  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;

  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold shadow-soft transition " +
        "bg-brand-700 text-white hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-400 " +
        className
      }
    >
      {children}
    </Link>
  );
}

export const metadata = {
  title: "Habitat Implementation — Whitetail Land Solutions",
  description:
    "Done-for-you habitat builds engineered for mature whitetails: undetectable access, food/cover/security, and hunt-ready results.",
};

export default function ImplementationPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/implementation.jpg"
            alt="Habitat Implementation by Whitetail Land Solutions"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold tracking-widest text-white/80">SERVICES</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Habitat Implementation
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            We don’t just design big-buck paradises — we build them. From{" "}
            <span className="font-semibold">undetectable access</span> and staging cover to food, security, and
            stand/blind placement, we deliver a turnkey, hunt-ready property engineered for mature whitetails.
          </p>
          <div className="mt-8 flex gap-3">
            <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
            <Link
              href="/services/consulting"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold transition bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              See Consulting (DIY Plans)
            </Link>
          </div>
        </div>
      </section>

      {/* DECISION LOGIC STRIP */}
      <section className="bg-brand-800">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-10 md:grid-cols-3 md:py-12">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-bold text-black">I want a plan I can implement.</h3>
            <p className="mt-2 text-zinc-700">Consulting + DIY. Custom Blueprint for Giants, you execute.</p>
            <Link href="/services/consulting" className="mt-4 inline-block text-brand-700 underline underline-offset-4">
              Learn about Consulting →
            </Link>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-bold text-black">I want you to build it for me.</h3>
            <p className="mt-2 text-zinc-700">Consulting + DFY. We handle the habitat build from start to finish.</p>
            <span className="mt-4 inline-block text-zinc-800">You’re in the right place — Implementation.</span>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-bold text-black">I already have a plan.</h3>
            <p className="mt-2 text-zinc-700">We’ll implement your plan with precision and accountability.</p>
            <span className="mt-4 inline-block text-zinc-800">Also Implementation — let’s build.</span>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-brand-900">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Built for Mature Bucks. Built for You.
          </h2>
          <p className="mt-4 max-w-3xl text-white/85">
            We prioritize predictable daylight movement by stacking advantages: access first, then food, cover,
            security, and low-pressure hunting architecture.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                title: "Undetectable Access",
                body:
                  "Roads, trails, and entry/exit that keep your scent and sound off the deer. Screening, terrain usage, and wind-smart routing.",
              },
              {
                title: "Food & Forage Systems",
                body:
                  "Plot layout, blends, and rotations that stage daylight usage — micro-plots, destination plots, and kill-plot strategy.",
              },
              {
                title: "Cover & Security",
                body:
                  "TSI, edge feathering, hinge cuts (where appropriate), conifer pockets, and bedding orchestration to hold mature deer.",
              },
              {
                title: "Stand & Blind Architecture",
                body:
                  "Precision locations with wind/thermal logic, safe access, and shot-window design to create repeatable high-odds sits.",
              },
              {
                title: "Water & Micro-Features",
                body:
                  "Water holes, mock scrapes, and travel-influencers that nudge bucks into bow range in daylight.",
              },
              {
                title: "Roads & Infrastructure",
                body:
                  "Driveways, dozer work, culverts, gates, and signage to improve usability, value, and resale appeal.",
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-2 text-white/80">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">How Implementation Works</h2>
        <ol className="mt-8 grid list-decimal grid-cols-1 gap-6 pl-5 md:grid-cols-2">
          {[
            {
              step: "Site Walk & Scope",
              body:
                "We review your goals, constraints, and budget. If you don’t have a plan, we create one; if you do, we pressure-test it.",
            },
            {
              step: "Build Plan & Budget",
              body:
                "Clear pricing, phasing, and ROI-minded priorities. We keep what moves the needle for mature bucks at the top.",
            },
            {
              step: "Mobilize & Execute",
              body:
                "Our team and trusted partners perform work to spec. We communicate progress, photos, and milestones.",
            },
            {
              step: "Quality Check & Handover",
              body:
                "We verify standards, finalize placement, and orient you on access, winds, and usage to preserve daylight movement.",
            },
          ].map((item, i) => (
            <li key={item.step} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold tracking-widest text-brand-700">STEP {i + 1}</div>
              <h3 className="mt-1 text-xl font-bold">{item.step}</h3>
              <p className="mt-2 text-zinc-700">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <CtaSafe href="/contact">Get a Build Quote</CtaSafe>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-brand-800">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">What You’ll Get</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Clear Scope & Timeline",
                body:
                  "No surprises. A sequenced plan so the property hunts better every phase, not just when everything is done.",
              },
              {
                title: "Turnkey Build",
                body:
                  "We coordinate heavy equipment, forestry work, seed/fertilizer, screens, blinds, and signage to spec.",
              },
              {
                title: "Hunt-Ready Orientation",
                body:
                  "Access routes, wind/thermal notes, and a season-by-season usage guide to keep pressure low and odds high.",
              },
            ].map((d) => (
              <div key={d.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{d.title}</h3>
                <p className="mt-2 text-white/80">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-bold text-white">Already have a forestry or habitat plan?</h3>
            <p className="mt-2 text-white/80">
              Perfect. We’ll implement it with an obsession for{" "}
              <span className="font-semibold text-white">undetectable access</span>, low pressure, and mature-buck logic.
            </p>
            <div className="mt-4">
              <CtaSafe href="/contact" className="bg-white text-brand-900 hover:bg-zinc-100">
                Schedule a Site Walk
              </CtaSafe>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Why WLS Implementation</h2>
            <p className="mt-4 text-zinc-700">
              Led by a professional consulting forester with wildlife and habitat training, plus real-property
              experience designing and building improvements that actually move mature deer in daylight — and keep
              them comfortable on your ground.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li>• Plans engineered specifically for mature whitetails</li>
              <li>• Execution focused on access, pressure, and predictability</li>
              <li>• Property usability and resale value in mind</li>
            </ul>
            <div className="mt-6">
              <CtaSafe href="/contact">Start Your Build</CtaSafe>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft">
            <h3 className="text-xl font-bold">Typical Build Elements</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Access roads & trails",
                "Screening & edge feathering",
                "TSI & bedding orchestration",
                "Food plot construction",
                "Water holes & scrapes",
                "Stand/blind installs",
                "Signage & gates",
                "Soil tests & amendments",
              ].map((x) => (
                <div key={x} className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm">
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to engineer & build your property for giants?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            We’ll design the access, cover, and food systems that make daylight encounters repeatable — then build it
            to spec.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
            <Link
              href="/services/consulting"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-base font-semibold transition bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Explore Consulting (DIY)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

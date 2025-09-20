// app/services/implementation/page.tsx
import React from "react";
import Link from "next/link";

/** Try to import CtaButton (works with both named and default exports).
 *  If it's missing or mismatched, we fall back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  const Btn = (Cta as any).CtaButton || (Cta as any).default;
  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-soft " +
        "bg-brand-700 text-white hover:bg-brand-600 transition " +
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
    "We turn your habitat plan into a hunt-ready property: roads, food plots, TSI, water, screening, stands, and undetectable access™ — managed end-to-end.",
};

export default function ImplementationPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* HERO — on-brand, white text on brand background for contrast */}
      <header className="relative overflow-hidden rounded-3xl bg-brand-700 p-10 md:p-14 shadow-soft">
        <p className="text-xs font-semibold tracking-widest text-brand-200">SERVICES</p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Habitat Implementation
        </h1>
        <p className="mt-4 max-w-3xl text-base md:text-lg text-brand-50/90">
          We don’t just design big-buck paradises—we build them. From roads and food plots to
          screening, water, and stand placement, we manage the work so you can focus on the hunt.
          Every decision supports <em>undetectable access</em><sup>™</sup> and mature-buck movement.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
          <Link
            href="/services/consulting"
            className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold border border-white/20 text-white hover:bg-white/10 transition"
          >
            Need a Plan First? Start with Consulting
          </Link>
        </div>
      </header>

      {/* DECISION LOGIC STRIP — mirrors Services page language */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <Link
          href="/services/consulting"
          className="rounded-2xl border border-zinc-200 p-6 hover:shadow-soft transition"
        >
          <p className="text-xs font-semibold tracking-widest text-neutral-500">OPTION 1</p>
          <h3 className="mt-2 text-xl font-bold">Consulting + DIY</h3>
          <p className="mt-2 text-neutral-600">
            Get a Blueprint for Giants and build at your pace. We’ll map stand sites, travel,
            food/water/cover, and <em>undetectable access</em><sup>™</sup>.
          </p>
        </Link>
        <Link
          href="/services/consulting"
          className="rounded-2xl border border-zinc-200 p-6 hover:shadow-soft transition"
        >
          <p className="text-xs font-semibold tracking-widest text-neutral-500">OPTION 2</p>
          <h3 className="mt-2 text-xl font-bold">Consulting + DFY</h3>
          <p className="mt-2 text-neutral-600">
            Full plan + we build it for you. Turnkey project management, vetted subs, and clear
            sequencing for maximum daytime movement.
          </p>
        </Link>
        <div className="rounded-2xl border border-zinc-200 p-6">
          <p className="text-xs font-semibold tracking-widest text-neutral-500">OPTION 3</p>
          <h3 className="mt-2 text-xl font-bold">Already Have a Plan?</h3>
          <p className="mt-2 text-neutral-600">
            We’ll execute your plan with precision—roads, plots, TSI, screening, water, blinds,
            and access. Start with a site walk to align scope and budget.
          </p>
          <div className="mt-4">
            <CtaSafe href="/contact">Schedule a Site Walk</CtaSafe>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD — concise, on-brand list with emphasis on undetectable access */}
      <section className="mt-12 rounded-3xl bg-brand-50 p-8 md:p-10 border border-brand-100">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-900">
          What We Build (End-to-End)
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-brand-900/80">
          <li className="rounded-xl bg-white p-4 border border-brand-100">
            Access Roads & <span className="font-semibold">Undetectable Access</span><sup>™</sup>
          </li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Food Plots & Soil Prep</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">TSI & Bedding Enhancements</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Screening & Edge Architecture</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Water: Ponds, Tubs, Seeps</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Stand/Blind Placement</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Native Regeneration & Forbs</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Wind/Pressure Strategy</li>
          <li className="rounded-xl bg-white p-4 border border-brand-100">Permits & Vetted Subcontractors</li>
        </ul>
        <p className="mt-6 text-sm text-brand-900/70">
          Scope is sequenced to protect core areas and daylight movement. Every task is vetted
          against access, wind, pressure, and your target buck behavior.
        </p>
      </section>

      {/* OUR BUILD PROCESS — simple, skimmable steps */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Our Build Process</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "1) Strategy Call & Fit",
              body:
                "We confirm goals, budget range, and timing. If you need a plan, we recommend Consulting first.",
            },
            {
              title: "2) Site Walk & Scope",
              body:
                "On-property walk to align improvements with wind/terrain and undetectable access™.",
            },
            {
              title: "3) Bid & Phasing",
              body:
                "Clear line-item scope with options for turnkey or phased build to fit budget/timeline.",
            },
            {
              title: "4) Build & Manage",
              body:
                "We coordinate machines, materials, and subs. You get progress updates and milestone check-ins.",
            },
            {
              title: "5) Final Walk & Hunt-Ready",
              body:
                "We verify access, stands, and plot readiness. You step into a property engineered for giants.",
            },
          ].map((step) => (
            <li key={step.title} className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-neutral-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TRUST / CREDENTIALS — aligned with your story, simple and credible */}
      <section className="mt-12 rounded-3xl bg-brand-700 p-8 md:p-10 text-white shadow-soft">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Why WLS</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          <li className="rounded-xl bg-white/10 p-4">
            Professional consulting forester leadership with wildlife & habitat education from Penn State and
            practical research experience at the PSU Deer Lab.
          </li>
          <li className="rounded-xl bg-white/10 p-4">
            Habitat design + build experience focused on <em>daylight</em> movement and pressure control.
          </li>
          <li className="rounded-xl bg-white/10 p-4">
            End-to-end project management: scope, bids, subs, sequencing, and quality control.
          </li>
          <li className="rounded-xl bg-white/10 p-4">
            Ruthless commitment to <em>undetectable access</em><sup>™</sup> and stand viability.
          </li>
        </ul>
        <div className="mt-6">
          <CtaSafe href="/contact" className="bg-white text-brand-800 hover:bg-brand-50">
            Get a Build Estimate
          </CtaSafe>
        </div>
      </section>

      {/* FAQ — short, helpful, non-fluffy */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">FAQs</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-bold">Do I need a plan first?</h3>
            <p className="mt-2 text-neutral-600">
              If you don’t have a clear Blueprint for Giants, we recommend starting with{" "}
              <Link href="/services/consulting" className="underline decoration-brand-600 underline-offset-2">
                Consulting
              </Link>{" "}
              so every dollar is sequenced correctly.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-bold">How do budgets and phases work?</h3>
            <p className="mt-2 text-neutral-600">
              We’ll provide a line-item bid with optional phasing. Most clients tackle roads/access
              and screening first to unlock <em>undetectable access</em><sup>™</sup>.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-bold">Will you work from my existing plan?</h3>
            <p className="mt-2 text-neutral-600">
              Yes. We’ll align the scope to wind, terrain, and pressure—then execute with precision.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-lg font-bold">How soon can you start?</h3>
            <p className="mt-2 text-neutral-600">
              Seasons and ground conditions matter. Book a strategy call to review timing and lead times.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA — consistent button styling */}
      <section className="mt-12 rounded-3xl bg-brand-700 p-8 md:p-10 text-white text-center shadow-soft">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          Ready to engineer—and build—your property for giants?
        </h2>
        <p className="mt-3 text-brand-50/90">
          We’ll scope the work, phase it if needed, and manage the whole build for you.
        </p>
        <div className="mt-6 flex justify-center">
          <CtaSafe href="/contact" className="bg-white text-brand-800 hover:bg-brand-50">
            Book a Free Strategy Call
          </CtaSafe>
        </div>
      </section>
    </main>
  );
}

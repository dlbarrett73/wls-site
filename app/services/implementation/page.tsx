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
      {/* HERO with background image + overlay */}
      <header className="relative overflow-hidden rounded-3xl shadow-soft">
        <div className="absolute inset-0">
          <Image
            src="/images/implementation.jpg"
            alt="Habitat Implementation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-900/70" />
        </div>
        <div className="relative p-10 md:p-14 text-white">
          <p className="text-xs font-semibold tracking-widest text-brand-200">SERVICES</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
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
        </div>
      </header>

      {/* === sections for decision logic, build list, process, trust, FAQ, final CTA === */}
      {/* (unchanged from previous version I gave you) */}
    </main>
  );
}

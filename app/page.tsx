// app/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Reusable components (client-safe)
import CtaSafe from "@/components/home/CtaSafe";
import FeaturedProperty from "@/components/home/FeaturedProperty";
import YouTubeTrailer from "@/components/home/YouTubeTrailer";
import PropertyShowcase from "@/components/home/PropertyShowcase";

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO (Full-Width) ================= */}
      <section className="relative w-full h-[72vh] sm:h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Kent with mature whitetail in engineered habitat"
          priority
          fill
          sizes="100vw"
          className="object-cover object-[center_16%] md:object-[center_14%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Engineered for Giants.<br />Built for Legacy.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/90">
                Turnkey hunting properties and custom land plans engineered for mature bucks — and your family legacy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {/* Primary CTA uses your CTA component (green button with white text) */}
                <CtaSafe href="/services/consulting">
                  Explore Consulting
                </CtaSafe>

                {/* Secondary CTA: force legible dark text on white via plain Link */}
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white text-slate-900 border border-slate-200 hover:bg-slate-100 focus:ring-emerald-700"
                >
                  Browse Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CHOOSE YOUR PATH (Offer Clarity) ============== */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Choose Your Path</h2>
          <p className="mt-2 text-slate-600">Three simple ways to work with us — aligned to your goals, time, and budget.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {/* DIY Plan */}
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">I want a plan I can implement</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our Blueprint for Giants™: a custom habitat and access design emphasizing <em>undetectable access</em>, food, and bedding.
            </p>
            <CtaSafe href="/services/consulting" className="mt-4 w-full justify-center">
              Consulting (DIY)
            </CtaSafe>
          </div>
          {/* DFY Implementation */}
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">I want you to build it for me</h3>
            <p className="mt-2 text-sm text-slate-600">
              We design it and manage the work — plots, TSI, trails, blinds — so you can hunt big bucks sooner.
            </p>
            <CtaSafe href="/services/implementation" className="mt-4 w-full justify-center">
              Consulting + DFY
            </CtaSafe>
          </div>
          {/* Turnkey Property */}
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">I want a turnkey property now</h3>
            <p className="mt-2 text-sm text-slate-600">
              Buy a WLS property engineered for mature bucks — hunt on Day One with confidence.
            </p>
            <CtaSafe href="/properties" className="mt-4 w-full justify-center">
              View Properties
            </CtaSafe>
          </div>
        </div>
      </section>

      {/* ============== BIOLOGICAL PROOF & STORYTELLING ============== */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Biological Proof. Real Results.</h2>
            <p className="mt-2 text-slate-600">Trail cameras, before/after transformations, and the legacy stories behind each property.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
              <h3 className="font-semibold text-slate-900">Trail Cam Inventory</h3>
              <p className="mt-2 text-sm text-slate-600">Documented mature buck activity supports pricing and buyer confidence.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
              <h3 className="font-semibold text-slate-900">Before / After</h3>
              <p className="mt-2 text-sm text-slate-600">Transparent habitat improvements: food, cover, and <em>undetectable access</em>.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
              <h3 className="font-semibold text-slate-900">Legacy Stories</h3>
              <p className="mt-2 text-sm text-slate-600">Families making memories on properties engineered for giants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Your existing content as components ===== */}
      <FeaturedProperty />
      <YouTubeTrailer />
      <PropertyShowcase />

      {/* ===================== FOOTER SPACER ===================== */}
      <div className="h-10" />
    </main>
  );
}

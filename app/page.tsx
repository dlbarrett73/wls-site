// app/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ===== Update app/page.tsx to import & use these components =====
// Add to the top:
// import FeaturedProperty from '@/components/home/FeaturedProperty';
// import YouTubeTrailer from '@/components/home/YouTubeTrailer';
// import PropertyShowcase from '@/components/home/PropertyShowcase';
// import CtaSafe from '@/components/home/CtaSafe';

// Then, replace the three placeholder sections with:
// <FeaturedProperty />
// <YouTubeTrailer />
// <PropertyShowcase />

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 3600;

/**
 * Safe CTA import helper
 * Works with either a default or named export from '@/components/CtaButton'.
 * Falls back to a styled <Link> if the component is missing.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  const Btn =
    // @ts-ignore – tolerate either default or named
    (Cta && (Cta.CtaButton || Cta.default)) as
      | React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>
      | undefined;
  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-700 ${className}`}
    >
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO (Full-Width) ================= */}
      <section className="relative w-full h-[72vh] sm:h-screen">
        {/* Background image (full-bleed) */}
        <Image
          src="/images/hero.jpg"
          alt="Mature whitetail habitat at golden hour"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/20" />

        {/* Copy */}
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
                <CtaSafe href="/services/consulting">Explore Consulting</CtaSafe>
                <CtaSafe href="/properties" className="bg-white text-slate-900 hover:bg-slate-100">Browse Properties</CtaSafe>
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
            <CtaSafe href="/services/consulting" className="mt-4 w-full justify-center">Consulting (DIY)</CtaSafe>
          </div>
          {/* DFY Implementation */}
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">I want you to build it for me</h3>
            <p className="mt-2 text-sm text-slate-600">
              We design it and manage the work — plots, TSI, trails, blinds — so you can hunt big bucks sooner.
            </p>
            <CtaSafe href="/services/implementation" className="mt-4 w-full justify-center">Consulting + DFY</CtaSafe>
          </div>
          {/* Turnkey Property */}
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">I want a turnkey property now</h3>
            <p className="mt-2 text-sm text-slate-600">
              Buy a WLS property engineered for mature bucks — hunt on Day One with confidence.
            </p>
            <CtaSafe href="/properties" className="mt-4 w-full justify-center">View Properties</CtaSafe>
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

      {/* ===================== EXISTING CONTENT ===================== */}
      {/*
        IMPORTANT: To *keep every bit of your current homepage content intact*,
        paste your existing sections into the slots below (copy/paste from your current app/page.tsx):
        - Featured Property
        - YouTube Channel Trailer Video
        - YouTube Property Showcase Video(s)
        - Any additional CTA / lead capture blocks
        Nothing else in this file depends on those sections, so it’s a safe drop-in.
      */}

      {/* ===== Featured Property (PASTE YOUR CURRENT MARKUP BELOW) ===== */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Property</h2>
          <p className="mt-2 text-slate-600">Paste your existing Featured Property block here to keep content and styling.</p>
        </div>
        {/* TODO: Replace this placeholder with your existing Featured Property markup */}
        <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-500">
          Placeholder — Featured Property component goes here.
        </div>
      </section>

      {/* ===== YouTube Channel Trailer (PASTE YOUR CURRENT MARKUP BELOW) ===== */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">YouTube Channel Trailer</h2>
            <p className="mt-2 text-slate-600">Keep your existing embed to preserve analytics and timestamps.</p>
          </div>
          {/* TODO: Replace this placeholder with your existing trailer embed */}
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
        </div>
      </section>

      {/* ===== YouTube Property Showcase (PASTE YOUR CURRENT MARKUP BELOW) ===== */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Property Showcase</h2>
          <p className="mt-2 text-slate-600">Drop in your current property video embeds or cards.</p>
        </div>
        {/* TODO: Replace this placeholder with your existing property showcase markup */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
        </div>
      </section>

      {/* ===================== GLOBAL CTA ===================== */}
      <section className="relative isolate overflow-hidden bg-emerald-800">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to engineer your property for giants?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">
            Book a free strategy call — we’ll map your best next step, whether that’s Consulting (DIY), DFY Implementation, or a turnkey property.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CtaSafe href="/contact">Book a Free Strategy Call</CtaSafe>
            <CtaSafe href="/properties" className="bg-white text-slate-900 hover:bg-slate-100">Join Property Waitlist</CtaSafe>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER SPACER ===================== */}
      <div className="h-10" />
    </main>
  );
}



// ================================================
// Reusable home components (safe, drop-in)
// Create files in /components/home and import into app/page.tsx
// ================================================

// components/home/CtaSafe.tsx
'use client';
import Link from 'next/link';
import * as Cta from '@/components/CtaButton';
export type CtaProps = { href: string; className?: string; children: React.ReactNode };
export default function CtaSafe({ href, className = '', children }: CtaProps) {
  const Btn = (Cta as any)?.CtaButton || (Cta as any)?.default;
  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-700 ${className}`}
    >
      {children}
    </Link>
  );
}

// components/home/FeaturedProperty.tsx
import React from 'react';
import CtaSafe from './CtaSafe';
export default function FeaturedProperty() {
  // Paste your existing Featured Property markup inside the return
  // Keep props/state out to avoid SSR surprises
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Property</h2>
        <p className="mt-2 text-slate-600">Showcase a single marquee listing with story, highlights, and CTA.</p>
      </div>
      {/* TODO: Replace this block with your existing Featured Property content */}
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-500">
        Placeholder — Featured Property component content.
      </div>
    </section>
  );
}

// components/home/YouTubeTrailer.tsx
import React from 'react';
export default function YouTubeTrailer() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">YouTube Channel Trailer</h2>
          <p className="mt-2 text-slate-600">Introduce WLS and invite visitors to subscribe for property alerts and education.</p>
        </div>
        {/* TODO: Swap in your actual YouTube embed/iframe */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
      </div>
    </section>
  );
}

// components/home/PropertyShowcase.tsx
import React from 'react';
export default function PropertyShowcase() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Property Showcase</h2>
        <p className="mt-2 text-slate-600">Embed your latest property videos or a grid of video cards.</p>
      </div>
      {/* TODO: Replace placeholders with your real embeds/cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
      </div>
    </section>
  );
}

// ===== Update app/page.tsx to import & use these components =====
// Add to the top:
// import FeaturedProperty from '@/components/home/FeaturedProperty';
// import YouTubeTrailer from '@/components/home/YouTubeTrailer';
// import PropertyShowcase from '@/components/home/PropertyShowcase';
// import CtaSafe from '@/components/home/CtaSafe';

// Then, replace the three placeholder sections with:
// <FeaturedProperty />
// <YouTubeTrailer />
// <PropertyShowcase />

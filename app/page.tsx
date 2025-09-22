// app/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import CtaSafe from "@/components/home/CtaSafe";
import FeaturedProperty from "@/components/home/FeaturedProperty";
import YouTubeTrailer from "@/components/home/YouTubeTrailer";
import PropertyShowcase from "@/components/home/PropertyShowcase";

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

      {/* FEATURED PROPERTY */}
        <section className="mt-16">
          <Link
            href={FEATURED.href}
            className="group relative block overflow-hidden rounded-2xl border border-zinc-200 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${FEATURED.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            <div className="relative p-6 text-white">
              <p className="text-xs font-semibold tracking-widest overlay-subtext">
                FEATURED PROPERTY
              </p>
              <h3 className="mt-1 text-2xl font-bold overlay-text">
                {FEATURED.title}
              </h3>
              <p className="mt-2 overlay-subtext">
                {FEATURED.acres} • {FEATURED.location}
              </p>
              <p className="mt-1 font-semibold overlay-text">{FEATURED.price}</p>
              <p className="mt-3 overlay-subtext">
                Hunt-ready layout with access, food/cover, and proven strategy.
              </p>
              <span className="mt-4 inline-flex items-center overlay-text">
                View Details
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </Link>
        </section>

      {/* CHANNEL TRAILER */}
        <section className="mt-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
                Giant Legacy — Channel Trailer
              </h2>
              <p className="mt-1 text-zinc-700">
                Why we exist, how we build hunt-ready properties, and what to
                expect on the channel.
              </p>
            </div>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="text-brand-700 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-500"
            >
              Subscribe on YouTube
            </Link>
          </div>

          <div className="mt-6 relative overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${YOUTUBE_THUMB_TRAILER})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            <div className="relative aspect-video w-full text-white">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={
                  YOUTUBE_VIDEO_ID_TRAILER
                    ? `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_TRAILER}`
                    : "about:blank"
                }
                title="WLS Channel Trailer"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>


      {/* LATEST PROPERTY SHOWCASE */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
            Latest Property Showcase — Mahaffey 131
          </h2>
          <p className="mt-1 text-zinc-700">
            Full walk-through: access, food plots, stand locations, and hunt
            strategy.
          </p>

          <div className="mt-6 relative overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${YOUTUBE_THUMB_PROPERTY})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            <div className="relative aspect-video w-full text-white">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={
                  YOUTUBE_VIDEO_ID_PROPERTY
                    ? `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_PROPERTY}`
                    : "about:blank"
                }
                title="Mahaffey 131 Property Showcase"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

      {/* SITE-WIDE CTA STRIP */}
        <section className="mt-16 rounded-2xl border border-brand-100 bg-brand-700 p-6 text-white">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold overlay-text">
                Free 15-Minute Property Strategy Call
              </h3>
              <p className="mt-1 overlay-subtext">
                Talk through goals, acreage, and timeline—get expert next steps.
              </p>
            </div>
            <Cta href="/contact">Book Now</Cta>
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

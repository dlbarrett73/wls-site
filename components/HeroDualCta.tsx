// components/HeroDualCta.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

type HeroDualCtaProps = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  secondaryHref?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  imageSrc?: string;
  imageAlt?: string;

  // Upgrades
  minHeightClassName?: string; // e.g. "min-h-[85vh] md:min-h-screen"
  showScrollCue?: boolean;
  scrollCueHref?: string; // e.g. "#process"
};

export default function HeroDualCta({
  title = "Stop Guessing. Start Knowing.",
  subtitle = `The Blueprint for Giants® Property Audit reveals what your land can truly support — before you spend another dollar, burn another season, or make pressure cheaper.  <br>Built for serious landowners who want consistent opportunities at mature bucks — not hope, hype, or habitat theater.</br>`,
  primaryHref = "/property-audit",
  secondaryHref = "/properties",
  primaryLabel = "Get the Truth About Your Property",
  secondaryLabel = "Explore Hunt-Ready Properties",
  imageSrc,
  imageAlt = "Whitetail hunting property aerial",
  minHeightClassName = "min-h-[85vh] md:min-h-screen",
  showScrollCue = true,
  scrollCueHref = "#process",
}: HeroDualCtaProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-neutral-950 ${minHeightClassName}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_15%] opacity-60"
          />
        ) : (
          <div className="h-full w-full bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(59,130,246,0.14),transparent_50%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.9))]" />
        )}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/45 to-black/85" />

        {/* Subtle vignette for premium feel */}
        <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_140px_rgba(0,0,0,0.65)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 py-16 md:py-20">
        <div className="wls-hero-fadeup max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-sm">
            Data-Driven • Pressure-First • Built for Mature Whitetails
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 whitespace-pre-line text-pretty text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={primaryHref}
              className="inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300/60 sm:w-auto"
            >
              {primaryLabel}
            </Link>

            <Link
              href={secondaryHref}
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 sm:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>

          {/* Trust / Disqualifier */}
          <div className="mt-6 text-sm text-white/75">
            <span className="font-semibold text-white/90">Application required • Limited monthly availability • Not for casual hunters</span>{" "}
           Not all properties qualify.
          </div>
          <div className="mt-6 text-sm text-white/75">
            <span className="font-semibold text-white/90">Not for everyone</span>{" "}
            — only for serious landowners.
          </div>

          {/* Micro-conversion */}
          
        </div>
      </div>

      {/* Scroll cue */}
      {showScrollCue && (
        <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
          <Link
            href={scrollCueHref}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Scroll to process section"
          >
            Scroll for the Truth
            <span className="inline-flex translate-y-[1px] transition-transform group-hover:translate-y-[3px]">
              ↓
            </span>
          </Link>
        </div>
      )}
    </section>
  );
}

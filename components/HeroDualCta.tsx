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
  // Optional: pass an image path like "/images/hero-whitetail.jpg"
  imageSrc?: string;
  imageAlt?: string;
};

export default function HeroDualCta({
  title = "Stop Guessing. Know Exactly What Your Property Can Produce.",
  subtitle = `Most landowners waste years — and tens of thousands of dollars — chasing tactics.
We reveal the true ceiling of your land before you invest another dollar.`,
  primaryHref = "/property-audit",
  secondaryHref = "/properties",
  primaryLabel = "Get the Truth About Your Property",
  secondaryLabel = "Explore Hunt-Ready Properties",
  imageSrc,
  imageAlt = "Whitetail hunting property aerial",
}: HeroDualCtaProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950">
      {/* Background */}
      <div className="absolute inset-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-55"
          />
        ) : (
          // Fallback background (no image required)
          <div className="h-full w-full bg-[radial-gradient(1200px_circle_at_20%_20%,rgba(34,197,94,0.18),transparent_55%),radial-gradient(900px_circle_at_80%_10%,rgba(59,130,246,0.14),transparent_50%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.9))]" />
        )}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-white/90">
            Data-Driven • Pressure-First • Built for Mature Whitetails
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl">
            {title}
          </h1>

          <p className="mt-5 whitespace-pre-line text-pretty text-base leading-relaxed text-white/85 md:text-lg">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            <span className="font-semibold text-white/85">Not for everyone</span>{" "}
            — only for serious landowners.
          </div>

          {/* Optional micro-conversion link */}
          <div className="mt-4">
            <Link
              href="/why-it-matters"
              className="text-sm font-semibold text-white/85 underline decoration-white/30 underline-offset-4 transition hover:text-white hover:decoration-white/60"
            >
              Not sure which path is right? See how it works →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

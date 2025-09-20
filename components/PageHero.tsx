// /components/PageHero.tsx
import React from "react";
import clsx from "clsx";

type PageHeroProps = {
  eyebrow?: string;              // e.g., "SERVICES"
  title: string;                 // main H1
  subtitle?: React.ReactNode;    // optional paragraph(s)
  brandBg?: boolean;             // if true, uses brand-700 with white text
  className?: string;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  brandBg = false,
  className = "",
}: PageHeroProps) {
  return (
    <header
      className={clsx(
        "w-full",
        brandBg ? "bg-brand-700 text-white" : "",
      )}
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {eyebrow && (
          <p
            className={clsx(
              "text-[11px] md:text-xs font-semibold tracking-[0.18em]",
              brandBg ? "text-white/70" : "text-neutral-500"
            )}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className={clsx(
            "mt-2 text-3xl md:text-5xl font-extrabold tracking-tight",
            brandBg ? "text-white" : "text-neutral-900"
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <div
            className={clsx(
              "mt-4 text-lg",
              brandBg ? "text-white/85" : "text-neutral-700"
            )}
          >
            {subtitle}
          </div>
        )}
      </div>
    </header>
  );
}

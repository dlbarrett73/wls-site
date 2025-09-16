// components/CtaButton.tsx
"use client";

import Link from "next/link";
import React from "react";

export interface Props {
  href: string;
  label: string;
  /** Optional size prop used by pages (sm | md | lg | xl) */
  size?: "sm" | "md" | "lg" | "xl";
  /** Optional extra classes to tweak spacing on a page */
  className?: string;
  /** Optional link target/rel/prefetch for external links */
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  prefetch?: boolean;
}

// Tailwind padding/size presets
const SIZE: Record<NonNullable<Props["size"]>, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-lg px-6 py-3",
};

// Forest-green brand style
const BASE =
  "inline-flex items-center justify-center rounded-xl font-semibold transition " +
  "focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-black/20";
const BRAND = "bg-green-700 text-white hover:bg-green-800 active:bg-green-900 shadow-sm";

export function CtaButton({
  href,
  label,
  size = "md",
  className = "",
  target,
  rel,
  prefetch,
}: Props) {
  const classes = [BASE, BRAND, SIZE[size], className].join(" ");
  return (
    <Link href={href} prefetch={prefetch} target={target} rel={rel} className={classes}>
      {label}
    </Link>
  );
}

export default CtaButton;

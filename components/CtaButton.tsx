// components/CtaButton.tsx
"use client";

import Link from "next/link";
import React from "react";

export type CtaButtonProps = {
  href: string;
  label: string;
  /** Optional size control */
  size?: "sm" | "md" | "lg" | "xl";
  /** Optional extra classes */
  className?: string;
  /** Open in a new tab, etc. */
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  prefetch?: boolean;
};

const sizeClasses: Record<NonNullable<CtaButtonProps["size"]>, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-sm px-4 py-2",
  lg: "text-base px-5 py-2.5",
  xl: "text-lg px-6 py-3",
};

export function CtaButton({
  href,
  label,
  size = "md",
  className = "",
  target,
  rel,
  prefetch,
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-black/20";
  // Forest-green primary style (safe defaults even if you don’t have custom brand colors)
  const styling =
    "bg-green-700 text-white hover:bg-green-800 active:bg-green-900 shadow-sm";

  const classes = [base, styling, sizeClasses[size], className].join(" ");

  return (
    <Link href={href} prefetch={prefetch} target={target} rel={rel} className={classes}>
      {label}
    </Link>
  );
}

export default CtaButton;

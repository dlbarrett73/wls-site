// components/CtaButton.tsx
"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href?: string;              // <— now optional
  label?: string;
  className?: string;
};

export function CtaButton({
  href = "/book",             // <— sensible default so <CtaButton /> works
  label = "Book a Free Strategy Call",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-6 py-3 font-semibold text-white shadow-md transition
      bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
      ${className}`}
    >
      {label}
    </Link>
  );
}

// Optional: also export default for flexibility if some files import default
export default CtaButton;

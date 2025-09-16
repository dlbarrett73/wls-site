"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  label?: string;
  className?: string;
};

export function CtaButton({
  href = "/book",
  label = "Book a Free Strategy Call",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-block rounded-lg px-6 py-3 font-semibold text-white shadow-md transition
      bg-brand-700 hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-700 focus:ring-offset-2
      ${className}`}
    >
      {label}
    </Link>
  );
}

export default CtaButton;

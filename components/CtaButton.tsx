"use client";

import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  label?: string;
};

export function CtaButton({ href = "/contact", label = "Contact Us" }: Props) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg bg-brand-500 px-5 py-2.5 font-semibold text-white shadow-soft hover:bg-brand-600"
    >
      {label}
    </Link>
  );
}

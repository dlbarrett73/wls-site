"use client";
import Link from "next/link";
import React from "react";

type CtaButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export default function CtaButton({ href, label, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 " +
        (className ?? "")
      }
    >
      {label}
    </Link>
  );
}

import React from "react";
import Link from "next/link";

export function CtaButton({
  href = "/book",
  label = "Book a Free Strategy Call",
  className = "",
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-block rounded-md bg-[#1F3D2B] px-7 py-3 text-white font-bold uppercase tracking-wide transition-all duration-200 hover:bg-[#285c3a] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1F3D2B] " +
        className
      }
    >
      {label}
    </Link>
  );
}

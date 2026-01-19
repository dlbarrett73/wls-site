import Link from "next/link";
import React from "react";

export type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ href, children, className = "" }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold",
        "shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-700",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

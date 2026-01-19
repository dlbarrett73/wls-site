import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function CtaButton({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700",
        "bg-emerald-700 text-white hover:bg-emerald-800",
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

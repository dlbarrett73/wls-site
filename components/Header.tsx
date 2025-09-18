// app/components/CtaButton.tsx
import Link from "next/link";
import React from "react";

interface CtaButtonProps {
  href: string;
  children: React.ReactNode;
}

export function CtaButton({ href, children }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-4 py-2 text-white font-semibold shadow hover:bg-brand-800 transition-colors"
    >
      {children}
    </Link>
  );
}

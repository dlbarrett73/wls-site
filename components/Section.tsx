// /components/Section.tsx
import React from "react";
import clsx from "clsx";

type SectionProps = {
  variant?: "default" | "muted" | "brand";
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  variant = "default",
  className = "",
  children,
}: SectionProps) {
  const base = "w-full";
  const wrap = "mx-auto max-w-6xl px-6 py-16 md:py-24";
  const variants: Record<string, string> = {
    default: "",
    muted: "bg-neutral-50",
    brand: "bg-brand-700 text-white",
  };
  return (
    <section className={clsx(base, variants[variant])}>
      <div className={wrap}>{children}</div>
    </section>
  );
}

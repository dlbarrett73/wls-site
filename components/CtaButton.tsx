// components/CtaButton.tsx
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: "_blank";
  rel?: string;
};

export function CtaButton({ href, children, className = "", target, rel }: Props) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition bg-brand-700 text-white hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-300 ${className}`}
    >
      {children}
    </Link>
  );
}

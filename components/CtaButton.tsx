// /components/CtaButton.tsx
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export default function CtaButton({ href, children, className = "", ariaLabel }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-emerald-800 hover:bg-emerald-900 transition-colors font-semibold shadow-sm ${className}`}
    >
      {children}
    </Link>
  );
}

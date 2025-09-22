'use client';
import Link from 'next/link';
import * as Cta from '@/components/CtaButton';

export type CtaProps = { href: string; className?: string; children: React.ReactNode };

export default function CtaSafe({ href, className = '', children }: CtaProps) {
  const Btn = (Cta as any)?.CtaButton || (Cta as any)?.default;
  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-700 ${className}`}
    >
      {children}
    </Link>
  );
}

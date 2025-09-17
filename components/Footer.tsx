// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { CtaButton } from "./CtaButton";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white">
      {/* Top CTA */}
      <div className="mx-auto w-full max-w-6xl px-6 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight">Ready to design your big-buck paradise?</h3>
          <p className="text-zinc-600 mt-1">
            Turnkey properties and expert habitat consulting—engineered for giants, built for legacy.
          </p>
        </div>
        <div className="flex gap-3">
          <CtaButton href="/contact">Join the Waitlist / Contact</CtaButton>
          <Link href="/properties" className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold border border-zinc-300 hover:bg-zinc-100">
            View Properties
          </Link>
        </div>
      </div>

      <div className="border-t border-zinc-200" />

      {/* Bottom row */}
      <div className="mx-auto w-full max-w-6xl px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo-400.png" alt="Whitetail Land Solutions" width={28} height={28} />
          <span className="text-sm text-zinc-600">
            © {new Date().getFullYear()} Whitetail Land Solutions. All rights reserved.
          </span>
        </div>
        <nav className="flex gap-5 text-sm">
          <Link href="/consulting" className="text-zinc-700 hover:text-brand-700 no-underline">Consulting</Link>
          <Link href="/properties" className="text-zinc-700 hover:text-brand-700 no-underline">Properties</Link>
          <Link href="/contact" className="text-zinc-700 hover:text-brand-700 no-underline">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

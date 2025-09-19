// /components/Header.tsx
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200">
      <div className="mx-auto w-full max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Update path to your actual logo file */}
          <Image
            src="/logo-400.png"
            alt="Whitetail Land Solutions"
            width={40}
            height={40}
            priority
          />
          <div className="leading-tight">
            <div className="text-emerald-900 font-extrabold tracking-tight">
              Whitetail Land Solutions
            </div>
            <div className="text-sm text-emerald-800">
              Engineered for Giants. Built for Legacy.
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/properties" className="text-zinc-800 hover:text-emerald-800">Land for Sale</Link>
          <Link href="/services" className="text-zinc-800 hover:text-emerald-800">Services</Link>
          <Link href="/about" className="text-zinc-800 hover:text-emerald-800">About</Link>
          <Link href="/contact" className="text-zinc-800 hover:text-emerald-800">Contact</Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-emerald-800 px-4 py-2 text-white hover:bg-emerald-900 transition-colors font-semibold shadow-sm"
          >
            Free Strategy Call
          </Link>
        </nav>
      </div>
    </header>
  );
}

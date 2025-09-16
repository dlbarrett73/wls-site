// components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-400.png" // Make sure this file is in /public/logo-400.png
            alt="Whitetail Land Solutions"
            width={140}
            height={140}
            priority
          />
          <span className="sr-only">Whitetail Land Solutions</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/properties" className="hover:underline">
            Properties
          </Link>
          <Link href="/services/consulting" className="hover:underline">
            Consulting
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl px-4 py-2 font-semibold transition hover:opacity-90"
            style={{ backgroundColor: "#1B5E41", color: "white" }} // forest green brand CTA
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

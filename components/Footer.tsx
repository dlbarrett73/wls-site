// /components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Facebook } from "lucide-react";
import CtaButton from "@/components/CtaButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-700 bg-brand-900 text-neutral-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        {/* Top: Logo + brand + links + contact */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand block */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-400.png"
                alt="Whitetail Land Solutions logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Whitetail Land Solutions
                </h2>
                <p className="text-sm text-brand-200">
                  Engineered for Giants. Built for Legacy.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-brand-100/90">
              We build hunt-ready properties and custom habitat plans in
              Pennsylvania—so you can attract and consistently kill mature
              whitetails on your land.
            </p>

            {/* CTA */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wide text-brand-200">
                Ready for a plan that works?
              </p>
              <div className="mt-2">
                <CtaButton href="/contact">
                  Book a Free Strategy Call
                </CtaButton>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-5">
              <Link
                href="https://www.youtube.com/@WhitetailLandSolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-brand-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram (coming soon)"
                className="text-brand-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook (coming soon)"
                className="text-brand-200 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-6 text-sm"
          >
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-brand-200">
                Explore
              </p>
              <ul className="space-y-2">
                <li><Link href="/properties" className="hover:text-white">Land for Sale</Link></li>
                <li><Link href="/consulting" className="hover:text-white">Consulting</Link></li>
                <li><Link href="/implementation" className="hover:text-white">Habitat Implementation</Link></li>
                <li><Link href="/services" className="hover:text-white">Services Overview</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-brand-200">
                Company
              </p>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </nav>

          {/* Contact */}
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wider text-brand-200">
              Contact
            </p>
            <address className="not-italic text-sm leading-6 text-brand-100/90">
              <div>
                <span className="block">Physical:</span>
                <span className="block">1463 State Route 1042</span>
                <span className="block">NuMine, PA 16244</span>
              </div>
              <div className="mt-3">
                <span className="block">Mailing:</span>
                <span className="block">PO Box 167</span>
                <span className="block">NuMine, PA 16244</span>
              </div>
            </address>
            <p className="mt-4 text-xs text-brand-200">
              We are not a real estate broker; we acquire and sell our own
              properties and offer consulting & habitat implementation.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-brand-700 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-brand-200">
            © {year} Whitetail Land Solutions. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-brand-200">
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
            <li><Link href="/contact" className="hover:text-white">Support</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

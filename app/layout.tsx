// app/layout.tsx
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Whitetail Land Solutions",
  description: "Engineered for Giants. Built for Legacy.",
  metadataBase: new URL("https://whitetaillandsolutions.com"),
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Whitetail Land Solutions",
    description: "Engineered for Giants. Built for Legacy.",
    url: "https://whitetaillandsolutions.com",
    siteName: "Whitetail Land Solutions",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="border-b border-wood-200 sticky top-0 bg-white/90 backdrop-blur z-50">
          <div className="container py-3 md:py-4 flex items-center justify-between gap-3">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 min-w-0">
              {/* Bigger, non-squishy logo */}
              <div className="relative shrink-0 h-14 w-56 md:h-16 md:w-64">
                <Image
                  src="/logo-400.png"
                  alt="Whitetail Land Solutions"
                  fill
                  sizes="(min-width: 768px) 256px, 224px"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Text lockup beside logo */}
              <div className="leading-tight min-w-0">
                <div className="font-bold truncate">Whitetail Land Solutions</div>
                <div className="hidden sm:block text-[11px] text-neutral-500 md:text-xs">
                  Engineered for Giants. Built for Legacy.
                </div>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:text-brand-700">
                Services
              </Link>
              <Link href="/properties" className="hover:text-brand-700">
                Land for Sale
              </Link>
              <Link href="/about" className="hover:text-brand-700">
                About
              </Link>
              <Link href="/contact" className="hover:text-brand-700">
                Contact
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 text-brand-800 px-4 py-2 hover:bg-brand-50"
              >
                Free Strategy Call
              </Link>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        {children}

        {/* Footer */}
        <footer className="border-t border-wood-200 bg-wood-50">
          <div className="container py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-8 w-32">
                  <Image
                    src="/logo-400.png"
                    alt="Whitetail Land Solutions"
                    fill
                    sizes="128px"
                    className="object-contain"
                  />
                </div>
                <div className="text-sm text-neutral-600">
                  © {year} Whitetail Land Solutions · PO Box 167, NuMine, PA
                  16244 · info@whitetaillandsolutions.com
                </div>
              </div>
              <div className="text-xs text-neutral-500">
                Engineered for Giants. Built for Legacy.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

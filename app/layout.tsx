import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Whitetail Land Solutions",
  description: "Engineered for Giants. Built for Legacy.",
  icons: {
    icon: "/icon.png",              // this file must exist in /public
    apple: "/apple-touch-icon.png", // also in /public
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="border-b border-wood-200 sticky top-0 bg-white/80 backdrop-blur z-50">
          <div className="container py-3 flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-48 md:h-14 md:w-56">
  <Image
    src="/logo-400.png"
    alt="Whitetail Land Solutions"
    fill
    sizes="(min-width: 768px) 224px, 192px"
    className="object-contain"
    priority
  />
</div>
              <div>
                <div className="leading-tight">
  <div className="font-bold">Whitetail Land Solutions</div>
  <div className="text-[11px] text-neutral-500 md:text-xs">
    Engineered for Giants. Built for Legacy.
  </div>
</div>

              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:text-brand-700">Services</Link>
              <Link href="/properties" className="hover:text-brand-700">Land for Sale</Link>
              <Link href="/about" className="hover:text-brand-700">About</Link>
              <Link href="/contact" className="hover:text-brand-700">Contact</Link>
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
        © {new Date().getFullYear()} Whitetail Land Solutions · PO Box 167, NuMine, PA 16244 · info@whitetaillandsolutions.com
      </div>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}

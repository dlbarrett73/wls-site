
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Whitetail Land Solutions",
  description: "Engineered for Giants. Built for Legacy.",
  metadataBase: new URL("https://whitetaillandsolutions.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b sticky top-0 bg-white/80 backdrop-blur z-50">
          <div className="container py-3 flex items-center justify-between">
            // top import
import Image from "next/image";

// inside <header> logo area
<Link href="/" className="flex items-center gap-3">
  <div className="relative h-10 w-10">
    <Image
      src="/logo-400.png"
      alt="Whitetail Land Solutions"
      fill
      sizes="40px"
      className="object-contain"
      priority
    />
  </div>
  <div>
    <div className="font-bold leading-tight">Whitetail Land Solutions</div>
    <div className="text-xs text-neutral-500">Engineered for Giants. Built for Legacy.</div>
  </div>
</Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:text-neutral-600">Services</Link>
              <Link href="/properties" className="hover:text-neutral-600">Land for Sale</Link>
              <Link href="/about" className="hover:text-neutral-600">About</Link>
              <Link href="/contact" className="hover:text-neutral-600">Contact</Link>
              <Link href="/contact" className="btn btn-outline">Free Strategy Call</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="border-t">
          <div className="container py-10 text-sm text-neutral-500 grid md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-neutral-900">Whitetail Land Solutions</div>
              <div>Engineered for Giants. Built for Legacy.</div>
            </div>
            <div className="md:text-right">© {new Date().getFullYear()} Whitetail Land Solutions LLC</div>
          </div>
        </footer>
      </body>
    </html>
  );
}

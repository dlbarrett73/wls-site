// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Headline */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Engineered for Giants. <br /> Built for Legacy.
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/consulting" className="hover:text-white">
                  Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/implementation" className="hover:text-white">
                  Implementation
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.youtube.com/@whitetaillandsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@whitetaillandsolutions.com"
                  className="hover:text-white"
                >
                  info@whitetaillandsolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 (Logo / Address) */}
          <div>
            <Image
              src="/logo-400.png"
              alt="Whitetail Land Solutions"
              width={180}
              height={60}
              className="mb-3"
            />
            <p className="text-sm">
              PO Box 167 <br />
              NuMine, PA 16244
            </p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 border-t border-slate-700 pt-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Whitetail Land Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

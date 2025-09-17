// app/page.tsx
import Image from "next/image";
import { CtaButton } from "../components/CtaButton";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/public/images/hero.jpg" // <-- change this to match your real hero image path in /public
            alt="Whitetail Land Solutions Hero"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative container-page py-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Engineered for Giants. Built for Legacy.
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto text-zinc-200">
            Turnkey whitetail properties and expert habitat consulting to secure
            your hunting legacy.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <CtaButton href="/properties">View Properties</CtaButton>
            <CtaButton
              href="/contact"
              className="bg-white text-zinc-900 hover:bg-zinc-100"
            >
              Get in Touch
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Additional homepage content */}
      <section className="container-page py-20">
        <h2 className="text-3xl font-bold tracking-tight mb-6">
          Why Whitetail Land Solutions?
        </h2>
        <p className="text-zinc-700 mb-4">
          We buy undervalued land, optimize it for whitetail hunting, and sell
          it as turnkey hunting properties. Our consulting services transform
          ordinary tracts into big buck paradises.
        </p>
        <ul className="list-disc list-inside text-zinc-700 space-y-2">
          <li>Properties engineered for mature buck hunting success</li>
          <li>Turnkey access, food plots, and stand/blind placement</li>
          <li>Consulting to maximize your land’s potential</li>
          <li>Integrity, stewardship, and service at our core</li>
        </ul>
      </section>
    </div>
  );
}

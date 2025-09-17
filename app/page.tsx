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
            src="/images/hero.jpg" // ✅ Correct path: put your hero.jpg inside /public/images
            alt="Whitetail Land Solutions Hero"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto max-w-6xl px-6 py-40 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            Engineered for Giants. <br className="hidden sm:block" /> Built for Legacy.
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-zinc-200">
            Turnkey whitetail properties and expert habitat consulting to secure
            your hunting legacy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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

      {/* Why WLS Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Whitetail Land Solutions?
          </h2>
          <p className="mt-4 text-zinc-700 max-w-2xl mx-auto">
            We buy undervalued land, optimize it for whitetail hunting, and sell
            it as turnkey hunting properties. Our consulting services transform
            ordinary tracts into big buck paradises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-6 rounded-2xl shadow-sm border border-zinc-200 bg-white">
            <h3 className="font-semibold text-lg mb-2">Big Buck Success</h3>
            <p className="text-zinc-600 text-sm">
              Properties engineered for mature buck hunting potential.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-zinc-200 bg-white">
            <h3 className="font-semibold text-lg mb-2">Turnkey Access</h3>
            <p className="text-zinc-600 text-sm">
              Food plots, blinds, and entry routes ready to hunt day one.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-zinc-200 bg-white">
            <h3 className="font-semibold text-lg mb-2">Expert Consulting</h3>
            <p className="text-zinc-600 text-sm">
              Transform your property with proven habitat and access strategies.
            </p>
          </div>
          <div className="p-6 rounded-2xl shadow-sm border border-zinc-200 bg-white">
            <h3 className="font-semibold text-lg mb-2">Core Values</h3>
            <p className="text-zinc-600 text-sm">
              Integrity, stewardship, and service guide everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-700 text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Secure Your Legacy?
          </h2>
          <p className="text-zinc-200 mb-6">
            Whether buying a turnkey property or transforming your land,
            Whitetail Land Solutions is here to help.
          </p>
          <CtaButton href="/contact" className="bg-white text-brand-700 hover:bg-zinc-100">
            Schedule a Strategy Call
          </CtaButton>
        </div>
      </section>
    </div>
  );
}

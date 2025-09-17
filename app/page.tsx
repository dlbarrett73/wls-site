// app/page.tsx
import Image from "next/image";
import { CtaButton } from "../components/CtaButton";

export default function HomePage() {
  return (
    <div>
      {/* -------------------------------- */}
      {/* Hero: Left text, Right image     */}
      {/* -------------------------------- */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
          {/* Left: Headline + copy + CTAs */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Properties Optimized to Attract and Kill Mature Whitetail Bucks
            </h1>

            <p className="mt-6 max-w-xl text-lg text-zinc-700">
              Turnkey whitetail properties and expert habitat consulting to
              secure your hunting legacy.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/properties">View Properties</CtaButton>
              <CtaButton
                href="/contact"
                className="bg-zinc-900 text-white hover:bg-zinc-800"
              >
                Get in Touch
              </CtaButton>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg sm:h-96 lg:h-[520px]">
            <Image
              src="/images/hero.jpg" // place your hero image at /public/images/hero.jpg
              alt="Whitetail habitat with food plots and access"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------ */}
      {/* What We Do                     */}
      {/* ------------------------------ */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-zinc-700">
              From buying engineered, hunt-ready properties to transforming your
              current land, we make big-buck dreams practical and repeatable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card: Land for Sale */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">
                Land for Sale
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Turnkey properties engineered for mature bucks—food plots,
                blinds, and undetectable access ready on day one.
              </p>
              <div className="mt-6">
                <CtaButton href="/properties" className="w-full text-center">
                  View Available Properties
                </CtaButton>
              </div>
            </div>

            {/* Card: Consulting */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">Consulting</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Get a property-specific plan—access strategy, stand locations,
                food plots, and habitat design that fits your goals.
              </p>
              <div className="mt-6">
                <CtaButton
                  href="/services/consulting"
                  className="w-full text-center"
                >
                  Explore Consulting
                </CtaButton>
              </div>
            </div>

            {/* Card: Habitat Implementation */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">
                Habitat Implementation
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                We implement the work—food plots, trails, screening cover, TSI,
                blinds—so your land hunts bigger, faster.
              </p>
              <div className="mt-6">
                <CtaButton
                  href="/services/implementation"
                  className="w-full text-center"
                >
                  See How We Build
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ */}
      {/* Closing CTA Banner             */}
      {/* ------------------------------ */}
      <section className="bg-brand-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center">
          <h3 className="text-3xl font-bold sm:text-4xl">
            Ready to Secure Your Legacy?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-100">
            Whether buying a turnkey property or transforming your land, we’ll
            help you engineer a big-buck paradise.
          </p>
          <div className="mt-8">
            <CtaButton
              href="/contact"
              className="bg-white text-brand-700 hover:bg-zinc-100"
            >
              Schedule a Strategy Call
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}

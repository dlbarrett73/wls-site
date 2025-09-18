"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* Hero */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: Headline & Copy */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            “Properties Engineered for Giants. Built for Legacy.”
           </h1>
        </div>

          <p className="mt-6 text-lg text-zinc-700">
            Turnkey whitetail hunting land and consulting services designed to help you hunt big bucks from Day One.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
              Book a Free Strategy Call
            </CtaButton>

            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400"
            >
              Find Your Property
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">
                Service Area
              </div>
              <div className="mt-1 font-semibold">Pennsylvania (and nearby)</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">
                Core Services
              </div>
              <div className="mt-1 font-semibold">
                <Link href="/properties" className="hover:underline">
                  Land for Sale
                </Link>{" "}
                ·{" "}
                <Link href="/services/consulting" className="hover:underline">
                  Consulting
                </Link>{" "}
                ·{" "}
                <Link href="/services/habitat-implementation" className="hover:underline">
                  Habitat Implementation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero Image (fill container, bias crop upward) */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-zinc-200">
          <Image
            src="/images/hero.jpg" // ensure this exists in /public/images/
            alt="Kent with a mature Pennsylvania whitetail"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover object-[50%_20%]" // fill; keep more of the antlers in frame
            priority
          />
        </div>
      </section>

      {/* What We Do */}
      <section className="mt-24">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What We Do</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Whether you’re buying a turnkey hunting property or upgrading the land you
          already own, our systems are engineered for big-buck results and long-term value.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="group rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <h3 className="text-lg font-semibold">Land for Sale</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Turnkey properties with access, food, and stands dialed—so you can hunt
              giants on day one.
            </p>
            <Link
              href="/properties"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
            >
              Browse Properties →
            </Link>
          </article>

          <article className="group rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <h3 className="text-lg font-semibold">Consulting</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Property walk-throughs and a custom Blueprint for Giants—habitat, access,
              food, and stand strategy tailored to your ground.
            </p>
            <Link
              href="/services/consulting"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
            >
              Learn About Consulting →
            </Link>
          </article>

          <article className="group rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <h3 className="text-lg font-semibold">Habitat Implementation</h3>
            <p className="mt-2 text-sm text-zinc-700">
              Timber stand improvement, screening, plots, access, and blinds—our team
              builds the plan we design.
            </p>
            <Link
              href="/services/habitat-implementation"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
            >
              See Implementation Services →
            </Link>
          </article>
        </div>

        <div className="mt-10">
          <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
            Book Your Free Strategy Call
          </CtaButton>
        </div>
      </section>
    </main>
  );
}

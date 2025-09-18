"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CtaButton } from "@/components/CtaButton";

// --- Optional SEO (works in app router) ---
export const metadata: Metadata = {
  title: "Whitetail Land Solutions | Properties Engineered for Giants. Built for Legacy.",
  description:
    "Turnkey whitetail hunting properties and expert consulting in Pennsylvania. Hunt big bucks from Day One with engineered access, food, and stand strategy.",
  openGraph: {
    title: "Whitetail Land Solutions",
    description:
      "Turnkey whitetail hunting properties and expert consulting in Pennsylvania.",
    url: "https://www.whitetaillandsolutions.com/",
    siteName: "Whitetail Land Solutions",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Turnkey whitetail property — engineered habitat and access",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* ========================== */}
      {/* Hero                       */}
      {/* ========================== */}
      <section className="grid items-center gap-10 md:grid-cols-2">
        {/* Left: Headline & Copy */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Properties Engineered for Giants. Built for Legacy.
          </h1>

          <p className="mt-6 text-lg text-zinc-700">
            Turnkey whitetail hunting land and consulting designed to help you hunt
            big bucks from Day One — with access, habitat, food, and stand strategy dialed.
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

          {/* Fast facts */}
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
          {/* Ensure this exists in /public/images/hero.jpg */}
          <Image
            src="/images/hero.jpg"
            alt="Engineered whitetail habitat with food, cover, and stand access"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover object-[50%_20%]"
            priority
          />
        </div>
      </section>

      {/* ========================== */}
      {/* Two Paths (Clear Offers)   */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Choose Your Path</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Whether you want a turnkey hunting property or you want to transform your current
          land into a big-buck paradise, we have a proven system to get you there.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Path 1 */}
          <article className="group flex flex-col justify-between rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <div>
              <h3 className="text-xl font-semibold">Buy a Turnkey Property</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Properties with access, food plots, screening, and stand/blind strategy ready to hunt.
                Inventory is limited — engineered specifically for mature buck encounters.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
              >
                Browse Available Properties →
              </Link>
            </div>
          </article>

          {/* Path 2 */}
          <article className="group flex flex-col justify-between rounded-2xl border border-zinc-200 p-6 transition hover:shadow-md">
            <div>
              <h3 className="text-xl font-semibold">Transform My Property</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Our Blueprint for Giants consulting maps access, bedding, food, and stand strategy —
                and our team can implement the plan for you.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/services/consulting"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 underline-offset-4 transition group-hover:underline"
              >
                Learn About Consulting →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ========================== */}
      {/* Biological Proof (Gallery) */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Biological Proof</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Mature deer respond to great design. Here’s a snapshot of the results:
          trail cam evidence, habitat upgrades, and strategic access that keeps deer calm and killable.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Replace with your real assets in /public/images/ */}
          {[
            { src: "/images/proof-1.jpg", alt: "Trail camera capture of mature buck" },
            { src: "/images/proof-2.jpg", alt: "Food plot with screening and access trail" },
            { src: "/images/proof-3.jpg", alt: "Strategic stand/blind placement with cover" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* Featured Property          */}
      {/* ========================== */}
      <section className="mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Property</h2>
          <Link
            href="/properties"
            className="text-sm font-semibold text-brand-700 hover:underline underline-offset-4"
          >
            See All Properties →
          </Link>
        </div>

        <article className="mt-6 grid gap-6 overflow-hidden rounded-2xl border border-zinc-200 p-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            {/* Ensure this exists or swap to a live listing image */}
            <Image
              src="/images/featured.jpg"
              alt="Featured turnkey whitetail property"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-between p-2">
            <div>
              <h3 className="text-xl font-semibold">Turnkey Whitetail Tract</h3>
              <p className="mt-2 text-sm text-zinc-700">
                Access corridors, food plot system, stand/blind locations, and screening cover in place.
                Hunt big bucks immediately while your habitat investment compounds year after year.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-zinc-800">
                <li>• Engineered access & undetectable entry/exit</li>
                <li>• Food, cover, water diversity for year-round use</li>
                <li>• Stand/blind strategy by wind, season, and pressure</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
                Inquire About This Property
              </CtaButton>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400"
              >
                Browse All Listings
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* ========================== */}
      {/* Values / Story             */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Engineered for Giants. Built for Legacy.</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          We combine whitetail biology, habitat design, and forestry to engineer properties that consistently
          attract and hold mature deer. Our work is guided by Integrity, Stewardship, Service, and the Golden Rule —
          so you can create a legacy of memories with family and friends on land you’re proud to own.
        </p>
      </section>

      {/* ========================== */}
      {/* Testimonials               */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What Hunters Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "I’ve hunted Pennsylvania my whole life — this is the first property where I felt set up to kill a mature buck on day one.",
              name: "J.D., PA",
            },
            {
              quote:
                "Their access strategy and plot layout changed everything. Deer were calm, predictable, and killable.",
              name: "M.S., Western PA",
            },
            {
              quote:
                "The Blueprint for Giants plan paid off immediately. We saw older age-class bucks we didn’t know existed.",
              name: "K.R., Landowner",
            },
          ].map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-zinc-200 p-6 text-sm text-zinc-800"
            >
              “{t.quote}”
              <footer className="mt-4 font-semibold text-zinc-900">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ========================== */}
      {/* Final CTA                  */}
      {/* ========================== */}
      <section className="mt-20 rounded-2xl border border-zinc-200 p-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to Secure Your Hunting Legacy?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          Inventory is limited. Book a free strategy call or join the waitlist — we’ll help you
          find or build a property engineered to put mature bucks in front of you.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/contact" className="bg-brand-700 hover:bg-brand-800">
            Book a Free Strategy Call
          </CtaButton>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}

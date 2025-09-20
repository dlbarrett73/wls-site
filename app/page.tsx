// app/page.tsx
import React from "react";
import Link from "next/link";

// Local CTA
function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-brand-700 px-6 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-brand-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      {children}
    </Link>
  );
}

// Assets
const HERO_IMAGE = "/images/hero.jpg";
const TILE_IMAGES = {
  properties: "/images/property.jpg",
  consulting: "/images/consulting.png",
  implementation: "/images/implementation.jpg",
};
const FEATURED = {
  title: "Mahaffey 131",
  href: "/properties/mahaffey-131",
  image: "/images/properties/mahaffey-131/hero.jpg",
  acres: "131± acres",
  location: "Clearfield County, PA",
  price: "Call",
};

// YouTube placeholders
const YOUTUBE_VIDEO_ID_TRAILER = "YOUTUBE_VIDEO_ID_TRAILER";
const YOUTUBE_VIDEO_ID_PROPERTY = "YOUTUBE_VIDEO_ID_PROPERTY";
const YOUTUBE_THUMB_TRAILER = "/images/youtube-trailer.jpg";
const YOUTUBE_THUMB_PROPERTY = "/images/youtube-property.jpg";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-0 pb-24 pt-0">
      {/* HERO full width like Implementation */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-800/70 to-brand-900/80" />
        <div className="relative px-8 py-24 text-center text-white">
          <p className="text-xs font-semibold tracking-widest text-white/80">
            WHITETAIL LAND SOLUTIONS
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
            Engineered for Giants.
            <br />
            Built for Legacy.
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Turnkey hunting properties and habitat design—expert strategy,
            proven access, food, cover, and stand placement so you can hunt big,
            mature whitetails sooner.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/contact">Book Your Free Strategy Call</Cta>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="container mt-16 px-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Choose Your Path
        </h2>
        <p className="mt-2 text-zinc-700">
          Whether you’re buying land, optimizing your property, or wanting us to
          build it for you—we’ll meet you where you are.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Land for Sale",
              href: "/properties",
              img: TILE_IMAGES.properties,
              badge: "Turnkey",
              desc: "Hunt-ready properties engineered for mature bucks—access, food/cover, and stand placements built in.",
            },
            {
              title: "Consulting",
              href: "https://www.whitetaillandsolutions.com/services/consulting",
              img: TILE_IMAGES.consulting,
              badge: "Blueprint",
              desc: "Custom habitat design maps & action plan to transform your acreage into a big-buck paradise.",
            },
            {
              title: "Habitat Implementation",
              href: "https://www.whitetaillandsolutions.com/services/implementation",
              img: TILE_IMAGES.implementation,
              badge: "Done-For-You",
              desc: "We build the plan: trails, plots, screening, stand/blind installs, and access—start hunting sooner.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
              <div className="relative p-6 text-white">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2">{item.desc}</p>
                <span className="mt-4 inline-flex items-center">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PROPERTY */}
      {/* ... unchanged ... */}
    </main>
  );
}

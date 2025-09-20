// app/page.tsx
import React from "react";
import Link from "next/link";

// Local CTA (no external deps)
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

// YouTube placeholders — replace with real IDs (the part after v= in the URL)
const YOUTUBE_VIDEO_ID_TRAILER = "YOUTUBE_VIDEO_ID_TRAILER";
const YOUTUBE_VIDEO_ID_PROPERTY = "YOUTUBE_VIDEO_ID_PROPERTY";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* 1) HERO */}
      <section
        className="relative overflow-hidden rounded-3xl p-10 text-white shadow-soft"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,73,61,0.85), rgba(33,93,76,0.92)), url(${HERO_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest text-white/70">
            WHITETAIL LAND SOLUTIONS
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl text-white drop-shadow">
            Properties Engineered for Giants. Built for Legacy.
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Turnkey hunting properties and habitat design—expert strategy,
            proven access, food, cover, and stand placement so you can hunt big,
            mature whitetails sooner.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href="/contact">Book Your Free Strategy Call</Cta>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-base font-semibold text-white/90 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2) CHOOSE YOUR PATH */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Choose Your Path</h2>
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
              href: "/consulting",
              img: TILE_IMAGES.consulting,
              badge: "Blueprint",
              desc: "Custom habitat design maps & action plan to transform your acreage into a big-buck paradise.",
            },
            {
              title: "Habitat Implementation",
              href: "/implementation",
              img: TILE_IMAGES.implementation,
              badge: "Done-For-You",
              desc: "We build the plan: trails, plots, screening, stand/blind installs, and access—start hunting sooner.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(33,93,76,0.15), rgba(33,93,76,0.65)), url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white drop-shadow">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-white/90 drop-shadow">{item.desc}</p>
                <span className="mt-4 inline-flex items-center text-white">
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

      {/* 3) FEATURED PROPERTY */}
      <section className="mt-16">
        <div className="rounded-2xl border border-zinc-200 bg-white p-1 shadow-soft">
          <Link href={FEATURED.href} className="grid gap-4 p-4 sm:grid-cols-3">
            <div
              className="aspect-[16/10] w-full overflow-hidden rounded-xl sm:col-span-1"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.1)), url(${FEATURED.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="sm:col-span-2">
              <p className="text-xs font-semibold tracking-widest text-neutral-500">
                FEATURED PROPERTY
              </p>
              <h3 className="mt-1 text-2xl font-bold">{FEATURED.title}</h3>
              <p className="mt-2 text-zinc-700">
                {FEATURED.acres} • {FEATURED.location}
              </p>
              <p className="mt-1 font-semibold">{FEATURED.price}</p>
              <p className="mt-3 text-zinc-700">
                Hunt-ready layout with access, food/cover, and proven strategy.
              </p>
              <span className="mt-4 inline-flex items-center text-brand-700">
                View Details
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* 4) CHANNEL TRAILER (YouTube) */}
      <section className="mt-16">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Giant Legacy — Channel Trailer</h2>
            <p className="mt-1 text-zinc-700">
              Why we exist, how we build hunt-ready properties, and what to expect on the channel.
            </p>
          </div>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            className="text-brand-700 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-500"
          >
            Subscribe on YouTube
          </Link>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={
                YOUTUBE_VIDEO_ID_TRAILER
                  ? `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_TRAILER}`
                  : "about:blank"
              }
              title="WLS Channel Trailer"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 5) LATEST PROPERTY SHOWCASE (YouTube) */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">Latest Property Showcase — Mahaffey 131</h2>
        <p className="mt-1 text-zinc-700">
          Full walk-through: access, food plots, stand locations, and hunt strategy.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-soft">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={
                YOUTUBE_VIDEO_ID_PROPERTY
                  ? `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID_PROPERTY}`
                  : "about:blank"
              }
              title="Mahaffey 131 Property Showcase"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 6) SITE-WIDE CTA STRIP */}
      <section className="mt-16 rounded-2xl border border-brand-100 bg-brand-50 p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-brand-900">
              Free 15-Minute Property Strategy Call
            </h3>
            <p className="mt-1 text-brand-900/80">
              Talk through goals, acreage, and timeline—get expert next steps.
            </p>
          </div>
          <Cta href="/contact">Book Now</Cta>
        </div>
      </section>
    </main>
  );
}

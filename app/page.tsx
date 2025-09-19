// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { properties } from "../data/properties"; // make sure this points to your property data

export default function HomePage() {
  const featured = properties.find((p) => p.slug === "mahaffey-131"); // replace slug if needed

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* ========================== */}
      {/* Hero Section               */}
      {/* ========================== */}
      <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left: Headline + Text */}
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-emerald-700">
            Whitetail Land Solutions
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Properties <span className="text-emerald-700">Engineered for Giants.</span>{" "}
            Built for Legacy.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-700">
            We acquire undervalued land, design habitat with surgical precision,
            and deliver turnkey properties that put mature whitetail bucks in bow range.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/properties"
              className="inline-flex items-center rounded-xl px-5 py-3 text-base font-semibold ring-1 ring-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800 transition"
            >
              Browse Land for Sale
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-3 text-base font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-50 transition"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl shadow md:h-[520px]">
          <Image
            src="/images/hero/hero.jpg"
            alt="Whitetail habitat and trophy buck"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ========================== */}
      {/* Choose Your Path Section   */}
      {/* ========================== */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
          Choose Your Path
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Whether you’re buying a turnkey property, want a master plan for your land, 
          or need a hands-on buildout, we’ll help you achieve mature-buck success faster.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Land for Sale */}
          <article className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/cards/land-for-sale.jpg"
                alt="Turnkey whitetail hunting property"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">Land for Sale</h3>
            <p className="mt-2 text-zinc-600">
              Properties engineered with food, cover, access, and stand locations — hunt big bucks Day One.
            </p>
            <Link
              href="/properties"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800 transition"
            >
              Explore Listings
            </Link>
          </article>

          {/* Consulting */}
          <article className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/cards/consulting.jpg"
                alt="Property design map and habitat plan"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">Consulting</h3>
            <p className="mt-2 text-zinc-600">
              Get a Blueprint for Giants: access, bedding, plots, and stand strategy tailored to your land.
            </p>
            <Link
              href="/services/consulting"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-50 transition"
            >
              Get a Plan
            </Link>
          </article>

          {/* Habitat Implementation */}
          <article className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl">
              <Image
                src="/images/cards/habitat.jpg"
                alt="Dozer and equipment improving access and habitat"
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-zinc-900">Habitat Implementation</h3>
            <p className="mt-2 text-zinc-600">
              We manage the work: roads, plots, screens, stands, and timber improvements — done right.
            </p>
            <Link
              href="/services/habitat-implementation"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-50 transition"
            >
              Build It for Me
            </Link>
          </article>
        </div>
      </section>

      {/* ========================== */}
      {/* Featured Property Section  */}
      {/* ========================== */}
      {featured && (
        <section className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
            Featured Property
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow">
              <Image
                src={featured.heroImage ?? "/images/properties/fallback.jpg"}
                alt={featured.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-zinc-900">
                {featured.title}
              </h3>
              <p className="mt-2 text-zinc-700">
                {featured.acres} acres • {featured.location}
              </p>
              <p className="mt-4 text-zinc-600">{featured.description}</p>
              <Link
                href={`/properties/${featured.slug}`}
                className="mt-6 inline-flex items-center rounded-xl px-5 py-3 text-base font-semibold ring-1 ring-emerald-700 bg-emerald-700 text-white hover:bg-emerald-800 transition"
              >
                View Property
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}


// app/page.tsx
import Image from "next/image";
import Link from "next/link";

// ✅ import from ROOT components folder
import { CtaButton } from "@/components/CtaButton";

export default function HomePage() {
  return (
    <main className="pb-24 pt-12">
      {/* ========================== */}
      {/* Hero (Split)               */}
      {/* ========================== */}
      <section className="grid items-center gap-8 lg:grid-cols-2">
        {/* Left: Headline & Copy */}
        <div>
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">
            Limited inventory
          </span>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Properties Optimized to Attract and Kill Mature Whitetail Bucks
          </h1>

          <p className="mt-4 max-w-prose text-lg text-zinc-700">
            Engineered for Giants. Built for Legacy. We buy undervalued land, design
            and implement proven habitat improvements, and deliver turnkey
            properties you can hunt Day One.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/contact" label="Book a Free Strategy Call" />
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Browse Properties
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm lg:aspect-[5/4]">
          {/* Use your real image path under /public; this fallback is safe */}
          <Image
            src="/images/home/hero.jpg"
            alt="Kent with trophy-class buck—WLS habitat-designed property"
            fill
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* ========================== */}
      {/* What We Do                 */}
      {/* ========================== */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">What We Do</h2>
        <p className="mt-2 max-w-prose text-zinc-700">
          Turnkey properties, expert consulting, and done-for-you habitat implementation—backed by
          proven access and stand strategy so you can focus on the hunt.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Land for Sale */}
          <li className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="text-lg font-semibold">Land for Sale</div>
            <p className="mt-2 text-sm text-zinc-700">
              Turnkey whitetail properties engineered for big-buck opportunity the first season.
            </p>
            <div className="mt-4">
              <Link
                href="/properties"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                See Available Properties
              </Link>
            </div>
          </li>

          {/* Consulting */}
          <li className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="text-lg font-semibold">Consulting</div>
            <p className="mt-2 text-sm text-zinc-700">
              Blueprint for Giants—custom property design map, access, stand locations, and a prioritized action plan.
            </p>
            <div className="mt-4">
              <Link
                href="/services/consulting"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                Explore Consulting
              </Link>
            </div>
          </li>

          {/* Habitat Implementation */}
          <li className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="text-lg font-semibold">Habitat Implementation</div>
            <p className="mt-2 text-sm text-zinc-700">
              Food plots, trails, blinds, screening cover, and TSI—installed for you by our trusted partners.
            </p>
            <div className="mt-4">
              <Link
                href="/services/habitat-implementation"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
              >
                See How It Works
              </Link>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

// app/services/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Services — Whitetail Land Solutions",
  description:
    "Consulting, Habitat Implementation, and Turnkey Land for Sale engineered for mature whitetails.",
};

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      {/* HERO — mirrors home page: rounded image panel, dark overlay, white text */}
      <section
        className="relative overflow-hidden rounded-3xl shadow-soft"
        style={{
          backgroundImage:
            "linear-gradient(rgba(19,54,46,.88), rgba(19,54,46,.88)), url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-6 py-14 md:px-10 md:py-16">
          <p className="text-xs font-semibold tracking-[0.18em] text-white/80">
            SERVICES
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Engineered for Giants. Built for Legacy.
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            From strategy and habitat work to turnkey properties, we help you
            create hunt-ready land that consistently attracts and holds mature
            whitetails—without guesswork.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Book a Free Strategy Call
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH — identical visual to home page tiles */}
      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          Choose Your Path
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Whether you’re buying land, optimizing your property, or wanting us to
          build it for you—we’ll meet you where you are.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <TileCard
            href="/properties"
            title="Land for Sale (Hunt-Ready)"
            badge="Turnkey"
            image="/images/properties/mahaffey-131/hero.jpg"
            fallbackClass="bg-[url('/images/property.jpg')]"
            description="Hunt-ready properties engineered for mature bucks—access, food/cover, and stand placements built in."
          />
          <TileCard
            href="/consulting"
            title="Consulting"
            badge="Blueprint"
            image="/images/consulting.jpg"
            fallbackClass="bg-[url('/images/map.jpg')]"
            description="Custom habitat maps and a step-by-step plan to turn your acreage into a big-buck paradise."
          />
          <TileCard
            href="/implementation"
            title="Habitat Implementation"
            badge="Done-For-You"
            image="/images/implementation.jpg"
            fallbackClass="bg-[url('/images/implementation.jpg')]"
            description="We build the plan—trails, plots, screening, stands/blinds, and access—so you hunt sooner."
          />
        </div>
      </section>

      {/* SERVICE CARDS — echo tile styling; clear copy + low-friction CTAs */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <InfoCard
          label="Strategy"
          title="Consulting: Blueprint for Giants"
          body="A custom, step-by-step design for mature whitetails—access, bedding, food, and pressure management tuned to your terrain and goals."
          ctaHref="/consulting"
        />
        <InfoCard
          label="Build"
          title="Habitat Implementation"
          body="We execute the blueprint: food plots, roads, screening, stand sets, and timber work—so the property hunts right away."
          ctaHref="/implementation"
        />
        <InfoCard
          label="Turnkey"
          title="Land for Sale (Hunt-Ready)"
          body="Properties we acquire and optimize with the same proven playbook—access, food, and setups ready on day one."
          ctaHref="/properties"
        />
      </section>
    </main>
  );
}

/* ----------------------------- Local Components ---------------------------- */

type TileCardProps = {
  href: string;
  title: string;
  description: string;
  badge?: string;
  image?: string;
  fallbackClass?: string;
};

function TileCard({
  href,
  title,
  description,
  badge,
  image,
  fallbackClass,
}: TileCardProps) {
  return (
    <Link
      href={href}
      className={[
        "group relative overflow-hidden rounded-3xl shadow-soft ring-1 ring-black/5",
        "bg-center bg-cover",
        fallbackClass ?? "bg-brand-800",
      ].join(" ")}
      style={{
        backgroundImage: image
          ? `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url('${image}')`
          : "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55))",
      }}
    >
      <div className="pointer-events-none absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
      {badge ? (
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow">
          {badge}
        </span>
      ) : null}

      <div className="relative p-6 md:p-7">
        <h3 className="text-lg font-semibold text-white drop-shadow">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-white/85">{description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/95">
          Learn More <span aria-hidden>›</span>
        </span>
      </div>
    </Link>
  );
}

type InfoCardProps = {
  label: string;
  title: string;
  body: string;
  ctaHref: string;
};

function InfoCard({ label, title, body, ctaHref }: InfoCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
      <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
        {label}
      </span>
      <h3 className="mt-3 text-xl font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 text-zinc-600">{body}</p>
      <div className="mt-4">
        <Link
          href={ctaHref}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          Learn More <span aria-hidden>›</span>
        </Link>
      </div>
    </div>
  );
}

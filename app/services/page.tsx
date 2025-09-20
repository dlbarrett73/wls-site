// app/services/page.tsx
import Link from "next/link";

export const metadata = {
  title:
    "Services — Consulting (DIY/DFY) & Habitat Implementation | Whitetail Land Solutions",
  description:
    "Two clear paths: Consulting (DIY or DFY) and Habitat Implementation (we can also build from your existing plan).",
};

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      {/* HERO — services-specific; home-page look with white headline */}
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
            Consulting & Habitat Implementation
          </h1>
          <p className="mt-4 max-w-2xl text-white/85">
            Get a proven blueprint to engineer your property for mature
            whitetails—or have our team build it for you. Already have a plan?
            We can execute it with precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.whitetaillandsolutions.com/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Book a Free Strategy Call <span aria-hidden>→</span>
            </a>
            <a
              href="https://www.whitetaillandsolutions.com/services/consulting"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2"
            >
              Explore Consulting <span aria-hidden>›</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE TILES — two tiles only; requested image + absolute links */}
      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          Two Ways We Help
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Choose the best fit for where you are today.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <TileCard
            href="https://www.whitetaillandsolutions.com/services/consulting"
            title="Consulting (Blueprint for Giants)"
            badge="DIY or DFY"
            image="/images/consulting.png" // requested path (public/images/consulting.png)
            fallbackClass="bg-[url('/images/consulting.png')]"
            description="Custom design maps and a step-by-step plan—access, bedding, food, setups, and pressure control—so you can implement yourself or have us do it."
            bullets={[
              "Custom maps & priority actions",
              "Seasonal timeline & how-to guide",
              "Option to have our team build it (DFY)",
            ]}
            ctaLabel="Learn About Consulting"
          />

          <TileCard
            href="https://www.whitetaillandsolutions.com/services/implementation"
            title="Habitat Implementation"
            badge="Done-For-You"
            image="/images/implementation.jpg"
            fallbackClass="bg-[url('/images/implementation.jpg')]"
            description="We build the plan—roads, plots, screening, stand/blind installs, and access—so your property hunts sooner and smarter."
            bullets={[
              "Build from our blueprint or your plan",
              "Food plots, trails/roads, screening & TSI",
              "Stand/blind placement & access optimization",
            ]}
            ctaLabel="See Implementation"
          />
        </div>
      </section>

      {/* ULTRA-CLEAR DECISION AID — no confusion, simple mapping */}
      <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-zinc-900">
          What’s my best next step?
        </h3>

        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <DecisionCard
            tag="Consulting — DIY"
            title="I want a plan I can implement."
            body="We design the blueprint. You follow the step-by-step map and timeline."
            href="https://www.whitetaillandsolutions.com/services/consulting"
          />
          <DecisionCard
            tag="Consulting — DFY"
            title="I want you to build it for me."
            body="We create the blueprint and our team implements it end-to-end."
            href="https://www.whitetaillandsolutions.com/services/consulting"
          />
          <DecisionCard
            tag="Implementation — Use Existing Plan"
            title="I already have a plan."
            body="We execute your plan with expert sequencing, access, and quality control."
            href="https://www.whitetaillandsolutions.com/services/implementation"
          />
        </div>

        <div className="mt-6">
          <a
            href="https://www.whitetaillandsolutions.com/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Book a Free Strategy Call <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- Local Components ---------------------------- */

type TileCardProps = {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  badge?: string;
  image?: string;
  fallbackClass?: string;
  ctaLabel?: string;
};

/** Home-style image tile with dark overlay, white text, and badge. */
function TileCard({
  href,
  title,
  description,
  bullets,
  badge,
  image,
  fallbackClass,
  ctaLabel = "Learn More",
}: TileCardProps) {
  return (
    <div className="rounded-3xl shadow-soft ring-1 ring-black/5">
      <a
        href={href}
        className={[
          "group relative block overflow-hidden rounded-3xl",
          "bg-center bg-cover",
          fallbackClass ?? "bg-brand-800",
        ].join(" ")}
        style={{
          backgroundImage: image
            ? `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url('${image}')`
            : "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55))",
        }}
      >
        {badge ? (
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900 shadow">
            {badge}
          </span>
        ) : null}
        <div className="pointer-events-none absolute inset-0 transition-transform duration-300 group-hover:scale-105" />
        <div className="relative p-6 md:p-7">
          <h3 className="text-lg font-semibold text-white drop-shadow">
            {title}
          </h3>
          <p className="mt-2 text-sm text-white/85">{description}</p>
          <ul className="mt-3 space-y-1 text-sm text-white/85">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden>•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/95">
            {ctaLabel} <span aria-hidden>›</span>
          </span>
        </div>
      </a>
    </div>
  );
}

function DecisionCard({
  tag,
  title,
  body,
  href,
}: {
  tag: string;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800">
        {tag}
      </span>
      <h4 className="mt-2 text-base font-semibold text-zinc-900">{title}</h4>
      <p className="mt-2 text-sm text-zinc-600">{body}</p>
      <div className="mt-3">
        <a
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          Learn More <span aria-hidden>›</span>
        </a>
      </div>
    </div>
  );
}

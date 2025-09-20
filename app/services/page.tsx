// app/services/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Services — Consulting & Habitat Implementation | Whitetail Land Solutions",
  description:
    "Two ways we help: Consulting (DIY plan you can implement) and Habitat Implementation (we build it), including execution of an existing plan.",
};

export default function Services() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-10">
      {/* HERO — services-specific copy; matches home look with white text */}
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
            whitetails—or have our team build it for you. If you already have a
            plan, we can execute it with precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Book a Free Strategy Call <span aria-hidden>→</span>
            </Link>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2"
            >
              Explore Consulting <span aria-hidden>›</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TWO SERVICE TILES — identical style to home tiles; no land card */}
      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          Two Ways We Help
        </h2>
        <p className="mt-2 max-w-2xl text-zinc-600">
          Choose the best fit for where you are today.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <TileCard
            href="/consulting"
            title="Consulting (Blueprint for Giants)"
            badge="DIY Plan"
            image="/images/consulting.jpg"
            fallbackClass="bg-[url('/images/map.jpg')]"
            description="Custom design maps and a step-by-step plan—access, bedding, food, setups, and pressure control—so you can implement with confidence."
            bullets={[
              "Property walk-through (as applicable) & goals",
              "Custom maps and priority actions",
              "Seasonal timeline & implementation guide",
            ]}
            ctaLabel="Learn About Consulting"
          />

          <TileCard
            href="/implementation"
            title="Habitat Implementation"
            badge="Done-For-You"
            image="/images/implementation.jpg"
            fallbackClass="bg-[url('/images/implementation.jpg')]"
            description="We build the plan—roads, plots, screening, stand/blind installs, and access—so your property hunts sooner and smarter."
            bullets={[
              "Build from our blueprint or your existing plan",
              "Food plots, trails/roads, screening & TSI",
              "Stand/blind placement & access optimization",
            ]}
            ctaLabel="See Implementation"
          />
        </div>
      </section>

      {/* CLARIFIER — make the choices crystal clear */}
      <section className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft">
        <h3 className="text-lg font-semibold text-zinc-900">
          Which option is right for me?
        </h3>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <ClarifyCard
            title="I want a plan I can implement."
            body="Choose Consulting. You’ll get maps, priorities, and a seasonal playbook dialed to your terrain."
            href="/consulting"
          />
          <ClarifyCard
            title="I want you to build it for me."
            body="Choose Habitat Implementation. We execute the plan end-to-end so you can hunt sooner."
            href="/implementation"
          />
          <ClarifyCard
            title="I already have a plan."
            body="We can implement your existing plan with expert execution, sequencing, and quality control."
            href="/implementation"
          />
        </div>

        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            Book a Free Strategy Call <span aria-hidden>→</span>
          </Link>
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
      <Link
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
      </Link>
    </div>
  );
}

function ClarifyCard({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <h4 className="text-base font-semibold text-zinc-900">{title}</h4>
      <p className="mt-2 text-sm text-zinc-600">{body}</p>
      <div className="mt-3">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
        >
          Learn More <span aria-hidden>›</span>
        </Link>
      </div>
    </div>
  );
}

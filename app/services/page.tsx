import Link from "next/link";

export const metadata = {
  title: "Services — Whitetail Land Solutions",
  description:
    "Whitetail Land Solutions offers Consulting, Habitat Implementation, and Turnkey Land for Sale engineered for mature whitetails.",
};

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">SERVICES</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Simple offers that solve real hunter problems.
        </h1>
        <p className="mt-6 max-w-3xl text-neutral-600">
          We design properties that hunt easier and produce more daylight opportunities on mature
          bucks. Start with consulting, have us implement the work, or buy a turnkey property engineered
          for giants.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">Get a Free 15-Minute Strategy Call</Link>
        </div>
      </section>

      {/* Offer Cards */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 grid md:grid-cols-3 gap-6">
          <OfferCard
            eyebrow="Service 01"
            title="Consulting"
            bullets={[
              "Custom habitat plan + access strategy",
              "Stand/entry/exit mapped for wind & thermals",
              "Prioritized roadmap by effort & budget",
            ]}
            body="We walk your ground (or start remote), analyze access, pressure, food/bedding, and map a practical plan that hunts in the real world."
            cta={{ href: "/services/consulting", label: "Learn more" }}
          />

          <OfferCard
            eyebrow="Service 02"
            title="Habitat Implementation"
            bullets={[
              "Food plots, trails, stand trees, timber prescriptions",
              "Access-first design to keep deer unpressured",
              "Trusted partners, forestry oversight",
            ]}
            body="We execute the plan with the right sequencing so your property gets better every pass — not just prettier."
            cta={{ href: "/services/implementation", label: "Learn more" }}
          />

          <OfferCard
            eyebrow="Service 03"
            title="Land for Sale"
            bullets={[
              "Turnkey, whitetail-optimized properties",
              "Access, stands, food, cover already working",
              "Hunt Day One — enjoy, not just maintain",
            ]}
            body="We acquire undervalued tracts and engineer them to hunt. If you want a property that’s ready now, start here."
            cta={{ href: "/properties", label: "See Available Properties" }}
          />
        </div>
      </section>

      {/* Process */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
        <ol className="mt-8 grid md:grid-cols-4 gap-6 text-sm">
          <Step n="01" title="Discovery Call" body="Share your acreage, goals, timeline, and constraints." />
          <Step n="02" title="Property Walk / Remote Review" body="We analyze access, pressure, habitat diversity, and opportunity." />
          <Step n="03" title="Plan & Roadmap" body="Clear priorities by effort/budget, sequenced for compounding gains." />
          <Step n="04" title="Implementation / Follow-Up" body="We execute with partners or coach you through DIY phases." />
        </ol>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-outline">Start with a Free Call</Link>
        </div>
      </section>

      {/* Credibility / Why WLS */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 grid lg:grid-cols-2 gap-8 items-start">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Why hunters choose WLS</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Plans designed to hold and hunt mature bucks.</li>
              <li>Access-first design: wind, thermals, undetectable entry/exit.</li>
              <li>Forestry intelligence to maximize value and habitat.</li>
              <li>Simple packages and straight talk — no fluff.</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Service Area & Logistics</h3>
            <dl className="mt-4 grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-neutral-500">Primary Area</dt>
                <dd className="font-semibold">Pennsylvania (and nearby)</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Engagements</dt>
                <dd className="font-semibold">On-site or remote (maps & video)</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Email</dt>
                <dd className="font-semibold">info@whitetaillandsolutions.com</dd>
              </div>
              <div>
                <dt className="text-neutral-500">YouTube</dt>
                <dd className="font-semibold">
                  <a className="underline" href="https://www.youtube.com/@GiantLegacy_WLS" target="_blank">
                    @GiantLegacy_WLS
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tell us about your goals</h2>
        <p className="mt-2 text-neutral-600">
          We’ll map the fastest path to a hunt-ready property — without wasting seasons.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">Get a Free 15-Minute Strategy Call</Link>
          <Link href="/properties" className="btn btn-outline">See Land for Sale</Link>
        </div>
      </section>
    </main>
  );
}

/* --- small helpers --- */
function OfferCard({
  eyebrow,
  title,
  bullets,
  body,
  cta,
}: {
  eyebrow: string;
  title: string;
  bullets: string[];
  body: string;
  cta: { href: string; label: string };
}) {
  return (
    <article className="card p-6 bg-white">
      <p className="text-xs font-semibold tracking-widest text-neutral-500">{eyebrow}</p>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => <li key={b}>• {b}</li>)}
      </ul>
      <p className="mt-4 text-sm text-neutral-700">{body}</p>
      <div className="mt-6">
        <Link href={cta.href} className="btn btn-primary">{cta.label}</Link>
      </div>
    </article>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="card p-5 bg-white">
      <div className="text-xs font-semibold tracking-widest text-brand-700">{n}</div>
      <div className="mt-1 font-semibold">{title}</div>
      <div className="mt-2 text-neutral-700">{body}</div>
    </li>
  );
}

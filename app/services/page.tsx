import Link from "next/link";

export const metadata = {
  title: "Services — Whitetail Land Solutions",
  description:
    "Consulting, Habitat Implementation, and Turnkey Land for Sale engineered to hunt easier and produce more daylight opportunities on mature whitetails.",
};

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        <p className="text-xs md:text-sm font-semibold tracking-widest text-neutral-500">
          SERVICES
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Simple Offers That Solve Real Hunter Problems.
        </h1>
        <p className="mt-6 max-w-3xl text-neutral-600">
          We design properties that hunt easier and create more daylight
          opportunities on mature bucks. Choose a consulting plan, have us
          implement the work, or buy a turnkey property engineered for giants.
        </p>

        {/* Benefit bar */}
        <ul className="mt-8 grid gap-3 sm:grid-cols-3 text-sm">
          {[
            "Access-first design: wind, thermals, undetectable entry/exit",
            "Plans built to hold and hunt mature bucks",
            "Sequenced work that compounds — better every pass",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-wood-200 bg-wood-50 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a Free 15-Minute Strategy Call
          </Link>
          <a href="#offers" className="btn btn-outline">
            Choose Your Path
          </a>
        </div>
      </section>

      {/* Offer Cards */}
      <section
        id="offers"
        className="border-t border-wood-200 bg-wood-50"
      >
        <div className="mx-auto w-full max-w-6xl px-6 py-14 grid md:grid-cols-3 gap-6">
          <OfferCard
            id="consulting"
            eyebrow="Service 01"
            title="Consulting"
            bullets={[
              "Custom habitat plan + access strategy",
              "Stand/entry/exit mapped for wind & thermals",
              "Prioritized roadmap by effort & budget",
            ]}
            body="We walk your ground (or start remote), analyze access, pressure, food and bedding, then map a practical plan that hunts in the real world."
            cta={{ href: "/services/consulting", label: "Learn more" }}
          />

          <OfferCard
            id="implementation"
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
            id="land"
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

      {/* Quick Compare */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Compare your options
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left">
                <th className="compare-th">Offer</th>
                <th className="compare-th">Best for</th>
                <th className="compare-th">You get</th>
                <th className="compare-th">Typical timeline</th>
                <th className="compare-th">Investment</th>
                <th className="compare-th sr-only">CTA</th>
              </tr>
            </thead>
            <tbody>
              <CompareRow
                offer={
                  <a
                    href="#consulting"
                    className="link-underline font-semibold"
                  >
                    Consulting
                  </a>
                }
                bestFor="Owners wanting a proven plan and access strategy"
                deliverable="Property-specific plan, mapped stands & routes, sequenced roadmap"
                timeline="1–3 weeks after property walk"
                investment="Quoted by acreage / scope"
                cta={
                  <Link
                    href="/services/consulting"
                    className="btn btn-xs btn-primary"
                  >
                    Learn more
                  </Link>
                }
              />
              <CompareRow
                offer={
                  <a
                    href="#implementation"
                    className="link-underline font-semibold"
                  >
                    Habitat Implementation
                  </a>
                }
                bestFor="Owners who want it done right, in the right order"
                deliverable="Implementation crew + forestry oversight, progress check-ins"
                timeline="Phase-based; seasonal windows"
                investment="Quote after plan / site review"
                cta={
                  <Link
                    href="/services/implementation"
                    className="btn btn-xs btn-primary"
                  >
                    Learn more
                  </Link>
                }
              />
              <CompareRow
                offer={
                  <a href="#land" className="link-underline font-semibold">
                    Land for Sale
                  </a>
                }
                bestFor="Buyers wanting Hunt Day One properties"
                deliverable="Turnkey tract: access, stands, food, cover working"
                timeline="Immediate — properties as available"
                investment="See current listings"
                cta={
                  <Link
                    href="/properties"
                    className="btn btn-xs btn-primary"
                  >
                    Browse properties
                  </Link>
                }
              />
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn btn-outline">
            Not sure which path? Start with a free call
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          How it works
        </h2>
        <ol className="mt-8 grid md:grid-cols-4 gap-6 text-sm">
          <Step
            n="01"
            title="Discovery Call"
            body="Share your acreage, goals, timeline, and constraints."
          />
          <Step
            n="02"
            title="Property Walk / Remote Review"
            body="We analyze access, pressure, habitat diversity, and opportunity."
          />
          <Step
            n="03"
            title="Plan & Roadmap"
            body="Clear priorities by effort/budget, sequenced for compounding gains."
          />
          <Step
            n="04"
            title="Implementation / Follow-Up"
            body="We execute with partners or coach you through DIY phases."
          />
        </ol>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-outline">
            Start with a Free Call
          </Link>
        </div>
      </section>

      {/* Credibility / Why WLS */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 grid lg:grid-cols-2 gap-8 items-start">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Why hunters choose WLS</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>Plans designed to hold and hunt mature bucks.</li>
              <li>
                Access-first design: wind, thermals, undetectable entry/exit.
              </li>
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
                <dd className="font-semibold">
                  On-site or remote (maps &amp; video)
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500">Email</dt>
                <dd className="font-semibold">
                  info@whitetaillandsolutions.com
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500">YouTube</dt>
                <dd className="font-semibold">
                  <a
                    className="underline"
                    href="https://www.youtube.com/@GiantLegacy_WLS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @GiantLegacy_WLS
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">FAQs</h2>
        <div className="mt-6 space-y-3">
          <Faq q="Do you work outside Pennsylvania?">
            Yes — nearby states case-by-case. Remote consults are available
            anywhere with good map data and video/walkthroughs.
          </Faq>
          <Faq q="Can you coach me to DIY implementation?">
            Absolutely. We’ll sequence the work, check progress, and keep you
            focused on actions that improve huntability — not just looks.
          </Faq>
          <Faq q="How do you price consulting and implementation?">
            Pricing depends on acreage and scope. Start with a free call and
            we’ll outline options and a clear next step.
          </Faq>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-14 text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Tell us about your goals
        </h2>
        <p className="mt-2 text-neutral-600">
          We’ll map the fastest path to a hunt-ready property — without wasting
          seasons.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get a Free 15-Minute Strategy Call
          </Link>
          <Link href="/properties" className="btn btn-outline">
            See Land for Sale
          </Link>
        </div>
      </section>
    </main>
  );
}

/* --- components --- */
function OfferCard({
  id,
  eyebrow,
  title,
  bullets,
  body,
  cta,
}: {
  id: string;
  eyebrow: string;
  title: string;
  bullets: string[];
  body: string;
  cta: { href: string; label: string };
}) {
  return (
    <article id={id} className="card p-6 bg-white scroll-mt-28">
      <p className="text-xs font-semibold tracking-widest text-neutral-500">
        {eyebrow}
      </p>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="select-none">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-neutral-700">{body}</p>
      <div className="mt-6">
        <Link href={cta.href} className="btn btn-primary">
          {cta.label}
        </Link>
      </div>
    </article>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="card p-5 bg-white">
      <div className="text-xs font-semibold tracking-widest text-brand-700">
        {n}
      </div>
      <div className="mt-1 font-semibold">{title}</div>
      <div className="mt-2 text-neutral-700">{body}</div>
    </li>
  );
}

function CompareRow({
  offer,
  bestFor,
  deliverable,
  timeline,
  investment,
  cta,
}: {
  offer: React.ReactNode;
  bestFor: string;
  deliverable: string;
  timeline: string;
  investment: string;
  cta: React.ReactNode;
}) {
  return (
    <tr className="align-top">
      <td className="compare-td">{offer}</td>
      <td className="compare-td">{bestFor}</td>
      <td className="compare-td">{deliverable}</td>
      <td className="compare-td">{timeline}</td>
      <td className="compare-td">{investment}</td>
      <td className="compare-td text-right">{cta}</td>
    </tr>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <details className="rounded-xl border border-wood-200 bg-wood-50 p-4">
      <summary className="cursor-pointer select-none font-medium">{q}</summary>
      <div className="mt-2 text-sm text-neutral-700">{children}</div>
    </details>
  );
}

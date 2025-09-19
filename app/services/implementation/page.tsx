import Link from "next/link";

export const metadata = {
  title: "Habitat Implementation — Whitetail Land Solutions",
  description:
    "From plan to property: food plots, access, stand sites, timber work, and sequencing engineered for mature whitetails.",
};

export default function ImplementationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-12">
      {/* Kicker + Hero */}
      <p className="text-sm font-semibold tracking-widest text-neutral-500">
        SERVICES
      </p>
      <header className="mt-2 max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-800 sm:text-5xl">
          Habitat Implementation
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          We don’t just design big-buck paradises — we build them. From access
          and stand placement to timber improvements and food plots, our crews
          execute in the right order so your property hunts better every pass.
        </p>

        {/* Primary CTA row */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-5 py-3 text-white shadow-soft transition hover:bg-brand-800"
          >
            Get a Free 15-Minute Strategy Call
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-zinc-800 shadow-soft transition hover:bg-zinc-50"
          >
            See Land for Sale
          </Link>
        </div>
      </header>

      {/* Value props */}
      <section className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          {
            title: "Access-first design",
            body:
              "Undetectable entry/exit, wind & thermals drive every decision.",
          },
          {
            title: "Sequenced for compounding",
            body:
              "Phase the work so each pass improves huntability, not just looks.",
          },
          {
            title: "Forestry intelligence",
            body:
              "Consulting forester oversight to align habitat and timber value.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
          >
            <h3 className="text-base font-semibold text-brand-800">
              {item.title}
            </h3>
            <p className="mt-2 text-zinc-700">{item.body}</p>
          </div>
        ))}
      </section>

      {/* What we build */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-brand-800">What we build</h2>
        <p className="mt-2 max-w-3xl text-zinc-700">
          We implement the plan with precision and the right tools — and we keep
          you invisible while deer stay daylight-active.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Food plots & micro-plots", "From soil tests to shape/edge design."],
            ["Access roads & trails", "Quiet, wind-smart routes to stands."],
            ["Stand & blind sites", "Mapped for wind/thermals & clean entry/exit."],
            ["TSI & timber work", "Create structure, sunlight, and bedding."],
            ["Screens & edges", "Feathering, conifers, switchgrass, and more."],
            ["Water & pinches", "Low-impact features that focus movement."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-brand-800">{title}</h3>
              <p className="mt-2 text-zinc-700">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works (shared pattern) */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-brand-800">How it works</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01. Discovery Call", "Goals, acreage, timeline, constraints."],
            ["02. Walk / Remote Review", "Access, pressure, habitat diversity, opportunity."],
            ["03. Plan & Roadmap", "Priorities by effort/budget, sequenced phases."],
            ["04. Implementation", "Crew executes; progress check-ins & follow-up."],
          ].map(([title, body]) => (
            <li
              key={title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-brand-800">{title}</h3>
              <p className="mt-2 text-zinc-700">{body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-brand-700 px-5 py-3 text-white shadow-soft transition hover:bg-brand-800"
          >
            Start with a Free Call
          </Link>
        </div>
      </section>

      {/* Nudge to Consulting */}
      <section className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
        <h3 className="text-lg font-semibold text-brand-800">
          Don’t have a plan yet?
        </h3>
        <p className="mt-2 max-w-3xl text-zinc-700">
          Most projects start with{" "}
          <Link
            href="/consulting"
            className="font-semibold text-brand-700 underline underline-offset-2"
          >
            Consulting
          </Link>
          . We’ll map access, stands, and a sequenced roadmap so implementation
          compounds results — season after season.
        </p>
      </section>

      {/* Service area + Logistics */}
      <section className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          ["Primary Area", "Pennsylvania (and nearby)"],
          ["Engagements", "On-site or remote (maps & video)"],
          ["Email", "info@whitetaillandsolutions.com"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              {label}
            </p>
            <p className="mt-2 text-zinc-800">{value}</p>
          </div>
        ))}
      </section>

      {/* FAQs */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-brand-800">FAQs</h2>
        <div className="mt-6 space-y-4">
          {[
            [
              "How do you price implementation?",
              "Scope and acreage drive cost. After a plan/site review, we’ll provide a clear quote and phased options.",
            ],
            [
              "Can you coach me to DIY the work?",
              "Yes. We’ll sequence tasks, review progress, and keep you focused on changes that improve huntability.",
            ],
            [
              "Do you work outside Pennsylvania?",
              "Nearby states case-by-case. Remote support is available anywhere with good map data and video.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-soft"
            >
              <h3 className="text-base font-semibold text-brand-800">{q}</h3>
              <p className="mt-2 text-zinc-700">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 rounded-2xl bg-brand-800 p-6 text-white shadow-soft">
        <h2 className="text-2xl font-bold">
          Tell us about your property and goals.
        </h2>
        <p className="mt-2 max-w-3xl text-white/90">
          We’ll map the fastest path to a hunt-ready property — without wasting
          seasons.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-semibold text-brand-800 shadow-soft transition hover:bg-zinc-100"
          >
            Get a Free 15-Minute Strategy Call
          </Link>
          <Link
            href="/properties"
            className="inline-flex items-center rounded-xl border border-white/30 px-5 py-3 text-white transition hover:bg-white/10"
          >
            See Land for Sale
          </Link>
        </div>
      </section>
    </main>
  );
}

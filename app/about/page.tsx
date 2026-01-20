// app/about/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "../../components/CtaButton";

/** ---- LOCAL TILE IMAGES (prevents ReferenceError) ---- */
const TILE_IMAGES = {
  properties: "/images/property.jpg",
  consulting: "/images/consulting.png",
  implementation: "/images/implementation.jpg",
};

export const metadata = {
  title: "About — Whitetail Land Solutions",
  description:
    "We start with truth. Everything else follows. Learn who we are, what we do, and why the Blueprint for Giants® Property Audit leads every decision.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      {/* ================= HERO (Full-Width) ================= */}
      <section className="relative mb-16 overflow-hidden w-screen max-w-none mx-[calc(50%-50vw)]">
        <div className="relative h-[85vh] min-h-[500px] w-full">
          <Image
            src="/images/about.jpg"
            alt="About Whitetail Land Solutions"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_60%]"
          />
          {/* Contrast overlays for text legibility on any screen */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/55" />
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-end">
          <div className="pointer-events-auto mx-auto w-full max-w-6xl px-6 pb-10">
            <p className="text-sm font-semibold tracking-widest text-white/80">
              ABOUT US
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              We Start With Truth.
              <br className="hidden sm:block" /> Everything Else Follows.
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90">
              Whitetail Land Solutions exists to correct a fundamental failure in
              the whitetail land space: most landowners are sold tactics before
              they are given truth. We lead with clarity—so every decision is
              defensible, disciplined, and aligned with reality.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CtaButton href="/property-audit">Start With a Property Audit</CtaButton>
              <Link
                href="/why-it-matters"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/40 text-white hover:bg-white/10"
              >
                Why Audit First?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STATS (quick credibility) ================= */}
      <section className="mx-auto mb-16">
        <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 md:grid-cols-3">
          <Stat label="Engineered Acres" value="130+" note="Designed & improved across PA" />
          <Stat label="Years in the Woods" value="20+" note="Forestry + habitat + whitetail strategy" />
          <Stat label="Operating Rule" value="Truth First" note="No skipping steps. No scope drift." />
        </div>
      </section>

      {/* ================= PURPOSE / BELIEF + VALUES ================= */}
      <section className="mx-auto mb-16 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Built for Landowners Who Want Reality
          </h2>
          <p className="mt-3 text-zinc-700">
            Whitetail success is not governed by effort, equipment, or budget. It
            is governed by <span className="font-semibold">behavior, pressure, and landscape reality</span>.
          </p>
          <p className="mt-3 text-zinc-700">
            Every property has a <span className="font-semibold">hard ceiling</span>. That ceiling is defined by
            access constraints, surrounding pressure, terrain, fragmentation,
            recovery limitations, and how deer already use the landscape.
          </p>
          <p className="mt-3 text-zinc-700">
            You cannot raise that ceiling with enthusiasm or projects. You can
            only identify it, respect it, and design within it. Anything else is
            fiction.
          </p>

          <div className="mt-6 rounded-2xl bg-zinc-50 p-6">
            <h3 className="text-lg font-semibold">What We Refuse to Do</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>• Sell improvements before establishing truth.</li>
              <li>• Skip steps to “get to the fun part.”</li>
              <li>• Promise outcomes the land cannot support.</li>
              <li>• Drift scope or improvise terminology.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-brand-700 p-6 text-white md:p-8">
          <h3 className="text-lg font-semibold">Core Values</h3>
          <ul className="mt-3 space-y-2 text-white/90">
            <li>
              • <span className="font-semibold">Integrity</span>: We tell the truth, even when it costs us the work.
            </li>
            <li>
              • <span className="font-semibold">Stewardship</span>: The land is not a project; it is a responsibility.
            </li>
            <li>
              • <span className="font-semibold">Conservation</span>: Long-term health outweighs short-term success.
            </li>
            <li>
              • <span className="font-semibold">Discipline</span>: Pressure governance determines outcomes.
            </li>
            <li>
              • <span className="font-semibold">Service</span>: We treat clients as we would our own families.
            </li>
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-white/80">Where we work</p>
              <p className="text-base font-semibold">Pennsylvania</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-sm text-white/80">How we help</p>
              <p className="text-base font-semibold">Consult • Build • Sell</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY AUDIT LEADS (dominant positioning) ================= */}
      <section className="mb-16 rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200 md:p-10">
        <h2 className="text-2xl font-bold tracking-tight">Why We Lead With the Property Audit</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Most land services begin by recommending improvements. We begin by
          establishing truth. Our process is anchored by the{" "}
          <span className="font-semibold">Blueprint for Giants® Property Audit</span>
          —a disciplined, data-driven evaluation that defines what is possible
          before money, labor, or emotion are introduced.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-zinc-200">
            <h3 className="text-lg font-semibold">What the Audit Establishes</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>• The property’s true whitetail ceiling</li>
              <li>• Pressure and behavioral constraints</li>
              <li>• The gap between belief and reality</li>
              <li>• Whether further action is justified</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-zinc-200">
            <h3 className="text-lg font-semibold">What the Audit Is Not</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>• A design</li>
              <li>• A build plan</li>
              <li>• A tactics checklist</li>
              <li>• A sales document</li>
            </ul>
            <p className="mt-4 text-zinc-700">
              It is the foundation that makes every other decision either
              defensible—or indefensible.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CtaButton href="/property-audit">Start With a Property Audit</CtaButton>
          <Link
            href="/why-it-matters"
            className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-100"
          >
            Learn Why This Matters
          </Link>
        </div>
      </section>

      {/* ================= PROCESS (sequence) ================= */}
      <section className="mb-16 rounded-3xl bg-brand-700 p-6 text-white md:p-10">
        <h2 className="text-2xl font-bold tracking-tight">Our Process Is Sequential</h2>
        <p className="mt-3 max-w-3xl text-white/90">
          Whitetail Land Solutions operates on a strict sequence. We do not skip
          steps. That discipline protects the client, the land, and the outcome.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Step
            n="01"
            title="Understand"
            desc="Learn why pressure and behavior—not tactics—govern outcomes."
          />
          <Step
            n="02"
            title="Diagnose"
            desc="Establish truth through the Blueprint for Giants® Property Audit."
          />
          <Step
            n="03"
            title="Decide"
            desc="Determine whether further action is justified, and at what level."
          />
          <Step
            n="04"
            title="Execute"
            desc="Only then do design, implementation, or acquisition pathways exist."
          />
        </div>
      </section>

      {/* ================= TEAM (UNCHANGED from your current page) ================= */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight">Who We Are</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* David */}
          <article className="overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/team-david.jpg"
                alt="David Barrett — Strategy & Growth"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">David Barrett — Strategy &amp; Growth</h3>
              <p className="mt-2 text-zinc-700">
                Business and marketing operator focused on clarity, systems, and
                client results. David leads marketing, finance, and partnerships
                so the vision and execution stay aligned with your outcomes.
              </p>
            </div>
          </article>

          {/* Kent */}
          <article className="overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/team-kent.jpg"
                alt="Kent Shick — Habitat & Forestry"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Kent Shick — Habitat &amp; Forestry</h3>
              <p className="mt-2 text-zinc-700">
                Professional consulting forester and habitat designer with
                hands-on experience building high-odds properties across PA.
                Educated in wildlife &amp; habitat at Penn State and mentored by the
                woods. Kent leads field design and implementation.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ================= WHO IT'S FOR + MEASURE SUCCESS ================= */}
      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">Who This Is For</h2>
          <p className="mt-3 text-zinc-700">
            We work with landowners who care more about truth than reassurance.
            If you want guarantees, shortcuts, or validation—we are not a fit.
          </p>
          <ul className="mt-4 space-y-2 text-zinc-700">
            <li>• Serious hunters who value discipline over hype</li>
            <li>• Families building a legacy property</li>
            <li>• Investors who want clarity before capital is deployed</li>
            <li>• Owners willing to hear hard truth to get better outcomes</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">How We Measure Success</h2>
          <p className="mt-3 text-zinc-700">
            Success is not acres altered or projects completed. Success is when
            expectations align with reality, decisions are made with confidence,
            and the land improves over decades—not seasons.
          </p>
          <p className="mt-3 text-zinc-700">
            Our work is about protecting legacy—of the land, the hunt, and the
            people who come after.
          </p>
        </div>
      </section>

      {/* ================= CHOOSE YOUR PATH (kept structure; updated copy) ================= */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">
          Choose Your Path
        </h2>
        <p className="mt-2 text-zinc-700">
          Start with truth, then choose the path that matches your goals and the
          land’s reality.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Properties",
              href: "/properties",
              img: TILE_IMAGES.properties,
              badge: "Turnkey",
              desc: "Hunt-ready properties we own and sell—engineered to be hunted effectively from day one.",
            },
            {
              title: "Consulting",
              href: "/services/consulting",
              img: TILE_IMAGES.consulting,
              badge: "Blueprint",
              desc: "Clarity-first guidance and design work—only after truth is established through an Audit.",
            },
            {
              title: "Implementation",
              href: "/services/implementation",
              img: TILE_IMAGES.implementation,
              badge: "Done-For-You",
              desc: "Execution that follows the sequence—disciplined builds aligned with the land and the plan.",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              aria-label={`${item.title} — Learn more`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/65" />
              <div className="relative p-6 text-white">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="shrink-0 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-800">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-white/90">{item.desc}</p>
                <span className="mt-4 inline-flex items-center">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="mt-16 rounded-3xl bg-gradient-to-br from-zinc-50 to-white p-8 ring-1 ring-zinc-200">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              If your land matters, don’t start with a project.
            </h2>
            <p className="mt-3 text-zinc-700">
              Start with clarity. Begin with a Blueprint for Giants® Property Audit
              and build from a foundation of truth—no guesswork, no shortcuts.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <CtaButton href="/property-audit">Start With a Property Audit</CtaButton>
            <Link
              href="/contact"
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl px-5 py-3 font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-100"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/** =============== Local UI Bits =============== */
function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5">
      <p className="text-sm tracking-wide text-zinc-600">{label}</p>
      <p className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900">
        {value}
      </p>
      {note ? <p className="mt-1 text-sm text-zinc-600">{note}</p> : null}
    </div>
  );
}

function Step({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-6">
      <p className="text-xs font-semibold tracking-widest text-white/70">{n}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/90">{desc}</p>
    </div>
  );
}

// app/about/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import CtaButton from "../../components/CtaButton";

/** ---- LOCAL TILE IMAGES (prevents ReferenceError) ----
 *  Kept for compatibility with your existing pattern, even if unused on this page.
 */
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
              Whitetail Land Solutions exists to correct a fundamental failure
              in the whitetail land space: landowners are often sold projects
              before they’re shown what’s true. We lead with clarity—so every
              decision is disciplined, defensible, and aligned with the
              realities of deer behavior, pressure, and landscape structure.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <CtaButton href="/property-audit">
                Start With a Property Audit
              </CtaButton>
              <Link
                href="/why-it-matters"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-white/40 text-white hover:bg-white/10"
              >
                See How the Audit Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PURPOSE / BELIEF + VALUES ================= */}
      <section className="mb-16 w-screen max-w-none mx-[calc(50%-50vw)] bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* LEFT: BELIEF */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Built for Landowners Who Want Reality
              </h2>

              <p className="mt-3 text-zinc-700">
                Whitetail outcomes aren’t governed by effort, gear, or budget.
                They’re governed by{" "}
                <span className="font-semibold">
                  behavior, pressure, access, and landscape structure
                </span>
                .
              </p>

              <p className="mt-4 text-zinc-700">
                Every property has a ceiling. That ceiling is defined by
                surrounding pressure context, security distribution, access
                constraints, terrain and fragmentation, recovery limitations,
                and how deer already use the larger neighborhood.
              </p>

              <p className="mt-4 text-zinc-700">
                You don’t raise the ceiling with enthusiasm or random projects.
                You identify it, respect it, and design within it—so your time,
                money, and effort create real leverage instead of expensive
                noise.
              </p>

              <div className="mt-6 rounded-2xl bg-white p-6 shadow-soft ring-1 ring-zinc-200">
                <h3 className="text-lg font-semibold">What We Refuse to Do</h3>
                <ul className="mt-3 space-y-2 text-zinc-700">
                  <li>• Recommend improvements before establishing truth.</li>
                  <li>• Skip steps to “get to the fun part.”</li>
                  <li>• Promise outcomes the structure can’t support.</li>
                  <li>• Drift scope, improvise terms, or move goalposts.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT: VALUES (SAFE COLORS — ALWAYS VISIBLE) */}
            <div className="rounded-2xl bg-zinc-900 p-6 text-white md:p-8">
              <h3 className="text-lg font-semibold">Core Values</h3>

              <ul className="mt-3 space-y-3 text-white/90">
                <li>
                  • <span className="font-semibold">Integrity:</span> We tell
                  the truth—even when it costs us the work.
                </li>
                <li>
                  • <span className="font-semibold">Stewardship:</span> The land
                  is not a project; it is a responsibility.
                </li>
                <li>
                  • <span className="font-semibold">Conservation:</span>{" "}
                  Long-term health outweighs short-term success.
                </li>
                <li>
                  • <span className="font-semibold">Discipline:</span> Pressure
                  governance determines outcomes.
                </li>
                <li>
                  • <span className="font-semibold">Service:</span> We treat
                  clients as we would our own families.
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
          </div>

          {/* VALUES → BEHAVIOR (small, high-trust add) */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ValueProof
              title="Truth before tactics"
              desc="We don’t lead with food plots, hinge-cuts, or stand sites. We lead with what the property can truly support."
            />
            <ValueProof
              title="Pressure-first thinking"
              desc="We treat hunting pressure like a governing variable—because it is. Bad pressure ruins good habitat."
            />
            <ValueProof
              title="Legacy-aligned decisions"
              desc="We optimize for decades, not weekends—so your land improves with time instead of getting “burned out.”"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY AUDIT LEADS (dominant positioning) ================= */}
      <section className="mb-16 rounded-3xl bg-zinc-50 p-6 ring-1 ring-zinc-200 md:p-10">
        <h2 className="text-2xl font-bold tracking-tight">
          Why We Lead With the Property Audit
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Most land services begin by recommending improvements. We begin by
          establishing truth. Our process is anchored by the{" "}
          <span className="font-semibold">
            Blueprint for Giants® Property Audit
          </span>
          —a disciplined evaluation that defines what’s realistic{" "}
          <span className="font-semibold">before</span> money, labor, or emotion
          are introduced.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-zinc-200">
            <h3 className="text-lg font-semibold">What the Audit Establishes</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>• Structural ceiling and realistic potential</li>
              <li>• Pressure and behavioral constraints</li>
              <li>• Access and recovery limitations</li>
              <li>• What is worth doing—and what is not</li>
            </ul>
            <p className="mt-4 text-zinc-700">
              The goal is not to “sell you a plan.” The goal is to protect your
              capital and prevent expensive missteps.
            </p>
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
              It’s the foundation that makes every later decision either
              defensible—or indefensible.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CtaButton href="/property-audit">
            Start With a Property Audit
          </CtaButton>
          <Link
            href="/why-it-matters"
            className="inline-flex items-center rounded-xl px-5 py-3 font-semibold ring-1 ring-zinc-300 text-zinc-800 hover:bg-zinc-100"
          >
            Learn Why This Matters
          </Link>
        </div>
      </section>

      {/* ================= PROCESS (sequence) ================= */}
      <section className="mb-16 rounded-3xl bg-zinc-900 p-6 text-white md:p-10">
        <h2 className="text-2xl font-bold tracking-tight">
          Our Process Is Sequential
        </h2>
        <p className="mt-3 max-w-3xl text-white/90">
          Whitetail Land Solutions operates on a strict sequence. We don’t skip
          steps. That discipline protects the client, the land, and the outcome.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Step
            n="01"
            title="Understand"
            desc="Learn why behavior and pressure—not hype—govern outcomes."
          />
          <Step
            n="02"
            title="Diagnose"
            desc="Establish truth through the Blueprint for Giants® Property Audit."
          />
          <Step
            n="03"
            title="Decide"
            desc="Choose the right pathway based on ceiling, constraints, and goals."
          />
          <Step
            n="04"
            title="Execute"
            desc="Only then do design, implementation, or acquisition moves make sense."
          />
        </div>

        {/* Simple “what happens next” ladder (no pricing, no stories) */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProcessCard
            title="Audit → System Plan"
            desc="When the audit shows real leverage, we translate truth into a practical system plan with priority sequencing."
          />
          <ProcessCard
            title="Audit → Execution"
            desc="When execution is justified, we build with discipline—protecting security, access, and recovery so the system holds."
          />
          <ProcessCard
            title="Audit → Acquisition"
            desc="When the best move is to buy better structure, we help you avoid expensive properties with low ceilings."
          />
        </div>
      </section>

      {/* ================= TEAM ================= */}
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
              <h3 className="text-lg font-semibold">
                David Barrett — Strategy &amp; Growth
              </h3>
              <p className="mt-2 text-zinc-700">
                Business and marketing operator focused on clarity, systems, and
                client outcomes. David leads marketing, finance, and partnerships
                so the vision, messaging, and execution stay aligned with what
                your land can actually support.
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
              <h3 className="text-lg font-semibold">
                Kent Shick — Habitat &amp; Forestry
              </h3>
              <p className="mt-2 text-zinc-700">
                Professional consulting forester and habitat designer with
                hands-on experience building high-odds properties across PA.
                Educated in wildlife &amp; habitat at Penn State and mentored by
                the woods. Kent leads field design and implementation.
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
            If you want guarantees, shortcuts, or validation—we’re not a fit.
          </p>

          <div className="mt-5 space-y-4">
            <Persona
              title="Legacy Landowners"
              desc="Families building a property to be hunted, stewarded, and handed down—with decisions that hold up over time."
            />
            <Persona
              title="Serious Hunters"
              desc="Owners who value discipline over hype and want a system that performs without burning out the property."
            />
            <Persona
              title="Strategic Investors"
              desc="Buyers who want clarity before capital is deployed—so they don’t pay for acres that can’t produce outcomes."
            />
          </div>

          <div className="mt-6 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200">
            <p className="text-sm font-semibold text-zinc-900">
              Fit filter (simple truth)
            </p>
            <p className="mt-2 text-sm text-zinc-700">
              If you’re willing to hear hard truth, we can help. If you need a
              guarantee, a shortcut, or someone to tell you what you want to
              hear—save your time.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <h2 className="text-2xl font-bold tracking-tight">
            How We Measure Success
          </h2>
          <p className="mt-3 text-zinc-700">
            Success is not acres altered or projects completed. Success is when
            expectations align with reality, decisions are made with confidence,
            and the land improves over decades—not seasons.
          </p>
          <p className="mt-3 text-zinc-700">
            Our work is about protecting legacy—of the land, the hunt, and the
            people who come after.
          </p>

          <div className="mt-6 grid gap-4">
            <MetricCard
              title="Decision confidence"
              desc="You know what’s realistic, what’s not, and why."
            />
            <MetricCard
              title="Capital protection"
              desc="You avoid expensive projects that don’t move outcomes."
            />
            <MetricCard
              title="System durability"
              desc="Security, access, and recovery are protected—so the property holds up year after year."
            />
          </div>
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
              Start with clarity. Begin with a Blueprint for Giants® Property
              Audit and build from a foundation of truth—no guesswork, no
              shortcuts.
            </p>
          </div>
          <div className="flex gap-3 md:justify-end">
            <CtaButton href="/property-audit">
              Start With a Property Audit
            </CtaButton>
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
    <div className="rounded-2xl bg-white/10 p-6">
      <p className="text-xs font-semibold tracking-widest text-white/70">{n}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/90">{desc}</p>
    </div>
  );
}

function ValueProof({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-zinc-200">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm text-zinc-700">{desc}</p>
    </div>
  );
}

function ProcessCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
      <p className="text-sm font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-white/90">{desc}</p>
    </div>
  );
}

function Persona({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-zinc-200">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm text-zinc-700">{desc}</p>
    </div>
  );
}

function MetricCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200">
      <p className="text-sm font-semibold text-zinc-900">{title}</p>
      <p className="mt-2 text-sm text-zinc-700">{desc}</p>
    </div>
  );
}

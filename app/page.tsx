export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f120d] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
            Whitetail Land Solutions
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Stop guessing why your hunting property underperforms.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300">
            We diagnose, design, and improve whitetail properties for hunters who want consistent mature buck opportunity — not random encounters, wasted sits, and pressure-damaged seasons.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/property-audit"
              className="rounded-xl bg-[#c9a45c] px-7 py-4 text-center text-base font-bold text-[#0f120d] transition hover:bg-[#e0bd73]"
            >
              Start With a Property Audit
            </a>

            <a
              href="/apply"
              className="rounded-xl border border-zinc-600 px-7 py-4 text-center text-base font-bold text-white transition hover:border-[#c9a45c]"
            >
              Apply to Work With Us
            </a>
          </div>

          <p className="mt-6 max-w-2xl text-sm text-zinc-400">
            The BFG Property Audit is the first step in the Blueprint for Giants process. It identifies what is really limiting your property before you spend more money on stands, food plots, habitat work, or access changes.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#181c14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
              The Real Problem
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Most properties do not fail because they lack deer.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-300">
              They fail because the system is broken. Poor access. Too much pressure. Bad stand placement. Unprotected bedding. Food in the wrong places. Movement that never reaches a killable interception window in daylight.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              More habitat work does not fix a pressure problem. More sits do not fix a broken access route. More cameras do not fix a property that teaches mature bucks when and where humans move.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "You see mature bucks at night but rarely in daylight.",
              "You have food, cover, and sign — but still lack repeatable opportunity.",
              "You are unsure whether to improve habitat, change access, move stands, or hunt less.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-700 bg-[#10130e] p-6">
                <p className="text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTRINE */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
                Our Doctrine
              </p>

              <h2 className="text-4xl font-bold md:text-5xl">
                Pressure governs everything.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Mature bucks do not tolerate pressure the way younger deer do. Once a property crosses its pressure threshold, daylight movement collapses. That is why we design properties around a simple truth:
              </p>

              <p className="mt-6 rounded-2xl border border-[#c9a45c]/40 bg-[#c9a45c]/10 p-6 text-2xl font-bold text-[#f0d28a]">
                The property must be engineered before it is hunted harder.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-[#181c14] p-8">
              <h3 className="text-2xl font-bold">The Mature Buck System</h3>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-lg font-bold text-[#c9a45c]">1. Security</p>
                  <p className="mt-2 text-zinc-300">
                    Bedding, sanctuary, cover, and low-intrusion design that allow mature bucks to feel safe.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-[#c9a45c]">2. Movement</p>
                  <p className="mt-2 text-zinc-300">
                    Corridors, food, terrain, edges, and transitions that influence where deer travel.
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-[#c9a45c]">3. Interception</p>
                  <p className="mt-2 text-zinc-300">
                    Stand, blind, scrape, camera, wind, thermal, and access strategy that creates killable opportunity.
                  </p>
                </div>
              </div>

              <p className="mt-8 border-t border-zinc-700 pt-6 text-zinc-300">
                Pressure Governance sits over all three. Without it, the system eventually fails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#181c14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
            The Blueprint for Giants Process
          </p>

          <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
            One process. Three possible steps.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            We do not start by selling you habitat work. We start by diagnosing the property. Then, if the audit proves a deeper plan is justified, we build the system and help execute it.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#c9a45c] bg-[#10130e] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                Step 1
              </p>
              <h3 className="mt-4 text-2xl font-bold">BFG Property Audit</h3>
              <p className="mt-4 text-zinc-300">
                A diagnostic review of your property’s structure, pressure, access, movement, bedding, food, stand setup, and mature buck opportunity.
              </p>
              <p className="mt-5 font-semibold text-white">
                This is where every serious client should begin.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-[#10130e] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                Step 2
              </p>
              <h3 className="mt-4 text-2xl font-bold">BFG System Plan</h3>
              <p className="mt-4 text-zinc-300">
                A full property blueprint with stand locations, access strategy, sanctuary design, camera placement, scrape strategy, food/habitat priorities, and hunting rules.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-700 bg-[#10130e] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c9a45c]">
                Step 3
              </p>
              <h3 className="mt-4 text-2xl font-bold">Execution Support</h3>
              <p className="mt-4 text-zinc-300">
                Optional implementation help for stand placement, rope scrapes, cameras, access routes, habitat work, and property improvements.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/property-audit"
              className="inline-block rounded-xl bg-[#c9a45c] px-7 py-4 text-base font-bold text-[#0f120d] transition hover:bg-[#e0bd73]"
            >
              See the Property Audit
            </a>
          </div>
        </div>
      </section>

      {/* WHAT WE FIX */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
            What We Actually Solve
          </p>

          <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
            We do more than habitat. We design the whole hunting system.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              "Pressure governance and sit discipline",
              "Access routes that do not educate deer",
              "Stand and blind placement",
              "Bedding and sanctuary structure",
              "Food plot and destination food strategy",
              "Movement corridors and terrain-based travel",
              "Mock scrape, rope scrape, and camera strategy",
              "Wind, thermal, and entry/exit rules",
              "Habitat improvement priorities",
              "Property-specific hunting operations",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-700 bg-[#181c14] p-5">
                <p className="font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT IS FOR */}
      <section className="bg-[#181c14] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold md:text-5xl">
                This is for serious landowners.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-300">
                If you just want generic advice, YouTube can give you that. If you want your specific property diagnosed and engineered around mature buck behavior, pressure control, and repeatable opportunity, that is what we do.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "You own or control hunting land.",
                "You care about mature buck opportunity, not just deer activity.",
                "You are willing to change how the property is accessed, hunted, and managed.",
                "You want a clear plan instead of scattered improvements.",
                "You value long-term legacy over short-term pressure.",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-zinc-700 bg-[#10130e] p-5">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#c9a45c]/50 bg-[#181c14] p-10 text-center md:p-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#c9a45c]">
            Start Here
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Before you improve the property, diagnose the system.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            The BFG Property Audit shows you what is actually limiting your mature buck opportunity and whether your property needs a full system plan, execution support, or simply better hunting discipline.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/property-audit"
              className="rounded-xl bg-[#c9a45c] px-8 py-4 text-base font-bold text-[#0f120d] transition hover:bg-[#e0bd73]"
            >
              Start With a Property Audit
            </a>

            <a
              href="/apply"
              className="rounded-xl border border-zinc-600 px-8 py-4 text-base font-bold text-white transition hover:border-[#c9a45c]"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

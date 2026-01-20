// app/property-audit/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Property Audit | Whitetail Land Solutions",
  description:
    "Start with a truth-first diagnostic. The Property Audit reveals what your land can realistically produce, what’s holding it back, and exactly what to do next—without tactics or guesswork.",
};

function ButtonLink({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-600"
      : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 focus:ring-white";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-zinc-700">{children}</div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-14">
      <div className="mx-auto w-full max-w-6xl px-6">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-wider text-emerald-700 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-700">
            {subtitle}
          </p>
        ) : null}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Divider() {
  return <div className="mx-auto w-full max-w-6xl px-6"><div className="h-px w-full bg-black/10" /></div>;
}

export default function PropertyAuditPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-emerald-500 blur-3xl" />
          <div className="absolute -bottom-28 left-1/3 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold tracking-wider text-emerald-300 uppercase">
            Start Here
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The Property Audit
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
            The Property Audit is Whitetail Land Solutions’{" "}
            <span className="font-semibold text-white">truth-first diagnostic</span>.
            It reveals what your land can realistically produce, what’s preventing it,
            and what the next right move is—{" "}
            <span className="font-semibold text-white">without tactics, hype, or guessing</span>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="primary">
              Start with a Property Audit
            </ButtonLink>
            <ButtonLink href="#what-you-get" variant="secondary">
              See deliverables
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Clarity</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                Know what’s true about your property’s potential—and what isn’t.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Discipline</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                Pressure and behavior govern outcomes. We evaluate what you can control.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm font-semibold text-white">Direction</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                Leave with a clear path forward—whether you hire us or not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK DEFINITION */}
      <Section
        eyebrow="What it is"
        title="A diagnostic—not design, not implementation."
        subtitle="If you’ve been stuck in opinions, tactics, and trail-cam noise, this is the reset. We establish truth first so every decision downstream is clean."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Definition">
            The Property Audit is a structured evaluation of{" "}
            <span className="font-semibold">ceiling</span>,{" "}
            <span className="font-semibold">pressure</span>, and{" "}
            <span className="font-semibold">execution reality</span>—to determine what
            your land can produce and what’s preventing it.
          </Card>

          <Card title="What it does">
            It identifies the <span className="font-semibold">real constraints</span>,
            eliminates false options, and gives you{" "}
            <span className="font-semibold">decision-grade clarity</span>.
          </Card>

          <Card title="What it does not do">
            It does not prescribe food plot recipes, stand locations, or step-by-step
            habitat projects. Tactics come later—only after truth is acknowledged.
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="text-sm font-semibold text-emerald-900">
            The promise:
          </p>
          <p className="mt-2 text-sm leading-relaxed text-emerald-900/90">
            You will walk away knowing whether your property is capable of producing
            the hunts you want—what must change to reach that outcome—and what the
            smartest next step is.
          </p>
        </div>
      </Section>

      <Divider />

      {/* WHO IT'S FOR */}
      <Section
        eyebrow="Fit"
        title="Who it’s for (and who it’s not)"
        subtitle="This is for serious owners who want objective truth and are willing to align behavior with results."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-zinc-900">It’s for you if…</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
              <li>
                • You want to hunt mature bucks and you’re done guessing why results
                don’t match effort.
              </li>
              <li>
                • You want clarity on what your land can realistically produce{" "}
                <span className="font-semibold">given its constraints</span>.
              </li>
              <li>
                • You’re open to the possibility that{" "}
                <span className="font-semibold">pressure and access</span> are the
                limiting factors, not “more habitat work.”
              </li>
              <li>
                • You want a clean, disciplined path forward—even if you don’t hire us
                for the next phase.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-zinc-900">It’s not for you if…</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
              <li>• You only want stand locations, food plot layouts, or quick tactics.</li>
              <li>
                • You want us to “confirm what you already believe” rather than evaluate
                what’s true.
              </li>
              <li>
                • You aren’t willing to change pressure behavior (access, intrusion,
                frequency, discipline).
              </li>
              <li>
                • You’re looking for a free opinion or a casual consultation call.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-zinc-950 p-7 text-white">
          <h3 className="text-base font-semibold">The standard</h3>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-zinc-200">
            We don’t build plans on assumptions. The Audit establishes the operating
            truth of your property—so any investment of time, money, or effort has a
            real chance of paying off.
          </p>
          <div className="mt-5">
            <ButtonLink href="/contact" variant="primary">
              Book the Property Audit
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Divider />

      {/* DELIVERABLES */}
      <Section
        eyebrow="What you get"
        title="Deliverables that create clarity (not tactics)"
        subtitle="You’re not paying for opinions. You’re paying for a disciplined diagnostic that forces truth, eliminates confusion, and clarifies next steps."
      >
        <div id="what-you-get" className="grid gap-6 lg:grid-cols-3">
          <Card title="Executive Truth Summary">
            A clear, concise summary of what the property can produce, what’s holding it
            back, and what must change to close the gap.
          </Card>

          <Card title="Property Ceiling & Constraints">
            A sober assessment of the land’s inherent limitations and opportunities—so
            expectations align with reality.
          </Card>

          <Card title="Pressure & Intrusion Findings">
            A documented view of access, human intrusion vectors, parcel effects, edge
            exposure, and recovery limitations—observed and organized.
          </Card>

          <Card title="Performance Gap Diagnosis">
            The specific mismatch between ceiling and current outcome drivers—what’s
            preventing the property from performing.
          </Card>

          <Card title="False Options Eliminated">
            The common “easy answers” that feel good but don’t move results—removed from
            your decision-making.
          </Card>

          <Card title="Next-Step Clarity">
            Clear direction on what the next right move is (and what is premature). You
            keep control of how you proceed.
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-zinc-50 p-6">
          <h3 className="text-base font-semibold text-zinc-900">
            Outcomes you should expect
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white p-5 ring-1 ring-black/10">
              <p className="text-sm font-semibold text-zinc-900">Confidence</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                You’ll know what matters most—so you stop wasting seasons.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 ring-1 ring-black/10">
              <p className="text-sm font-semibold text-zinc-900">Alignment</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                Your goals, expectations, and investment decisions align to reality.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 ring-1 ring-black/10">
              <p className="text-sm font-semibold text-zinc-900">Discipline</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                You understand the behavioral rules that govern mature buck outcomes.
              </p>
            </div>
            <div className="rounded-xl bg-white p-5 ring-1 ring-black/10">
              <p className="text-sm font-semibold text-zinc-900">Clarity</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                You leave with decision-grade truth—no confusion, no hype.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* HOW IT WORKS */}
      <Section
        eyebrow="How it works"
        title="A disciplined process, conducted with rigor"
        subtitle="We follow a consistent, repeatable diagnostic method. Truth precedes design. Always."
      >
        <div className="grid gap-6 lg:grid-cols-4">
          <Card title="1) Intake & Context">
            We clarify goals, constraints, seasonality, access realities, and past outcomes—so the diagnostic stays grounded.
          </Card>
          <Card title="2) Evidence Review">
            We evaluate maps, terrain, cover, access routes, edges, surrounding pressure influences, and observable constraints.
          </Card>
          <Card title="3) Truth Synthesis">
            We reconcile ceiling vs current outcomes and document pressure variables and limiting behaviors with zero fluff.
          </Card>
          <Card title="4) Delivery & Next-Step Clarity">
            You receive your deliverables and a clear explanation of what’s true, what’s false, and what the next move is.
          </Card>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-zinc-900">How the Audit is conducted</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            Most audits are conducted remotely using high-quality mapping and your property context.
            When appropriate, an on-site component can be added, but the core value is the diagnostic discipline—
            not time spent walking around.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            The goal is not to “do more work.” The goal is to identify what work matters, what is premature,
            and what behavior must change for results to follow.
          </p>
        </div>
      </Section>

      <Divider />

      {/* AUTHORITY / RIGOR */}
      <Section
        eyebrow="Why this is different"
        title="Authority & rigor: truth-first, zero scope drift"
        subtitle="This is built to protect outcomes and protect you from wasted seasons. It’s also built to prevent the most common failure: skipping truth and rushing into tactics."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Truth precedes design">
            We do not prescribe until truth is established and acknowledged. That’s how we avoid building a plan on illusions.
          </Card>
          <Card title="Behavior governs outcome">
            Pressure discipline, access discipline, and recovery limitations govern mature buck outcomes more than “more effort.”
          </Card>
          <Card title="Consistency matters">
            Our audit is delivered using a consistent, repeatable framework—so you get a high-integrity diagnostic every time.
          </Card>
        </div>

        <div className="mt-10 rounded-2xl bg-emerald-600 p-8 text-white">
          <h3 className="text-xl font-bold tracking-tight">Ready to start?</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/90">
            If you’re serious about building a property that produces mature buck encounters with discipline, the
            Property Audit is the first step. Book the audit and we’ll take you from uncertainty to truth.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Start with a Property Audit
            </ButtonLink>
            <Link
              href="#faq"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
            >
              Read FAQ
            </Link>
          </div>
        </div>
      </Section>

      <Divider />

      {/* FAQ */}
      <Section
        eyebrow="FAQ"
        title="Common questions"
        subtitle="If you’re on the fence, these answers should make the decision simple."
      >
        <div id="faq" className="grid gap-6 lg:grid-cols-2">
          <Card title="Will I get stand locations or a hunting plan?">
            No. The Property Audit is a diagnostic. It establishes truth, constraints, and the real drivers behind your results.
            Tactical prescriptions come later—after truth is acknowledged.
          </Card>

          <Card title="What if I’ve already done habitat work?">
            Great. The Audit helps determine whether those efforts align with the real limiting factors (often pressure and access),
            and what the property can realistically produce given its constraints.
          </Card>

          <Card title="Is this worth it if I’m not sure I’ll hire WLS after?">
            Yes. The deliverables create decision-grade clarity you keep. Many clients start with the Audit simply to stop wasting
            seasons and money.
          </Card>

          <Card title="How quickly can I get started?">
            Book the Property Audit and we’ll respond with next steps and the intake process. We move fast—without cutting corners.
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-black/10 bg-zinc-50 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-zinc-900">
              Make the decisive first move.
            </p>
            <p className="mt-1 text-sm text-zinc-700">
              Interest → action starts with the Property Audit.
            </p>
          </div>
          <ButtonLink href="/contact" variant="primary">
            Book the Property Audit
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}

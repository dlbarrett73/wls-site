// app/property-audit/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blueprint for Giants® Property Audit | Whitetail Land Solutions",
  description:
    "Stop guessing. Start knowing. A pressure-first diagnostic that reveals what your property can truly produce—and why.",
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-zinc-900">{title}</h2>
        <div className="mt-6 text-lg text-zinc-700 leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function PropertyAuditPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-zinc-950 text-white py-20">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-5xl font-bold leading-tight">
            Stop Guessing. Start Knowing.
          </h1>

          <p className="mt-6 text-xl text-zinc-300">
            If your property isn’t producing consistent daylight opportunities at mature bucks,
            it’s not a deer problem—it’s a system failure.
          </p>

          <p className="mt-6 text-zinc-400 max-w-3xl">
            Most landowners spend years improving habitat, adding food, and hanging stands—yet still experience inconsistent or declining results.
            <br /><br />
            Not because they aren’t working hard.
            <br />
            Because they’re working without understanding how their property actually functions under pressure.
          </p>

          <div className="mt-10">
            <ButtonLink href="/capture/property-audit">
              Apply for a Property Audit
            </ButtonLink>
            <p className="mt-3 text-sm text-zinc-400">
              Limited monthly availability. Serious landowners only.
            </p>
          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <Section title="Why Most Properties Underperform">
        Most properties fail for one reason:
        <br /><br />
        <strong>Pressure is mismanaged—and the system breaks because of it.</strong>
        <br /><br />
        Not habitat. Not genetics. Not “not enough deer.”
        <br /><br />
        Pressure.
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Entry and exit routes contaminate movement</li>
          <li>“Good spots” get overhunted</li>
          <li>Daylight movement disappears</li>
        </ul>
        <br />
        If you don’t understand how pressure interacts with your property’s structure, you are guessing—no matter how experienced you are.
      </Section>

      {/* WHAT THIS IS */}
      <Section title="What the Property Audit Actually Does">
        This is not a consultation.
        <br />
        This is not a habitat walk-through.
        <br />
        This is not generic advice.
        <br /><br />
        This is a <strong>truth-first diagnostic of your property as a system.</strong>
        <br /><br />
        We identify:
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Your property’s true structural ceiling</li>
          <li>Your current functional floor under pressure</li>
          <li>The gap between potential and reality</li>
          <li>The primary limiting factor</li>
        </ul>
        <br />
        <strong>
          You will leave knowing exactly what your property can produce—and why it isn’t right now.
        </strong>
      </Section>

      {/* DIFFERENTIATOR */}
      <Section title="Built on Pressure Governance">
        Most land strategies focus on food, habitat, and stand placement.
        <br /><br />
        We focus on what actually determines success:
        <br /><br />
        <strong>Pressure Governance</strong>
        <br /><br />
        Because:
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Pressure controls movement</li>
          <li>Movement creates opportunity</li>
          <li>Opportunity determines success</li>
        </ul>
        <br />
        If pressure is mismanaged, everything else collapses.
        <br /><br />
        <strong>We don’t design what your system can’t support.</strong>
      </Section>

      {/* WHAT YOU GET */}
      <Section title="What You Walk Away With">
        <ul className="space-y-2 list-disc pl-6">
          <li>Executive Truth Summary</li>
          <li>Structural Ceiling Assessment</li>
          <li>Pressure Risk Analysis</li>
          <li>Movement & Corridor Evaluation</li>
          <li>Primary Limiting Factor Diagnosis</li>
          <li>Clear decision path: what to do, not do, ignore</li>
        </ul>
        <br />
        You will know exactly where you stand—and what it will take to improve it.
      </Section>

      {/* INVESTMENT */}
      <Section title="Investment">
        <strong>Blueprint for Giants® Property Audit</strong>
        <br />
        $2,500
        <br /><br />
        100% of your audit is credited toward a System Plan if you proceed within 30 days.
        <br /><br />
        <div className="border border-zinc-300 p-6 rounded-xl bg-zinc-50">
          <strong>Audit Confidence Guarantee</strong>
          <br /><br />
          If we cannot clearly identify what is limiting your property and provide a defensible path forward, you don’t pay.
        </div>
      </Section>

      {/* FILTER */}
      <Section title="This Is Not for Everyone">
        This is not for:
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Casual hunters looking for tips</li>
          <li>Landowners unwilling to change</li>
          <li>Anyone seeking validation instead of truth</li>
        </ul>
        <br />
        This is for serious landowners who want predictable, repeatable results.
      </Section>

      {/* SCARCITY */}
      <Section title="Limited Availability">
        We take on a limited number of audits each month to maintain quality.
        <br /><br />
        Most clients are:
        <ul className="mt-4 space-y-2 list-disc pl-6">
          <li>Long-term landowners</li>
          <li>Serious about results</li>
          <li>Committed to disciplined systems</li>
        </ul>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-zinc-950 text-white py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-bold">
            Get the Truth About Your Property
          </h2>

          <div className="mt-8">
            <ButtonLink href="/capture/property-audit">
              Apply for a Property Audit
            </ButtonLink>
          </div>

          <p className="mt-4 text-zinc-400">
            Stop wasting time, money, and opportunities on guesswork.
          </p>

        </div>
      </section>

    </main>
  );
}

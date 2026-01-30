// app/execution/page.tsx
//
// WLS Execution — optional implementation support after a Property Audit + System Plan.
// Public-facing language: outcome-first, hunter-native, system-protected.
// Internal doctrine is preserved in meaning, not jargon.

import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Execution | Whitetail Land Solutions",
  description:
    "Optional implementation support after your Property Audit and System Plan. We can install the system with our field crew—or guide an owner-led build—so mature bucks feel safe living on your property and move in daylight.",
};

function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : variant === "secondary"
      ? "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50"
      : "bg-transparent text-slate-900 hover:bg-slate-50";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span className="ml-2 text-lg leading-none">→</span>
    </Link>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {eyebrow && <div className="mb-4">{eyebrow}</div>}
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 ring-1 ring-slate-200">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <div className="mt-3 text-slate-600">{children}</div>
        </div>
      </div>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white">
        ✓
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function XItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-900 ring-1 ring-slate-200">
        ✕
      </span>
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function Divider() {
  return <div className="my-10 h-px w-full bg-slate-200" />;
}

export default function ExecutionPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge>Optional</Badge>
              <Badge>After Audit + System Plan</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Execution that installs the system{" "}
              <span className="text-slate-200">
                without educating deer you’re there.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              Execution is where plans succeed or fail. The goal isn’t to “do
              projects.” The goal is to build access, security, and habitat in a
              way that lets mature bucks feel safe living on the property—and
              move naturally in daylight.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/capture/execution" variant="primary">
                Apply for Execution
              </ButtonLink>
              <ButtonLink href="#scope-options" variant="secondary">
                Scope &amp; options
              </ButtonLink>
            </div>

            <p className="mt-4 text-sm text-slate-300">
              Execution requires a completed{" "}
              <Link className="font-semibold underline" href="/system-plan">
                System Plan
              </Link>{" "}
              built from a{" "}
              <Link className="font-semibold underline" href="/property-audit">
                Property Audit
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS */}
      <Section
        eyebrow={<Badge>What Execution is</Badge>}
        title="Implementation designed to protect daylight movement."
        subtitle="Execution is about doing the right work, in the right order, without teaching deer to avoid your property during shooting light."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Sequence-first execution">
            We follow a clear build order so improvements don’t backfire. Access
            and security come first. Habitat comes second. Everything is done
            with the season—and deer behavior—in mind.
          </Card>

          <Card title="Access & intrusion control">
            How you enter, exit, and move around the property matters as much
            as what you build. Execution installs access that deer don’t learn
            to pattern.
          </Card>

          <Card title="Owner-led or WLS-installed">
            You can implement the work yourself with guidance, or WLS can handle
            installation with our field crew and equipment. Either way, the goal
            is the same: keep mature bucks comfortable using the property.
          </Card>
        </div>
      </Section>

      {/* HABITAT & IMPLEMENTATION EXAMPLES */}
      <Section
        className="bg-slate-50"
        eyebrow={<Badge>Field work</Badge>}
        title="Habitat & implementation examples"
        subtitle="Every task serves one purpose: helping mature bucks feel like they own the property—not like they’re being hunted everywhere they move."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Security + structure">
            We build security so mature bucks feel comfortable living on the
            property full-time—not just passing through at night. We improve
            cover and structure without turning bedding areas into ambush
            zones.
          </Card>

          <Card title="Access + pressure control">
            We improve how people move through the property so deer encounter
            humans less often and less predictably. Good access keeps deer calm
            and daylight movement intact.
          </Card>

          <Card title="Food + holding">
            Food is installed only when the property can support it without
            increasing disturbance. The goal is to support deer that already
            live there—not to pull deer through broken access.
          </Card>

          <Card title="Hunt infrastructure">
            Stands and blinds are installed only where access, wind options,
            and hunting frequency allow them to stay effective over time—not
            burn out after a few sits.
          </Card>
        </div>

        <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
          <h3 className="text-xl font-semibold">Our non-negotiables</h3>
          <p className="mt-3 text-slate-200">
            If a project would increase human intrusion, educate deer, or make
            daylight movement less reliable, we redesign it, delay it, or don’t
            do it at all. Execution exists to protect results—not create short-
            term activity.
          </p>
        </div>
      </Section>

      {/* SCOPE & OPTIONS */}
      <Section
        id="scope-options"
        eyebrow={<Badge>Scope &amp; options</Badge>}
        title="Clear scope. Realistic options."
        subtitle="Execution is scoped to your property, timeline, and plan—not sold as a one-size-fits-all package."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Phase-based execution">
            Most properties are built in phases so improvements don’t interfere
            with hunting season or teach deer bad habits.
          </Card>

          <Card title="Owner or WLS install">
            Choose whether you want guidance or hands-on execution. Either way,
            standards stay the same.
          </Card>

          <Card title="Built-in stop rules">
            If conditions change or a task would compromise deer behavior, we
            stop, adjust, or defer work.
          </Card>
        </div>
      </Section>
    </main>
  );
}

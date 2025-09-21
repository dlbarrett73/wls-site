// app/contact/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Safe CTA import helper:
 * Works whether CtaButton is a default or named export.
 * If the component isn't found, it falls back to a styled <Link>.
 */
import * as Cta from "@/components/CtaButton";
type CtaProps = { href: string; className?: string; children: React.ReactNode };
function CtaSafe({ href, className = "", children }: CtaProps) {
  // Support both: export function CtaButton() {}  OR  export default function CtaButton() {}
  // If neither is present, render a styled <Link> that looks like your CTA.
  // @ts-ignore
  const Btn = (Cta && (Cta.CtaButton || Cta.default)) as
    | React.ComponentType<{ href: string; className?: string; children: React.ReactNode }>
    | undefined;

  if (Btn) return <Btn href={href} className={className}>{children}</Btn>;
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold shadow-sm transition
                  bg-emerald-700 text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${className}`}
    >
      {children}
    </Link>
  );
}

export const metadata = {
  title: "Contact — Whitetail Land Solutions",
  description:
    "Let’s build your legacy together. Contact Whitetail Land Solutions about consulting, habitat implementation, or turnkey hunting properties.",
};

export default function ContactPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] w-full">
        {/* Use an existing site image path; update if you prefer a specific contact hero. */}
        <Image
          src="/images/hero.jpg"
          alt="Pennsylvania hunting land at golden hour"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-end px-6 pb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Let’s Build Your Legacy Together
            </h1>
            <p className="mt-3 max-w-2xl text-white/90">
              Whether you’re buying, selling, or transforming land — it starts with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO / BRAND ANCHOR */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-zinc-900">
              Engineered for Giants. Built for Legacy.
            </h2>
            <p className="mt-3 text-zinc-700">
              At Whitetail Land Solutions, we help passionate hunters engineer properties for mature
              bucks and create legacy lands that serve families for generations.
            </p>

            {/* CONTACT OPTIONS */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {/* If you have a Calendly link, replace href with that URL */}
              <CtaSafe href="/services/consulting">Book a Free Strategy Call</CtaSafe>
              <Link
                href="mailto:info@whitetaillandsolutions.com"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
              >
                Email Us
              </Link>
              <Link
                href="tel:+17243679400"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-50"
              >
                Call (724) 367-9400
              </Link>
            </div>

            {/* QUICK CONTACT (email-based submit keeps this “safe” without a backend) */}
            <form
              className="mt-8 grid gap-4"
              action="mailto:info@whitetaillandsolutions.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">Full Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm outline-none ring-emerald-500/0 transition focus:ring-2"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm outline-none ring-emerald-500/0 transition focus:ring-2"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="Phone"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm outline-none ring-emerald-500/0 transition focus:ring-2"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-zinc-800">
                    How can we help?
                  </label>
                  <select
                    name="Interest"
                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2 text-zinc-900 shadow-sm outline-none ring-emerald-500/0 transition focus:ring-2"
                    defaultValue="Consulting"
                  >
                    <option>Consulting (DIY Plan)</option>
                    <option>Consulting + Implementation (DFY)</option>
                    <option>Habitat Implementation (I already have a plan)</option>
                    <option>Turnkey Property (Buy/Sell)</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-zinc-800">Message</label>
                <textarea
                  name="Message"
                  rows={5}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 shadow-sm outline-none ring-emerald-500/0 transition focus:ring-2"
                  placeholder="Tell us about your property, goals, timeline, and questions…"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                >
                  Send Message
                </button>
                <p className="text-sm text-zinc-500">
                  We reply within 24 hours (often same day).
                </p>
              </div>
            </form>
          </div>

          {/* TRUST + VALUES + INFO CARD */}
          <aside className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-900">Why Hunters Choose WLS</h3>
            <ul className="mt-3 space-y-2 text-zinc-700">
              <li>✅ Proven habitat & access design for mature bucks</li>
              <li>✅ Undetectable access strategies to protect your spots</li>
              <li>✅ Turnkey properties you can hunt on Day One</li>
              <li>✅ Integrity • Stewardship • Service • Golden Rule</li>
            </ul>

            <div className="mt-6 border-t border-zinc-200 pt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-600">
                Contact Details
              </h4>
              <div className="mt-2 space-y-1 text-zinc-700">
                <p>
                  <span className="font-medium">Email: </span>
                  <Link href="mailto:info@whitetaillandsolutions.com" className="underline underline-offset-2">
                    info@whitetaillandsolutions.com
                  </Link>
                </p>
                <p>
                  <span className="font-medium">Phone: </span>
                  <Link href="tel:+17243679400" className="underline underline-offset-2">
                    (724) 367-9400
                  </Link>
                </p>
                <p className="pt-2">
                  <span className="font-medium">Office: </span>
                  1463 State Route 1042, NuMine, PA 16244
                </p>
                <p>
                  <span className="font-medium">Mailing: </span>
                  PO Box 167, NuMine, PA 16244
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-zinc-50 py-12">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h3 className="text-xl font-bold text-zinc-900">Find Us</h3>
          <p className="mt-2 text-zinc-700">
            We serve landowners and hunters across Western & Central Pennsylvania.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
            <iframe
              title="Whitetail Land Solutions — Map"
              src={
                "https://www.google.com/maps?q=1463%20State%20Route%201042,%20NuMine,%20PA%2016244&output=embed"
              }
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-2xl bg-emerald-700 px-6 py-10 text-center text-white shadow-sm">
          <h3 className="text-2xl font-extrabold tracking-tight">
            Ready to engineer your property for giants?
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">
            Start with a free strategy call. We’ll align on goals, timeline, and the best path forward
            (DIY plan, DFY implementation, or turnkey property).
          </p>
          <div className="mt-4 flex justify-center">
            {/* Replace with Calendly or preferred booking URL */}
            <CtaSafe href="/services/consulting" className="bg-white text-emerald-800 hover:bg-zinc-100">
              Book a Free Strategy Call
            </CtaSafe>
          </div>
        </div>
      </section>
    </main>
  );
}

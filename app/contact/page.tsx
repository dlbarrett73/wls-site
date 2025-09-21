// /app/contact/page.tsx
import React from "react";
import Link from "next/link";

// hard-hint SSG and avoid any dynamic evaluation during build
export const dynamic = "force-static";
export const revalidate = 3600; // (optional) allow ISR if you ever add copy changes

// ✅ Local CTA component (no external imports)
function CtaLocal({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold shadow-soft transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-400 bg-brand-700 text-white ${className}`}
    >
      {children}
    </Link>
  );
}

// ✅ Keep these as literals to avoid env/branch differences during SSG
const BOOKING_URL = "https://calendly.com/your-link/15min";
// Leave empty string to show the fallback card instead of iframe
const BOOKING_EMBED_SRC = ""; // e.g. "https://calendly.com/your-link/15min?hide_event_type_details=1&primary_color=215D4C"

export const metadata = {
  title: "Contact — Book a Free 15-Minute Strategy Call | Whitetail Land Solutions",
  description:
    "Tell us about your acreage, goals, and timeline. We’ll map the fastest path to a hunt-ready property—so you can attract, hold, and kill mature whitetails.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden bg-gradient-to-b from-brand-800 to-brand-700">
        <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
          <div className="max-w-3xl">
            <p className="mb-2 inline-block rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white/90 ring-1 ring-white/15">
              CONTACT
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Free 15-Minute Property Strategy Call
            </h1>
            <p className="mt-4 max-w-2xl text-white/90">
              Tell us about your acreage, goals, and timeline. We’ll map the fastest
              path to a hunt-ready property—so you can attract, hold, and kill mature whitetails.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLocal href="#book">Book My Free Strategy Call</CtaLocal>
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white ring-1 ring-inset ring-white/30 transition hover:bg-white/10"
              >
                Prefer to write it out?
              </a>
            </div>
          </div>
        </div>

        {/* Subtle topo decoration */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-[38rem] w-[38rem] opacity-25"
          viewBox="0 0 512 512"
          fill="none"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.4" />
              <stop offset="100%" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <circle cx="256" cy="256" r="240" stroke="url(#g1)" strokeWidth="1.5" />
          <circle cx="256" cy="256" r="200" stroke="url(#g1)" strokeWidth="1.5" />
          <circle cx="256" cy="256" r="160" stroke="url(#g1)" strokeWidth="1.5" />
          <circle cx="256" cy="256" r="120" stroke="url(#g1)" strokeWidth="1.5" />
          <circle cx="256" cy="256" r="80" stroke="url(#g1)" strokeWidth="1.5" />
        </svg>
      </section>

      {/* TRUST STRIP */}
      <section aria-label="Trust points" className="bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-4 py-8 sm:grid-cols-4">
            {[
              "PA-Based",
              "Forestry & Habitat Expertise",
              "Whitetail-First Designs",
              "Transparent Pricing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-gray-50 px-4 py-3 text-center text-sm font-semibold text-gray-800 ring-1 ring-gray-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRIMARY: BOOKING SECTION */}
      <section id="book" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Scheduler */}
            <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-soft">
              <h2 className="text-xl font-bold text-gray-900">
                Book your free 15-minute call
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Quick discovery of your goals, acreage, and access realities. Clear
                recommendations and next steps. Zero pressure—decide if we’re the right fit.
              </p>

              {BOOKING_EMBED_SRC ? (
                <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-gray-200">
                  <iframe
                    src={BOOKING_EMBED_SRC}
                    title="Strategy Call Scheduler"
                    className="h-[720px] w-full"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="mt-4 rounded-2xl border border-dashed border-gray-300 p-6 text-center">
                  <p className="text-sm text-gray-600">
                    Add your scheduler embed later. For now, use the button below.
                  </p>
                  <div className="mt-4">
                    <CtaLocal href={BOOKING_URL}>Open Booking Page</CtaLocal>
                  </div>
                </div>
              )}

              <div className="mt-4 text-xs text-gray-500">
                Tip: Prefer a new tab? Use the button above. We’ll email a confirmation and reminder.
              </div>
            </div>

            {/* What to Expect / Social proof */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-gray-900">What to Expect</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Goals, acreage, access, and pressure realities</li>
                <li>• Clear, hunter-focused recommendations and next steps</li>
                <li>• Optional follow-ups: consulting plan (DIY/DFY) or habitat implementation</li>
              </ul>
              <div className="mt-6 rounded-2xl bg-brand-50 p-4">
                <p className="text-sm font-semibold text-brand-800">Our Advantage</p>
                <p className="mt-1 text-sm text-brand-800/80">
                  We design for undetectable access, stand placement, and seasonal movement—so you can consistently
                  target mature bucks without burning your property.
                </p>
              </div>
              <div className="mt-6">
                <CtaLocal href="#book" className="w-full justify-center">
                  Book My Free Strategy Call
                </CtaLocal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY: CONTACT FORM */}
      <section id="form" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-bold text-gray-900">Prefer to write it out?</h2>
                <p className="mt-2 text-sm text-gray-600">Use the form and we’ll reply within one business day.</p>

                {/* NOTE:
                   This is intentionally a no-JS, server-safe form.
                   Replace the `action` with your AWeber/embed or API later. */}
                <form
                  className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  action="#"
                  method="post"
                >
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-800">
                      Name *
                    </label>
                    <input
                      id="name"
                      required
                      type="text"
                      autoComplete="name"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      name="name"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                      Email *
                    </label>
                    <input
                      id="email"
                      required
                      type="email"
                      autoComplete="email"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      name="email"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-800">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      name="phone"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="county" className="block text-sm font-medium text-gray-800">
                      County / State
                    </label>
                    <input
                      id="county"
                      type="text"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      name="county"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="acreage" className="block text-sm font-medium text-gray-800">
                      Acreage
                    </label>
                    <input
                      id="acreage"
                      type="text"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      name="acreage"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-800">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      defaultValue=""
                      name="timeline"
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option>ASAP</option>
                      <option>30–60 days</option>
                      <option>60–90 days</option>
                      <option>90+ days</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-800">
                      Primary Goal
                    </label>
                    <select
                      id="goal"
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      defaultValue=""
                      name="goal"
                    >
                      <option value="" disabled>
                        Select...
                      </option>
                      <option>Buy Land</option>
                      <option>Tour Property</option>
                      <option>Improve My Current Property</option>
                      <option>Attract &amp; Kill Mature Bucks</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                      name="message"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    {/* Keep this a plain button; no client handlers in Server Components */}
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-brand-700 px-5 py-3 font-semibold text-white shadow-soft transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
                    >
                      Request My Call
                    </button>
                    <p className="mt-2 text-center text-xs text-gray-500">
                      Demo only: replace the form <code>action</code> with your AWeber embed or wire it to your API.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Company blurb / secondary CTA */}
            <aside className="rounded-3xl border border-gray-200 bg-white p-6 shadow-soft">
              <h3 className="text-lg font-bold text-gray-900">Whitetail Land Solutions</h3>
              <p className="mt-2 text-sm text-gray-700">
                Engineered for Giants. Built for Legacy. We build hunt-ready properties and
                custom habitat plans in Pennsylvania—so you can attract and consistently kill
                mature whitetails on your land.
              </p>
              <div className="mt-6">
                <CtaLocal href="#book" className="w-full justify-center">
                  Book a Free Strategy Call
                </CtaLocal>
              </div>

              <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-700">
                <p className="font-semibold text-gray-900">Explore</p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link className="text-brand-700 underline-offset-4 hover:underline" href="/properties">
                      Land for Sale
                    </Link>
                  </li>
                  <li>
                    <Link className="text-brand-700 underline-offset-4 hover:underline" href="/services/consulting">
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link className="text-brand-700 underline-offset-4 hover:underline" href="/services/implementation">
                      Habitat Implementation
                    </Link>
                  </li>
                  <li>
                    <Link className="text-brand-700 underline-offset-4 hover:underline" href="/services">
                      Services Overview
                    </Link>
                  </li>
                </ul>

                <div className="mt-6 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">Contact</p>
                  <p className="mt-1">Physical: 1463 State Route 1042, NuMine, PA 16244</p>
                  <p>Mailing: PO Box 167, NuMine, PA 16244</p>
                  <p className="mt-2 text-xs text-gray-500">
                    We are not a real estate broker; we acquire and sell our own properties and offer consulting &amp; habitat implementation.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

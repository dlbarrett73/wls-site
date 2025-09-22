// app/capture/buyer/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** Local, safe CTA */
function Cta({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition " +
        "bg-emerald-700 text-white hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 " +
        className
      }
    >
      {children}
    </Link>
  );
}

export const dynamic = "force-static";
export const revalidate = 1800;

export const metadata = {
  title:
    "Own a Turnkey Legacy Property — Buyer Lead Capture | Whitetail Land Solutions",
  description:
    "Get matched to turnkey whitetail properties engineered for giants. Join property alerts and tell us your criteria.",
};

export default function BuyerCapture() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* HERO */}
      <section className="relative w-full h-[68vh] sm:h-[82vh]">
        <Image
          src="/images/properties.jpg"
          alt="Turnkey whitetail property engineered for mature bucks"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10 sm:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Own a Legacy Property
            </h1>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-2xl">
              Turnkey whitetail properties—engineered for giants. Tell us what
              you're looking for and get first notice when we list or acquire.
            </p>
            <div className="mt-6">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Get Property Alerts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF / PROCESS */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            What You Can Expect
          </h2>
          <p className="mt-2 text-slate-600">
            Inventory is limited. Our alerts prioritize qualified buyers and
            hot leads on upcoming engineered properties.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Tell Us Your Criteria",
              body:
                "Acreage, county preferences, habitat features, budget, and timing.",
            },
            {
              step: "2",
              title: "Get First Notice",
              body:
                "Be first in line for new WLS flips and off-market opportunities.",
            },
            {
              step: "3",
              title: "Tour & Close",
              body:
                "We guide tours and help you evaluate fit—then make closing simple.",
            },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-white font-bold">
                  {s.step}
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="start" className="relative">
        <div className="absolute inset-0 -z-10 bg-emerald-700/10" />
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left copy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Get Matched to Turnkey Properties
              </h2>
              <p className="mt-3 text-slate-700">
                Share your search criteria and join our private alert list. We’ll
                notify you the moment a matching property is available.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Engineered habitat, proven access, stand/blind setup</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Drone video, trail cam proof, maps & improvements</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />
                  <span>Priority tours for qualified buyers</span>
                </li>
              </ul>

              <div className="mt-6">
                <Cta href="#lead-form">Get Property Alerts</Cta>
                <p className="mt-3 text-sm text-slate-500">
                  You can unsubscribe anytime. We respect your inbox and privacy.
                </p>
              </div>
            </div>

            {/* Right form */}
            <div id="lead-form" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <form method="POST" action="/api/lead" className="space-y-5">
                {/* Hidden routing metadata */}
                <input type="hidden" name="leadSource" value="Buyer Capture" />
                <input type="hidden" name="offer" value="Turnkey Property Alerts" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      First Name
                    </label>
                    <input
                      required
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Phone (optional)
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Min Acres
                    </label>
                    <input
                      name="minAcres"
                      type="number"
                      min={1}
                      placeholder="e.g., 60"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Max Acres
                    </label>
                    <input
                      name="maxAcres"
                      type="number"
                      min={1}
                      placeholder="e.g., 200"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Budget
                    </label>
                    <select
                      name="budget"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-slate-900 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                    >
                      <option value="">Choose…</option>
                      <option>$250k–$500k</option>
                      <option>$500k–$1M</option>
                      <option>$1M–$2M</option>
                      <option>$2M+</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Preferred Counties (PA)
                    </label>
                    <input
                      name="counties"
                      type="text"
                      placeholder="e.g., Clearfield, Forest, Jefferson"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">
                      Financing
                    </label>
                    <select
                      name="financing"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                    >
                      <option value="">Choose…</option>
                      <option>Cash</option>
                      <option>Pre-approved financing</option>
                      <option>Need financing guidance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Must-Haves / Nice-to-Haves
                  </label>
                  <textarea
                    name="mustHaves"
                    rows={5}
                    placeholder="Access style, food plots, water, cabin potential, neighbors, terrain, etc."
                    className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 sm:w-auto"
                  >
                    Join Property Alerts
                  </button>
                  <p className="text-xs text-slate-500">
                    We’ll also notify you about off-market opportunities.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / GUARANTEE */}
      <section className="bg-emerald-700">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-12">
          <div className="grid items-center gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                Engineered for Giants. Built for Legacy.
              </h3>
              <p className="mt-3 text-emerald-50">
                Properties are improved to{" "}
                <span className="font-semibold">
                  create mature-buck opportunity fast
                </span>
                —access, plots, bedding, and stand placement designed as a system.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Access-first design that protects your best sits",
                "Drone + trail cam proof where available",
                "Guided tours for qualified buyers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span className="text-emerald-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

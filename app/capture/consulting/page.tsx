// app/capture/consulting/page.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

/** --- Safe local CTA (no fragile imports) --- */
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

// Hard-hint SSG + allow ISR for copy tweaks
export const dynamic = "force-static";
export const revalidate = 1800;

export const metadata = {
  title:
    "Blueprint for Giants — Consulting Lead Capture | Whitetail Land Solutions",
  description:
    "Start your Blueprint for Giants: a custom whitetail habitat design and action plan engineered for mature bucks and family legacy.",
};

export default function ConsultingCapture() {
  return (
    <main className="min-h-screen w-full bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[68vh] sm:h-[82vh]">
        <Image
          src="/images/consulting.png"
          alt="On-site habitat design consultation for a legacy whitetail property"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-6 pb-10 sm:pb-16">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Blueprint for Giants
            </h1>
            <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-2xl">
              Transform your land into a big buck paradise—engineered for mature
              whitetails and built for family legacy.
            </p>
            <div className="mt-6">
              <a
                href="#start"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold shadow-sm transition bg-white text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
              >
                Start My Plan
              </a>
              {/* Pricing clarity line */}
              <p className="mt-3 text-sm text-white/90">
                Plans from <span className="font-semibold">$7,500</span>. Implementation quoted to scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============= PROVEN PROCESS (3 steps) ============= */}
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-slate-600">
            A simple, guided path to a property engineered for giants.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "Submit Your Goals",
              body:
                "Tell us about your land and vision—acreage, county, access, past hunting pressure, and goals.",
            },
            {
              step: "2",
              title: "Strategy Call",
              body:
                "We review maps and your objectives, share high-value insights, and align on the best path.",
            },
            {
              step: "3",
              title: "Blueprint for Giants",
              body:
                "Receive a prioritized design map + action plan to create immediate mature-buck opportunity.",
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

      {/* ================== FORM ================== */}
      {/* ... unchanged form + trust band + FAQ sections ... */}
    </main>
  );
}

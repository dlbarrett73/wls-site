import React from "react";
import { CtaButton } from "../../components/CtaButton";

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Expert Consulting to Engineer Your Big Buck Paradise
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-700">
          Every great property transformation starts with a clear plan. Our
          consulting services give you the blueprint to design a property that
          consistently attracts, holds, and produces mature whitetail bucks.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-zinc-700">
          We walk your land with you, analyze habitat, access, food, and cover,
          and design a strategy that fits your goals, budget, and hunting style.
          You’ll leave with a step-by-step action plan—so you know exactly what
          to do first, and why.
        </p>
        <div className="mt-8">
          <CtaButton />
        </div>
      </section>

      {/* Deliverables */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold">What You Get</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "Customized property design map (digital + printable)",
            "Written action plan with prioritized steps",
            "Hunting strategy: stand locations, access routes, seasonal tactics",
            "Optional timber + habitat recommendations for added value",
            "Clear next steps—DIY or have us implement",
          ].map((text) => (
            <li
              key={text}
              className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4"
            >
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#1F3D2B]" />
              <span className="text-zinc-800">{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Closing (match Implementation style) */}
      <section className="mt-16 rounded-2xl bg-zinc-50 p-10">
        <h2 className="text-2xl font-bold">Build the Foundation of Your Legacy</h2>
        <p className="mt-4 max-w-3xl text-zinc-700">
          This is more than a plan—it’s a blueprint for generational memories
          and serious hunting success. The best time to start is today.
        </p>
        <div className="mt-6">
          <CtaButton className="bg-[#1F3D2B] text-white hover:bg-[#285c3a] hover:shadow-xl" />
        </div>
      </section>
    </main>
  );
}

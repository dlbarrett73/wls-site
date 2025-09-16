import React from "react";
import { CtaButton } from "@/components/CtaButton";

export default function ImplementationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Habitat Implementation Services
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          We don’t just design your big buck paradise — we can build it. From
          food plots to stand placement, our team handles the work so you can
          start hunting mature whitetails on Day One.
        </p>
        <div className="mt-6">
          <CtaButton label="Get Implementation Support" />
        </div>
      </section>

      {/* Content */}
      <section className="space-y-6 text-zinc-700">
        <p>
          Implementation means taking your custom plan and bringing it to life
          with professional precision. We manage contractors, equipment, and
          timelines while ensuring every improvement is executed according to
          proven whitetail strategies.
        </p>
        <p>
          From timber stand improvement and access trails to blinds, plots, and
          screening cover, we help you make your property huntable and valuable.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold">
          Ready to see your property transformed?
        </h2>
        <p className="mt-2 text-zinc-600">
          Let us do the heavy lifting so you can focus on the hunt.
        </p>
        <div className="mt-6">
          <CtaButton label="Schedule Implementation" />
        </div>
      </section>
    </main>
  );
}

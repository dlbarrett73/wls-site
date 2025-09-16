import React from "react";
import { CtaButton } from "../../components/CtaButton";

export default function HabitatImplementationPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          From Plan to Paradise: Habitat Projects Done Right
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-700">
          A plan only works if it’s executed properly. Habitat implementation is
          where strategy meets action—and where your property begins to hunt
          like it should. We manage the details so mature bucks respond quickly
          and your land improves season after season.
        </p>
        <div className="mt-8">
          <CtaButton />
        </div>
      </section>

      {/* Services */}
      <section className="grid gap-6 sm:grid-cols-2">
        {[
          {
            title: "Food Plot Design & Installation",
            body:
              "Site selection, soil prep, seed selection, and maintenance for year-round attraction.",
          },
          {
            title: "Stealth Access & Screening",
            body:
              "Trails and screening cover that let you enter/exit undetected in prevailing winds.",
          },
          {
            title: "Stand & Blind Placement",
            body: "High-odds locations with season-specific hunt plans.",
          },
          {
            title: "Timber Stand Improvement",
            body:
              "TSI, bedding thickets, and edge feathering to unlock food, cover, and movement.",
          },
          {
            title: "Water & Micro-Habitat",
            body: "Travel influencers, small water, and micro-kill plot setups.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-3 text-zinc-700">{card.body}</p>
          </div>
        ))}
      </section>

      {/* Closing */}
      <section className="mt-16 rounded-2xl bg-zinc-50 p-10">
        <h2 className="text-2xl font-bold">Build a Property Worth Passing Down</h2>
        <p className="mt-4 max-w-3xl text-zinc-700">
          Your property is more than dirt and trees—it’s your hunting legacy.
          With the right implementation, you can hunt mature bucks this season
          and create a place your family will treasure for generations.
        </p>
        <div className="mt-6">
          <CtaButton />
        </div>
      </section>
    </main>
  );
}

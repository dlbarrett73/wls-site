import React from "react";
import { CtaButton } from "@/components/CtaButton";

export default function ConsultingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Expert Consulting to Engineer Your Big Buck Paradise
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          Transform your property into a whitetail hunter’s dream. Our proven
          strategies and designs create turnkey big buck paradises built to
          deliver results for generations.
        </p>
        <div className="mt-6">
          <CtaButton label="Start Your Consulting Journey" />
        </div>
      </section>

      {/* Content */}
      <section className="space-y-6 text-zinc-700">
        <p>
          Whether you own 40 acres or 400, we help you maximize your land’s
          potential for mature whitetails. Our consulting process includes
          property assessments, habitat design, hunting strategy, and
          implementation guidance tailored to your goals.
        </p>
        <p>
          With decades of experience in forestry, whitetail behavior, and land
          management, we provide clear, actionable plans that take the guesswork
          out of creating a legacy hunting property.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold">
          Ready to engineer your big buck paradise?
        </h2>
        <p className="mt-2 text-zinc-600">
          Contact us today and take the first step toward your dream property.
        </p>
        <div className="mt-6">
          <CtaButton label="Contact Us Today" />
        </div>
      </section>
    </main>
  );
}

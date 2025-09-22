// components/home/FeaturedProperty.tsx
import React from 'react';
import CtaSafe from './CtaSafe';
export default function FeaturedProperty() {
  // Paste your existing Featured Property markup inside the return
  // Keep props/state out to avoid SSR surprises
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Property</h2>
        <p className="mt-2 text-slate-600">Showcase a single marquee listing with story, highlights, and CTA.</p>
      </div>
      {/* TODO: Replace this block with your existing Featured Property content */}
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-slate-500">
        Placeholder — Featured Property component content.
      </div>
    </section>
  );
}

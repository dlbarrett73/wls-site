// components/home/PropertyShowcase.tsx
import React from 'react';
export default function PropertyShowcase() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Property Showcase</h2>
        <p className="mt-2 text-slate-600">Embed your latest property videos or a grid of video cards.</p>
      </div>
      {/* TODO: Replace placeholders with your real embeds/cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
      </div>
    </section>
  );
}

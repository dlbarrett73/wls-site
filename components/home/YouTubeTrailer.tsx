// components/home/YouTubeTrailer.tsx
import React from 'react';
export default function YouTubeTrailer() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">YouTube Channel Trailer</h2>
          <p className="mt-2 text-slate-600">Introduce WLS and invite visitors to subscribe for property alerts and education.</p>
        </div>
        {/* TODO: Swap in your actual YouTube embed/iframe */}
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-white" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Properties Engineered to Attract and Kill{" "}
            <span className="underline decoration-4 underline-offset-4">Mature Whitetails</span>.
          </h1>

          <p className="mt-4 max-w-prose text-lg text-zinc-700">
            We design, build, and sell whitetail-optimized properties in Pennsylvania—and consult
            with landowners to transform their ground into a big buck paradise.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-700/40"
            >
              Get a Free 15-Minute Strategy Call
            </a>
            <a
              href="/properties"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-100 px-5 py-3 font-semibold text-zinc-900 ring-1 ring-inset ring-zinc-300 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-400/40"
            >
              See Land for Sale
            </a>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-black/10">
            <img
              src="/images/properties/mahaffey-136/hero.jpg"
              alt="Happy hunter with a mature PA whitetail."
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

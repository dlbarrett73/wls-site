import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT COLUMN */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Properties engineered to attract and kill{" "}
            <span className="underline decoration-4 underline-offset-4 decoration-wood-500">
              mature whitetails
            </span>.
          </h1>
          <p className="mt-5 text-neutral-600 max-w-prose">
            We design, build, and sell whitetail-optimized properties in
            Pennsylvania—and consult with landowners to transform their ground
            into a big buck paradise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-primary">
              Get a Free 15-Minute Strategy Call
            </Link>
            <Link href="/properties" className="btn btn-outline">
              See Land for Sale
            </Link>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
            <div>
              <dt className="text-neutral-500">Service Area</dt>
              <dd className="font-semibold">Pennsylvania (and nearby)</dd>
            </div>
            <div>
              <dt className="text-neutral-500">Core Services</dt>
              <dd className="font-semibold">
                Land for Sale · Consulting · Habitat Implementation
              </dd>
            </div>
          </dl>
        </div>

        {/* RIGHT COLUMN (Hero Image) */}
        <div className="card overflow-hidden p-2 border-brand-200 bg-wood-50">
          <Image
            src="/hero.jpg"
            alt="Hunter with a mature whitetail—proof of results on well-designed habitat"
            width={1920}
            height={1080}
            className="w-full rounded-xl object-cover"
            priority
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </section>

      {/* What we do */}
<section className="border-t border-wood-200 bg-wood-50">
  <div className="container py-14">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What we do</h2>
    <p className="mt-2 text-neutral-600">Simple offers that solve real hunter problems.</p>

    <div className="mt-8 grid md:grid-cols-3 gap-6">
      {/* Consulting */}
      <div className="card p-6 bg-white hover:shadow-md transition">
        <h3 className="text-lg font-semibold">Consulting</h3>
        <p className="mt-3 text-sm text-neutral-700">
          Custom plans to maximize deer movement, bedding, and hunting opportunities on your land.
        </p>
        <Link href="/services/consulting" className="mt-5 inline-block text-sm font-semibold">
          Learn more →
        </Link>
      </div>

      {/* Habitat Implementation */}
      <div className="card p-6 bg-white hover:shadow-md transition">
        <h3 className="text-lg font-semibold">Habitat Implementation</h3>
        <p className="mt-3 text-sm text-neutral-700">
          From food plots to timber work, we build the improvements that hold mature bucks year-round.
        </p>
        <Link href="/services/implementation" className="mt-5 inline-block text-sm font-semibold">
          Learn more →
        </Link>
      </div>

      {/* Land for Sale */}
      <div className="card p-6 bg-white hover:shadow-md transition">
        <h3 className="text-lg font-semibold">Land for Sale</h3>
        <p className="mt-3 text-sm text-neutral-700">
          Turnkey hunting properties engineered and ready to hunt from day one.
        </p>
        <Link href="/properties" className="mt-5 inline-block text-sm font-semibold">
          Learn more →
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* YouTube + Why WLS */}
      <section className="container py-14 grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl md:text-2xl font-bold">
            See the work in action
          </h3>
          <p className="mt-2 text-neutral-600 max-w-prose">
            Follow our YouTube channel for habitat breakdowns and property
            tours.
          </p>
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=GiantLegacy_WLS"
              title="Giant Legacy – Whitetail Land Solutions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="card p-6 bg-wood-50 border-wood-200">
          <h4 className="text-lg font-semibold">Why hunters choose WLS</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>Plans designed to hold and hunt mature bucks.</li>
            <li>Access-first design: wind, thermal, undetectable entry/exit.</li>
            <li>Forestry intelligence to maximize value and habitat.</li>
            <li>Simple packages and straight talk—no fluff.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

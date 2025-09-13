import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Consulting — Whitetail Land Solutions",
  description:
    "Custom habitat consulting that uses whitetail biology and behavior to influence deer to move when and where you want them to.",
};

export default function ConsultingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">CONSULTING</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Transform your property into a big buck paradise
        </h1>
        <p className="mt-6 max-w-3xl text-neutral-600">
          We use deep knowledge of <span className="font-semibold">whitetail biology and behavior</span> to
          influence deer to move <span className="font-semibold">when and where you want them to</span>.
          You get a clear, customized plan that maximizes your land’s hunting potential and builds a lasting legacy.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn btn-primary">Book a Free 15-Minute Strategy Call</Link>
          <Link href="/services" className="btn btn-outline">Back to Services</Link>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">The problem</h2>
            <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
              <li>• Poor access alerts deer before you ever reach the stand.</li>
              <li>• Random food plots and cover don’t create daylight movement.</li>
              <li>• Timber decisions miss habitat value and long-term ROI.</li>
              <li>• Money gets spent without a plan that actually hunts.</li>
            </ul>
          </div>
          <div className="card p-6 bg-white">
            <h3 className="text-lg font-semibold">Our solution</h3>
            <p className="mt-3 text-sm text-neutral-700">
              Boots-on-the-ground consulting that blends <span className="font-semibold">biology, behavior, forestry, and access-first design</span>.
              We engineer travel routes, bedding, and food so mature bucks use your property in daylight—and you can hunt them undetected.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="btn btn-primary">Start with a free call</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables (Branded) */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What you get</h2>
        <p className="mt-2 text-neutral-600 max-w-prose">
          A professional, branded package—clear, actionable, and tailored to your acreage and goals.
        </p>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div className="card p-6 bg-white">
            <div className="font-semibold">Custom Habitat Blueprint Maps</div>
            <p className="mt-2 text-neutral-700">Stand placement, entry/exit, food plot layout, bedding zones, and travel corridors.</p>
          </div>
          <div className="card p-6 bg-white">
            <div className="font-semibold">Priority Action Plan</div>
            <p className="mt-2 text-neutral-700">Step-by-step tasks ranked by impact and urgency—so you know what to do first.</p>
          </div>
          <div className="card p-6 bg-white">
            <div className="font-semibold">Timber & ROI Recommendations</div>
            <p className="mt-2 text-neutral-700">Forestry guidance that improves habitat and long-term property value.</p>
          </div>
          <div className="card p-6 bg-white">
            <div className="font-semibold">Implementation Roadmap</div>
            <p className="mt-2 text-neutral-700">A clear path—DIY or done-for-you—to execute improvements in the right sequence.</p>
          </div>
        </div>

        {/* Optional deliverables mockup image */}
        <div className="mt-8 rounded-2xl overflow-hidden border bg-neutral-50">
          <div className="relative w-full aspect-[16/9]">
            {/* Drop a branded mockup image into /public/consulting-mockup.jpg if you have one */}
            <Image
              src="/consulting-mockup.jpg"
              alt="Example of WLS consulting deliverables"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-wood-200 bg-amber-50">
        <div className="container py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How it works</h2>
          <ol className="mt-8 grid md:grid-cols-4 gap-6 text-sm">
            <Step n="01" title="Discovery Call" body="Share acreage, goals, timeline, and constraints." />
            <Step n="02" title="Property Walk / Remote Review" body="Analyze access, pressure, habitat diversity, and opportunity." />
            <Step n="03" title="Plan & Maps" body="Receive your custom blueprint maps and priority action plan." />
            <Step n="04" title="Implementation" body="DIY or done-for-you execution with follow-up support." />
          </ol>
          <div className="mt-8">
            <Link href="/contact" className="btn btn-primary">Book your free call</Link>
          </div>
        </div>
      </section>

      {/* Proof / Credibility */}
      <section className="container py-14 grid lg:grid-cols-2 gap-8 items-start">
        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold">Why hunters choose WLS</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• Designs that influence deer movement—on purpose.</li>
            <li>• Access-first approach for undetectable entry/exit.</li>
            <li>• Forestry intelligence to build value and habitat.</li>
            <li>• Straight talk, simple plans, measurable results.</li>
          </ul>
        </div>
        <div className="card p-6 bg-white">
          <h3 className="text-lg font-semibold">What clients report</h3>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>• More deer using the property consistently.</li>
            <li>• Mature bucks showing in daylight.</li>
            <li>• Easier, stealthier hunts that keep deer unpressured.</li>
            <li>• Confidence in what to do—and in what order.</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Ready for a plan that hunts?</h2>
          <p className="mt-2 text-neutral-600">
            Get a custom blueprint that uses biology and behavior to make mature bucks huntable—on your ground.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">Book a Free Strategy Call</Link>
            <Link href="/services" className="btn btn-outline">See All Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Small helper */
function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <li className="card p-5 bg-white">
      <div className="text-xs font-semibold tracking-widest text-brand-700">{n}</div>
      <div className="mt-1 font-semibold">{title}</div>
      <div className="mt-2 text-neutral-700">{body}</div>
    </li>
  );
}

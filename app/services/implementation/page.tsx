import Link from "next/link";

export const metadata = {
  title: "Habitat Implementation — Whitetail Land Solutions",
  description:
    "Custom whitetail habitat implementation projects — food plots, timber work, access, bedding, and more — built by professionals to proven best practices.",
};

export default function ImplementationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">
          HABITAT IMPLEMENTATION
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          From Plans to Reality: Habitat Built for Giants
        </h1>
        <p className="mt-6 max-w-3xl text-neutral-600">
          Our habitat implementation services turn your Blueprint into a living,
          breathing whitetail paradise. Every project is custom—tailored to your
          land, your goals, and your budget—and executed to the highest
          professional standards.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn btn-primary">
            Book a Free 15-Minute Strategy Call
          </Link>
          <Link href="/services" className="btn btn-outline">
            Back to Services
          </Link>
        </div>
      </section>

      {/* How we work */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              How we work
            </h2>
            <p className="mt-3 text-neutral-700 text-sm">
              Every property is different. That’s why we design and price each
              project based on:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Your goals as a landowner</li>
              <li>• The timeline and budget you’re working with</li>
              <li>• Materials, labor, and equipment required</li>
            </ul>
          </div>
          <div className="card p-6 bg-white">
            <h3 className="text-lg font-semibold">
              Professionals. Best practices.
            </h3>
            <p className="mt-3 text-sm text-neutral-700">
              Our team of experienced professionals follows proven best
              practices so your improvements don’t just look good on paper—they
              deliver results in the woods.
            </p>
          </div>
        </div>
      </section>

      {/* Types of projects */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Types of projects we do
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          {[
            "Food plots and forage establishment",
            "Timber stand improvement and logging coordination",
            "Bedding and cover creation",
            "Stand/blind installation and access development",
            "Water sources and edge feathering",
          ].map((item) => (
            <div key={item} className="card p-6 bg-white">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-t border-wood-200 bg-amber-50">
        <div className="container py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Why choose WLS for implementation
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li>✅ Custom solutions built around your unique property</li>
            <li>
              ✅ Experienced professionals who understand habitat and deer
              behavior
            </li>
            <li>✅ Best practices applied in every phase of the project</li>
            <li>✅ Turnkey execution from design to results</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-wood-200 bg-wood-50">
        <div className="container py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Ready to bring your plan to life?
          </h2>
          <p className="mt-2 text-neutral-600">
            Stop wondering if your improvements are making a difference. Let us
            build the habitat that grows and holds mature whitetails.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Book a Free Strategy Call
            </Link>
            <Link href="/services" className="btn btn-outline">
              See All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

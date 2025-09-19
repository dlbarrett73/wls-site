// app/support/page.tsx
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Support — Whitetail Land Solutions",
  description:
    "Get help with Whitetail Land Solutions. Find contact options, response times, and key links.",
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-12">
      {/* Hero */}
      <header className="max-w-3xl">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">
          SUPPORT
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          How can we help?
        </h1>
        <p className="mt-4 text-lg text-zinc-700">
          We keep support simple. Start with our contact form, and we’ll reply by
          email. Most questions get a response within{" "}
          <strong>1–2 business days</strong>.
        </p>
      </header>

      {/* Quick actions */}
      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        <Link
          href="/contact"
          className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600"
        >
          <h2 className="text-xl font-semibold">Contact Form</h2>
          <p className="mt-2 text-zinc-600">
            Tell us about your acreage, goals, and timeline. We’ll follow up by email.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-brand-700">
            Open the form →
          </span>
        </Link>

        <Link
          href="/contact"
          className="block rounded-2xl border border-zinc-200 bg-white p-6 shadow-soft transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-600"
        >
          <h2 className="text-xl font-semibold">Free Strategy Call</h2>
          <p className="mt-2 text-zinc-600">
            Book a <strong>free 15-minute call</strong> to see if we’re a fit.
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-brand-700">
            Book a call →
          </span>
        </Link>
      </section>

      {/* What to include */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold">What to include</h2>
        <ul className="mt-3 list-inside list-disc text-zinc-700">
          <li>Your name and the best email to reach you</li>
          <li>County / township and approximate acreage</li>
          <li>Your primary goals (e.g., habitat plan, implementation, turnkey)</li>
          <li>Your timeline (e.g., immediate, this season, next 12 months)</li>
          <li>Any relevant maps, photos, or links (optional)</li>
        </ul>
      </section>

      {/* Addresses */}
      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Mailing Address</h3>
          <address className="mt-2 not-italic text-zinc-700">
            Whitetail Land Solutions<br />
            PO Box 167<br />
            NuMine, PA 16244
          </address>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-lg font-semibold">Physical Address</h3>
          <address className="mt-2 not-italic text-zinc-700">
            1463 State Route 1042<br />
            NuMine, PA 16244
          </address>
        </div>
      </section>

      {/* Small FAQ */}
      <section className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-xl font-semibold">Frequently Asked</h2>
        <dl className="mt-4 space-y-6">
          <div>
            <dt className="font-medium">How fast do you respond?</dt>
            <dd className="mt-2 text-zinc-700">
              Typically within 1–2 business days. Complex property questions may take longer while we review maps and details.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Where should I start?</dt>
            <dd className="mt-2 text-zinc-700">
              Use the <Link href="/contact" className="underline decoration-brand-600 underline-offset-4">Contact Form</Link> or book a{" "}
              <Link href="/contact" className="underline decoration-brand-600 underline-offset-4">
                Free Strategy Call
              </Link>.
            </dd>
          </div>
          <div>
            <dt className="font-medium">Privacy & Terms</dt>
            <dd className="mt-2 text-zinc-700">
              See our{" "}
              <Link href="/privacy" className="underline decoration-brand-600 underline-offset-4">
                Privacy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline decoration-brand-600 underline-offset-4">
                Terms
              </Link>{" "}
              pages for details.
            </dd>
          </div>
        </dl>
      </section>

      {/* Legal footer note */}
      <p className="mt-8 text-sm text-zinc-500">
        For time-sensitive matters, include “Urgent” in your message subject and we’ll do our best to prioritize.
      </p>

      {/* Structured data for basic compliance (no phone/email assumed) */}
      <Script id="jsonld-support" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How fast do you respond?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Typically within 1–2 business days. Complex property questions may take longer while we review maps and details."
              }
            },
            {
              "@type": "Question",
              "name": "Where should I start?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "Use the Contact Form or book a Free Strategy Call on our Contact page."
              }
            },
            {
              "@type": "Question",
              "name": "Privacy & Terms",
              "acceptedAnswer": {
                "@type": "Answer",
                "text":
                  "See our Privacy and Terms pages for details."
              }
            }
          ]
        })}
      </Script>

      <Script id="jsonld-organization-contact" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Whitetail Land Solutions",
          "url": "https://www.whitetaillandsolutions.com/",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "PO Box 167",
            "addressLocality": "NuMine",
            "addressRegion": "PA",
            "postalCode": "16244",
            "addressCountry": "US"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "url": "https://www.whitetaillandsolutions.com/contact",
              "areaServed": "US"
            }
          ]
        })}
      </Script>
    </main>
  );
}

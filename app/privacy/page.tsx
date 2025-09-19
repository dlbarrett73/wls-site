// app/privacy/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Whitetail Land Solutions",
  description:
    "How Whitetail Land Solutions collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">
          LEGAL
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700">
          Last updated: September 19, 2025
        </p>
      </section>

      {/* Body */}
      <section className="container pb-24">
        <div className="mx-auto max-w-3xl space-y-8 leading-relaxed">
          <p className="text-neutral-700">
            Whitetail Land Solutions (“we,” “us,” or “our”) respects your
            privacy. This Privacy Policy explains what information we collect,
            how we use it, and the choices you have. By using our website and
            services (the “Services”), you agree to this Policy.
          </p>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Information We Collect</h2>
            <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
              <li>
                <span className="font-medium">Information you provide</span>:
                name, email, phone, acreage, county, goals, timeline, and
                messages you submit via forms.
              </li>
              <li>
                <span className="font-medium">Automatic data</span>: device and
                browser information, IP address, pages viewed, and general
                analytics events.
              </li>
              <li>
                <span className="font-medium">Cookies</span>: small files used
                to remember preferences and improve the site. You can typically
                disable cookies in your browser settings.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">How We Use Information</h2>
            <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
              <li>Provide, operate, and improve our Services and website.</li>
              <li>
                Respond to inquiries and schedule consultations or strategy
                calls.
              </li>
              <li>
                Send administrative messages and, if you opt in, marketing
                communications (you can opt out anytime).
              </li>
              <li>
                Analyze usage to maintain security, performance, and reliability.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Sharing of Information</h2>
            <p className="mt-3 text-neutral-700">
              We do not sell your personal information. We may share it with:
            </p>
            <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
              <li>
                <span className="font-medium">Service providers</span> who help
                us run the website, analytics, communications, or forms.
              </li>
              <li>
                <span className="font-medium">Legal/Compliance</span> if
                required by law, to protect rights, or to respond to lawful
                requests.
              </li>
              <li>
                <span className="font-medium">Business transfers</span> in the
                event of a merger, acquisition, or similar transaction.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Data Retention</h2>
            <p className="mt-3 text-neutral-700">
              We keep personal information only as long as needed for the
              purposes above, unless a longer period is required by law or for
              legitimate business needs (e.g., records, security).
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Your Choices & Rights</h2>
            <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-1">
              <li>
                Opt out of marketing communications by using the “unsubscribe”
                link in our emails or contacting us.
              </li>
              <li>
                Disable cookies in your browser settings (site functionality may
                be affected).
              </li>
              <li>
                Request access, correction, deletion, or restriction of your
                personal information, as applicable under your local laws.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Security</h2>
            <p className="mt-3 text-neutral-700">
              We use reasonable administrative, technical, and physical
              safeguards to protect personal information. However, no method of
              transmission or storage is completely secure.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Children’s Privacy</h2>
            <p className="mt-3 text-neutral-700">
              Our Services are not directed to children under 13, and we do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">International Users</h2>
            <p className="mt-3 text-neutral-700">
              If you access our Services from outside the United States, you
              understand your information may be processed in the U.S. where
              laws may differ from those in your country.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Changes to This Policy</h2>
            <p className="mt-3 text-neutral-700">
              We may update this Policy from time to time. The “Last updated”
              date above reflects the most recent changes. Material changes will
              be posted on this page.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-3 text-neutral-700">
              Questions or requests? Email{" "}
              <a
                href="mailto:info@whitetaillandsolutions.com"
                className="font-medium text-brand-700 underline underline-offset-2"
              >
                info@whitetaillandsolutions.com
              </a>{" "}
              or write to:
            </p>
            <address className="mt-3 not-italic text-neutral-700">
              Whitetail Land Solutions, LLC
              <br />
              PO Box 167
              <br />
              NuMine, PA 16244
              <br />
              United States
            </address>
          </div>

          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-brand-700 px-4 py-2 text-white font-semibold shadow-soft hover:opacity-95 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

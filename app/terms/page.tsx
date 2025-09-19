// app/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — Whitetail Land Solutions",
  description:
    "Simple, plain-English Terms of Service for using Whitetail Land Solutions’ website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold tracking-widest text-neutral-500">
        TERMS OF SERVICE
      </p>
      <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-3 text-neutral-600">
        Effective Date: September 19, 2025
      </p>

      <div className="prose prose-zinc mt-8">
        <p>
          These Terms of Service (“Terms”) govern your access to and use of the
          website located at{" "}
          <span className="whitespace-nowrap">whitetaillandsolutions.com</span>{" "}
          and any related pages, content, features, or services (collectively,
          the “Site”). By accessing or using the Site, you agree to be bound by
          these Terms. If you do not agree, do not use the Site.
        </p>

        <h2>1. Who We Are</h2>
        <p>
          The Site is operated by <strong>Whitetail Land Solutions LLC</strong>{" "}
          (“WLS,” “we,” “us,” or “our”), a Pennsylvania limited liability
          company based at 1463 State Route 1042, NuMine, PA 16244 (mailing:
          PO&nbsp;Box&nbsp;167, NuMine, PA 16244).
        </p>

        <h2>2. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. The “Effective Date”
          above shows when the latest version took effect. Your continued use of
          the Site after an update means you accept the revised Terms.
        </p>

        <h2>3. Eligibility</h2>
        <p>
          You must be at least 18 years old (or the age of majority in your
          jurisdiction) to use the Site. By using the Site, you represent and
          warrant that you meet this requirement.
        </p>

        <h2>4. Use of the Site</h2>
        <p>You agree that you will not:</p>
        <ul>
          <li>
            Use the Site for any unlawful purpose or in violation of any
            applicable law or regulation;
          </li>
          <li>
            Interfere with or disrupt the operation or security of the Site;
          </li>
          <li>
            Attempt to gain unauthorized access to any systems or data;
          </li>
          <li>
            Submit content that is illegal, infringing, or harmful; or
          </li>
          <li>
            Use any automated means to access or scrape the Site without our
            permission.
          </li>
        </ul>

        <h2>5. Information, Not Advice</h2>
        <p>
          Content on the Site is provided for general information only. It is
          not legal, tax, investment, financial, or professional advice.
          Decisions you make are your responsibility. Always consult qualified
          professionals as appropriate.
        </p>

        <h2>6. No Offer or Guarantee</h2>
        <p>
          Property descriptions, availability, prices, improvements, and other
          details may change without notice and are not binding offers. All
          acquisitions, sales, consulting engagements, and implementation work
          are subject to separate written agreements. We do not guarantee any
          specific outcomes (e.g., hunting results, wildlife behavior,
          appreciation, or ROI).
        </p>

        <h2>7. Your Submissions</h2>
        <p>
          If you submit or upload content, you grant WLS a non-exclusive,
          worldwide, royalty-free license to use, reproduce, and display that
          content to operate and improve the Site and our services. You are
          responsible for your submissions and for securing all necessary
          rights.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          The Site and its content (including text, images, logos, and
          trademarks) are owned by WLS or our licensors and are protected by
          law. Except as expressly permitted by these Terms, you may not copy,
          modify, distribute, or create derivative works from the Site or its
          content without prior written permission.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          The Site may link to third-party websites or resources. We are not
          responsible for their content, products, or services. You use them at
          your own risk and subject to their terms and policies.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          THE SITE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM
          EXTENT PERMITTED BY LAW, WLS DISCLAIMS ALL WARRANTIES, EXPRESS OR
          IMPLIED, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not warrant
          that the Site will be uninterrupted, secure, or error-free.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WLS AND OUR OWNERS,
          EMPLOYEES, CONTRACTORS, AND AFFILIATES WILL NOT BE LIABLE FOR ANY
          INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, ARISING OUT OF OR RELATED
          TO YOUR USE OF THE SITE. OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING
          OUT OF OR RELATED TO THE SITE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS
          ($100).
        </p>

        <h2>12. Indemnification</h2>
        <p>
          You agree to defend, indemnify, and hold harmless WLS and our
          owners, employees, contractors, and affiliates from and against any
          claims, damages, liabilities, costs, and expenses (including
          reasonable attorneys’ fees) arising out of or related to: (a) your
          use of the Site; (b) your violation of these Terms; or (c) your
          violation of any law or third-party rights.
        </p>

        <h2>13. Termination</h2>
        <p>
          We may suspend or terminate your access to the Site at any time, for
          any reason, without notice. Sections that by their nature should
          survive termination (e.g., intellectual property, disclaimers,
          limitations of liability, indemnification) will survive.
        </p>

        <h2>14. Governing Law; Venue</h2>
        <p>
          These Terms are governed by the laws of the Commonwealth of
          Pennsylvania, without regard to its conflict-of-law principles. You
          agree to the exclusive jurisdiction and venue of the state and federal
          courts located in Armstrong County, Pennsylvania, for any dispute not
          subject to alternative dispute resolution by separate written
          agreement.
        </p>

        <h2>15. Entire Agreement</h2>
        <p>
          These Terms constitute the entire agreement between you and WLS
          regarding the Site and supersede all prior or contemporaneous
          understandings. If any provision is held unenforceable, the remaining
          provisions will remain in full force.
        </p>

        <h2>16. Contact Us</h2>
        <p>
          Questions about these Terms? Contact us at{" "}
          <Link href="/contact">Contact</Link> or by mail:
          <br />
          Whitetail Land Solutions LLC
          <br />
          PO Box 167, NuMine, PA 16244
        </p>

        <hr />

        <p className="text-sm text-neutral-600">
          For information about how we collect and use data, see our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}

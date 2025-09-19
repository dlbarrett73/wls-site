// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Us — Whitetail Land Solutions",
  description:
    "Whitetail Land Solutions builds hunt-ready properties and custom habitat plans in Pennsylvania. Engineered for Giants. Built for Legacy.",
};

export default function About() {
  return (
    <main>
      {/* =============== */}
      {/* Hero            */}
      {/* =============== */}
      <section className="container py-16 md:py-24">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">
          ABOUT US
        </p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Engineered for Giants. Built for Legacy.
        </h1>
        <p className="mt-6 max-w-3xl text-neutral-700">
          At <span className="font-semibold">Whitetail Land Solutions</span>, we
          believe every acre can become a legacy—where families gather, memories
          are made, and mature bucks daylight. We design and deliver{" "}
          <span className="font-semibold">turnkey hunting properties</span> and{" "}
          <span className="font-semibold">custom consulting</span> that turn
          ordinary ground into a big-buck paradise.
        </p>

        {/* Primary CTA row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-brand-700 px-5 py-3 text-white shadow-soft transition hover:bg-brand-800"
          >
            Book a Free Strategy Call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-neutral-900 hover:bg-neutral-50"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* ======================= */}
      {/* Who We Are + Team       */}
      {/* ======================= */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container grid items-start gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Who We Are
            </h2>
            <p className="mt-4 text-neutral-700">
              We’re lifelong hunters, land stewards, and entrepreneurs from
              Pennsylvania who combine{" "}
              <span className="font-semibold">
                whitetail biology, forestry know-how, and sound strategy
              </span>{" "}
              to build properties that consistently create trophy opportunities
              and lasting family memories.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* David */}
            <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
                <Image
                  src="/images/team-david.jpg"
                  alt="David Barrett — CEO"
                  fill
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">
                David Barrett — CEO
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Vision, marketing, finance, and execution systems. A seasoned
                entrepreneur focused on scalable growth and an exceptional
                client experience.
              </p>
            </article>

            {/* Kent */}
            <article className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-200">
                <Image
                  src="/images/team-kent.jpg"
                  alt="Kent Shick — COO"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Kent Shick — COO</h3>
              <p className="mt-2 text-sm text-neutral-700">
                Consulting forester &amp; habitat expert. Educated in wildlife &
                habitat at Penn State (PSU Deer Lab experience). Decades of
                boots-on-the-ground work designing and implementing plans that
                actually hunt.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= */}
      {/* What We Do        */}
      {/* ================= */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          What We Do
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            title="Consulting"
            body="Custom habitat plans and maps that maximize access, bedding, food, and stand strategy—tailored to your goals and budget."
            href="/consulting"
          />
          <Card
            title="Habitat Implementation"
            body="With trusted partners and forestry expertise, we execute the work: food plots, trails, stand sites, and timber improvements."
            href="/implementation"
          />
          <Card
            title="Land for Sale"
            body="We acquire undervalued tracts, engineer them for world-class hunting, and offer hunt-ready properties you can enjoy on Day One."
            href="/properties"
          />
        </div>
      </section>

      {/* ============== */}
      {/* Our Values     */}
      {/* ============== */}
      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container py-14">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Our Values
          </h2>
          <ul className="mt-6 grid gap-6 text-sm md:grid-cols-4">
            <Value title="Integrity" body="Do the right thing—even when no one’s looking." />
            <Value title="Stewardship" body="Care for the land, wildlife, and legacy it carries." />
            <Value title="Service" body="Put clients first with humility and excellence." />
            <Value title="Golden Rule" body="Treat every client like we’d want to be treated." />
          </ul>
        </div>
      </section>

      {/* ========================= */}
      {/* Why Hunters Choose WLS    */}
      {/* ========================= */}
      <section className="container py-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Why Hunters Choose WLS
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Bullet
            title="Proven Habitat Expertise"
            body="Designs rooted in whitetail biology and forestry science—not landscaping theory."
          />
          <Bullet
            title="Access-First Philosophy"
            body="Every layout is engineered for undetectable entry/exit to keep deer unpressured and daylight-active."
          />
          <Bullet
            title="Turnkey Properties"
            body="We don’t just sell land—we deliver hunt-ready, whitetail-optimized properties."
          />
          <Bullet
            title="Trusted Partnership"
            body="From plan to implementation, we’re in the field—measuring success by results, not reports."
          />
        </div>
      </section>

      {/* ======================== */}
      {/* Contact / Credibility    */}
      {/* ======================== */}
      <section className="border-t bg-neutral-900 text-white">
        <div className="container grid items-center gap-10 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to talk?</h2>
            <p className="mt-3 text-neutral-300">
              Tell us about your acreage, goals, and timeline. We’ll map the
              fastest path to a hunt-ready property.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                Get a Free 15-Minute Strategy Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-white/25 bg-white/0 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                See Services
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 text-sm text-neutral-900 shadow-soft">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-neutral-500">Mailing Address</dt>
                <dd className="font-semibold">PO Box 167, NuMine, PA 16244</dd>
              </div>
              <div>
                <dt className="text-neutral-500">Email</dt>
                <dd className="font-semibold">
                  <a
                    className="underline"
                    href="mailto:info@whitetaillandsolutions.com"
                  >
                    info@whitetaillandsolutions.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500">YouTube</dt>
                <dd className="font-semibold">
                  <a
                    className="underline"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/@GiantLegacy_WLS"
                  >
                    @GiantLegacy_WLS
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- small helpers --- */
function Card({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-700">{body}</p>
      {href ? (
        <span className="mt-4 inline-flex text-sm font-semibold text-brand-700">
          Learn more →
        </span>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

function Value({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-neutral-700">{body}</div>
    </li>
  );
}

function Bullet({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="font-semibold">{title}</div>
      <div className="mt-2 text-sm text-neutral-700">{body}</div>
    </div>
  );
}

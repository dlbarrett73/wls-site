// app/properties/[slug]/page.tsx
import { notFound } from "next/navigation";

type Property = {
  slug: string;
  title: string;
  price?: string;
  acres?: number;
  heroSrc: string;
  highlights: string[];
};

// Minimal, known-good data so prerender can’t fail
const propertiesBySlug: Record<string, Property> = {
  "example-tract": {
    slug: "example-tract",
    title: "Example Tract",
    price: "$XXX,XXX",
    acres: 100,
    heroSrc: "/images/properties/mahaffey-136/hero.jpg",
    highlights: [
      "Turnkey improvements for whitetails",
      "Solid access with discreet entry/exit",
      "Food, cover, and water within daily core",
    ],
  },
  "mahaffey-136": {
    slug: "mahaffey-136",
    title: "Mahaffey 136",
    price: "$—",
    acres: 136.38,
    heroSrc: "/images/properties/mahaffey-136/hero.jpg", // ✅ this file exists per your repo
    highlights: [
      "Frontage + undetectable access from US 219",
      "Food plots installed and 2 Stryker blinds",
      "Near Mahaffey, PA (Bell Twp., Clearfield County)",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(propertiesBySlug).map((slug) => ({ slug }));
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const item = propertiesBySlug[params.slug];
  if (!item) return notFound();

  return (
    <main style={{ maxWidth: 1120, margin: "0 auto", padding: "40px 24px" }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 36, lineHeight: 1.1, margin: 0, fontWeight: 800 }}>{item.title}</h1>
        <p style={{ marginTop: 8, color: "#374151" }}>
          {item.acres ? `${item.acres} acres` : ""} {item.price ? `• ${item.price}` : ""}
        </p>
      </header>

      <div style={{
        position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 16,
        overflow: "hidden", background: "#f4f4f5", border: "1px solid rgba(0,0,0,0.1)"
      }}>
        <img
          src={item.heroSrc}
          alt={`${item.title} hero`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          loading="eager"
        />
      </div>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 8px 0" }}>Highlights</h2>
        <ul style={{ margin: 0, paddingLeft: 20, color: "#374151", lineHeight: 1.6 }}>
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="/contact" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "12px 18px", borderRadius: 12, background: "#166534", color: "white",
            fontWeight: 700, textDecoration: "none"
          }}>
            Book a Free Strategy Call
          </a>
          <a href="/properties" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "12px 18px", borderRadius: 12, background: "#f4f4f5", color: "#111827",
            fontWeight: 700, textDecoration: "none", border: "1px solid #e5e7eb"
          }}>
            Back to Properties
          </a>
        </div>
      </section>
    </main>
  );
}

// app/page.tsx
export default function Home() {
  return (
    <main style={{ maxWidth: "1120px", margin: "0 auto", padding: "40px 24px" }}>
      <section style={{ display: "grid", gridTemplateColumns: "1fr", gap: "32px" }}>
        <div>
          <h1 style={{ fontSize: "44px", lineHeight: 1.1, margin: 0, fontWeight: 800 }}>
            Properties Engineered to Attract and Kill <u>Mature Whitetails</u>.
          </h1>
          <p style={{ marginTop: 16, fontSize: 18, color: "#374151", maxWidth: 720 }}>
            We design, build, and sell whitetail-optimized properties in Pennsylvania—and consult
            with landowners to transform their ground into a big buck paradise.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/contact" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "12px 18px", borderRadius: 12, background: "#166534", color: "white",
              fontWeight: 700, textDecoration: "none"
            }}>
              Get a Free 15-Minute Strategy Call
            </a>
            <a href="/properties" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "12px 18px", borderRadius: 12, background: "#f4f4f5", color: "#111827",
              fontWeight: 700, textDecoration: "none", border: "1px solid #e5e7eb"
            }}>
              See Land for Sale
            </a>
          </div>
        </div>

        <div>
          {/* Uses your exact path; safe HTML <img> so no Next image config required */}
          <div style={{
            position: "relative", width: "100%", paddingTop: "75%", borderRadius: 16,
            overflow: "hidden", background: "#f4f4f5", border: "1px solid rgba(0,0,0,0.1)"
          }}>
            <img
              src="/images/properties/mahaffey-136/hero.jpg"
              alt="Happy hunter with a mature PA whitetail."
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

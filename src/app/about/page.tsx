import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Viventia — UAE Property, Operated Globally",
  description:
    "Viventia Realty Solutions is a UAE property operations partner for global investors, helping owners buy, sell, lease, manage, and settle UAE property income through trusted local execution.",
};

export default function AboutPage() {
  return (
    <main style={{ position: "relative", zIndex: 1, background: "var(--bg)" }}>
      <Navbar />

      {/* Intro */}
      <section style={{ padding: "clamp(140px, 14vw, 200px) 32px clamp(60px, 8vw, 100px)" }}>
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", textAlign: "center" }}>
          <span className="eyebrow" style={{ textAlign: "center" }}>ABOUT VIVENTIA</span>
          <h1 className="section-heading" style={{ maxWidth: "820px", margin: "0 auto" }}>
            A UAE property operations partner{" "}
            <span className="gold-text">for global investors.</span>
          </h1>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              lineHeight: 1.85,
              color: "var(--text-2)",
              maxWidth: "700px",
              margin: "28px auto 0",
            }}
          >
            Viventia helps global investors and overseas owners buy, sell, lease, manage, and
            settle UAE property income through trusted on-ground execution, transparent
            coordination, and approved settlement routes — wherever they are in the world.
            Every engagement starts with a private consultation; onboarding begins only after
            your property, ownership, and settlement requirements have been reviewed.
          </p>
        </div>
      </section>

      <Team />
      <Footer />
    </main>
  );
}

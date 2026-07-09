"use client";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations";

type Step = { n: string; title: string; desc: string };

const STEPS: Step[] = [
  {
    n: "01",
    title: "Enquire",
    desc: "Tell us whether you want to buy, sell, lease, manage, or settle UAE property income.",
  },
  {
    n: "02",
    title: "Consultation Call",
    desc: "We understand your ownership goals, property location, current status, and preferred settlement route.",
  },
  {
    n: "03",
    title: "Review",
    desc: "We review property details, documents, tenant position, management needs, and compliance requirements.",
  },
  {
    n: "04",
    title: "Plan",
    desc: "You receive a clear operating and settlement plan before private onboarding begins.",
  },
  {
    n: "05",
    title: "Onboard",
    desc: "Once approved, Viventia begins UAE-side execution, reporting, and investor coordination.",
  },
];

export default function OperatingProcess() {
  const rowRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [rail, setRail] = useState({ left: 0, width: 0, top: 0 });

  // The gold rail must connect the true centers of the first and last node.
  // CSS percentage insets don't land on the actual node centers once padding,
  // gaps, and responsive column widths are in play, so we measure real pixel
  // positions via getBoundingClientRect after layout and position the rail
  // with inline left/width/top. Re-measured on resize to stay aligned.
  //
  // Important: each node sits inside a motion.div using the fadeUp variant,
  // whose "hidden" state is offset by y:36px. Until the section scrolls
  // into view and that reveal animation finishes, the nodes are still
  // sitting in that hidden, shifted-down position, so measuring too early
  // captures the rail ~36px too low — it renders visually below the
  // circles instead of through their centers. We re-measure once on mount
  // (best effort for above-the-fold cases), again once the section's
  // reveal animation has had time to settle after it enters the viewport,
  // and once more when webfonts finish swapping (can also shift widths).
  const alignRail = useCallback(() => {
    const row = rowRef.current;
    const nodes = nodeRefs.current;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (!row || !first || !last) return;

    const rowRect = row.getBoundingClientRect();
    const firstRect = first.getBoundingClientRect();
    const lastRect = last.getBoundingClientRect();

    const startX = firstRect.left + firstRect.width / 2 - rowRect.left;
    const endX = lastRect.left + lastRect.width / 2 - rowRect.left;
    const centerY = firstRect.top + firstRect.height / 2 - rowRect.top;

    setRail({ left: startX, width: Math.max(endX - startX, 0), top: centerY });
  }, []);

  useLayoutEffect(() => {
    alignRail();
    window.addEventListener("resize", alignRail);
    document.fonts?.ready?.then(alignRail).catch(() => {});
    return () => window.removeEventListener("resize", alignRail);
  }, [alignRail]);

  return (
    <section
      id="process"
      style={{ padding: "var(--section-pad)", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center" }}
        >
          <span className="eyebrow" style={{ textAlign: "center" }}>
            HOW ENGAGEMENT BEGINS
          </span>
          <h2 className="section-heading" style={{ maxWidth: "780px", margin: "0 auto" }}>
            From first enquiry to <span className="gold-text">private onboarding.</span>
          </h2>
          <div className="gold-divider" style={{ margin: "20px auto 0" }} />
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={rowRef}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          onViewportEnter={() => {
            // Nodes are still in their shifted-down "hidden" position at the
            // moment this fires; wait for the fadeUp+stagger reveal to
            // finish (~1.2s) before re-measuring, so the rail locks onto
            // the nodes' final resting position, not their entry offset.
            setTimeout(alignRail, 1300);
          }}
          className="process-row"
          style={{
            position: "relative",
            display: "flex",
            marginTop: "clamp(56px, 7vw, 96px)",
          }}
        >
          {/* Pixel-measured gold rail connecting node centers, drawn from node 1 to node 5 */}
          <motion.div
            aria-hidden="true"
            className="process-rail"
            initial={{ width: 0 }}
            whileInView={{ width: rail.width }}
            viewport={viewportOnce}
            transition={{ duration: 1.2, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "absolute",
              left: `${rail.left}px`,
              top: `${rail.top}px`,
              height: "1px",
              background: "linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))",
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {STEPS.map((step, i) => (
            <motion.div key={step.n} variants={fadeUp} className="process-step">
              <div
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                className="process-node"
              >
                <span>{step.n}</span>
              </div>
              <h3 className="gold-text process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .process-step {
          flex: 1;
          padding: 0 18px;
          position: relative;
          z-index: 1;
        }
        .process-step:first-child { padding-left: 0; }
        .process-step:last-child { padding-right: 0; }

        .process-node {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid var(--border-gold);
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 9px;
          letter-spacing: 0.5px;
          color: var(--gold);
          position: relative;
          z-index: 2;
          margin-bottom: 26px;
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
        }
        .process-step:hover .process-node {
          border-color: var(--gold-light);
          box-shadow: 0 0 0 4px rgba(201,168,76,0.14), 0 0 16px rgba(201,168,76,0.4);
          transform: scale(1.08);
        }

        .process-step-title {
          font-family: var(--font-heading);
          font-size: clamp(15px, 1.5vw, 17px);
          font-weight: 700;
          letter-spacing: 0.3px;
          margin-bottom: 10px;
        }
        .process-step-desc {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.75;
          color: var(--text-2);
          max-width: 230px;
        }

        @media (max-width: 900px) {
          .process-row {
            flex-direction: column !important;
            gap: 36px;
          }
          .process-rail { display: none !important; }
          .process-step {
            padding: 0 !important;
          }
          .process-step-desc { max-width: none; }
        }
      `}</style>
    </section>
  );
}

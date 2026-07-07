"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Buy & Sell", href: "#services" },
  { label: "Management", href: "#services" },
  { label: "International", href: "#international" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, open ? 300 : 0);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
          background: scrolled ? "rgba(7,9,15,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 32px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", cursor: "pointer" }}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
              <rect width="38" height="38" rx="9" fill="#0d1117" />
              <rect width="38" height="38" rx="9" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
              <path
                d="M10 13 L19 27 L28 13"
                stroke="url(#chevGrad)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <defs>
                <linearGradient id="chevGrad" x1="10" y1="13" x2="28" y2="27" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#c9a84c" />
                  <stop offset="1" stopColor="#e2c570" />
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "var(--text)",
                  letterSpacing: "2.5px",
                  lineHeight: "1.1",
                }}
              >
                VIVENTIA
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "8.5px",
                  fontWeight: "500",
                  color: "rgba(201,168,76,0.7)",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  lineHeight: "1",
                  marginTop: "2px",
                }}
              >
                REAL ESTATE
              </div>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <div
            className="viventia-desk-nav"
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => goTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "var(--text-2)",
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.4px",
                  borderRadius: "6px",
                  transition: "color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-2)";
                  e.currentTarget.style.background = "none";
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => goTo("#contact")}
              className="btn-gold"
              style={{ marginLeft: "14px", padding: "10px 26px", fontSize: "12px" }}
            >
              List Your Property
            </button>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="viventia-mob-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              padding: "8px",
              color: "var(--text)",
              borderRadius: "6px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "rgba(7,9,15,0.98)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              padding: "40px 32px",
            }}
          >
            {/* Gold line top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                position: "absolute",
                top: "72px",
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
                transformOrigin: "left",
              }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => goTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 48px",
                  fontSize: "22px",
                  fontFamily: "var(--font-heading)",
                  fontWeight: "600",
                  color: "var(--text)",
                  letterSpacing: "2px",
                  borderRadius: "8px",
                  transition: "color 0.2s",
                  width: "100%",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ delay: NAV_LINKS.length * 0.07 + 0.1 }}
              style={{ marginTop: "24px" }}
            >
              <button
                onClick={() => goTo("#contact")}
                className="btn-gold"
                style={{ padding: "14px 48px", fontSize: "14px", width: "100%" }}
              >
                List Your Property
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .viventia-desk-nav { display: none !important; }
          .viventia-mob-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

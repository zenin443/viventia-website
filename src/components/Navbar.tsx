"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Buy & Sell",            href: "#pillars" },
  { label: "Property Management",   href: "#how-it-works" },
  { label: "International Owners",  href: "#international" },
  { label: "Settlements",           href: "#international" },
  { label: "UAE Areas",             href: "#areas" },
  { label: "Insights",              href: "#blog" },
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
          background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
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
          {/* ── Logo: V | VIVENTIA main lockup ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", gap: "16px", textDecoration: "none", cursor: "pointer" }}
          >
            <span style={{ width: "32px", height: "32px", flexShrink: 0, display: "block" }}>
              <svg viewBox="0 0 200 194" fill="none" width="32" height="32" aria-hidden="true">
                <path d="M14,12 L72,55 L94,178 L24,58 Z" fill="url(#navVMarkGrad)" />
                <path d="M46,58 L86,80 L98,183 L58,80 Z" fill="url(#navVMarkGrad)" />
                <path d="M186,12 L128,55 L106,178 L176,58 Z" fill="url(#navVMarkGrad)" />
                <path d="M154,58 L114,80 L102,183 L142,80 Z" fill="url(#navVMarkGrad)" />
                <defs>
                  <linearGradient id="navVMarkGrad" x1="0" y1="0" x2="200" y2="194">
                    <stop offset="0" stopColor="#F0D27A" />
                    <stop offset="0.5" stopColor="#D8AF52" />
                    <stop offset="1" stopColor="#B78B2E" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span style={{ width: "1px", height: "26px", background: "rgba(216,184,90,0.35)", flexShrink: 0 }} />
            <span
              className="gold-text"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "19px",
                letterSpacing: "4px",
                lineHeight: "1.1",
              }}
            >
              VIVENTIA
            </span>
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
              data-cta="book-private-consultation"
              style={{
                marginLeft: "8px", padding: "10px 22px", fontSize: "11px",
                background: "linear-gradient(135deg,#c9a84c,#9a6f1a)",
                border: "none", borderRadius: "7px", cursor: "pointer",
                fontFamily: "var(--font-heading)", fontWeight: 700,
                color: "#fff", letterSpacing: "0.5px", transition: "opacity 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
            >
              Book Private Consultation
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
              background: "rgba(0,0,0,0.95)",
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
              style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px", width: "100%", alignItems: "center" }}
            >
              <button
                onClick={() => goTo("#contact")}
                data-cta="book-private-consultation"
                style={{ padding: "13px 48px", fontSize: "13px", width: "280px", background: "linear-gradient(135deg,#c9a84c,#9a6f1a)", border: "none", borderRadius: "8px", cursor: "pointer", fontFamily: "var(--font-heading)", fontWeight: 700, color: "#fff", letterSpacing: "0.5px" }}
              >
                Book Private Consultation
              </button>
              <button
                onClick={() => { window.open("https://wa.me/971541921968", "_blank"); setOpen(false); }}
                data-cta="whatsapp"
                style={{ padding: "13px 48px", fontSize: "13px", width: "280px", background: "none", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "8px", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600, color: "rgba(201,168,76,0.8)", letterSpacing: "0.5px" }}
              >
                WhatsApp Us
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

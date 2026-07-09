"use client";
import React from "react";

/* ─── Icons ──────────────────────────────────────────────── */
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.999 1.998C6.477 1.998 2 6.477 2 12c0 1.873.518 3.625 1.418 5.124L2 22l5.027-1.385A9.96 9.96 0 0 0 12 22c5.522 0 10-4.478 10-10S17.522 2 12 2h-.001z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.738l7.73-8.835L2.25 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const COLS = [
  {
    heading: "Services",
    links: [
      { label: "Buy & Sell", href: "#pillars" },
      { label: "Property Management", href: "#pillars" },
      { label: "Leasing & Tenancy", href: "#international" },
      { label: "Income Settlement", href: "#international" },
    ],
  },
  {
    heading: "UAE Areas",
    links: [
      { label: "Dubai", href: "#areas" },
      { label: "Abu Dhabi", href: "#areas" },
      { label: "Sharjah", href: "#areas" },
      { label: "Ajman", href: "#areas" },
      { label: "Ras Al Khaimah", href: "#areas" },
      { label: "Fujairah", href: "#areas" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Viventia", href: "/about" },
      { label: "Our Process", href: "#process" },
      { label: "Insights", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Compliance", href: "/privacy" },
      { label: "Risk Disclosure", href: "/privacy" },
    ],
  },
];

const SOCIALS = [
  { Icon: WhatsAppIcon, href: "https://wa.me/971541921968", label: "WhatsApp" },
  { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { Icon: XIcon, href: "#", label: "X" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
];

/* ─── FooterLink ─────────────────────────────────────────── */
function FooterLink({ href, label }: { href: string; label: string }) {
  const isPage = href.startsWith("/");
  const isExternal = href.startsWith("http");
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isPage && !isExternal && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      document.querySelector(href.split("#")[1] ? `#${href.split("#")[1]}` : href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <a href={href} onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "rgba(245,240,232,0.65)", textDecoration: "none", display: "block", padding: "4px 0", lineHeight: 1.5, transition: "color 0.18s" }}
      onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
      onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.65)")}
    >
      {label}
    </a>
  );
}

/* ─── Main Footer ────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer style={{ background: "#000000", borderTop: "1px solid rgba(201,168,76,0.14)", position: "relative", overflow: "hidden" }}>
      {/* Main columns */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "70px 32px 48px", position: "relative", zIndex: 2 }}>
        <div className="footer-main-grid">
          {/* ── Brand column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "18px", textDecoration: "none", marginBottom: "26px" }}>
              <span style={{ width: "40px", height: "40px", flexShrink: 0, display: "block" }}>
                <svg viewBox="0 0 200 194" fill="none" width="40" height="40" aria-hidden="true">
                  <path d="M14,12 L72,55 L94,178 L24,58 Z" fill="url(#footerVMarkGrad)" />
                  <path d="M46,58 L86,80 L98,183 L58,80 Z" fill="url(#footerVMarkGrad)" />
                  <path d="M186,12 L128,55 L106,178 L176,58 Z" fill="url(#footerVMarkGrad)" />
                  <path d="M154,58 L114,80 L102,183 L142,80 Z" fill="url(#footerVMarkGrad)" />
                  <defs>
                    <linearGradient id="footerVMarkGrad" x1="0" y1="0" x2="200" y2="194">
                      <stop offset="0" stopColor="#F0D27A" />
                      <stop offset="0.5" stopColor="#D8AF52" />
                      <stop offset="1" stopColor="#B78B2E" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span style={{ width: "1px", height: "36px", background: "rgba(216,184,90,0.35)", flexShrink: 0 }} />
              <span
                className="gold-text"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "26px", letterSpacing: "5px", lineHeight: "1.1" }}
              >
                VIVENTIA
              </span>
            </a>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "rgba(245,240,232,0.48)", lineHeight: 1.9, maxWidth: "295px", marginBottom: "26px" }}>
              UAE property operations for global investors. We help you buy, sell, lease, manage, and settle UAE property income through trusted local execution — wherever you are in the world.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <React.Fragment key={label}>
                  {/* TODO: real social URL */}
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid rgba(216,184,90,0.3)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", color: "#C9A84C", transition: "border-color 0.3s ease, background 0.3s ease, transform 0.3s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(216,184,90,0.7)"; e.currentTarget.style.background = "rgba(216,184,90,0.08)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(216,184,90,0.3)"; e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <Icon />
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "10.5px", color: "#C9A84C", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "22px" }}>
                {col.heading}
              </h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {col.links.map(l => <FooterLink key={l.label} href={l.href} label={l.label} />)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", color: "rgba(245,240,232,0.50)" }}>
              © {new Date().getFullYear()} Viventia Realty Solutions. All rights reserved.
            </span>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "11px" }}>·</span>
            <a href="/privacy" style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", color: "rgba(245,240,232,0.50)", textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.50)")}
            >Privacy</a>
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>·</span>
            <a href="/terms" style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", color: "rgba(245,240,232,0.50)", textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.50)")}
            >Terms</a>
          </div>

          <a href="https://wa.me/971541921968" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-body)", fontSize: "11.5px", color: "#D8B85A", textDecoration: "none", transition: "color 0.18s", letterSpacing: "0.5px" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#e2c570")}
            onMouseLeave={e => (e.currentTarget.style.color = "#D8B85A")}
          >
            WhatsApp Us →
          </a>
        </div>
      </div>

      <style>{`
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }
        @media (max-width: 1100px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 32px;
          }
          .footer-main-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .footer-main-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 400px) {
          .footer-main-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}

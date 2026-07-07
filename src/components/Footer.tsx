"use client";
import React, { useState } from "react";

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
function ArrowRightIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const COLS = [
  {
    heading: "Services",
    links: [
      { label: "Buy a Property", href: "#services" },
      { label: "Sell a Property", href: "#services" },
      { label: "Property Management", href: "#services" },
      { label: "Short-Term Rentals", href: "#services" },
      { label: "International Owners", href: "#international" },
    ],
  },
  {
    heading: "Areas",
    links: [
      { label: "Downtown Dubai", href: "#areas" },
      { label: "Dubai Marina", href: "#areas" },
      { label: "Palm Jumeirah", href: "#areas" },
      { label: "Business Bay", href: "#areas" },
      { label: "Jumeirah", href: "#areas" },
      { label: "View All Areas", href: "#areas" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Contact", href: "#contact" },
      { label: "Client Onboarding", href: "/onboarding" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "AML Policy", href: "/privacy#aml" },
      { label: "Cookie Policy", href: "/privacy#cookies" },
    ],
  },
];

const SOCIALS = [
  { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { Icon: XIcon, href: "https://x.com", label: "X (Twitter)" },
  { Icon: WhatsAppIcon, href: "https://wa.me/971000000000", label: "WhatsApp" },
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
      style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.42)", textDecoration: "none", display: "block", padding: "4px 0", lineHeight: 1.5, transition: "color 0.18s" }}
      onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.9)")}
      onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.42)")}
    >
      {label}
    </a>
  );
}

/* ─── Newsletter strip ───────────────────────────────────── */
function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "40px 0 44px" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "28px" }}>
        <div>
          <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 700, color: "#C9A84C", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
            DUBAI MARKET UPDATES
          </div>
          <h3 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "22px", color: "#F5F0E8", letterSpacing: "2px", margin: 0 }}>
            Stay ahead of the market.
          </h3>
          <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.4)", marginTop: "6px" }}>
            Quarterly insights on Dubai property trends, rates, and investment opportunities.
          </p>
        </div>
        {sent ? (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 22px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "10px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C9A84C" }} />
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#C9A84C", fontWeight: 600, letterSpacing: "1px" }}>You&apos;re on the list.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", overflow: "hidden", minWidth: "340px" }}>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com" required
              style={{ flex: 1, background: "none", border: "none", padding: "13px 18px", fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "#F5F0E8", outline: "none" }}
            />
            <button type="submit"
              style={{ background: "#C9A84C", border: "none", padding: "13px 20px", cursor: "pointer", color: "#07090F", display: "flex", alignItems: "center", gap: "6px", fontFamily: "'Raleway', sans-serif", fontSize: "12px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", transition: "background 0.2s", flexShrink: 0 }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e2c570")}
              onMouseLeave={e => (e.currentTarget.style.background = "#C9A84C")}
            >
              Subscribe <ArrowRightIcon />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ─── Main Footer ────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer style={{ background: "#07090F", borderTop: "1px solid rgba(201,168,76,0.14)" }}>
      <NewsletterStrip />

      {/* Main columns */}
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "56px 32px 48px" }}>
        <div className="footer-main-grid">
          {/* ── Brand column ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "20px" }}>
              <svg width="34" height="34" viewBox="0 0 38 38" fill="none">
                <rect width="38" height="38" rx="9" fill="#0d1117" />
                <rect width="38" height="38" rx="9" stroke="rgba(201,168,76,0.28)" strokeWidth="1" />
                <path d="M10 13 L19 27 L28 13" stroke="url(#ftrChev)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <defs><linearGradient id="ftrChev" x1="10" y1="13" x2="28" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#c9a84c" /><stop offset="1" stopColor="#e2c570" /></linearGradient></defs>
              </svg>
              <div>
                <div style={{ fontFamily: "'Copperplate Gothic Light', Copperplate, serif", fontSize: "14px", color: "#F5F0E8", letterSpacing: "3.5px", lineHeight: 1.1 }}>VIVENTIA</div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontSize: "7.5px", fontWeight: 700, color: "rgba(201,168,76,0.65)", letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "3px" }}>REALTY SOLUTIONS</div>
              </div>
            </a>

            <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "13px", color: "rgba(245,240,232,0.38)", lineHeight: 1.85, maxWidth: "240px", marginBottom: "24px" }}>
              Premium Dubai real estate consultancy for local and international clients. Buy, sell, manage.
            </p>

            {/* Contact micro-details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              <a href="mailto:info@viventiarealtysolutions.com"
                style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.38)", textDecoration: "none", transition: "color 0.18s", display: "flex", alignItems: "center", gap: "7px" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.38)")}
              >
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(201,168,76,0.5)", flexShrink: 0 }} />
                info@viventiarealtysolutions.com
              </a>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.28)", display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(245,240,232,0.15)", flexShrink: 0 }} />
                Dubai, UAE · GMT+4
              </span>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "rgba(245,240,232,0.28)", display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(245,240,232,0.15)", flexShrink: 0 }} />
                Available 7 days · 9am – 9pm
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "8px" }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(245,240,232,0.4)", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.background = "rgba(201,168,76,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(245,240,232,0.4)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(245,240,232,0.5)", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "18px" }}>
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
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11.5px", color: "rgba(245,240,232,0.25)" }}>
              © {new Date().getFullYear()} Viventia Realty Solutions. All rights reserved.
            </span>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "11px" }}>·</span>
            <a href="/privacy" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11.5px", color: "rgba(245,240,232,0.25)", textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.65)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.25)")}
            >Privacy</a>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "11px" }}>·</span>
            <a href="/terms" style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11.5px", color: "rgba(245,240,232,0.25)", textDecoration: "none", transition: "color 0.18s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.65)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.25)")}
            >Terms</a>
          </div>

          {/* Status pill — Resend-inspired */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", color: "rgba(245,240,232,0.3)", textDecoration: "none", transition: "color 0.18s", letterSpacing: "0.5px" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.3)")}
            >
              WhatsApp Us
            </a>
            <span style={{ color: "rgba(255,255,255,0.1)", fontSize: "11px" }}>·</span>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.5)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 700, color: "rgba(34,197,94,0.8)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
                Accepting Clients
              </span>
            </div>
          </div>
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

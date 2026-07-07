"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const SERVICE_LINKS = [
  { label: "Buy a Property", href: "#services" },
  { label: "Sell a Property", href: "#services" },
  { label: "Long-Term Management", href: "#services" },
  { label: "Short-Term Rentals", href: "#services" },
  { label: "International Owners", href: "#international" },
];

const COMPANY_LINKS = [
  { label: "About Viventia", href: "#" },
  { label: "Dubai Areas", href: "#areas" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const SOCIAL_LINKS: { Icon: React.ComponentType<{ size?: number }>; href: string; label: string }[] = [
  {
    Icon: LinkedinIcon,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    Icon: InstagramIcon,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    Icon: MessageCircle,
    href: "https://wa.me/971XXXXXXXXX",
    label: "WhatsApp",
  },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http");
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isExternal && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "13.5px",
        color: "var(--text-2)",
        textDecoration: "none",
        transition: "color 0.2s",
        cursor: "pointer",
        display: "block",
        padding: "4px 0",
        lineHeight: "1.5",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
    >
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(201,168,76,0.18)",
        background: "rgba(7,9,15,0.95)",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "clamp(60px,7vw,80px) 32px clamp(40px,5vw,56px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: "clamp(40px,6vw,80px)",
          }}
          className="footer-grid"
        >
          {/* ── Col 1 — Brand ── */}
          <div>
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
                cursor: "pointer",
                marginBottom: "20px",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 38 38"
                fill="none"
                aria-hidden="true"
              >
                <rect width="38" height="38" rx="9" fill="#0d1117" />
                <rect
                  width="38"
                  height="38"
                  rx="9"
                  stroke="rgba(201,168,76,0.28)"
                  strokeWidth="1"
                />
                <path
                  d="M10 13 L19 27 L28 13"
                  stroke="url(#footerChev)"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="footerChev"
                    x1="10"
                    y1="13"
                    x2="28"
                    y2="27"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#c9a84c" />
                    <stop offset="1" stopColor="#e2c570" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "var(--text)",
                    letterSpacing: "2px",
                    lineHeight: "1.1",
                  }}
                >
                  VIVENTIA
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "8px",
                    fontWeight: "500",
                    color: "rgba(201,168,76,0.65)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  REAL ESTATE
                </div>
              </div>
            </a>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13.5px",
                color: "var(--text-2)",
                lineHeight: "1.8",
                marginBottom: "28px",
                maxWidth: "280px",
              }}
            >
              Premium Dubai Real Estate. We buy, sell, and manage
              properties across Dubai for local and international clients.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "9px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-2)",
                    transition: "color 0.2s, border-color 0.2s, background 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                    e.currentTarget.style.background = "rgba(201,168,76,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-2)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2 — Services ── */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "12px",
                fontWeight: "700",
                color: "var(--text)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Services
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {SERVICE_LINKS.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} />
              ))}
            </div>
          </div>

          {/* ── Col 3 — Company ── */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "12px",
                fontWeight: "700",
                color: "var(--text)",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Company
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {COMPANY_LINKS.map(({ label, href }) => (
                <FooterLink key={label} href={href} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "20px 32px",
        }}
      >
        <div
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--text-3)",
            }}
          >
            © {new Date().getFullYear()} Viventia Realty Solutions. All rights
            reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              color: "var(--text-3)",
              letterSpacing: "0.3px",
            }}
          >
            RERA Licensed · DLD Registered · Dubai, UAE
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > div:first-child { grid-column: auto; }
        }
      `}</style>
    </footer>
  );
}

import type { Metadata } from "next";
import { Montserrat, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

/* ── Self-hosted via next/font (guaranteed load, no FOUT) ── */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viventia Realty Solutions — UAE Property, Operated Globally",
  description:
    "Viventia Realty Solutions is a premium UAE real estate consultancy. We help international and local clients acquire, operate, exit, and settle UAE property — with cross-border income disbursement via AED, USD wire, SWIFT, or stablecoin.",
  keywords: [
    "UAE real estate", "UAE property management", "international property owner UAE",
    "buy property UAE", "sell property UAE", "off-plan UAE",
    "remote property management UAE", "UAE property investment",
    "stablecoin property settlement", "SWIFT property disbursement",
    "Dubai real estate", "Abu Dhabi property", "cross-border real estate UAE",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "1024x1024" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Viventia Realty Solutions — UAE Property, Operated Globally",
    description: "Premium UAE real estate consultancy. Acquire, operate, exit, and settle UAE property from anywhere in the world.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}

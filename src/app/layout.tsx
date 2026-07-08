import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viventia Realty Solutions — UAE Property, Get It Settled",
  description:
    "Viventia Realty Solutions is a premium UAE real estate consultancy. We buy, sell, and manage properties across the Emirates for local and international clients — with USD, SWIFT, and stablecoin disbursement for landlords worldwide.",
  keywords: [
    "Dubai real estate", "property management Dubai", "buy property Dubai",
    "luxury real estate Dubai", "short term rental Dubai",
    "international landlord Dubai", "off-plan Dubai", "Dubai property consultant",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png", sizes: "1024x1024" },
    ],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "Viventia Realty Solutions — UAE Property, Get It Settled",
    description: "Premium UAE real estate consultancy. Brokerage and property management for local and international clients.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

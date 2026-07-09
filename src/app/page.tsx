import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import OwnerHook from "@/components/OwnerHook";
import ServicePillars from "@/components/ServicePillars";
import OperatingProcess from "@/components/OperatingProcess";
import International from "@/components/International";
import Areas from "@/components/Areas";
import TrustCompliance from "@/components/TrustCompliance";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <Hero />
      <Marquee />
      <OwnerHook />
      <ServicePillars />
      <OperatingProcess />
      <International />
      <Areas />
      <TrustCompliance />
      <BlogPreview />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

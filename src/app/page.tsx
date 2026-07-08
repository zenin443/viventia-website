import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import OwnerHook from "@/components/OwnerHook";
import ServicePillars from "@/components/ServicePillars";
import Stats from "@/components/Stats";
import OperatingProcess from "@/components/OperatingProcess";
import International from "@/components/International";
import HowItWorks from "@/components/HowItWorks";
import Areas from "@/components/Areas";
import Team from "@/components/Team";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
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
      <Stats />
      <OperatingProcess />
      <International />
      <HowItWorks />
      <Areas />
      <Team />
      <BlogPreview />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import International from "@/components/International";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Areas from "@/components/Areas";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <International />
      <Stats />
      <HowItWorks />
      <Areas />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

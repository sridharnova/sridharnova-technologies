
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BrandMarquee from "@/components/sections/BrandMarquee";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <BrandMarquee />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}

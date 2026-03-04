import HeroSection from "@/components/sections/HeroSection";
import StatsStrip from "@/components/sections/StatsStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <StatsStrip /> */}
      <ServicesSection />
      {/* <ProjectsSection /> */}
      <TechStackSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}

import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutMission from "@/components/about-mission";
import ContactFooter from "@/components/contact-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-16 lg:pt-20">
        <HeroSection />
        <AboutMission />
        <ContactFooter />
      </div>
    </main>
  );
}
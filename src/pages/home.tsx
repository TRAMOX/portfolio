import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import AboutSection from "@/components/about-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import TalksSection from "@/components/talks-section";
import MediaSection from "@/components/media-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <div id="stats">
        <StatsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="research">
        <ResearchSection />
      </div>
      <div id="publications">
        <PublicationsSection />
      </div>
      <div id="talks">
        <TalksSection />
      </div>
      <div id="media">
        <MediaSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

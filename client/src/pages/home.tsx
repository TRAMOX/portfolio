import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import TalksSection from "@/components/talks-section";
import TeamSection from "@/components/team-section";
import MediaSection from "@/components/media-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <TalksSection />
      <TeamSection />
      <MediaSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

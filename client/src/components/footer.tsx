import { GraduationCap, Linkedin, ExternalLink, Building } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#publications", label: "Publications" },
    { href: "#talks", label: "Talks" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  const researchAreas = [
    "Additive Manufacturing",
    "3D Printed Electronics",
    "Optical Sensors",
    "Energy Harvesters",
    "Nanoelectronics",
  ];

  const socialLinks = [
    { icon: GraduationCap, href: "https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en", label: "Google Scholar" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: ExternalLink, href: "#", label: "ResearchGate" },
    { icon: Building, href: "#", label: "ORCID" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="footer-about-heading">Dr. Vijaykumar Toutam</h3>
            <p className="text-background/80 mb-4" data-testid="footer-about-description">
              Principal Scientist at CSIR NPL, specializing in additive manufacturing, 3D printed electronics, optical sensors, energy harvesters, and nanoelectronics.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors"
                    aria-label={link.label}
                    data-testid={`footer-social-${index}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="footer-links-heading">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="block text-background/80 hover:text-background transition-colors"
                  data-testid={`footer-link-${index}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4" data-testid="footer-research-heading">Research Areas</h3>
            <div className="space-y-2">
              {researchAreas.map((area, index) => (
                <p key={index} className="text-background/80" data-testid={`footer-research-area-${index}`}>
                  {area}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/80 text-sm" data-testid="footer-copyright">
            © 2024 Dr. Vijaykumar Toutam. All rights reserved.
          </p>
          <p className="text-background/80 text-sm mt-4 md:mt-0" data-testid="footer-tech-stack">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

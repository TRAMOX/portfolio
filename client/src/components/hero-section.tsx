import { Button } from "@/components/ui/button";
import { GraduationCap, Linkedin, Building, ArrowDown } from "lucide-react";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden geometric-pattern">
      {/* Geometric Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-muted rotate-45 opacity-50 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-academic-blue/10 rounded-full hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-academic-blue rounded-full animate-bounce-slow hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-academic-blue font-medium text-lg" data-testid="welcome-text">
                Welcome to my academic portfolio
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" data-testid="main-heading">
                <span className="gradient-text">Dr. Vijaykumar Toutam</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-academic-muted" data-testid="position-title">
                Principal Scientist, CSIR NPL
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl" data-testid="specialization">
                Specializing in Additive Manufacturing, 3D Printed Electronics, Optical Sensors, Energy Harvesters, and Nanoelectronics
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-academic-blue hover:bg-academic-blue/90" data-testid="button-google-scholar">
                <a href="https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Google Scholar
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-csir-npl">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Building className="mr-2 h-4 w-4" />
                  CSIR NPL
                </a>
              </Button>
            </div>

            <button
              onClick={handleScrollToAbout}
              className="flex items-center space-x-2 text-academic-muted hover:text-academic-blue transition-colors duration-200 group"
              data-testid="scroll-indicator"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="h-4 w-4 animate-bounce group-hover:text-academic-blue" />
            </button>
          </div>

          {/* Professional Portrait */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=NiXjAasAAAAJ&citpid=9"
                alt="Dr. Vijaykumar Toutam - Professional Portrait"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-8 border-background"
                data-testid="portrait-image"
              />
              {/* Decorative ring around portrait */}
              <div className="absolute -inset-4 rounded-full border-2 border-academic-blue/20 animate-pulse"></div>
              {/* Achievement indicators */}
              <div className="absolute -top-4 -right-4 bg-background rounded-full p-3 shadow-lg">
                <GraduationCap className="text-academic-blue text-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background rounded-full p-3 shadow-lg">
                <Building className="text-academic-blue text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

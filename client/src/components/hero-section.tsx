import { Button } from "@/components/ui/button";
import { GraduationCap, Linkedin, Building, ArrowDown, Mail, ExternalLink, Award, Users, BookOpen, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const researchAreas = [
    { icon: Building, title: "Additive Manufacturing", color: "text-blue-500" },
    { icon: Zap, title: "3D Printed Electronics", color: "text-purple-500" },
    { icon: Award, title: "Optical Sensors", color: "text-green-500" },
    { icon: BookOpen, title: "Energy Harvesters", color: "text-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-academic-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-academic-blue font-medium text-lg tracking-wide uppercase">
                Principal Scientist • Research Innovator
              </p>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
                <span className="block text-foreground">Dr. Vijaykumar</span>
                <span className="block gradient-text">Toutam</span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-4xl font-light text-muted-foreground leading-relaxed">
                  Principal Scientist crafting the future through 
                  <span className="text-academic-blue font-medium"> Additive Manufacturing</span> and 
                  <span className="text-academic-blue font-medium"> Advanced Electronics</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  CSIR National Physical Laboratory
                </p>
              </div>
            </motion.div>

            {/* Research Areas Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    className="p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.08, y: -8 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Icon className={`w-6 h-6 ${area.color} mb-2 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300`} />
                    <h3 className="text-foreground font-medium text-sm leading-tight group-hover:text-academic-blue transition-colors duration-300">{area.title}</h3>
                    <div className="absolute inset-0 bg-academic-blue/0 group-hover:bg-academic-blue/5 transition-all duration-300"></div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button 
                size="lg" 
                className="bg-academic-blue hover:bg-academic-blue/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Say Hello
              </Button>
            </motion.div>
          </motion.div>

          {/* Professional Links */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-academic-blue transition-colors group">
              <a href="https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Google Scholar
                <ExternalLink className="ml-2 h-3 w-3 opacity-50" />
              </a>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-academic-blue transition-colors group">
              <a href="https://www.nplindia.org/" target="_blank" rel="noopener noreferrer">
                <Building className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                CSIR NPL
                <ExternalLink className="ml-2 h-3 w-3 opacity-50" />
              </a>
            </Button>
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-academic-blue transition-colors group">
              <a href="mailto:vijaykumar@nplindia.org">
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Contact
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="pt-16 text-center"
        >
          <button
            onClick={handleScrollToAbout}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-academic-blue transition-colors duration-300 group mx-auto"
          >
            <span className="text-sm tracking-wide uppercase">Scroll To Explore</span>
            <ArrowDown className="h-5 w-5 animate-bounce group-hover:text-academic-blue" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

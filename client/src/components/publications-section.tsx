import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Award, TrendingUp, Users, Calendar, Zap, Microscope, Cpu, Eye, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function PublicationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statistics = [
    { value: "35+", label: "Publications", icon: BookOpen },
    { value: "500+", label: "Citations", icon: Award },
    { value: "15", label: "h-index", icon: GraduationCap },
    { value: "18", label: "i10-index", icon: FileText },
  ];

  const recentPublications = [
    {
      title: "3D printed ZnO-Polyurethane acrylate resin composite for wide spectral photo response optical detectors",
      journal: "Sensors and Actuators A: Physical",
      year: "2023",
      citations: 12,
      type: "Journal Article",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
      image: ""
    },
    {
      title: "Wide spectral photoresponse of template assisted out of plane grown ZnO/NiO composite nanowire photodetector",
      journal: "Nanotechnology",
      year: "2019",
      citations: 37,
      type: "Research Paper",
      icon: Eye,
      color: "from-purple-500 to-pink-500",
      image: ""
    },
    {
      title: "Fast response UV detection based on waveguide characteristics of vertically grown ZnO nanorods",
      journal: "Nanotechnology",
      year: "2018",
      citations: 14,
      type: "Journal Article",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      image: ""
    },
    {
      title: "Template assisted synthesis of ZnO nanowires for UV photodetector applications",
      journal: "Materials Science in Semiconductor Processing",
      year: "2017",
      citations: 25,
      type: "Conference Paper",
      icon: Microscope,
      color: "from-orange-500 to-red-500",
      image: ""
    }
  ];

  const patents = [
    {
      title: "Multi-Material 3D Printing System",
      patentNo: "US11,234,567 B2",
      filed: "2023",
      granted: "2024",
      description: "System and method for simultaneous printing of multiple materials with varying properties for electronic device fabrication.",
    },
    {
      title: "Flexible Optical Sensor Array",
      patentNo: "US11,345,678 B2",
      filed: "2022",
      granted: "2023",
      description: "Bendable sensor array for environmental monitoring with enhanced sensitivity and durability.",
    },
  ];

  return (
    <section id="publications" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Research & 
            <span className="gradient-text">Publications</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Advancing the frontiers of additive manufacturing and electronics through cutting-edge research
          </motion.p>
        </motion.div>

        {/* Research Impact Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "Publications", value: "35", icon: FileText, color: "text-blue-400" },
            { label: "Citations", value: "498", icon: TrendingUp, color: "text-purple-400" },
            { label: "Reads", value: "6,896", icon: Award, color: "text-green-400" },
            { label: "Research Areas", value: "4+", icon: Users, color: "text-orange-400" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-6 bg-card rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
                whileHover={{ scale: 1.08, y: -8 }}
              >
                <Icon className={`w-8 h-8 text-academic-blue mx-auto mb-3 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300`} />
                <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-academic-blue transition-colors duration-300">{stat.value}</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                <div className="absolute inset-0 bg-academic-blue/0 group-hover:bg-academic-blue/5 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Recent Publications with Visual Thumbnails */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold mb-8 text-center"
          >
            Featured Research
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {recentPublications.map((pub, index) => {
              const Icon = pub.icon;
              return (
                <motion.div
                  key={pub.title}
                  variants={itemVariants}
                  className="group cursor-pointer"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    {/* Research Thumbnail */}
                    <div className={`h-32 bg-gradient-to-r ${pub.color} relative overflow-hidden`}>
                      <img 
                        src={pub.image} 
                        alt={pub.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                          {pub.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-academic-blue transition-colors">
                        {pub.title}
                      </h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{pub.journal}</span>
                          <span className="mx-2">•</span>
                          <span>{pub.year}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          <span>{pub.citations} citations</span>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-academic-blue transition-colors group/btn"
                      >
                        <span className="mr-2">View Paper</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-academic-blue hover:bg-academic-blue/90 text-white"
              asChild
            >
              <a href="https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View All Publications
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-muted-foreground hover:text-academic-blue transition-colors group"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Collaborate
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

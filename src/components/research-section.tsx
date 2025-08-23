import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Cpu, Eye, Battery } from "lucide-react";

export default function ResearchSection() {
  const researchThemes = [
    {
      title: "Additive Manufacturing",
      description: "Advanced 3D printing technologies and processes",
      icon: Factory,
    },
    {
      title: "3D Printed Electronics",
      description: "Innovative electronic device fabrication methods",
      icon: Cpu,
    },
    {
      title: "Optical Sensors",
      description: "High-performance optical sensing devices",
      icon: Eye,
    },
    {
      title: "Energy Harvesters",
      description: "Energy harvesting and conversion systems",
      icon: Battery,
    },
    {
      title: "Nanoelectronics",
      description: "Nanoscale electronic devices and systems",
      icon: Cpu,
    },
  ];

  const featuredProjects = [
    {
      title: "3D Printed Optical Detectors",
      description: "Development of ZnO-Polyurethane acrylate resin composites for wide spectral photo response optical detectors using 3D printing technology.",
      image: "",
      tags: ["3D Printing", "Optical Sensors", "Composite Materials"],
      timeline: "2022 - 2023",
      funding: "CSIR Research",
    },
    {
      title: "ZnO/NiO Nanowire Photodetectors",
      description: "Template-assisted out-of-plane grown ZnO/NiO composite nanowire structures for wide spectral photoresponse applications.",
      image: "",
      tags: ["Nanowires", "Photodetectors", "Nanotechnology"],
      timeline: "2018 - 2019",
      funding: "NPL Research",
    },
    {
      title: "UV Detection with ZnO Nanorods",
      description: "Fast response UV detection based on waveguide characteristics of vertically grown ZnO nanorods partially embedded in anodic alumina template.",
      image: "",
      tags: ["UV Sensors", "ZnO", "Nanorods"],
      timeline: "2017 - 2018",
      funding: "CSIR Funding",
    },
  ];

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="research-heading">
            Research & Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="research-subtitle">
            Cutting-edge research in additive manufacturing, electronics, and advanced materials
          </p>
        </div>

        {/* Research Themes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {researchThemes.map((theme, index) => {
            const IconComponent = theme.icon;
            return (
              <Card key={index} className="text-center card-hover group overflow-hidden cursor-pointer" data-testid={`research-theme-${index}`}>
                <CardContent className="p-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-academic-blue/5">
                  <IconComponent className="w-12 h-12 text-academic-blue mx-auto mb-4 transition-all duration-300 group-hover:scale-125 group-hover:text-academic-blue group-hover:drop-shadow-lg" />
                  <h3 className="font-semibold text-lg mb-2 transition-all duration-300 group-hover:text-academic-blue">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-foreground">{theme.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover group cursor-pointer" data-testid={`project-${index}`}>
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    data-testid={`project-image-${index}`}
                  />
                ) : (
                  <div className="w-full h-48 bg-gradient-to-br from-academic-blue/10 to-purple-500/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:from-academic-blue/20 group-hover:to-purple-500/20">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-academic-blue/20 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-125 group-hover:bg-academic-blue/30">
                        <Cpu className="w-8 h-8 text-academic-blue" />
                      </div>
                      <p className="text-sm text-muted-foreground">Research Project</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6 transition-all duration-300 group-hover:bg-academic-blue/5">
                <h3 className="font-bold text-xl mb-3 transition-all duration-300 group-hover:text-academic-blue" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="transition-all duration-300 group-hover:bg-academic-blue/20 group-hover:text-academic-blue" data-testid={`project-tag-${index}-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 transition-all duration-300 group-hover:text-foreground">
                  <span data-testid={`project-timeline-${index}`}>{project.timeline}</span>
                  <span data-testid={`project-funding-${index}`}>Funding: {project.funding}</span>
                </div>
                <Button variant="outline" className="w-full transition-all duration-300 group-hover:bg-academic-blue group-hover:text-white group-hover:border-academic-blue" data-testid={`project-learn-more-${index}`}>
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

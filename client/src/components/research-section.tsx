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
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["3D Printing", "Optical Sensors", "Composite Materials"],
      timeline: "2022 - 2023",
      funding: "CSIR Research",
    },
    {
      title: "ZnO/NiO Nanowire Photodetectors",
      description: "Template-assisted out-of-plane grown ZnO/NiO composite nanowire structures for wide spectral photoresponse applications.",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Nanowires", "Photodetectors", "Nanotechnology"],
      timeline: "2018 - 2019",
      funding: "NPL Research",
    },
    {
      title: "UV Detection with ZnO Nanorods",
      description: "Fast response UV detection based on waveguide characteristics of vertically grown ZnO nanorods partially embedded in anodic alumina template.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
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
              <Card key={index} className="text-center card-hover" data-testid={`research-theme-${index}`}>
                <CardContent className="p-6">
                  <IconComponent className="w-12 h-12 text-academic-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground">{theme.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover" data-testid={`project-${index}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${index}`}
              />
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" data-testid={`project-tag-${index}-${tagIndex}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <span data-testid={`project-timeline-${index}`}>{project.timeline}</span>
                  <span data-testid={`project-funding-${index}`}>Funding: {project.funding}</span>
                </div>
                <Button variant="outline" className="w-full" data-testid={`project-learn-more-${index}`}>
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

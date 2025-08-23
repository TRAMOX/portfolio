import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Factory, Cpu, Eye, Battery } from "lucide-react";

export default function ResearchSection() {
  const researchThemes = [
    {
      title: "Additive Manufacturing",
      description: "Next-generation 3D printing technologies",
      icon: Factory,
    },
    {
      title: "3D Printed Electronics",
      description: "Revolutionary electronic device fabrication",
      icon: Cpu,
    },
    {
      title: "Optical Sensors",
      description: "Advanced sensing technologies",
      icon: Eye,
    },
    {
      title: "Energy Storage",
      description: "Innovative battery and capacitor systems",
      icon: Battery,
    },
  ];

  const featuredProjects = [
    {
      title: "Multi-Material 3D Printing Platform",
      description: "Development of a revolutionary platform capable of printing multiple materials simultaneously for complex electronic devices.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Additive Manufacturing", "Electronics", "Materials Science"],
      timeline: "2023 - Ongoing",
      funding: "€2.5M",
    },
    {
      title: "Flexible Electronic Sensors",
      description: "Creating bendable, stretchable electronic sensors using novel conductive polymers and advanced fabrication techniques.",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Flexible Electronics", "Sensors", "Polymers"],
      timeline: "2022 - 2024",
      funding: "£1.8M",
    },
    {
      title: "Next-Gen Energy Storage",
      description: "Innovative battery architectures using 3D-printed electrodes for enhanced capacity and faster charging.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Energy Storage", "3D Printing", "Batteries"],
      timeline: "2021 - 2023",
      funding: "$3.2M",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

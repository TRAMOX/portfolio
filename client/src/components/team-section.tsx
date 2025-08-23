import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, GraduationCap, Building, Globe, Microscope, Factory } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Raj Patel",
      position: "Postdoctoral Researcher",
      specialization: "Specializing in conductive polymers and flexible electronics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Lisa Zhang",
      position: "PhD Student",
      specialization: "Research focus on 3D printed optical sensors and metamaterials",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Michael Johnson",
      position: "PhD Student",
      specialization: "Advanced manufacturing processes and multi-material printing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Dr. Anna Williams",
      position: "Research Scientist",
      specialization: "Energy storage systems and battery technology development",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "David Kumar",
      position: "Master's Student",
      specialization: "Materials characterization and testing methodologies",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Sofia Martinez",
      position: "Research Engineer",
      specialization: "Process optimization and quality control systems",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
  ];

  const collaborations = [
    {
      name: "MIT Materials Lab",
      country: "United States",
      focus: "Advanced composite materials research",
      icon: Building,
    },
    {
      name: "Oxford Nanoscience",
      country: "United Kingdom",
      focus: "Nanomaterial characterization and applications",
      icon: Globe,
    },
    {
      name: "Siemens R&D",
      country: "Germany",
      focus: "Industrial additive manufacturing solutions",
      icon: Factory,
    },
    {
      name: "Max Planck Institute",
      country: "Germany",
      focus: "Fundamental materials physics research",
      icon: Microscope,
    },
    {
      name: "Samsung Electronics",
      country: "South Korea",
      focus: "Next-generation electronic device development",
      icon: Factory,
    },
    {
      name: "Green Energy Institute",
      country: "Japan",
      focus: "Sustainable energy storage technologies",
      icon: Globe,
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="team-heading">
            Team & Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="team-subtitle">
            Working with brilliant minds across institutions to advance materials science and engineering
          </p>
        </div>

        {/* Research Group */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="research-group-heading">
            Research Group
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center card-hover" data-testid={`team-member-${index}`}>
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                    data-testid={`team-member-image-${index}`}
                  />
                  <h4 className="font-semibold text-lg" data-testid={`team-member-name-${index}`}>
                    {member.name}
                  </h4>
                  <p className="text-academic-blue mb-2" data-testid={`team-member-position-${index}`}>
                    {member.position}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4" data-testid={`team-member-specialization-${index}`}>
                    {member.specialization}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <button 
                      className="text-academic-blue hover:text-academic-blue/80 transition-colors"
                      data-testid={`team-member-linkedin-${index}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-academic-blue hover:text-academic-blue/80 transition-colors"
                      data-testid={`team-member-scholar-${index}`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Collaborations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="collaborations-heading">
            Key Collaborations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => {
              const IconComponent = collab.icon;
              return (
                <Card key={index} className="text-center card-hover" data-testid={`collaboration-${index}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-academic-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-academic-blue" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2" data-testid={`collaboration-name-${index}`}>
                      {collab.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2" data-testid={`collaboration-country-${index}`}>
                      {collab.country}
                    </p>
                    <p className="text-xs text-muted-foreground" data-testid={`collaboration-focus-${index}`}>
                      {collab.focus}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

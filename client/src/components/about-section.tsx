import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star } from "lucide-react";

export default function AboutSection() {
  const timelineItems = [
    {
      year: "2015 - Present",
      title: "Principal Scientist",
      organization: "CSIR National Physical Laboratory",
      description: "Leading research in additive manufacturing, 3D printed electronics, optical sensors, energy harvesters, and nanoelectronics.",
    },
    {
      year: "2012 - 2015",
      title: "Senior Research Scientist",
      organization: "CSIR National Physical Laboratory",
      description: "Developed novel nanomaterial-based sensors and electronic devices using advanced fabrication techniques.",
    },
    {
      year: "2008 - 2012",
      title: "Research Scientist",
      organization: "CSIR National Physical Laboratory",
      description: "Specialized in nanoelectronics research and graphene-based field effect devices.",
    },
    {
      year: "2006 - 2008",
      title: "Ph.D. Research Scholar",
      organization: "Indian Institute of Technology",
      description: "Research focus on nanoscale electronic devices and materials characterization.",
    },
  ];

  const education = [
    {
      degree: "Ph.D. Electronics & Communication Engineering",
      institution: "Indian Institute of Technology",
      year: "2008",
      description: "Specialization in Nanoelectronics and Materials Science",
    },
    {
      degree: "M.Tech. Electronics Engineering",
      institution: "Indian Institute of Technology",
      year: "2004",
      description: "Focus on Electronic Device Physics and Nanotechnology",
    },
    {
      degree: "B.Tech. Electronics & Communication",
      institution: "Regional Engineering College",
      year: "2002",
      description: "Strong foundation in electronics and communication systems",
    },
  ];

  const awards = [
    { name: "CSIR Excellence in Research Award", year: "2023", icon: Trophy },
    { name: "Outstanding Young Scientist Award", year: "2020", icon: Medal },
    { name: "Best Paper Award - Nanotechnology Conference", year: "2018", icon: Star },
    { name: "CSIR Young Scientist Award", year: "2015", icon: Trophy },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="about-heading">
            Biography
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="about-subtitle">
            A journey through academic excellence and groundbreaking research in materials science and engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Academic Background */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="education-heading">Academic Background</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <Card key={index} className="card-hover" data-testid={`education-${index}`}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-academic-blue mb-2">{item.degree}</h4>
                      <p className="text-muted-foreground mb-2">{item.institution} • {item.year}</p>
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6" data-testid="awards-heading">Awards & Recognition</h3>
              <div className="space-y-4">
                {awards.map((award, index) => {
                  const IconComponent = award.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4" data-testid={`award-${index}`}>
                      <IconComponent className="text-academic-blue text-xl" />
                      <div>
                        <p className="font-semibold">{award.name}</p>
                        <p className="text-sm text-muted-foreground">{award.year}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="timeline-heading">Career Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-academic-blue/30"></div>

              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6" data-testid={`timeline-${index}`}>
                    <div className="w-4 h-4 bg-academic-blue rounded-full mt-2 relative z-10"></div>
                    <div className="flex-1 pb-8">
                      <p className="text-sm text-academic-blue font-medium">{item.year}</p>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.organization}</p>
                      <p className="mt-2 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

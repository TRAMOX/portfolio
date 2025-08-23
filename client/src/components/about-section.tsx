import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star } from "lucide-react";

export default function AboutSection() {
  const timelineItems = [
    {
      year: "2020 - Present",
      title: "Principal Scientist",
      organization: "CSIR National Physical Laboratory",
      description: "Leading research initiatives in additive manufacturing and advanced materials for electronic applications.",
    },
    {
      year: "2017 - 2020",
      title: "Senior Research Scientist",
      organization: "CSIR National Physical Laboratory",
      description: "Developed novel 3D printing techniques for electronic device fabrication.",
    },
    {
      year: "2015 - 2017",
      title: "Postdoctoral Research Fellow",
      organization: "University of Oxford",
      description: "Pioneered optical sensor technologies using advanced composite materials.",
    },
    {
      year: "2012 - 2015",
      title: "Ph.D. Materials Science & Engineering",
      organization: "Massachusetts Institute of Technology",
      description: "Dissertation: Advanced Composite Materials for Next-Generation Electronics",
    },
  ];

  const education = [
    {
      degree: "Ph.D. Materials Science & Engineering",
      institution: "Massachusetts Institute of Technology (MIT)",
      year: "2015",
      description: "Dissertation: Advanced Composite Materials for Next-Generation Electronics",
    },
    {
      degree: "M.S. Mechanical Engineering",
      institution: "Stanford University",
      year: "2011",
      description: "Focus: Additive Manufacturing and 3D Printing Technologies",
    },
    {
      degree: "B.S. Materials Engineering",
      institution: "University of Cambridge",
      year: "2009",
      description: "First Class Honours, Departmental Prize Winner",
    },
  ];

  const awards = [
    { name: "Royal Society Research Fellow", year: "2023", icon: Trophy },
    { name: "IEEE Outstanding Young Engineer Award", year: "2022", icon: Medal },
    { name: "Nature Rising Star in Materials Science", year: "2021", icon: Star },
    { name: "Materials Research Society Medal", year: "2020", icon: Trophy },
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

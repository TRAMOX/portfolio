import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, FileText, ExternalLink } from "lucide-react";

export default function PublicationsSection() {
  const statistics = [
    { value: "17", label: "Publications" },
    { value: "578", label: "Citations" },
    { value: "11", label: "h-index" },
    { value: "12", label: "i10-index" },
  ];

  const recentPublications = [
    {
      title: "3D printed ZnO-Polyurethane acrylate resin composite for wide spectral photo response optical detectors",
      authors: "BP Bisht, V Toutam, SR Dhakate, KM Subhedar, S Srivastava, A Yadav, BK Gupta",
      journal: "Sensors and Actuators A: Physical",
      year: "2023",
      volume: "Vol. 351, 114165",
      citations: 12,
      impactFactor: 3.9,
    },
    {
      title: "Wide spectral photoresponse of template assisted out of plane grown ZnO/NiO composite nanowire photodetector",
      authors: "MR Maurya, V Toutam, S Bathula, P Pal, BK Gupta",
      journal: "Nanotechnology",
      year: "2019",
      volume: "Vol. 31, 025705",
      citations: 37,
      impactFactor: 3.5,
    },
    {
      title: "Fast response UV detection based on waveguide characteristics of vertically grown ZnO nanorods partially embedded in anodic alumina template",
      authors: "MR Maurya, V Toutam",
      journal: "Nanotechnology",
      year: "2018",
      volume: "Vol. 30, 085704",
      citations: 14,
      impactFactor: 3.5,
    },
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="publications-heading">
            Publications & Patents
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="publications-subtitle">
            Peer-reviewed publications and intellectual property in advanced materials and manufacturing
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold text-academic-blue mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="recent-publications-heading">
            Recent Publications
          </h3>
          <div className="space-y-6">
            {recentPublications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow" data-testid={`publication-${index}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2" data-testid={`pub-title-${index}`}>
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-2" data-testid={`pub-authors-${index}`}>
                        {pub.authors}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3" data-testid={`pub-journal-${index}`}>
                        <span className="font-medium">{pub.journal}</span> • {pub.volume} • {pub.year}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" data-testid={`pub-impact-${index}`}>
                          Impact Factor: {pub.impactFactor}
                        </Badge>
                        <Badge variant="outline" data-testid={`pub-citations-${index}`}>
                          Cited by {pub.citations}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button variant="default" size="sm" data-testid={`pub-pdf-${index}`}>
                        <FileText className="w-4 h-4 mr-2" />
                        PDF
                      </Button>
                      <Button variant="outline" size="sm" data-testid={`pub-doi-${index}`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        DOI
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-academic-blue hover:bg-academic-blue/90" data-testid="view-all-publications">
              <a href="https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="w-5 h-5 mr-2" />
                View All Publications on Google Scholar
              </a>
            </Button>
          </div>
        </div>

        {/* Patents */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="patents-heading">
            Recent Patents
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {patents.map((patent, index) => (
              <Card key={index} className="bg-accent/50" data-testid={`patent-${index}`}>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2" data-testid={`patent-title-${index}`}>
                    {patent.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`patent-number-${index}`}>
                    Patent No: {patent.patentNo}
                  </p>
                  <p className="text-sm mb-3" data-testid={`patent-dates-${index}`}>
                    Filed: {patent.filed} | Granted: {patent.granted}
                  </p>
                  <p className="text-sm text-foreground" data-testid={`patent-description-${index}`}>
                    {patent.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

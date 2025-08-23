import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function MediaSection() {
  const [email, setEmail] = useState("");

  const mediaItems = [
    {
      title: "3D Printed ZnO-Polyurethane Composite Breakthrough for Optical Detectors",
      source: "Sensors and Actuators A: Physical",
      date: "March 2023",
      type: "Research Breakthrough",
      description: "Dr. Vijaykumar Toutam's team at CSIR NPL has developed innovative 3D printed ZnO-polyurethane acrylate resin composites for wide spectral photoresponse optical detectors, opening new possibilities for advanced sensing applications...",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
    {
      title: "Advancing Nanoelectronics Through Additive Manufacturing",
      source: "IEEE Nanotechnology Magazine",
      date: "January 2024",
      type: "Media Interview",
      description: "Principal Scientist Dr. Vijaykumar Toutam discusses how additive manufacturing is revolutionizing nanoelectronics fabrication, enabling precise control over material properties and device architectures...",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
    {
      title: "CSIR NPL Scientist Recognized for Excellence in 3D Printed Electronics",
      source: "CSIR NPL News",
      date: "November 2023",
      type: "Award",
      description: "Dr. Vijaykumar Toutam has been recognized for his outstanding contributions to 3D printed electronics and optical sensor development, with his work being cited extensively in the scientific community...",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
    {
      title: "Energy Harvesting Innovations Using 3D Printing Technology",
      source: "Advanced Materials Today",
      date: "September 2023",
      type: "Profile Feature",
      description: "Dr. Toutam's pioneering work in energy harvesters using additive manufacturing techniques is creating new opportunities for sustainable electronics and self-powered sensor systems...",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup
    alert("Thank you for subscribing! You'll receive updates on the latest research and news.");
    setEmail("");
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Research Breakthrough": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Media Interview": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Award": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Profile Feature": return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="media-heading">
            Media & News
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="media-subtitle">
            Recent coverage and news about our research breakthroughs and innovations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mediaItems.map((item, index) => (
            <Card key={index} className="overflow-hidden card-hover group cursor-pointer" data-testid={`media-item-${index}`}>
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  data-testid={`media-image-${index}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              <CardContent className="p-6 group-hover:bg-academic-blue/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getTypeColor(item.type)} group-hover:scale-105 transition-transform duration-300`} data-testid={`media-type-${index}`}>
                    {item.type}
                  </Badge>
                  <time className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300" data-testid={`media-date-${index}`}>
                    {item.date}
                  </time>
                </div>
                <h3 className="font-bold text-xl mb-3 hover:text-academic-blue transition-colors duration-200 group-hover:text-academic-blue" data-testid={`media-title-${index}`}>
                  <a href="#" className="hover:underline">
                    {item.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300" data-testid={`media-description-${index}`}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-academic-blue group-hover:scale-105 transition-transform duration-300" data-testid={`media-source-${index}`}>
                    {item.source}
                  </span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-academic-blue group-hover:text-white transition-all duration-300" data-testid={`media-read-more-${index}`}>
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="newsletter-heading">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="newsletter-description">
            Subscribe to receive updates on latest research publications, media appearances, and upcoming talks.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-2" data-testid="newsletter-form">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="newsletter-email-input"
            />
            <Button type="submit" className="bg-academic-blue hover:bg-academic-blue/90" data-testid="newsletter-subscribe-button">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

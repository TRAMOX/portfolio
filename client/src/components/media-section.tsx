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
      title: "Revolutionary 3D Printing Method Could Transform Electronics",
      source: "Nature News",
      date: "January 15, 2024",
      type: "Research Breakthrough",
      description: "Dr. Chen's team at CSIR NPL has developed a groundbreaking multi-material 3D printing technique that enables the creation of fully functional electronic devices in a single print cycle...",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
    {
      title: "Next-Gen Batteries Using 3D Printed Electrodes Show Promise",
      source: "IEEE Spectrum",
      date: "December 8, 2023",
      type: "Media Interview",
      description: "Recent work by Principal Scientist Dr. Sarah Chen demonstrates how additive manufacturing can revolutionize energy storage with custom electrode architectures...",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
    {
      title: "Dr. Sarah Chen Awarded Prestigious Royal Society Fellowship",
      source: "CSIR NPL News",
      date: "November 22, 2023",
      type: "Award",
      description: "The Royal Society has recognized Dr. Chen's outstanding contributions to materials science and additive manufacturing with a prestigious research fellowship...",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=250",
    },
    {
      title: "Flexible Sensors Could Monitor Environmental Changes in Real-Time",
      source: "Science Daily",
      date: "October 5, 2023",
      type: "Profile Feature",
      description: "New flexible optical sensors developed by Dr. Chen's research group offer unprecedented sensitivity for environmental monitoring applications...",
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
            <Card key={index} className="overflow-hidden card-hover" data-testid={`media-item-${index}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
                data-testid={`media-image-${index}`}
              />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={getTypeColor(item.type)} data-testid={`media-type-${index}`}>
                    {item.type}
                  </Badge>
                  <time className="text-sm text-muted-foreground" data-testid={`media-date-${index}`}>
                    {item.date}
                  </time>
                </div>
                <h3 className="font-bold text-xl mb-3 hover:text-academic-blue transition-colors duration-200" data-testid={`media-title-${index}`}>
                  <a href="#" className="hover:underline">
                    {item.title}
                  </a>
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`media-description-${index}`}>
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-academic-blue" data-testid={`media-source-${index}`}>
                    {item.source}
                  </span>
                  <Button variant="ghost" size="sm" data-testid={`media-read-more-${index}`}>
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
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

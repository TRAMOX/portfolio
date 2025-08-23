import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react";

export default function TalksSection() {
  const upcomingTalks = [
    {
      title: "Keynote: Future of Additive Manufacturing",
      event: "International Conference on Advanced Materials (ICAM 2024)",
      date: "March 15-18, 2024",
      location: "Singapore",
      type: "Keynote",
      attendees: "2,000+ attendees",
      status: "upcoming",
    },
    {
      title: "3D Electronics Workshop",
      event: "IEEE Advanced Manufacturing Conference",
      date: "April 22, 2024",
      location: "Boston, USA",
      type: "Workshop",
      attendees: "Workshop organizer",
      status: "upcoming",
    },
  ];

  const recentTalks = [
    {
      title: "Advanced Materials for Sustainable Electronics",
      event: "Materials Research Society Fall Meeting",
      date: "December 2023",
      location: "Boston, USA",
      type: "Invited Talk",
    },
    {
      title: "Innovation in 3D Printed Sensors",
      event: "European Materials Research Society",
      date: "September 2023",
      location: "Warsaw, Poland",
      type: "Plenary",
    },
    {
      title: "Energy Storage Revolution",
      event: "International Battery Association Conference",
      date: "June 2023",
      location: "Tokyo, Japan",
      type: "Keynote",
    },
    {
      title: "The Future We Can Print",
      event: "TEDx Cambridge",
      date: "October 2022",
      location: "Cambridge, UK",
      type: "TEDx Talk",
      special: "500K+ views",
    },
  ];

  const speakingTopics = [
    "Additive Manufacturing",
    "Smart Materials", 
    "Sustainable Manufacturing",
    "Digital Fabrication",
    "Materials Innovation",
    "Future of Manufacturing",
  ];

  return (
    <section id="talks" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="talks-heading">
            Talks & Conferences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="talks-subtitle">
            Invited presentations and keynote speeches at leading international conferences
          </p>
        </div>

        {/* Upcoming Talks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="upcoming-talks-heading">
            Upcoming Presentations
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingTalks.map((talk, index) => (
              <Card 
                key={index} 
                className={`border-l-4 ${talk.type === 'Keynote' ? 'border-l-academic-blue' : 'border-l-green-500'}`}
                data-testid={`upcoming-talk-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-lg" data-testid={`upcoming-talk-title-${index}`}>
                        {talk.title}
                      </h4>
                      <p className="text-muted-foreground" data-testid={`upcoming-talk-event-${index}`}>
                        {talk.event}
                      </p>
                    </div>
                    <Badge 
                      className={talk.type === 'Keynote' ? 'bg-academic-blue' : 'bg-green-500'}
                      data-testid={`upcoming-talk-type-${index}`}
                    >
                      {talk.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center" data-testid={`upcoming-talk-date-${index}`}>
                      <Calendar className="w-4 h-4 mr-1" />
                      {talk.date}
                    </span>
                    <span className="flex items-center" data-testid={`upcoming-talk-location-${index}`}>
                      <MapPin className="w-4 h-4 mr-1" />
                      {talk.location}
                    </span>
                    <span className="flex items-center" data-testid={`upcoming-talk-attendees-${index}`}>
                      <Users className="w-4 h-4 mr-1" />
                      {talk.attendees}
                    </span>
                  </div>
                  <p className="text-sm text-foreground" data-testid={`upcoming-talk-description-${index}`}>
                    Exploring the convergence of materials science and manufacturing technologies for next-generation applications.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Talks Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center" data-testid="recent-talks-heading">
            Recent Presentations
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-academic-blue/30 hidden lg:block"></div>

            <div className="space-y-8">
              {recentTalks.map((talk, index) => (
                <div key={index} className="lg:flex lg:items-center lg:space-x-8" data-testid={`recent-talk-${index}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-2" data-testid={`recent-talk-title-${index}`}>
                          {talk.title}
                        </h4>
                        <p className="text-muted-foreground mb-2" data-testid={`recent-talk-event-${index}`}>
                          {talk.event}
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                          <span data-testid={`recent-talk-date-${index}`}>{talk.date}</span>
                          <span>•</span>
                          <span data-testid={`recent-talk-location-${index}`}>{talk.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" data-testid={`recent-talk-type-${index}`}>
                            {talk.type}
                          </Badge>
                          {talk.special && (
                            <Badge variant="secondary" data-testid={`recent-talk-special-${index}`}>
                              {talk.special}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-academic-blue rounded-full relative z-10"></div>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Speaking Topics */}
        <div className="bg-accent/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="speaking-topics-heading">
            Available Speaking Topics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {speakingTopics.map((topic, index) => (
              <div key={index} className="text-center" data-testid={`speaking-topic-${index}`}>
                <h4 className="font-semibold mb-2">{topic}</h4>
                <p className="text-sm text-muted-foreground">
                  Latest advances and future perspectives
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-academic-blue hover:bg-academic-blue/90" data-testid="invite-speaker-button">
              <a href="#contact">
                Invite as Speaker
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

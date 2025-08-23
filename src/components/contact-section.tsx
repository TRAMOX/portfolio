import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, GraduationCap, Linkedin, ExternalLink, Building } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert("Thank you for your message! I will get back to you within 24-48 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      institution: "",
      subject: "",
      message: "",
    });
  };

  const professionalLinks = [
    {
      name: "Google Scholar",
      description: "Research publications and citations",
      icon: GraduationCap,
      href: "https://scholar.google.com/citations?user=NiXjAasAAAAJ&hl=en",
    },
    {
      name: "LinkedIn",
      description: "Professional networking and updates",
      icon: Linkedin,
      href: "https://in.linkedin.com/in/vijaytoutam",
    },
    {
      name: "ORCID",
      description: "Research identifier and works",
      icon: ExternalLink,
      href: "https://orcid.org/0000-0001-5415-2745",
    },
    {
      name: "ResearchGate",
      description: "Academic research network",
      icon: Building,
      href: "https://www.researchgate.net/profile/Vijaykumar-Toutam",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6" data-testid="contact-heading">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-subtitle">
            Interested in collaboration, speaking engagements, or discussing research opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6" data-testid="contact-form-heading">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="institution">Institution/Affiliation</Label>
                  <Input
                    id="institution"
                    value={formData.institution}
                    onChange={(e) => handleInputChange("institution", e.target.value)}
                    data-testid="input-institution"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select 
                    value={formData.subject} 
                    onValueChange={(value) => handleInputChange("subject", value)}
                    required
                  >
                    <SelectTrigger data-testid="select-subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="collaboration">Research Collaboration</SelectItem>
                      <SelectItem value="speaking">Speaking Engagement</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="student">Student Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please describe your inquiry in detail..."
                    required
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-academic-blue hover:bg-academic-blue/90"
                  data-testid="button-send-message"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6" data-testid="direct-contact-heading">Direct Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-academic-blue/5 transition-all duration-300 cursor-pointer group" data-testid="contact-email">
                    <div className="w-10 h-10 bg-academic-blue rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-academic-blue transition-colors duration-300">Email</p>
                      <a href="mailto:vijaykumar.toutam@nplindia.res.in" className="text-academic-blue hover:text-academic-blue/80 group-hover:scale-105 transition-transform duration-300 inline-block">
                        vijaykumar.toutam@nplindia.res.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-academic-blue/5 transition-all duration-300 cursor-pointer group" data-testid="contact-phone">
                    <div className="w-10 h-10 bg-academic-blue rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-academic-blue transition-colors duration-300">Phone</p>
                      <a href="tel:+91-11-4560-8441" className="text-academic-blue hover:text-academic-blue/80 group-hover:scale-105 transition-transform duration-300 inline-block">
                        +91 (11) 4560 8441
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-academic-blue/5 transition-all duration-300 cursor-pointer group" data-testid="contact-address">
                    <div className="w-10 h-10 bg-academic-blue rounded-full flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <MapPin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-academic-blue transition-colors duration-300">Address</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        CSIR National Physical Laboratory<br />
                        Dr. K.S. Krishnan Marg<br />
                        New Delhi 110012, India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Links */}
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6" data-testid="professional-links-heading">Professional Profiles</h3>
                <div className="space-y-4">
                  {professionalLinks.map((link, index) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-academic-blue/5 hover:border-academic-blue/20 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                        data-testid={`professional-link-${index}`}
                      >
                        <div className="w-10 h-10 bg-academic-blue/10 rounded-full flex items-center justify-center group-hover:bg-academic-blue/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-5 h-5 text-academic-blue group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium group-hover:text-academic-blue transition-colors duration-300">{link.name}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{link.description}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-academic-blue group-hover:scale-110 transition-all duration-300" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

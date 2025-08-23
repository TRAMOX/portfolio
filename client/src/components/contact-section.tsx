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
      href: "https://scholar.google.com",
    },
    {
      name: "LinkedIn",
      description: "Professional networking and updates",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "ORCID",
      description: "Research identifier and works",
      icon: ExternalLink,
      href: "#",
    },
    {
      name: "ResearchGate",
      description: "Academic research network",
      icon: Building,
      href: "#",
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
                  <div className="flex items-center space-x-4" data-testid="contact-email">
                    <div className="w-10 h-10 bg-academic-blue rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:sarah.chen@csirnpl.org" className="text-academic-blue hover:text-academic-blue/80">
                        sarah.chen@csirnpl.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4" data-testid="contact-phone">
                    <div className="w-10 h-10 bg-academic-blue rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+44-20-8977-3222" className="text-academic-blue hover:text-academic-blue/80">
                        +44 (0)20 8977 3222
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4" data-testid="contact-address">
                    <div className="w-10 h-10 bg-academic-blue rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        CSIR National Physical Laboratory<br />
                        Hampton Road, Teddington<br />
                        Middlesex, TW11 0LW, UK
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
                        className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent transition-colors duration-200 group"
                        data-testid={`professional-link-${index}`}
                      >
                        <div className="w-10 h-10 bg-academic-blue/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-academic-blue" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{link.name}</p>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-academic-blue transition-colors" />
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

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter, 
  Download,
  MapPin,
  Phone,
  Globe
} from "lucide-react";

interface ContactPageProps {
  currentLang: 'fr' | 'en';
}

const ContactPage = ({ currentLang }: ContactPageProps) => {
  const content = {
    fr: {
      title: "Contactez-moi",
      subtitle: "Prêt à collaborer ? Discutons de votre prochain projet",
      downloadCV: "Télécharger mon CV",
      location: "Localisation",
      availability: "Disponibilité",
      availabilityStatus: "Disponible pour de nouveaux projets",
      email: "Email",
      phone: "Téléphone",
      social: "Réseaux sociaux",
      cta: "Travaillons ensemble !",
      ctaDescription: "Que ce soit pour un projet web innovant, une application mobile ou une consultation technique, je suis là pour transformer vos idées en réalité digitale."
    },
    en: {
      title: "Get in touch",
      subtitle: "Ready to collaborate? Let's discuss your next project",
      downloadCV: "Download my CV",
      location: "Location",
      availability: "Availability", 
      availabilityStatus: "Available for new projects",
      email: "Email",
      phone: "Phone",
      social: "Social networks",
      cta: "Let's work together!",
      ctaDescription: "Whether it's for an innovative web project, mobile application or technical consultation, I'm here to transform your ideas into digital reality."
    }
  };

  const text = content[currentLang];

  const contactMethods = [
    {
      icon: Mail,
      label: text.email,
      value: "nathan.ruer@email.com",
      href: "mailto:nathan.ruer@email.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: text.phone,
      value: "+33 6 12 34 56 78",
      href: "tel:+33612345678",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: text.location,
      value: "Paris, France",
      href: "https://maps.google.com/?q=Paris,France",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      label: text.availability,
      value: text.availabilityStatus,
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nathanruer",
      color: "hover:text-accent-cyan"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/nathanruer",
      color: "hover:text-primary"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/nathanruer",
      color: "hover:text-accent-blue"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:nathan.ruer@email.com",
      color: "hover:text-accent-green"
    }
  ];

  const handleDownloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = '/cv-nathan-ruer.pdf';
    link.download = 'CV-Nathan-Ruer.pdf';
    link.click();
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6">
              {text.title}
            </h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
              {text.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="p-8 border-gradient neon-glow">
                <h3 className="text-2xl font-semibold text-gradient-cyber mb-4">
                  {text.cta}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {text.ctaDescription}
                </p>
                
                <Button 
                  onClick={handleDownloadCV}
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-300 w-full sm:w-auto"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {text.downloadCV}
                </Button>
              </Card>

              {/* Contact Methods */}
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card 
                      key={method.label}
                      className="p-4 border-gradient hover:neon-glow transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-foreground-muted">
                            {method.label}
                          </div>
                          {method.href ? (
                            <a 
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : undefined}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {method.value}
                            </a>
                          ) : (
                            <div className="text-foreground font-medium">
                              {method.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links & Additional Info */}
            <div className="space-y-6">
              {/* Social Networks */}
              <Card className="p-8 border-gradient">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-primary" />
                  {text.social}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <Button
                        key={social.label}
                        variant="ghost"
                        className={`h-16 border-gradient hover:neon-glow transition-all duration-300 ${social.color}`}
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <IconComponent className="w-6 h-6" />
                          <span className="text-sm">{social.label}</span>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
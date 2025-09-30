import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { technicalSkillsFR, technicalSkillsEN, softSkillsFR, softSkillsEN } from "@/data/skills";

interface SkillsPageProps {
  currentLang: 'fr' | 'en';
}

const SkillsPage = ({ currentLang }: SkillsPageProps) => {
  const text = {
    fr: {
      title: "Compétences",
      subtitle: "Technologies et expertises que je maîtrise",
      technical: "Compétences Techniques",
      soft: "Soft Skills"
    },
    en: {
      title: "Skills",
      subtitle: "Technologies and expertise I master",
      technical: "Technical Skills",
      soft: "Soft Skills"
    }
  }[currentLang];

  const technicalSkills = currentLang === 'fr' ? technicalSkillsFR : technicalSkillsEN;
  const softSkills = currentLang === 'fr' ? softSkillsFR : softSkillsEN;

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-holographic rounded-full blur-3xl opacity-5" />
      
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

          {/* Technical Skills */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {text.technical}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card 
                    key={category.category} 
                    className="p-6 border-gradient hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {category.category}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary"
                          className="bg-muted hover:bg-gradient-primary hover:text-white transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              {text.soft}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <Card 
                    key={skill.name}
                    className="p-6 text-center border-gradient hover:neon-glow transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {skill.name}
                    </h4>
                    
                    <p className="text-foreground-muted text-sm">
                      {skill.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
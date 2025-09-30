import { Badge } from "@/components/ui/badge";
import { projectsFR, projectsEN } from "@/data/projects";
import CardSpotlight from "../ui/card-spotlight";

interface ProjectsPageProps {
  currentLang: 'fr' | 'en';
}

const ProjectsPage = ({ currentLang }: ProjectsPageProps) => {
  const projects = currentLang === 'fr' ? projectsFR : projectsEN; 

  const text = {
    fr: {
      title: "Projets", 
    },
    en: {
      title: "Projects",
    }
  }[currentLang];

  return (
    <section className="py-20 relative overflow-hidden bg-transparent"> 
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-12 border-b border-zinc-800/50 pb-2">
          <h1 className="text-4xl font-light text-white uppercase tracking-widest">{text.title}</h1>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {projects.map((project, index) => {                        
            return (
              <div 
                key={project.id} 
                className="mb-8" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a 
                  href={`projects${project.url}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title}`}
                  className="block break-inside-avoid" 
                >
                  <CardSpotlight 
                      className="group border-gray-700/50 hover:border-white/70 shadow-lg hover:shadow-white/10 active:translate-y-0"
                  >
                      <div className="p-6"> 
                        <div className="flex mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-white/80 transition-colors">{project.title}</h3>                  
                        </div>
                        <p className="text-gray-400 mb-4">{project.shortDescription}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map(t => ( 
                            <Badge 
                              key={t} 
                              className="bg-transparent text-green border border-gray-600/50"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>                  
                      </div>
                  </CardSpotlight>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
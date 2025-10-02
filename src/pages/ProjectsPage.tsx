import { projectsFR, projectsEN, Project } from "@/data/projects";
import { 
  Dialog, 
  DialogContent, 
} from "@/components/ui/dialog"; 
import * as React from "react";
import Masonry from "react-masonry-css"; 

import ProjectDetailsContent from "@/components/projects/ProjectDetailsContent";
import ProjectCard from "@/components/projects/ProjectCard";

interface ProjectsPageProps {
  currentLang: 'fr' | 'en';
}

const ProjectsPage = ({ currentLang }: ProjectsPageProps) => {
  const projects = currentLang === 'fr' ? projectsFR : projectsEN; 
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const text = {
    fr: {
      title: "Mes projets", 
    },
    en: {
      title: "My projects",
    }
  }[currentLang];
  
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
        setSelectedProject(null);
    }
  };
  
  const breakpointColumnsObj = {
    default: 3, 
    1024: 3,    
    768: 2,     
    640: 1,     
  };

  return (
    <section className="py-20 relative overflow-hidden bg-transparent"> 
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-12 border-b border-primary pb-2">
          <h1 className="text-4xl font-light text-primary uppercase tracking-widest">{text.title}</h1>
        </div>
        
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-8" 
          columnClassName="bg-transparent" 
        >
          {projects.map((project, index) => (                        
            <Dialog 
                key={project.id} 
                open={selectedProject?.id === project.id}
                onOpenChange={handleOpenChange}
            >
                <div className="mb-8"> 
                    <ProjectCard 
                        project={project} 
                        onClick={setSelectedProject}
                        index={index}
                    />
                </div>
                  
                {selectedProject && selectedProject.id === project.id && (
                    <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto">
                        <ProjectDetailsContent 
                            project={selectedProject} 
                            locale={currentLang}
                        />
                    </DialogContent>
                )}
            </Dialog>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default ProjectsPage;
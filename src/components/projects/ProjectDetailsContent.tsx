import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects"; 
import { 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"; 
import * as React from "react";
import { useState } from "react";
import { Loader } from "../Loader";

interface ProjectDetailsContentProps {
    project: Project;
    locale: 'fr' | 'en';
}

const getLabels = (isFrench: boolean) => ({
    technologies: isFrench ? "Technologies utilisées" : "Technologies used",
    challenges: isFrench ? "Défis relevés" : "Challenges faced",
    learnings: isFrench ? "Apprentissages" : "Learnings",
    demo: isFrench ? "Démo" : "Demo",
    github: "GitHub",
});

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({ project, locale }) => {
    
    const isFrench = locale === 'fr'; 
    const labels = getLabels(isFrench);
    
    const hasLinks = project.demoUrl || project.githubUrl;
    
    const [imageLoaded, setImageLoaded] = useState(false); 

    const LinkButton: React.FC<{ url: string; label: string; icon: string; style: string }> = ({ url, label, icon, style }) => (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4 ${style}`}
        >
            {label} <span className="ml-1.5">{icon}</span> 
        </a>
    );
    
    const SectionSeparator = () => (
        <div className="w-full h-px bg-border my-8 transition-colors duration-300 group-hover:bg-primary-dark" />
    );
    const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <h4 className="text-xl font-semibold text-foreground mb-4 uppercase tracking-wider">
            {children}
        </h4>
    );

    return (
        <div className="transition-opacity duration-300 p-4 sm:p-6 md:p-8"> 
            
            <DialogHeader className="mb-6 space-y-1">
                <DialogTitle className="text-4xl font-extrabold text-primary tracking-wide">
                    {project.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-foreground-muted pt-1">
                    {project.shortDescription}
                </DialogDescription>
            </DialogHeader>
            
            {project.imageUrl && (
                <div 
                    className="relative w-full mt-6 mb-8 rounded-xl overflow-hidden shadow-xl bg-background-tertiary 
                    h-64 sm:h-80 flex items-center justify-center" 
                >
                    {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background-tertiary z-10">
                            <Loader />
                        </div>
                    )}

                    <img 
                        src={project.imageUrl} 
                        alt={`Aperçu du projet ${project.title}`}
                        onLoad={() => setImageLoaded(true)} 
                        onError={() => setImageLoaded(true)} 
                        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} 
                    />
                </div>
            )}
            
            {project.disclaimer && (
                <div className="p-4 rounded-lg bg-yellow-900/20 border border-yellow-800/50 text-yellow-300 my-6">
                    <p className="text-sm">{project.disclaimer}</p>
                </div>
            )}
            
            <div className="pt-2"> 
                
                <p className="text-m text-foreground mb-8 leading-relaxed">
                    {project.fullDescription}
                </p>

                <SectionSeparator />

                <div>
                    <SectionTitle>{labels.technologies}</SectionTitle>
                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map(t => (
                            <Badge 
                                key={t} 
                                className="bg-background-secondary text-foreground-muted border border-gray-700/50"
                            >
                                {t}
                            </Badge>
                        ))}
                    </div>
                </div>

                <SectionSeparator />

                <div>
                    <SectionTitle>{labels.challenges}</SectionTitle>
                    <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                        {project.challenges.map((c, i) => <li key={i} className="pl-1">{c}</li>)}
                    </ul>
                </div>

                <SectionSeparator />

                {/* Apprentissages */}
                <div>
                    <SectionTitle>{labels.learnings}</SectionTitle>
                    <ul className="list-disc list-inside text-foreground-muted space-y-2 ml-4">
                        {project.learnings.map((l, i) => <li key={i} className="pl-1">{l}</li>)}
                    </ul>
                </div>
            </div>
            
            {hasLinks && (
                <DialogFooter className="flex flex-col sm:flex-row sm:justify-end sm:space-x-4 pt-8 mt-8 border-t border-primary-dark">
                    {project.demoUrl && (
                        <LinkButton 
                            url={project.demoUrl} 
                            label={labels.demo} 
                            icon="↗" 
                            style="bg--primary text-primary-foreground transform transition-all duration-300 hover:scale-[1.03]"
                        />
                    )}
                    {project.githubUrl && (
                        <LinkButton 
                            url={project.githubUrl} 
                            label={labels.github} 
                            icon="↗" 
                            style="bg-transparent border border-border text-foreground-muted transform transition-all duration-300 hover:scale-[1.03]"
                        />
                    )}
                </DialogFooter>
            )}
        </div>
    );
}

export default ProjectDetailsContent;

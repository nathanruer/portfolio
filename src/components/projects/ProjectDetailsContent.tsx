import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects"; 
import { 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog"; 
import * as React from "react";

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
    disclaimerTitle: isFrench ? "Avertissement" : "Disclaimer"
});

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({ project, locale }) => {
    
    const isFrench = locale === 'fr'; 
    const labels = getLabels(isFrench);
    
    const hasLinks = project.demoUrl || project.githubUrl;

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

    return (
        <div className="transition-opacity duration-300"> 
            <DialogHeader>
                <DialogTitle className="text-3xl text-foreground">{project.title}</DialogTitle>
                <DialogDescription className="text-lg text-foreground-muted">
                    {project.shortDescription}
                </DialogDescription>
            </DialogHeader>
            
            {project.imageUrl && (
                <div 
                    // 🚨 CHANGEMENT CLÉ : `h-64` pour une hauteur fixe, et suppression de `max-h-[70vh]`
                    className="relative w-full mt-4 mb-4 rounded-lg overflow-hidden border border-border bg-gray-900 h-64 flex items-center justify-center" 
                >
                    <img 
                        src={project.imageUrl} 
                        alt={`Aperçu du projet ${project.title}`}
                        // 🚨 CHANGEMENT CLÉ : `object-cover` pour remplir la zone fixe de la bannière
                        className="w-full h-full object-cover" 
                    />
                </div>
            )}
            
            {project.disclaimer && (
                <div className="p-4 rounded-lg bg-yellow-900/20 border border-yellow-800/50 text-yellow-300 mb-4">
                    <h4 className="flex items-center text-m font-semibold mb-1">
                        <span className="mr-2">⚠️</span> {labels.disclaimerTitle}
                    </h4>
                    <p className="text-sm">{project.disclaimer}</p>
                </div>
            )}
            
            <div className={`py-4 space-y-6 ${!project.imageUrl ? 'pt-2' : ''}`}>
                
                <div className="space-y-2">
                    <p className="text-m text-foreground">{project.fullDescription}</p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl text-foreground">{labels.technologies}</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(t => (
                            <Badge 
                                key={t} 
                                className="bg-transparent text-foreground-muted border border-border"
                            >
                                {t}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl text-foreground">{labels.challenges}</h4>
                    <ul className="list-disc list-inside text-foreground-muted space-y-1">
                        {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                </div>

                <div className="space-y-2">
                    <h4 className="text-xl text-foreground">{labels.learnings}</h4>
                    <ul className="list-disc list-inside text-foreground-muted space-y-1">
                        {project.learnings.map((l, i) => <li key={i}>{l}</li>)}
                    </ul>
                </div>
            </div>
            
            {hasLinks && (
                <DialogFooter className="flex flex-col sm:flex-row sm:justify-end sm:space-x-4 pt-4 border-t border-border">
                    {project.demoUrl && (
                        <LinkButton 
                            url={project.demoUrl} 
                            label={labels.demo} 
                            icon="↗" 
                            style="bg-background-tertiary hover:bg-background-secondary text-foreground mb-2 sm:mb-0"
                        />
                    )}
                    {project.githubUrl && (
                        <LinkButton 
                            url={project.githubUrl} 
                            label={labels.github} 
                            icon="💾" 
                            style="bg-background-secondary hover:bg-background-tertiary text-foreground-muted border border-border"
                        />
                    )}
                </DialogFooter>
            )}
        </div>
    );
}

export default ProjectDetailsContent;
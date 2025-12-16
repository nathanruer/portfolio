import { Badge } from "@/components/ui/badge";
import { LocalizedProject } from "@/data/projects";
import CardSpotlight from "../ui/card-spotlight";
import { DialogTrigger } from "@/components/ui/dialog";
import { analyticsEvents } from "@/hooks/use-analytics"; 

interface ProjectCardProps {
    project: LocalizedProject;
    onClick: (p: LocalizedProject) => void;
    index: number;
}

const ProjectCard = ({ project, onClick, index }: ProjectCardProps) => {
    return (
        <div 
            className="mb-8 animate-fade-in-up"
            style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
            }}
        >
            <DialogTrigger asChild>
                <button
                    aria-label={`View ${project.title} details`}
                    className="block break-inside-avoid w-full text-left"
                    onClick={() => {
                        analyticsEvents.viewProject(project.title);
                        onClick(project);
                    }}
                >
                    <CardSpotlight 
                        className="group border-gray-700/50 hover:border-white/70 shadow-lg hover:shadow-white/10 active:translate-y-0">
                        <div className="p-6"> 
                            <div className="flex mb-2">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground/80 transition-colors">{project.title}</h3>                  
                            </div>
                            <p className="text-foreground-muted mb-4">{project.shortDescription}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map(t => ( 
                                    <Badge 
                                        key={t} 
                                        className="bg-background-secondary rounded-xl border border-gray-700/50 text-foreground-muted"
                                    >
                                        {t}
                                    </Badge>
                                ))}
                            </div>                  
                        </div>
                    </CardSpotlight>
                </button>
            </DialogTrigger>
        </div>
    );
}

export default ProjectCard;
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";
import CardSpotlight from "../ui/card-spotlight";
import { 
  DialogTrigger, 
} from "@/components/ui/dialog"; 

interface ProjectCardProps {
    project: Project;
    onClick: (p: Project) => void;
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
                    onClick={() => onClick(project)}
                >
                    <CardSpotlight 
                        className="group border-gray-700/50 hover:border-white/70 shadow-lg hover:shadow-white/10 active:translate-y-0 
                                   transition-all duration-300 transform 
                                   hover:rotate-x-2 hover:rotate-y-2 hover:scale-[1.02] active:scale-[0.98]"
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
                </button>
            </DialogTrigger>
        </div>
    );
}

export default ProjectCard;
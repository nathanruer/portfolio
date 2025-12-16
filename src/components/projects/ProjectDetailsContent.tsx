import { Badge } from "@/components/ui/badge";
import { LocalizedProject } from "@/data/projects";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import * as React from "react";
import { useState } from "react";
import { Loader } from "../Loader";
import ImageLightbox from "../ImageLightbox";
import OptimizedImage from "../OptimizedImage";
import { analyticsEvents } from "@/hooks/use-analytics";

interface ProjectDetailsContentProps {
    project: LocalizedProject;
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
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const images = project.imageUrl
        ? Array.isArray(project.imageUrl)
            ? project.imageUrl
            : [project.imageUrl]
        : [];

    const hasMultipleImages = images.length > 1;

    const goToNextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setImageLoaded(false);
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
        analyticsEvents.navigateProjectImage(project.title, 'next', newIndex);
    };

    const goToPreviousImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setImageLoaded(false);
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
        analyticsEvents.navigateProjectImage(project.title, 'previous', newIndex);
    };

    const openLightbox = () => {
        setLightboxOpen(true);
        analyticsEvents.openImageLightbox(project.title, currentImageIndex);
    };

    const LinkButton: React.FC<{ url: string; label: string; icon: string; style: string; onClick?: () => void }> = ({ url, label, icon, style, onClick }) => (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClick}
            className={`inline-flex items-center justify-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4 ${style}`}
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
            
            {images.length > 0 && (
                <div
                    className="relative w-full mt-6 mb-8 rounded-xl overflow-hidden shadow-xl bg-background-tertiary
                    h-64 sm:h-80 flex items-center justify-center group cursor-pointer"
                    onClick={openLightbox}
                >
                    {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background-tertiary z-10">
                            <Loader />
                        </div>
                    )}

                    <OptimizedImage
                        src={images[currentImageIndex]}
                        alt={`Aperçu du projet ${project.title} - Image ${currentImageIndex + 1}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>

                    {hasMultipleImages && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPreviousImage(e);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                                aria-label="Image précédente"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNextImage(e);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                                aria-label="Image suivante"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm z-20">
                                {currentImageIndex + 1} / {images.length}
                            </div>

                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setImageLoaded(false);
                                            setCurrentImageIndex(index);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                            index === currentImageIndex
                                                ? 'bg-white w-6'
                                                : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                        aria-label={`Aller à l'image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}

            <ImageLightbox
                images={images}
                initialIndex={currentImageIndex}
                open={lightboxOpen}
                onOpenChange={setLightboxOpen}
                title={`${project.title} - ${isFrench ? "Galerie d'images" : "Image Gallery"}`}
            />
            
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
                                className="bg-background-secondary rounded-xl text-foreground-muted border border-gray-700/50"
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
                            style="text-primary-foreground transform transition-all duration-300 hover:scale-[1.03]"
                            onClick={() => analyticsEvents.clickProjectDemo(project.title)}
                        />
                    )}
                    {project.githubUrl && (
                        <LinkButton
                            url={project.githubUrl}
                            label={labels.github}
                            icon="↗"
                            style="bg-background-secondary rounded-xl border border-gray-600/50 text-foreground-muted transform transition-all duration-300 hover:scale-[1.03]"
                            onClick={() => analyticsEvents.clickProjectGithub(project.title)}
                        />
                    )}
                </DialogFooter>
            )}
        </div>
    );
}

export default ProjectDetailsContent;
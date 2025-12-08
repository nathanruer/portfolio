import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContentFullscreen
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Loader } from "./Loader";

interface ImageLightboxProps {
    images: string[];
    initialIndex?: number;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
    images,
    initialIndex = 0,
    open,
    onOpenChange,
    title
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [imageLoaded, setImageLoaded] = useState(false);

    const hasMultipleImages = images.length > 1;

    useEffect(() => {
        if (open) {
            setCurrentIndex(initialIndex);
            setImageLoaded(false);
        }
    }, [open, initialIndex]);

    const goToNext = useCallback(() => {
        setImageLoaded(false);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const goToPrevious = useCallback(() => {
        setImageLoaded(false);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' && hasMultipleImages) {
                goToNext();
            } else if (e.key === 'ArrowLeft' && hasMultipleImages) {
                goToPrevious();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, hasMultipleImages, goToNext, goToPrevious]);

    if (images.length === 0) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContentFullscreen>
                <VisuallyHidden>
                    <DialogTitle>{title}</DialogTitle>
                </VisuallyHidden>

                <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center">
                    {!imageLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Loader />
                        </div>
                    )}
                    <img
                        src={images[currentIndex]}
                        alt={`${title} - Image ${currentIndex + 1}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageLoaded(true)}
                        className={`max-w-full max-h-[80vh] object-contain rounded-lg border border-gray-700/50 shadow-2xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>

                {hasMultipleImages && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm z-[110]"
                            aria-label="Image précédente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all duration-200 backdrop-blur-sm z-[110]"
                            aria-label="Image suivante"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-[110] bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setImageLoaded(false);
                                        setCurrentIndex(index);
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                                        index === currentIndex
                                            ? 'bg-white w-8'
                                            : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                    aria-label={`Aller à l'image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </DialogContentFullscreen>
        </Dialog>
    );
};

export default ImageLightbox;

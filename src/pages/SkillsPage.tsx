import { useState } from 'react';
import { motion } from 'framer-motion';

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

import { skills } from '@/data/skills'; 
import { getContrastColor } from '@/lib/utils'; 

interface SkillsPageProps {
    currentLang: 'fr' | 'en';
}

// Fonction utilitaire pour déterminer la couleur d'ombre
const getShadowColor = (color: string) => {
    const darkColors = ["#000000", "#363636", "#303030", "#3776AB"]; 
    
    if (darkColors.includes(color.toUpperCase())) { 
        return "#AAAAAA";   
    }
    return color;
};

const SkillsPage = ({ currentLang }: SkillsPageProps) => {
    const [anim, setanim] = useState(false);

    const text = {
        fr: { title: "Mes compétences" },
        en: { title: "My skills" },
    }[currentLang];

    return (
        <section 
            id="skills" 
            className="pt-20 relative overflow-hidden bg-transparent w-full"
        >
            <div className="container mx-auto px-6 relative z-10"> 
                <div className="border-b border-primary pb-2">
                    <h1 className="text-4xl font-bold text-primary uppercase tracking-wide">{text.title}</h1>
                </div>
            </div>
            
            <div className="w-full"> 
                <motion.div
                    initial={{}}
                    whileInView={{}} 
                    transition={{
                        delay: 0,
                        duration: 0,
                    }}
                    onViewportEnter={() => setanim(true)}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="w-full max-h-80d relative z-50 pt-5 pb-5" 
                >
                    <div className="flex justify-center w-full mt-0 px-4 md:px-0"> 
                        <div className="flex justify-center items-center gap-10 md:gap-14 flex-wrap max-w-5xl my-20">
                            {skills.map(({ Icon, name, color }, index) => {
                                const contrastColor = getContrastColor(color);
                                const shadowColor = getShadowColor(color);

                                return (
                                    <div key={name} className="flex flex-col items-center">
                                        <TooltipProvider delayDuration={300}>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <motion.span
                                                        animate={anim ? {
                                                            boxShadow: [
                                                                `0 0 0px ${shadowColor}00`,
                                                                `0 0 25px ${shadowColor}30`, 
                                                                `0 0 0px ${shadowColor}00`,
                                                                `0 0 40px ${shadowColor}60`,
                                                                `0 0 15px ${shadowColor}30`,
                                                                `0 0 30px ${shadowColor}9a`,
                                                            ],
                                                        } : undefined}
                                                        transition={anim ? {
                                                            duration: 0.5,
                                                            times: [0, 0.1, 0.3, 0.5, 0.7, 1],
                                                            ease: "easeInOut",
                                                            delay: 0.3 + index * 0.1, 
                                                        } : undefined}

                                                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                                                        className="text-3xl md:text-5xl rounded-full p-4 md:p-5 backdrop-blur-md hover:scale-105 transition duration-500 cursor-pointer"
                                                        style={{
                                                            background: color,
                                                            boxShadow: `0 0 8px ${shadowColor}60`,
                                                            color: contrastColor,
                                                        }}
                                                    >
                                                        <Icon />
                                                    </motion.span>
                                                </TooltipTrigger>
                                                
                                                <TooltipContent 
                                                    sideOffset={8}
                                                    className="px-3 py-2 rounded-md text-sm font-medium hidden lg:block max-w-xs"
                                                    style={{
                                                        background: color,
                                                        color: contrastColor,
                                                    }}
                                                >
                                                    {name}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        <p 
                                            className="mt-1 font-medium text-center lg:hidden max-w-[80px] break-words leading-none text-[10px]"
                                            style={{ color: shadowColor }}
                                        >
                                            {name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsPage;
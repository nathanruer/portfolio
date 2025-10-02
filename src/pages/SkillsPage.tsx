import { useState } from 'react';
import { motion } from 'framer-motion';

import LampContainer from '@/components/ui/lamp-container';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

import { skills } from '@/data/skills';
import { getContrastColor } from '@/lib/utils';

interface SkillsPageProps {
    currentLang: 'fr' | 'en';
}

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
                    <h1 className="text-4xl font-light text-primary uppercase tracking-widest">
                        {text.title}
                    </h1>
                </div>
            </div>
            
            <div className=" w-full"> 
                <LampContainer><></></LampContainer>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: -200 }} 
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    onViewportEnter={() => setanim(true)}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    className="w-full max-h-80d relative z-50 mb-[-5rem]" 
                >
                    <div className="flex justify-center w-full mt-0"> 
                        <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap max-w-4xl pb-4">
                            {skills.map(({ Icon, name, color }) => {
                                const contrastColor = getContrastColor(color);
                                return (
                                    <TooltipProvider key={name} delayDuration={300}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <motion.span
                                                    animate={anim ? {
                                                        boxShadow: [
                                                            `0 0 0px ${color}00`,
                                                            `0 0 30px ${color}40`,
                                                            `0 0 0px ${color}00`,
                                                            `0 0 50px ${color}80`,
                                                            `0 0 20px ${color}40`,
                                                            `0 0 40px ${color}ba`,
                                                        ],
                                                    } : undefined}
                                                    transition={anim ? {
                                                        duration: 0.5,
                                                        times: [0, 0.1, 0.3, 0.5, 0.7, 1],
                                                        ease: "easeInOut",
                                                    } : undefined}
                                                    viewport={{ once: true }}
                                                    className="text-3xl md:text-5xl rounded-full p-4 md:p-5 backdrop-blur-md hover:scale-105 transition duration-500 cursor-pointer"
                                                    style={{
                                                        background: color,
                                                        boxShadow: `0 0 10px ${color}80`,
                                                        color: contrastColor,
                                                    }}
                                                >
                                                    <Icon />
                                                </motion.span>
                                            </TooltipTrigger>
                                            <TooltipContent 
                                                sideOffset={8}
                                                className="px-3 py-2 rounded-md text-sm font-medium"
                                                style={{
                                                    background: color,
                                                    color: contrastColor,
                                                }}
                                            >
                                                {name}
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
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
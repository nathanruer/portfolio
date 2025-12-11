import { useState } from 'react';
import { motion } from 'framer-motion';

import { skills, skillCategories, groupSkillsByCategory } from '@/data/skills';
import { ModernSkillCard } from '@/components/skills/SkillCard';
import { useSEO } from '@/hooks/use-seo'; 

interface SkillsPageProps {
    currentLang: 'fr' | 'en';
}

const SkillsPage = ({ currentLang }: SkillsPageProps) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const groupedSkills = groupSkillsByCategory();

    useSEO({
        title: currentLang === 'fr' ? 'Nathan Ruer | Compétences' : 'Nathan Ruer | Skills',
        description: currentLang === 'fr'
            ? "Découvrez mes compétences techniques : JavaScript, TypeScript, React, Node.js, Blockchain, et plus encore."
            : "Discover my technical skills: JavaScript, TypeScript, React, Node.js, Blockchain, and more.",
        ogUrl: 'https://nathanruer.vercel.app/skills'
    });

    const text = {
        fr: { 
            title: "Mes compétences",
            all: "Tout voir"
        },
        en: { 
            title: "My skills",
            all: "View all"
        },
    }[currentLang];

    const filteredSkills = selectedCategory
        ? groupedSkills[selectedCategory as keyof typeof skillCategories]
        : skills;

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

            <div className="container mx-auto px-6 relative z-10 mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-12 justify-center"
                >
                    <motion.button
                        onClick={() => setSelectedCategory(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                            px-6 py-2.5 rounded-full text-sm font-medium
                            transition-all duration-300 border
                            ${selectedCategory === null 
                                ? 'bg-white/20 border-white/40 text-white shadow-lg' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                            }
                        `}
                    >
                        {text.all}
                    </motion.button>
                    
                    {Object.entries(skillCategories).map(([key, { label, color }]) => (
                        <motion.button
                            key={key}
                            onClick={() => setSelectedCategory(key)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                                px-6 py-2.5 rounded-full text-sm font-medium
                                transition-all duration-300 border
                                ${selectedCategory === key
                                    ? 'shadow-lg text-white'
                                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                }
                            `}
                            style={{
                                background: selectedCategory === key ? `${color}30` : undefined,
                                borderColor: selectedCategory === key ? `${color}60` : undefined,
                            }}
                        >
                            {label[currentLang]}
                        </motion.button>
                    ))}
                </motion.div>

                <div
                    key={selectedCategory || 'all'}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-20"
                >
                    {filteredSkills.map((skill, index) => (
                        <ModernSkillCard
                            key={skill.name}
                            {...skill}
                            index={index}
                            category={skillCategories[skill.category].label[currentLang]}
                            categoryColor={skillCategories[skill.category].color}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;
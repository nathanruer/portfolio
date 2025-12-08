import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { getContrastColor } from '@/lib/utils';

export interface SkillCardProps {
    Icon: IconType;
    name: string;
    color: string;
    index: number;
    category?: string;
    categoryColor: string;
}

export const ModernSkillCard = ({ Icon, name, index, category, categoryColor }: SkillCardProps) => {
    const contrastColor = getContrastColor(categoryColor);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="group h-full"
        >
            <div 
                className="h-full rounded-2xl border border-gray-700/50 shadow-lg transition-colors duration-300 bg-transparent"
            >
                <div className="p-4 flex flex-col items-center gap-3">
                    {/* Icon Container */}
                    <motion.div
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div
                            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                            style={{
                                background: categoryColor,
                                boxShadow: `0 8px 32px ${categoryColor}40, 0 0 0 1px ${categoryColor}20`
                            }}
                        >
                            <Icon
                                className="text-2xl transition-transform duration-300 group-hover:scale-110"
                                style={{ color: contrastColor }}
                            />
                        </div>

                        {/* Pulse Ring */}
                        <motion.div
                            initial={{ scale: 1, opacity: 0.6 }}
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.6, 0, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                delay: index * 0.1
                            }}
                            className="absolute inset-0 rounded-xl"
                            style={{
                                border: `2px solid ${categoryColor}`,
                            }}
                        />
                    </motion.div>

                    {/* Skill Name */}
                    <div className="text-center">
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                            {name}
                        </h3>
                        {category && (
                            <span 
                                className="text-[10px] px-2 py-0.5 rounded-xl border font-medium bg-background-secondary"
                                style={{
                                    borderColor: `${categoryColor}40`,
                                    color: categoryColor,
                                }}
                            >
                                {category}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

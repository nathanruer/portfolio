import {
    FaReact, FaNodeJs, FaJsSquare, FaPython, FaDocker, FaGit,
} from 'react-icons/fa';
import {
    SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql,
    SiMongodb, SiPrisma, SiSupabase, SiSolidity, SiVuedotjs, SiNestjs,
} from 'react-icons/si';
import { TbCube } from 'react-icons/tb';
import { IconType } from 'react-icons';

export interface Skill {
    Icon: IconType;
    name: string;
    color: string;
    category: 'frontend' | 'backend' | 'database' | 'devops' | 'blockchain' | 'language';
}

export const skills: Skill[] = [
    // Languages
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: 'language' },
    { Icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E", category: 'language' },
    { Icon: FaPython, name: "Python", color: "#3776AB", category: 'language' },

    // Frontend
    { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF", category: 'frontend' },
    { Icon: FaReact, name: "React", color: "#61DAFB", category: 'frontend' },
    { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D", category: 'frontend' },

    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4", category: 'frontend' },

    // Backend
    { Icon: FaNodeJs, name: "Node.js", color: "#339933", category: 'backend' },
    { Icon: SiNestjs, name: "Nest.js", color: "#E0234E", category: 'backend' },

    // Database
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791", category: 'database' },
    { Icon: SiPrisma, name: "Prisma", color: "#000000", category: 'database' },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248", category: 'database' },
    { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E", category: 'database' },

    // DevOps
    { Icon: FaGit, name: "Git", color: "#F05032", category: 'devops' },
    { Icon: FaDocker, name: "Docker", color: "#2496ED", category: 'devops' },

    // Blockchain
    { Icon: SiSolidity, name: "Solidity", color: "#363636", category: 'blockchain' },
    { Icon: TbCube, name: "Ethers/Hardhat/Foundry", color: "#303030", category: 'blockchain' },
];

export const skillCategories = {
    language: { label: { fr: 'Langages', en: 'Languages' }, color: '#FFC107' },
    frontend: { label: { fr: 'Frontend', en: 'Frontend' }, color: '#06B6D4' },
    backend: { label: { fr: 'Backend', en: 'Backend' }, color: '#10B981' },
    database: { label: { fr: 'Base de données', en: 'Database' }, color: '#8B5CF6' },
    devops: { label: { fr: 'DevOps & Outils', en: 'DevOps & Tools' }, color: '#3B82F6' },
    blockchain: { label: { fr: 'Blockchain & Web3', en: 'Blockchain & Web3' }, color: '#FF5722' },
};

export const groupSkillsByCategory = () => {
    return Object.keys(skillCategories).reduce((acc, category) => {
        acc[category as keyof typeof skillCategories] = skills.filter(
            skill => skill.category === category
        );
        return acc;
    }, {} as Record<keyof typeof skillCategories, Skill[]>);
};

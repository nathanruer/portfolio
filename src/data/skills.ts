import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython,
    FaDocker, FaGit, FaGitlab,
} from 'react-icons/fa';
import {
    SiTypescript, SiTailwindcss, SiNextdotjs, SiPostgresql,
    SiMongodb, SiPrisma, SiSupabase, SiSolidity, SiVuedotjs, SiNestjs,
    SiJest,
} from 'react-icons/si';
import { TbCube } from 'react-icons/tb';

export const skills = [
    // Frontend & Fullstack
    { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
    { Icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },

    // Backend & BDD
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: SiNestjs, name: "Nest.js", color: "#E0234E" },
    { Icon: SiPrisma, name: "Prisma", color: "#000000" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },

    // Algorithmic & Data Science
    { Icon: FaPython, name: "Python", color: "#3776AB" },

    // DevOps & Tools
    { Icon: FaDocker, name: "Docker", color: "#2496ED" },
    { Icon: FaGit, name: "Git", color: "#F05032" },
    { Icon: FaGitlab, name: "GitLab", color: "#FCA121" },
    { Icon: SiJest, name: "Jest", color: "#C21325" },
    
    // Blockchain & Web3
    { Icon: SiSolidity, name: "Solidity", color: "#363636" },
    { Icon: TbCube, name: "Ethers/Wagmi/Hardhat", color: "#303030" },
];

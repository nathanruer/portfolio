import { Code, Database, Smartphone, Cloud, Palette, Brain, Users, Target, Lightbulb, MessageSquare } from "lucide-react";

export interface TechnicalSkillCategory {
  category: string;
  icon: any;
  color: string;
  skills: string[];
}

export interface SoftSkill {
  name: string;
  icon: any;
  description: string;
}

export const technicalSkillsFR: TechnicalSkillCategory[] = [
  {
    category: "Frontend",
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js']
  },
  {
    category: "Backend",
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase']
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify']
  },
  {
    category: "Design & UX",
    icon: Palette,
    color: 'from-indigo-500 to-purple-500',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Accessibility']
  },
  {
    category: "Intelligence Artificielle",
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    skills: ['Machine Learning', 'TensorFlow', 'OpenAI API', 'Computer Vision', 'NLP', 'Data Analysis']
  }
];

export const technicalSkillsEN: TechnicalSkillCategory[] = [
  {
    category: "Frontend",
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js']
  },
  {
    category: "Backend",
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs']
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500',
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Firebase']
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Netlify']
  },
  {
    category: "Design & UX",
    icon: Palette,
    color: 'from-indigo-500 to-purple-500',
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Accessibility']
  },
  {
    category: "Artificial Intelligence",
    icon: Brain,
    color: 'from-pink-500 to-rose-500',
    skills: ['Machine Learning', 'TensorFlow', 'OpenAI API', 'Computer Vision', 'NLP', 'Data Analysis']
  }
];

export const softSkillsFR: SoftSkill[] = [
  { name: 'Leadership', icon: Users, description: 'Capacité à diriger et motiver une équipe' },
  { name: 'Résolution de problèmes', icon: Target, description: 'Approche analytique et créative' },
  { name: 'Créativité', icon: Lightbulb, description: 'Innovation et pensée originale' },
  { name: 'Communication', icon: MessageSquare, description: 'Expression claire et écoute active' }
];

export const softSkillsEN: SoftSkill[] = [
  { name: 'Leadership', icon: Users, description: 'Ability to lead and motivate a team' },
  { name: 'Problem Solving', icon: Target, description: 'Analytical and creative approach' },
  { name: 'Creativity', icon: Lightbulb, description: 'Innovation and original thinking' },
  { name: 'Communication', icon: MessageSquare, description: 'Clear expression and active listening' }
];

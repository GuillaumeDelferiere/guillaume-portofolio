"use client";
import Section from './section';
import { Badge } from '@/components/ui/badge';
import {
  Code,
  Database,
  GitBranch,
  LayoutPanelLeft,
  Server,
  Users,
} from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, 
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};


const SkillCategory = ({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}) => (
  <div>
    <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-foreground">
      {icon}
      {title}
    </h3>
    <motion.ul
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" 
      viewport={{ once: true, amount: 0.2 }} 
    >
      {skills.map((skill) => (
        <motion.li key={skill} variants={itemVariants}>
          <Badge variant="secondary" className="px-3 py-2 text-sm">
            {skill}
          </Badge>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

export default function Skills() {
  const frontendSkills = ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"];
  const backendSkills = ["Node.js", "Express.js", "RESTful APIs", "SQL", "Python"];
  const toolsSkills = ["Git / CI", "Agile/Scrum", "Docker", "Git"];
  const databaseSkills: string[] = ["Modèle Entité-Association", "Modèle relationnel", "PostgreSQL", "Supabase"];
  const softSkills: string[] = ["Anglais Avancé", "Travail en équipe", "Communication", "Résolution de problèmes", "Autonomie", "Adaptabilité"];

  
  const iconProps = {
    className: 'size-5 text-muted-foreground', 
    strokeWidth: 2,
  };

  return (
    <Section id="skills" title="Compétences">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* 👇 Passer les icônes en props */}
        <SkillCategory
          title="Frontend"
          skills={frontendSkills}
          icon={<LayoutPanelLeft {...iconProps} />}
        />
        <SkillCategory
          title="Backend"
          skills={backendSkills}
          icon={<Server {...iconProps} />}
        />
        <SkillCategory
          title="Outils & DevOps"
          skills={toolsSkills}
          icon={<GitBranch {...iconProps} />}
        />

        {databaseSkills.length > 0 && (
          <SkillCategory
            title="Bases de données"
            skills={databaseSkills}
            icon={<Database {...iconProps} />}
          />
        )}
        {softSkills.length > 0 && (
          <SkillCategory
            title="Soft Skills"
            skills={softSkills}
            icon={<Users {...iconProps} />}
          />
        )}
      </div>
    </Section>
  );
}
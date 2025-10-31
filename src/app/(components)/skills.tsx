"use client";
import Section from './section';
import { Badge } from '@/components/ui/badge';
// 👇 Importer les icônes
import {
  Code,
  Database,
  GitBranch,
  LayoutPanelLeft,
  Server,
  Users,
} from 'lucide-react';
import React from 'react';

// Modifier le composant pour accepter une icône
const SkillCategory = ({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: string[];
  icon: React.ReactNode; // Accepter un élément React (l'icône)
}) => (
  <div>
    <h3 className="flex items-center gap-2 mb-3 text-lg font-semibold text-foreground">
      {icon} {/* 👈 Afficher l'icône */}
      {title}
    </h3>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} variant="secondary" className="px-3 py-2 text-sm">
          {skill}
        </Badge>
      ))}
    </ul>
  </div>
);

export default function Skills() {
  const frontendSkills = ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML5", "CSS3"];
  const backendSkills = ["Node.js", "Express.js", "RESTful APIs", "SQL", "Python"];
  const toolsSkills = ["Git / CI", "Agile/Scrum", "Docker", "Git"];
  const databaseSkills: string[] = ["Modèle Entité-Association", "Modèle relationnel", "PostgreSQL", "Supabase"];
  const softSkills: string[] = ["Travail en équipe", "Communication", "Résolution de problèmes", "Autonomie", "Adaptabilité"];

  // Helper pour styliser les icônes
  const iconProps = {
    className: 'size-5 text-muted-foreground', // Utiliser une couleur discrète
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
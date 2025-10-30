// src/app/(components)/skills.tsx
"use client";
import Section from './section';
import { Badge } from '@/components/ui/badge'; // 👈 Importer Badge

// ❌ Supprimer le composant SkillBadge

export default function Skills() {
  return (
    <Section id="skills" title="Compétences">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"> 
        {/* 👆 J'ai ajouté lg:grid-cols-4 pour un meilleur look */}
        {/* 👇 Utiliser Badge */}
        <Badge variant="secondary" className="justify-center px-3 py-2 text-sm">TypeScript</Badge>
        <Badge variant="secondary" className="justify-center px-3 py-2 text-sm">React / Next.js</Badge>
        <Badge variant="secondary" className="justify-center px-3 py-2 text-sm">Tailwind CSS</Badge>
        <Badge variant="secondary" className="justify-center px-3 py-2 text-sm">Framer Motion</Badge>
        <Badge variant="secondary" className="justify-center px-3 py-2 text-sm">Node / Express</Badge>
        <Badge variant="secondary" className="justify-center px-3 py-2 text-sm">Git / CI</Badge>
      </ul>
    </Section>
  );
}
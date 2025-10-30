// src/app/(components)/formations.tsx

"use client";
import Section from './section';
import { formations } from '@/lib/data'; // Importer les données
import { GraduationCap } from 'lucide-react'; // Importer une icône

export default function Formations() {
  return (
    <Section id="formations" title="Formations">
      {/* On utilise une div pour créer un effet "timeline" simple */}
      <div className="flex flex-col gap-8 pl-6 border-l-2 border-border">
        {formations.map((formation) => (
          <div
            key={formation.title}
            className="relative" // Conteneur pour le point de la timeline
          >
            {/* Le point sur la timeline */}
            <div className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-primary" />

            {/* Contenu de la formation */}
            <p className="font-semibold text-muted-foreground">{formation.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{formation.title}</h3>
            <p className="text-muted-foreground">{formation.school}</p>
            {formation.description && (
              <p className="mt-2 text-sm">{formation.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
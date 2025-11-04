"use client";
import Section from './section';
import { formations } from '@/lib/data'; 
import { GraduationCap } from 'lucide-react'; 
import { motion } from 'framer-motion';

export default function Formations() {
  return (
    <Section id="formations" title="Formations">
      <div className="flex flex-col gap-8 pl-6 border-l-2 border-border">
        {formations.map((formation) => (
          <motion.div
            key={formation.title}
            className="relative"
          >
          <div className="absolute -left-[42px] top-0.5 z-10 flex items-center justify-center p-2 rounded-full bg-background ring-8 ring-background md:-left-[44px]">
            <GraduationCap className="size-5 text-primary" />
          </div>
            <p className="font-semibold text-muted-foreground">{formation.date}</p>
            <h3 className="mt-1 text-lg font-semibold text-foreground">{formation.title}</h3>
            <p className="text-muted-foreground">{formation.school}</p>
            {formation.description && (
              <p className="mt-2 text-sm">{formation.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
"use client";
import Section from './section';

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <li className="rounded-md border px-3 py-2 bg-white/50 dark:bg-black/30 text-sm">{children}</li>
);

export default function Skills() {
  return (
    <Section id="skills" title="Compétences">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <SkillBadge>TypeScript</SkillBadge>
        <SkillBadge>React / Next.js</SkillBadge>
        <SkillBadge>Tailwind CSS</SkillBadge>
        <SkillBadge>Framer Motion</SkillBadge>
        <SkillBadge>Node / Express</SkillBadge>
        <SkillBadge>Git / CI</SkillBadge>
      </ul>
    </Section>
  );
}

import type { Project } from '@/types/project';
import type { Formation } from '@/types/formation';

export const projects: Project[] = [
  {
    title: 'Portfolio Personnel',
    description: 'Développement d\'un site web personnel avec Next.js et Tailwind CSS pour présenter mes projets, compétences et expériences professionnelles.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: 'https://guillaume-portofolio.vercel.app/#projects',
    repo: 'https://github.com/GuillaumeDelferiere/guillaume-portofolio',
    year: '2025'
  },
  {
    title: 'Bookworm',
    description: 'Développement d\'une application mobile de gestion de bibliothèque personnelle avec React Native dans le cadre d\'une summer school internationnale (Belgique, Danemark, Canada) à Toronto.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase'],
    repo: 'https://github.com/Simon-Fontaine/rnss25-group-7-simon-guillaume-rehat-mostafa',
    year: '2025'
  },
  {
    title: 'Tablify',
    description: 'Développement d\'une application web permettant la réservation et la gestion de tables dans les restaurants avec une dimension sociale : les utilisateurs peuvent partager leurs tables avec des inconnus pour favoriser les rencontres.',
    tags: ['Next.js', 'TailwindCSS', 'Express.js', 'Node.js', 'PostgreSQL'],
    link: '',
    repo: 'https://github.com/Tablify-Developement/Tablify-Web/tree/production',
    year: '2024'
  },
  {
    title: 'Blog Personnel',
    description: 'Développement d\'un site statique avec Hugo de blog personnel et déploiement sur Netlify pour partager des bilans mensuels.',
    tags: ['Hugo', 'Netlify', 'Markdown'],
    link: 'https://bilan-mensuel-guillaume.netlify.app/',
    repo: 'https://github.com/GuillaumeDelferiere/Bilan-Mensuel',
    year: '2025'
  }
];

export const formations: Formation[] = [
  {
    title: 'Bachelier en Technologies de l\'Informatique',
    school: 'Ephec Louvain-La-Neuve',
    date: '2022 - 2026 (en cours)',
    description: 'Formation axée sur le développement web, les bases de données, les réseaux et la sécurité informatique avec une approche pratique.',
  },
  {
    title: 'Summer School - Application Mobile React Native',
    school: 'Seneca Polytechnic, Toronto',
    date: 'Été 2025',
    description: 'Programme intensif sur le développement d\'applications mobiles multiplateformes utilisant React Native.',
  },
  {
    title: 'Bachelier en Ingénieur de Gestion',
    school: 'Université Catholique de Louvain',
    date: '2021 - 2022',
    description: '',
  },
  {
    title: 'Certificat d\'Enseignement Secondaire Supérieur (CESS)',
    school: 'Institut de l\'Enfant-Jésus, Nivelles',
    date: '2014 - 2020',
    description: 'Option Latin jusqu\'en 4e année et Mathématiques/Sciences fortes en 5e et 6e année. Immersion anglaise durant toute la scolarité.',
  },
];
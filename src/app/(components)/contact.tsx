"use client";
import Section from './section';
import { Button } from '@/components/ui/button';
import { Download, Github, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';


const email = "contact@guillaume-delferiere.be";
const githubUrl = "https://github.com/GuillaumeDelferiere"; 
const instagramUrl = "https://www.instagram.com/guillaumedelferiere/"; 
// ------------------------------------------

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-lg text-muted-foreground dark:text-gray-300">
        Je suis disponible pour un stage de fin d'études (février - mai 2026) ou d'autres opportunités. N'hésitez pas à me contacter via email ou à visiter mes profils GitHub et Instagram !
      </p>

      {/* Conteneur pour les boutons de contact/sociaux */}
      <div className="flex flex-wrap items-center gap-4 mt-8">
        {/* Bouton Email */}
        <Button asChild size="lg">
          <Link href={`mailto:${email}`}>
            <Mail className="mr-2 size-5" />
            {email}
          </Link>
        </Button>

        {/* Bouton CV */}
        <Button asChild size="lg" variant="outline">
          <Link href="/CV_Guillaume.pdf" download>
            <Download className="mr-2 size-5" />
              Télécharger mon CV
          </Link>
        </Button>

        {/* Bouton GitHub */}
        <Button asChild variant="outline" size="icon" aria-label="GitHub">
          <Link href={githubUrl} target="_blank" rel="noreferrer">
            <Github className="size-5" />
          </Link>
        </Button>

        {/* Bouton Instagram */}
        <Button asChild variant="outline" size="icon" aria-label="Instagram">
          <Link href={instagramUrl} target="_blank" rel="noreferrer">
            <Instagram className="size-5" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
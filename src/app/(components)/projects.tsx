// src/app/(components)/projects.tsx

"use client";
import Section from './section';
import { projects } from '@/lib/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // 👈 1. Importer le bouton
import { Github, ExternalLink } from 'lucide-react'; // 👈 2. Importer les icônes
import Link from 'next/link'; // 👈 3. Importer Link de Next.js

export default function Projects() {
  return (
    <Section id="projects" title="Projets">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card key={p.title} className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-semibold">{p.title}</CardTitle>
                  <div className="ml-4 text-sm text-muted-foreground shrink-0">{p.year || '2023'}</div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mt-3 text-sm">{p.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </div>

            {/* 👇 4. Remplacer l'ancienne CardFooter par celle-ci */}
            <CardFooter className="flex gap-2 mt-4">
              {p.link && (
                <Button asChild size="sm" variant="outline">
                  <Link href={p.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 size-4" />
                    Voir
                  </Link>
                </Button>
              )}
              {p.repo && (
                <Button asChild size="icon" variant="ghost">
                  <Link href={p.repo} target="_blank" rel="noreferrer" aria-label="Code (GitHub)">
                    <Github className="size-5" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
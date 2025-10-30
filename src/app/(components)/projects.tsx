// src/app/(components)/projects.tsx
"use client";
import Section from './section';
import { projects } from '@/lib/data';
// 👇 Importer les composants Card
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // (voir étape suivante)

export default function Projects() {
  return (
    <Section id="projects" title="Projets">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          // 👇 Remplacer <article className="p-5 card"> par <Card>
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
                    // 👇 Remplacer <span> par <Badge> (voir étape suivante)
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
              </CardContent>
            </div>
            <CardFooter className="flex gap-3 mt-4 text-sm">
              {p.link && (
                <a className="underline" href={p.link} target="_blank" rel="noreferrer">Voir</a>
              )}
              {p.repo && (
                <a className="underline" href={p.repo} target="_blank" rel="noreferrer">Code</a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
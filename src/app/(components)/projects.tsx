"use client";
import Section from './section';
import { projects } from '@/lib/data';

export default function Projects() {
  return (
    <Section id="projects" title="Projets">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card p-5">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <div className="kicker">{p.year || '2023'}</div>
            </div>

            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-gray-800">{t}</span>
              ))}
            </div>

            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a className="underline" href={p.link} target="_blank" rel="noreferrer">Voir</a>
              )}
              {p.repo && (
                <a className="underline" href={p.repo} target="_blank" rel="noreferrer">Code</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

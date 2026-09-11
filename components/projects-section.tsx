'use client';

/**
 * 02 — PROJETOS
 * Lista editorial (não grid de cards). Filtro por categoria como toggles mono.
 * Projetos em /lib/projects-data.ts
 */

import { useState, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language-context';
import { projects, type Project } from '@/lib/projects-data';
import ProjectCard from './project-card';
import ProjectModal from './project-modal';

type CategoryFilter = 'all' | 'data-analysis' | 'automation' | 'ai' | 'client-solutions';

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const cats: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: t?.projects?.filterAll ?? 'Todos' },
    { key: 'data-analysis', label: t?.projects?.categories?.['data-analysis'] ?? 'Análise de Dados' },
    { key: 'automation', label: t?.projects?.categories?.['automation'] ?? 'Automação' },
    { key: 'ai', label: t?.projects?.categories?.['ai'] ?? 'IA' },
    { key: 'client-solutions', label: t?.projects?.categories?.['client-solutions'] ?? 'Cliente' },
  ];
  const activeCats = cats.filter(
    (c) => c.key === 'all' || projects.some((p) => p.category === c.key),
  );

  return (
    <section id="projects" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="num text-sm text-ink/40">02</p>
            <h2 className="mt-1 font-display text-2xl text-ink">
              {t?.projects?.title ?? 'Projetos'}
            </h2>
            <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-ink/50">
              {t?.projects?.subtitle ?? ''}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pb-4">
              {activeCats.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`font-mono text-xs uppercase tracking-widest transition-colors ${
                    filter === c.key
                      ? 'text-ink underline decoration-blue decoration-2 underline-offset-[6px]'
                      : 'text-ink/40 hover:text-ink'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <ul className="border-t border-ink">
              {filtered.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  index={i}
                  language={language}
                  onViewDetails={() => setSelected(p)}
                  translations={t?.projects ?? {}}
                />
              ))}
            </ul>

            {filtered.length === 0 && (
              <p className="py-12 font-mono text-xs uppercase tracking-widest text-ink/40">
                {language === 'pt-BR'
                  ? 'Nenhum projeto nesta categoria.'
                  : 'No projects in this category.'}
              </p>
            )}
          </div>
        </div>
      </div>

      <ProjectModal
        project={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        language={language}
        translations={t?.projects ?? {}}
      />
    </section>
  );
}

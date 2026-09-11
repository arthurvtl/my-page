'use client';

/**
 * LINHA DE PROJETO — número, título em serifa, descrição, stack mono,
 * miniatura em P&B que ganha cor no hover, ações mono à direita.
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { type Project } from '@/lib/projects-data';
import { type Language } from '@/contexts/language-context';
import { getAssetPath } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  language: Language;
  onViewDetails: () => void;
  translations: Record<string, unknown>;
}

export default function ProjectCard({
  project,
  index,
  language,
  onViewDetails,
  translations,
}: ProjectCardProps) {
  const title = language === 'pt-BR' ? project.titlePtBR : project.titleEnUS;
  const description = language === 'pt-BR' ? project.descriptionPtBR : project.descriptionEnUS;
  const num = String(index + 1).padStart(2, '0');
  const hasMedia = (project.images?.length ?? 0) > 0 || !!project.videoUrl;
  const techs = project.technologies ?? [];

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.05 }}
      className="group border-b border-line"
    >
      <div className="grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-4 py-8 md:grid-cols-[3rem_1fr_7.5rem_9.5rem] md:items-center md:gap-x-6">
        <span className="num pt-1 text-sm text-ink/35 md:pt-0">{num}</span>

        <div className="min-w-0">
          <h3 className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-blue md:text-[1.75rem]">
            {title}
          </h3>
          <p className="measure mt-2 text-sm leading-relaxed text-ink/60">{description}</p>
          <p className="mt-3 font-mono text-[11px] tracking-wide text-ink/40">
            {techs.slice(0, 5).join('   /   ')}
            {techs.length > 5 ? `   /   +${techs.length - 5}` : ''}
          </p>
        </div>

        <div className="col-start-2 row-start-3 hidden md:col-start-3 md:row-start-auto md:block">
          {project.coverImage ? (
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-line">
              <Image
                src={getAssetPath(project.coverImage)}
                alt=""
                fill
                sizes="140px"
                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
              />
            </div>
          ) : null}
        </div>

        <div className="col-start-2 row-start-2 flex flex-wrap items-center gap-x-4 gap-y-2 md:col-start-4 md:row-start-auto md:flex-col md:items-end md:gap-2">
          {hasMedia && (
            <button
              onClick={onViewDetails}
              className="group/btn inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:text-blue"
            >
              {(translations?.viewDetails as string) ?? 'Ver detalhes'}
              <span className="transition-transform group-hover/btn:translate-x-0.5">→</span>
            </button>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-ink/45 transition-colors hover:text-ink"
            >
              {(translations?.viewRepo as string) ?? 'Repo'} ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest text-ink/45 transition-colors hover:text-ink"
            >
              {(translations?.viewDemo as string) ?? 'Demo'} ↗
            </a>
          )}

          {project.isPrivate && (
            <span className="font-mono text-[11px] uppercase tracking-widest text-ink/30">
              {(translations?.privateProject as string) ?? 'Privado'}
            </span>
          )}
        </div>
      </div>
    </motion.li>
  );
}

'use client';

/**
 * ===========================================
 * COMPONENTE: CARD DE PROJETO
 * ===========================================
 * 
 * Card individual de projeto com hover effects.
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Lock, Play, ImageIcon } from 'lucide-react';
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
  const title = language === 'pt-BR' ? project?.titlePtBR : project?.titleEnUS;
  const description = language === 'pt-BR' ? project?.descriptionPtBR : project?.descriptionEnUS;

  const hasMedia = (project?.images?.length ?? 0) > 0 || project?.videoUrl;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Imagem de capa */}
      <div className="relative aspect-video bg-muted/30 overflow-hidden">
        {project?.coverImage ? (
          <Image
            src={getAssetPath(project.coverImage)}
            alt={title ?? 'Project cover'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <ImageIcon className="w-12 h-12 text-muted-foreground/30" />
          </div>
        )}

        {/* Badge de projeto privado */}
        {project?.isPrivate && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-foreground/80 text-background text-xs font-medium rounded-full">
            <Lock className="w-3 h-3" />
            {(translations?.privateProject as string) ?? 'Privado'}
          </div>
        )}

        {/* Indicação de mídia */}
        {hasMedia && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-1 bg-foreground/80 text-background text-xs font-medium rounded-full">
            {project?.videoUrl ? <Play className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
            {project?.videoUrl ? 'Vídeo' : `${project?.images?.length ?? 0} imgs`}
          </div>
        )}

        {/* Overlay no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Conteúdo */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {title ?? 'Projeto'}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description ?? 'Descrição do projeto'}
        </p>

        {/* Tags de tecnologias */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(project?.technologies ?? [])?.slice?.(0, 4)?.map?.((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-muted/50 text-muted-foreground text-xs rounded-full"
            >
              {tech}
            </span>
          )) ?? null}
          {(project?.technologies?.length ?? 0) > 4 && (
            <span className="px-2 py-0.5 bg-muted/50 text-muted-foreground text-xs rounded-full">
              +{(project?.technologies?.length ?? 0) - 4}
            </span>
          )}
        </div>

        {/* Botões de ação */}
        <div className="flex flex-wrap gap-2">
          {project?.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg hover:bg-foreground/80 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              {(translations?.viewRepo as string) ?? 'Repositório'}
            </a>
          )}

          {project?.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/80 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {(translations?.viewDemo as string) ?? 'Demo'}
            </a>
          )}

          {/* Botão Ver Detalhes para projetos com mídia */}
          {hasMedia && (
            <button
              onClick={onViewDetails}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-primary text-primary text-xs font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {(translations?.viewDetails as string) ?? 'Ver Detalhes'}
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
}

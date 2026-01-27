'use client';

/**
 * ===========================================
 * COMPONENTE: MODAL DE PROJETO
 * ===========================================
 * 
 * Modal com carrossel de imagens/vídeos do projeto.
 * Aparece ao clicar em "Ver Detalhes".
 */

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, Lock, Play, CheckCircle2, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { type Project } from '@/lib/projects-data';
import { type Language } from '@/contexts/language-context';
import useEmblaCarousel from 'embla-carousel-react';
import { getAssetPath } from '@/lib/utils';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  translations: Record<string, unknown>;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
  language,
  translations,
}: ProjectModalProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const title = language === 'pt-BR' ? project?.titlePtBR : project?.titleEnUS;
  const description = language === 'pt-BR' ? project?.descriptionPtBR : project?.descriptionEnUS;
  const highlights = language === 'pt-BR' ? project?.highlightsPtBR : project?.highlightsEnUS;
  const context = language === 'pt-BR' ? project?.contextPtBR : project?.contextEnUS;

  // Navegação do carrossel
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev?.(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext?.(), [emblaApi]);

  // Fecha com ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e?.key === 'Escape') onClose?.();
    };
    if (isOpen) {
      document?.addEventListener?.('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document?.removeEventListener?.('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const hasImages = (project?.images?.length ?? 0) > 0;
  const hasVideo = !!project?.videoUrl;
  const totalSlides = (project?.images?.length ?? 0) + (hasVideo ? 1 : 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-[90vw] lg:max-w-[75vw] h-[90vh] bg-background rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e?.stopPropagation?.()}
          >
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-background/90 hover:bg-background rounded-full shadow-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Carrossel / Mídia */}
              <div className="relative w-full md:w-[55%] bg-muted/10 flex items-center justify-center">
                {totalSlides > 0 ? (
                  <>
                    <div ref={emblaRef} className="overflow-hidden h-[40vh] md:h-full w-full">
                      <div className="flex h-full">
                        {/* Vídeo (se houver) */}
                        {hasVideo && (
                          <div className="flex-shrink-0 w-full h-full">
                            <iframe
                              src={project.videoUrl ?? ''}
                              title={title ?? 'Video'}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        )}

                        {/* Imagens */}
                        {project?.images?.map?.((img, index) => (
                          <div key={index} className="flex-shrink-0 w-full h-full relative bg-muted/20 flex items-center justify-center p-4">
                            <Image
                              src={getAssetPath(img)}
                              alt={`${title ?? 'Project'} - ${index + 1}`}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 100vw, 55vw"
                            />
                          </div>
                        )) ?? null}
                      </div>
                    </div>

                    {/* Navegação do carrossel */}
                    {totalSlides > 1 && (
                      <>
                        <button
                          onClick={scrollPrev}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-background/90 hover:bg-background rounded-full shadow-lg transition-colors"
                          aria-label="Anterior"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={scrollNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-background/90 hover:bg-background rounded-full shadow-lg transition-colors"
                          aria-label="Próximo"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        
                        {/* Indicador de slides */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {Array.from({ length: totalSlides }).map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full bg-foreground/30"
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-[40vh] md:h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                    <Play className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                )}
              </div>

              {/* Informações do projeto */}
              <div className="w-full md:w-[45%] p-8 overflow-y-auto">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold flex-1 leading-tight">{title ?? 'Projeto'}</h3>
                    {project?.isPrivate && (
                      <span className="flex items-center gap-1.5 px-3 py-1.5 bg-muted text-muted-foreground text-sm font-medium rounded-full shrink-0">
                        <Lock className="w-4 h-4" />
                        {(translations?.privateProject as string) ?? 'Privado'}
                      </span>
                    )}
                  </div>
                  
                  {/* Contexto */}
                  {context && (
                    <div className="flex items-center gap-2 text-primary font-medium mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{context}</span>
                    </div>
                  )}
                  
                  {/* Descrição */}
                  <p className="text-muted-foreground text-lg leading-relaxed">{description ?? ''}</p>
                </div>

                {/* Destaques */}
                {highlights && highlights.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 text-foreground">
                      {language === 'pt-BR' ? '✨ Principais Funcionalidades' : '✨ Key Features'}
                    </h4>
                    <ul className="space-y-3">
                      {highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tecnologias */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">
                    {language === 'pt-BR' ? '🛠️ Tecnologias Utilizadas' : '🛠️ Technologies Used'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map?.((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    )) ?? null}
                  </div>
                </div>

                {/* Botões */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-muted">
                  {project?.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/80 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      {(translations?.viewRepo as string) ?? 'Ver Repositório'}
                    </a>
                  )}

                  {project?.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {(translations?.viewDemo as string) ?? 'Ver Demo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

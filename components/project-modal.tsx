'use client';

/**
 * MODAL DE PROJETO — painel branco de canto reto, borda tinta.
 * Carrossel de mídia à esquerda (embla), ficha à direita com labels mono.
 */

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev?.(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext?.(), [emblaApi]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const hasVideo = !!project.videoUrl;
  const totalSlides = (project.images?.length ?? 0) + (hasVideo ? 1 : 0);
  const featuresLabel = language === 'pt-BR' ? 'Funcionalidades' : 'Features';
  const stackLabel = 'Stack';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative flex h-[88vh] w-full max-w-[92vw] flex-col overflow-hidden rounded-[3px] border border-ink bg-paper lg:max-w-[72vw] lg:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 z-10 border border-ink bg-paper px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:bg-wash"
              aria-label={language === 'pt-BR' ? 'Fechar' : 'Close'}
            >
              ✕ {language === 'pt-BR' ? 'fechar' : 'close'}
            </button>

            {/* Mídia */}
            <div className="relative flex w-full items-center justify-center border-b border-line bg-muted lg:w-[55%] lg:border-b-0 lg:border-r">
              {totalSlides > 0 ? (
                <>
                  <div ref={emblaRef} className="h-[38vh] w-full overflow-hidden lg:h-full">
                    <div className="flex h-full">
                      {hasVideo && (
                        <div className="h-full w-full flex-shrink-0">
                          <iframe
                            src={project.videoUrl ?? ''}
                            title={title ?? 'Video'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="h-full w-full"
                          />
                        </div>
                      )}
                      {project.images?.map((img, i) => (
                        <div
                          key={i}
                          className="relative flex h-full w-full flex-shrink-0 items-center justify-center p-4"
                        >
                          <Image
                            src={getAssetPath(img)}
                            alt={`${title ?? 'Projeto'} — ${i + 1}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {totalSlides > 1 && (
                    <>
                      <button
                        onClick={scrollPrev}
                        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-ink bg-paper transition-colors hover:bg-wash"
                        aria-label={language === 'pt-BR' ? 'Anterior' : 'Previous'}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={scrollNext}
                        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-ink bg-paper transition-colors hover:bg-wash"
                        aria-label={language === 'pt-BR' ? 'Próximo' : 'Next'}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                          <span key={i} className="h-1.5 w-1.5 bg-ink/25" />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex h-[38vh] w-full items-center justify-center lg:h-full">
                  <span className="font-mono text-xs uppercase tracking-widest text-ink/30">
                    {language === 'pt-BR' ? 'sem mídia' : 'no media'}
                  </span>
                </div>
              )}
            </div>

            {/* Ficha */}
            <div className="w-full overflow-y-auto p-6 md:p-8 lg:w-[45%]">
              {context && (
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue">
                  {context}
                </p>
              )}

              <div className="mt-3 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                  {title ?? 'Projeto'}
                </h3>
                {project.isPrivate && (
                  <span className="shrink-0 border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-ink/45">
                    {(translations?.privateProject as string) ?? 'Privado'}
                  </span>
                )}
              </div>

              <p className="measure mt-4 text-base leading-relaxed text-ink/70">
                {description ?? ''}
              </p>

              {highlights && highlights.length > 0 && (
                <div className="mt-8">
                  <p className="kicker text-ink/40">{featuresLabel}</p>
                  <ul className="mt-3 space-y-2.5">
                    {highlights.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                        <span className="select-none font-mono text-blue">/</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8">
                <p className="kicker text-ink/40">{stackLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies?.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-line px-2.5 py-1 font-mono text-xs text-ink/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.repoUrl || project.demoUrl) && (
                <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[3px] bg-ink px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-paper transition-opacity hover:opacity-85"
                    >
                      {(translations?.viewRepo as string) ?? 'Ver repositório'} ↗
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[3px] bg-blue px-4 py-2.5 font-mono text-[11px] uppercase tracking-widest text-white transition-colors hover:bg-blue-strong"
                    >
                      {(translations?.viewDemo as string) ?? 'Ver demo'} ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

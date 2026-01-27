'use client';

/**
 * ===========================================
 * COMPONENTE: SEÇÃO DE PROJETOS
 * ===========================================
 * 
 * Grid de projetos com filtro por categoria.
 * Os projetos são definidos em /lib/projects-data.ts
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language-context';
import { projects, type Project } from '@/lib/projects-data';
import ProjectCard from './project-card';
import ProjectModal from './project-modal';

type CategoryFilter = 'all' | 'data-analysis' | 'automation' | 'ai' | 'client-solutions';

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filtra projetos baseado na categoria selecionada
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects ?? [];
    return (projects ?? [])?.filter?.((p) => p?.category === activeFilter) ?? [];
  }, [activeFilter]);

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: t?.projects?.filterAll ?? 'Todos' },
    { key: 'data-analysis', label: t?.projects?.categories?.['data-analysis'] ?? 'Análise de Dados' },
    { key: 'automation', label: t?.projects?.categories?.['automation'] ?? 'Automações' },
    { key: 'ai', label: t?.projects?.categories?.['ai'] ?? 'IA' },
    { key: 'client-solutions', label: t?.projects?.categories?.['client-solutions'] ?? 'Soluções Cliente' },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t?.projects?.title ?? 'Meus Projetos'}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t?.projects?.subtitle ?? 'Uma seleção dos meus trabalhos mais relevantes'}
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories?.map?.((cat) => (
            <motion.button
              key={cat?.key}
              onClick={() => setActiveFilter(cat?.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat?.key
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat?.label}
            </motion.button>
          )) ?? null}
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects?.map?.((project, index) => (
              <ProjectCard
                key={project?.id ?? index}
                project={project}
                index={index}
                language={language}
                onViewDetails={() => setSelectedProject(project)}
                translations={t?.projects ?? {}}
              />
            )) ?? null}
          </AnimatePresence>
        </motion.div>

        {/* Mensagem quando não há projetos */}
        {(filteredProjects?.length ?? 0) === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            Nenhum projeto encontrado nesta categoria.
          </motion.p>
        )}
      </div>

      {/* Modal de detalhes do projeto */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        language={language}
        translations={t?.projects ?? {}}
      />
    </section>
  );
}

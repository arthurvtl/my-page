'use client';

/**
 * 01 — SOBRE
 * Cabeçalho numerado sticky à esquerda, prosa em medida de leitura à direita,
 * competências como chips mono de canto reto.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language-context';

export default function AboutSection() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const skills =
    language === 'pt-BR'
      ? [
          'Análise de dados',
          'Automação de processos',
          'Pipelines de ETL',
          'Dashboards',
          'Python · SQL · Pandas',
        ]
      : [
          'Data analysis',
          'Process automation',
          'ETL pipelines',
          'Dashboards',
          'Python · SQL · Pandas',
        ];

  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="num text-sm text-ink/40">01</p>
            <h2 className="mt-1 font-display text-2xl text-ink">
              {t?.about?.title ?? 'Sobre'}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="measure space-y-5 text-lg leading-relaxed text-ink/75">
              {(t?.about?.paragraphs ?? []).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-line px-3 py-1.5 font-mono text-xs text-ink/70 transition-colors hover:border-ink hover:text-ink"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

/**
 * HERO — layout assimétrico. Kicker mono, frase-manifesto em serifa,
 * retrato com bloco azul chapado deslocado atrás. Sem blobs, sem glow.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { getAssetPath } from '@/lib/utils';
import CVDownloadModal from './cv-download-modal';

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] as const },
  }),
};

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [cvOpen, setCvOpen] = useState(false);

  const go = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const statement =
    t?.hero?.statement ??
    (language === 'pt-BR' ? 'Transformo dados em decisões.' : 'I turn data into decisions.');
  const lead = t?.hero?.lead ?? t?.hero?.subtitle ?? '';
  const stack = ['Python', 'SQL', 'Pandas', 'Streamlit', 'ETL'];

  return (
    <section id="home" className="relative flex min-h-screen items-center pb-16 pt-24">
      <div className="container-page">
        <div className="grid items-end gap-12 md:grid-cols-[1fr_auto] md:gap-16">
          {/* Coluna de texto */}
          <div>
            <motion.p
              custom={0}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="kicker"
            >
              {t?.hero?.title ?? 'Analista de Dados'}
              <span className="mx-2 text-ink/25">/</span>
              {language === 'pt-BR' ? 'Vitória-ES, Brasil' : 'Vitória, Brazil'}
            </motion.p>

            <motion.h1
              custom={1}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mt-5 font-display text-[2.75rem] leading-[1.02] tracking-[-0.02em] text-ink sm:text-6xl lg:text-7xl"
            >
              {statement}
            </motion.h1>

            <motion.p
              custom={2}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="measure mt-6 text-lg leading-relaxed text-ink/70"
            >
              {lead}
            </motion.p>

            <motion.div
              custom={3}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <button
                onClick={() => go('#projects')}
                className="rounded-[3px] bg-blue px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-strong"
              >
                {t?.hero?.cta ?? 'Ver projetos'}
              </button>

              <button
                onClick={() => setCvOpen(true)}
                className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink"
              >
                {language === 'pt-BR' ? 'Baixar CV' : 'Download CV'}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>

              <button
                onClick={() => go('#contact')}
                className="font-mono text-xs uppercase tracking-widest text-ink/45 transition-colors hover:text-ink"
              >
                {t?.nav?.contact ?? 'Contato'}
              </button>
            </motion.div>

            <motion.p
              custom={4}
              variants={reveal}
              initial="hidden"
              animate="show"
              className="mt-10 font-mono text-xs tracking-wide text-ink/40"
            >
              {stack.join('   ·   ')}
            </motion.p>
          </div>

          {/* Retrato */}
          <motion.div
            custom={2}
            variants={reveal}
            initial="hidden"
            animate="show"
            className="relative mx-auto w-[220px] shrink-0 sm:w-[260px] md:mx-0 md:w-[300px]"
          >
            <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full bg-blue" />
            <div className="relative aspect-[4/5] border border-ink bg-muted">
              <Image
                src={getAssetPath('/profile.jpg')}
                alt="Arthur Vital"
                fill
                priority
                className="object-cover"
                sizes="300px"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] tracking-wide text-ink/40">
              {language === 'pt-BR' ? 'disponível para projetos' : 'available for work'}
            </p>
          </motion.div>
        </div>
      </div>

      <CVDownloadModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}

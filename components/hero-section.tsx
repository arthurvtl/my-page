'use client';

/**
 * ===========================================
 * COMPONENTE: HERO SECTION (OTIMIZADO)
 * ===========================================
 * 
 * Animações simplificadas para melhor performance.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import AnimatedBackground from './animated-background';
import CVDownloadModal from './cv-download-modal';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document?.querySelector?.(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animação simplificada - apenas fade in
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <AnimatedBackground />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6"
            {...fadeIn}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {t?.hero?.greeting ?? 'Olá, eu sou'}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-gradient">{t?.hero?.name ?? 'Seu Nome'}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-8"
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t?.hero?.title ?? 'Analista de Dados'}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t?.hero?.subtitle ?? 'Transformo ideias em soluções digitais elegantes e eficientes.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              {t?.hero?.cta ?? 'Ver Projetos'}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => setIsCVModalOpen(true)}
              className="flex items-center gap-2 px-8 py-4 bg-secondary/20 border border-secondary/50 text-secondary rounded-xl font-medium hover:bg-secondary/30 transition-colors"
            >
              <Download className="w-4 h-4" />
              {language === 'pt-BR' ? 'Baixar CV' : 'Download CV'}
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-8 py-4 border border-primary/50 text-primary rounded-xl font-medium hover:bg-primary/10 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {t?.hero?.contact ?? 'Entrar em Contato'}
            </button>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-16"
            {...fadeIn}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {['Python', 'SQL', 'Pandas', 'Streamlit'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted/50 border border-border/50 text-muted-foreground text-sm rounded-lg hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - CSS animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      <CVDownloadModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </section>
  );
}

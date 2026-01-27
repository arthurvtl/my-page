'use client';

/**
 * ===========================================
 * COMPONENTE: HERO SECTION
 * ===========================================
 * 
 * Seção principal com nome, título e CTAs.
 * Animações de entrada com Framer Motion.
 * Background animado com ondas fluidas.
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge animado */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              {t?.hero?.greeting ?? 'Olá, eu sou'}
            </motion.span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-gradient text-glow">{t?.hero?.name ?? 'Seu Nome'}</span>
          </motion.h1>

          {/* Title com efeito glow */}
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative">
              {t?.hero?.title ?? 'Analista de Dados'}
              <motion.span
                className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg -z-10"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t?.hero?.subtitle ?? 'Transformo ideias em soluções digitais elegantes e eficientes.'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="group relative flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {/* Glow */}
              <span className="absolute inset-0 bg-primary blur-xl opacity-50 group-hover:opacity-70 transition-opacity -z-10" />
              {t?.hero?.cta ?? 'Ver Projetos'}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => setIsCVModalOpen(true)}
              className="group flex items-center gap-2 px-8 py-4 bg-secondary/20 border border-secondary/50 text-secondary rounded-xl font-medium backdrop-blur-sm hover:bg-secondary/30 hover:border-secondary transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              {language === 'pt-BR' ? 'Baixar CV' : 'Download CV'}
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-primary/50 text-primary rounded-xl font-medium backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              {t?.hero?.contact ?? 'Entrar em Contato'}
            </motion.button>
          </motion.div>

          {/* Tech stack floating badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {['Python', 'SQL', 'Pandas', 'Streamlit'].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-muted/50 border border-border/50 text-muted-foreground text-sm rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border border-primary/30 rounded-full flex justify-center pt-2 backdrop-blur-sm"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>

      {/* CV Download Modal */}
      <CVDownloadModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </section>
  );
}

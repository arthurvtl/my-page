'use client';

/**
 * ===========================================
 * COMPONENTE: SOBRE MIM
 * ===========================================
 * 
 * Seção com foto/avatar e texto sobre você.
 * Para mudar a foto, substitua o avatarUrl abaixo.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Lightbulb, Zap } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { getAssetPath } from '@/lib/utils';

// ========== EDITE A URL DO AVATAR AQUI ==========
const avatarUrl = '/profile.jpg';

export default function AboutSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { icon: Database, label: 'Data Analysis', color: 'text-primary' },
    { icon: Lightbulb, label: 'Problem Solving', color: 'text-secondary' },
    { icon: Zap, label: 'Automation', color: 'text-accent' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      
      {/* Glow decorativo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Avatar / Foto */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              {/* Rotating border gradient */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-50 blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse-glow" />
              
              {/* Container do avatar */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                {avatarUrl ? (
                  <Image
                    src={getAssetPath(avatarUrl)}
                    alt="Foto de perfil"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                ) : (
                  /* Avatar placeholder */
                  <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                    <span className="text-6xl md:text-7xl font-bold text-primary/50">
                      {(t?.hero?.name ?? 'SN')?.charAt?.(0) ?? 'S'}
                    </span>
                  </div>
                )}
              </div>

              {/* Elementos decorativos flutuantes */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary rounded-full shadow-lg shadow-secondary/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 w-4 h-4 bg-accent rounded-full shadow-lg shadow-accent/50"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              {t?.about?.title ?? 'Sobre Mim'}
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              {(t?.about?.paragraphs ?? [])?.map?.((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )) ?? null}
            </div>

            {/* Skills icons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {skills?.map?.((skill, index) => {
                const Icon = skill?.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/50 rounded-xl backdrop-blur-sm"
                    whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary))' }}
                  >
                    {Icon && <Icon className={`w-5 h-5 ${skill?.color ?? ''}`} />}
                    <span className="text-sm font-medium text-foreground">
                      {skill?.label}
                    </span>
                  </motion.div>
                );
              }) ?? null}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

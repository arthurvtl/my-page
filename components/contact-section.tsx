'use client';

/**
 * ===========================================
 * COMPONENTE: SEÇÃO DE CONTATO
 * ===========================================
 * 
 * Links de contato: GitHub, LinkedIn, Email.
 * EDITE OS LINKS ABAIXO com suas informações reais.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

// ========== LINKS DE CONTATO ==========
const contactLinks = {
  github: 'https://github.com/arthurvtl',
  linkedin: 'https://www.linkedin.com/in/arthurvtl/',
  email: 'arthur.vitall05@gmail.com',
};

export default function ContactSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contacts = [
    {
      icon: Github,
      label: t?.contact?.github ?? 'GitHub',
      href: contactLinks?.github ?? '#',
      description: '@arthurvtl',
      color: 'hover:bg-slate-800 hover:text-white hover:border-primary/50',
    },
    {
      icon: Linkedin,
      label: t?.contact?.linkedin ?? 'LinkedIn',
      href: contactLinks?.linkedin ?? '#',
      description: '/in/arthurvtl',
      color: 'hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]/50',
    },
    {
      icon: Mail,
      label: t?.contact?.email ?? 'Email',
      href: `mailto:${contactLinks?.email ?? ''}`,
      description: contactLinks?.email ?? 'email@exemplo.com',
      color: 'hover:bg-primary hover:text-primary-foreground hover:border-primary/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="contact" className="py-20 md:py-32 bg-muted/10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t?.contact?.title ?? 'Vamos Conversar?'}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            {t?.contact?.subtitle ?? 'Estou sempre aberto a novas oportunidades e colaborações interessantes.'}
          </motion.p>

          {/* Links de contato */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {contacts?.map?.((contact, index) => {
              const Icon = contact?.icon;
              return (
                <motion.a
                  key={index}
                  href={contact?.href}
                  target={contact?.href?.startsWith?.('mailto') ? undefined : '_blank'}
                  rel={contact?.href?.startsWith?.('mailto') ? undefined : 'noopener noreferrer'}
                  className={`group relative flex flex-col items-center gap-3 p-6 bg-background rounded-xl shadow-md border border-border/50 transition-all duration-300 ${contact?.color ?? ''}`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {Icon && <Icon className="w-8 h-8 transition-colors" />}
                  <span className="font-semibold">{contact?.label}</span>
                  <span className="text-sm text-muted-foreground group-hover:text-current/70 transition-colors">
                    {contact?.description}
                  </span>
                  <ArrowUpRight className="absolute top-4 right-4 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              );
            }) ?? null}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

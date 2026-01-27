'use client';

/**
 * ===========================================
 * COMPONENTE: FOOTER
 * ===========================================
 * 
 * Rodapé simples com copyright e ícones sociais.
 */

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

// Links sociais
const socialLinks = {
  github: 'https://github.com/arthurvtl',
  linkedin: 'https://www.linkedin.com/in/arthurvtl/',
  email: 'arthur.vitall05@gmail.com',
};

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = 2026;

  const socials = [
    { icon: Github, href: socialLinks?.github ?? '#', label: 'GitHub' },
    { icon: Linkedin, href: socialLinks?.linkedin ?? '#', label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${socialLinks?.email ?? ''}`, label: 'Email' },
  ];

  return (
    <footer className="py-8 border-t border-border/50 bg-muted/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} {t?.hero?.name ?? 'Arthur Vital'}. {t?.footer?.rights ?? 'Todos os direitos reservados.'}
          </motion.p>

          {/* Ícones sociais */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {socials?.map?.((social, index) => {
              const Icon = social?.icon;
              return (
                <motion.a
                  key={index}
                  href={social?.href}
                  target={social?.href?.startsWith?.('mailto') ? undefined : '_blank'}
                  rel={social?.href?.startsWith?.('mailto') ? undefined : 'noopener noreferrer'}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social?.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </motion.a>
              );
            }) ?? null}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

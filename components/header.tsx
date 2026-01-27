'use client';

/**
 * ===========================================
 * COMPONENTE: HEADER / NAVEGAÇÃO
 * ===========================================
 * 
 * Header fixo com navegação e seletor de idioma.
 * Semi-transparente com blur para efeito de vidro.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import LanguageSelector from './language-selector';

export default function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50);
    };
    window?.addEventListener?.('scroll', handleScroll);
    return () => window?.removeEventListener?.('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t?.nav?.home ?? 'Início' },
    { href: '#about', label: t?.nav?.about ?? 'Sobre' },
    { href: '#projects', label: t?.nav?.projects ?? 'Projetos' },
    { href: '#contact', label: t?.nav?.contact ?? 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document?.querySelector?.(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-primary/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Nome */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-primary group-hover:text-glow">&lt;</span>
            <span className="text-gradient">Data</span>
            <span className="text-primary group-hover:text-glow">/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems?.map?.((item, index) => (
              <a
                key={item?.href ?? index}
                href={item?.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item?.href ?? '#');
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item?.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            )) ?? null}
          </motion.div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems?.map?.((item, index) => (
                <a
                  key={item?.href ?? index}
                  href={item?.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item?.href ?? '#');
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {item?.label}
                </a>
              )) ?? null}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}

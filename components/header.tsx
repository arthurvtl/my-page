'use client';

/**
 * HEADER — barra fixa, branco sólido, régua fina ao rolar.
 * Nome em serifa à esquerda, navegação mono à direita.
 */

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/language-context';
import LanguageSelector from './language-selector';

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = [
    { href: '#about', label: t?.nav?.about ?? 'Sobre' },
    { href: '#projects', label: t?.nav?.projects ?? 'Projetos' },
    { href: '#contact', label: t?.nav?.contact ?? 'Contato' },
  ];

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper transition-colors duration-200 ${
        scrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <nav className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go('#home');
            }}
            className="font-display text-lg font-medium tracking-tight text-ink transition-colors hover:text-blue"
          >
            Arthur Vital
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(i.href);
                }}
                className="kicker text-ink/55 transition-colors hover:text-ink"
              >
                {i.label}
              </a>
            ))}
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Menu"
              className="font-mono text-xs uppercase tracking-widest text-ink"
            >
              {open ? 'fechar' : 'menu'}
            </button>
          </div>
        </nav>

        {open && (
          <div className="flex flex-col gap-1 border-t border-line py-3 md:hidden">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={(e) => {
                  e.preventDefault();
                  go(i.href);
                }}
                className="kicker py-2 text-ink/70"
              >
                {i.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

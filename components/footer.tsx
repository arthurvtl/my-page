'use client';

/**
 * FOOTER — régua fina, crédito mono, links de texto.
 */

import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { language } = useLanguage();
  const tagline =
    language === 'pt-BR' ? 'Feito com dados e cafeína' : 'Built with data and caffeine';

  const links = [
    { label: 'GitHub', href: 'https://github.com/arthurvtl', ext: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arthurvtl/', ext: true },
    { label: 'Email', href: 'mailto:arthur.vitall05@gmail.com', ext: false },
  ];

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-[11px] tracking-wide text-ink/45">
          © 2026 Arthur Vital · {tagline}
        </p>
        <div className="flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.ext ? '_blank' : undefined}
              rel={l.ext ? 'noopener noreferrer' : undefined}
              className="font-mono text-[11px] uppercase tracking-widest text-ink/45 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

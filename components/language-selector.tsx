'use client';

/**
 * SELETOR DE IDIOMA — toggle mono PT / EN
 */

import { useLanguage, type Language } from '@/contexts/language-context';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const langs: { code: Language; label: string }[] = [
    { code: 'pt-BR', label: 'PT' },
    { code: 'en-US', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-0.5 rounded-[3px] border border-line p-0.5">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLanguage(l.code)}
          aria-pressed={language === l.code}
          aria-label={`Idioma: ${l.label}`}
          className={`px-2 py-1 font-mono text-[11px] font-medium tracking-widest transition-colors ${
            language === l.code
              ? 'bg-ink text-paper'
              : 'text-ink/50 hover:text-ink'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

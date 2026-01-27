'use client';

/**
 * ===========================================
 * COMPONENTE: SELETOR DE IDIOMA
 * ===========================================
 * 
 * Botões para trocar entre PT-BR e EN-US.
 * A troca é instantânea, sem recarregar a página.
 */

import { motion } from 'framer-motion';
import { useLanguage, type Language } from '@/contexts/language-context';

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'pt-BR', flag: '🇧🇷', label: 'PT' },
    { code: 'en-US', flag: '🇺🇸', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-1 bg-muted/30 rounded-full p-1">
      {languages?.map?.((lang) => (
        <motion.button
          key={lang?.code}
          onClick={() => setLanguage?.(lang?.code)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
            language === lang?.code
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label={`Switch to ${lang?.label}`}
        >
          <span className="text-base">{lang?.flag}</span>
          <span className="hidden sm:inline">{lang?.label}</span>
        </motion.button>
      )) ?? null}
    </div>
  );
}

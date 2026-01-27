'use client';

/**
 * ===========================================
 * CONTEXTO DE IDIOMA
 * ===========================================
 * 
 * Este contexto gerencia o idioma atual do site.
 * Permite trocar entre PT-BR e EN-US sem recarregar a página.
 */

import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { translations, type Language as LanguageType, type TranslationKeys } from '@/lib/translations';

// Re-export Language type for use in other components
export type Language = LanguageType;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Idioma padrão: PT-BR
  const [language, setLanguageState] = useState<Language>('pt-BR');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Recupera idioma salvo no localStorage (se existir)
    const saved = localStorage?.getItem?.('portfolio-language') as Language | null;
    if (saved && (saved === 'pt-BR' || saved === 'en-US')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage?.setItem?.('portfolio-language', lang);
  };

  // Obtém traduções do idioma atual
  const t = translations[language];

  // Evita flash de conteúdo durante hidratação
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'pt-BR', setLanguage, t: translations['pt-BR'] }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

'use client';

/**
 * MODAL DE DOWNLOAD DO CV — PT / EN, painel branco de canto reto.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { getAssetPath } from '@/lib/utils';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVDownloadModal({ isOpen, onClose }: CVDownloadModalProps) {
  const { language } = useLanguage();

  const cvOptions = [
    {
      code: 'PT',
      label: language === 'pt-BR' ? 'Português' : 'Portuguese',
      file: '/cv/CV-Arthur-Vital-PT.pdf',
    },
    {
      code: 'EN',
      label: language === 'pt-BR' ? 'Inglês' : 'English',
      file: '/cv/CV-Arthur-Vital-EN.pdf',
    },
  ];

  const title = language === 'pt-BR' ? 'Baixar currículo' : 'Download resume';
  const subtitle = language === 'pt-BR' ? 'Escolha o idioma' : 'Choose the language';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-full max-w-md rounded-[3px] border border-ink bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-line p-6">
              <div>
                <p className="kicker text-ink/40">{subtitle}</p>
                <h3 className="mt-1 font-display text-2xl text-ink">{title}</h3>
              </div>
              <button
                onClick={onClose}
                className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-ink/60 transition-colors hover:bg-wash hover:text-ink"
                aria-label={language === 'pt-BR' ? 'Fechar' : 'Close'}
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 p-6">
              {cvOptions.map((o) => (
                <a
                  key={o.code}
                  href={getAssetPath(o.file)}
                  download
                  className="group flex flex-col gap-2 border border-line p-5 transition-colors hover:border-ink hover:bg-wash"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-ink/45">
                    {o.code} · PDF
                  </span>
                  <span className="font-display text-lg text-ink">{o.label}</span>
                  <span className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/50 transition-colors group-hover:text-blue">
                    baixar →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

'use client';

/**
 * ===========================================
 * COMPONENTE: CV DOWNLOAD MODAL
 * ===========================================
 * 
 * Modal para download do CV em PT-BR e EN-US.
 */

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
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
      lang: 'PT-BR',
      flag: '🇧🇷',
      label: language === 'pt-BR' ? 'Português' : 'Portuguese',
      file: '/cv/CV-Arthur-Vital-PT.pdf',
    },
    {
      lang: 'EN-US',
      flag: '🇺🇸',
      label: language === 'pt-BR' ? 'Inglês' : 'English',
      file: '/cv/CV-Arthur-Vital-EN.pdf',
    },
  ];

  const title = language === 'pt-BR' ? 'Download do Currículo' : 'Download Resume';
  const subtitle = language === 'pt-BR' 
    ? 'Escolha o idioma do currículo' 
    : 'Choose the resume language';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-md bg-card border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
            
            {/* Header */}
            <div className="relative p-6 pb-4 border-b border-border/50">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative p-6">
              <div className="grid grid-cols-2 gap-4">
                {cvOptions.map((option, index) => (
                  <motion.a
                    key={option.lang}
                    href={getAssetPath(option.file)}
                    download
                    className="group flex flex-col items-center gap-3 p-6 bg-muted/30 border border-border/50 rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-4xl">{option.flag}</span>
                    <span className="font-semibold text-foreground">{option.label}</span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <Download className="w-4 h-4" />
                      <span>PDF</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



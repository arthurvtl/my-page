'use client';

/**
 * ===========================================
 * COMPONENTE: ANIMATED BACKGROUND
 * ===========================================
 * 
 * Background otimizado para performance em mobile.
 * Usa CSS animations ao invés de JS para melhor performance.
 */

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente base escuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/50 to-background" />
      
      {/* Blob 1 - CSS animation para melhor performance */}
      <div 
        className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-20 animate-blob-slow"
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Blob 2 */}
      <div 
        className="absolute top-1/4 -left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] opacity-15 animate-blob-slow-reverse"
      >
        <div className="w-full h-full bg-gradient-to-tr from-secondary/30 via-accent/20 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Glow central sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[100px]" />
    </div>
  );
}

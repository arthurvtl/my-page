'use client';

/**
 * ===========================================
 * COMPONENTE: ANIMATED BACKGROUND
 * ===========================================
 * 
 * Background com ondas fluidas animadas estilo a imagem
 * de referência com tons de azul petróleo.
 */

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradiente base escuro */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-900/50 to-background" />
      
      {/* Onda fluida 1 - Grande */}
      <motion.div
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/40 via-secondary/20 to-transparent rounded-full blur-3xl morph-blob" />
      </motion.div>
      
      {/* Onda fluida 2 - Média */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] opacity-20"
        animate={{
          rotate: [360, 0],
          y: [0, 50, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full bg-gradient-to-tr from-secondary/30 via-accent/20 to-transparent rounded-full blur-3xl morph-blob" />
      </motion.div>
      
      {/* Onda fluida 3 - Pequena */}
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-25"
        animate={{
          rotate: [0, -360],
          x: [0, 30, 0],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          x: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-full h-full bg-gradient-to-bl from-accent/30 via-primary/20 to-transparent rounded-full blur-3xl morph-blob" />
      </motion.div>
      
      {/* Linhas de luz - Estilo da imagem */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Curva 1 */}
        <motion.path
          d="M-100,400 Q200,100 500,300 T1100,200 T1700,350"
          fill="none"
          stroke="url(#waveGradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
        />
        
        {/* Curva 2 */}
        <motion.path
          d="M-100,600 Q300,300 600,500 T1200,350 T1800,500"
          fill="none"
          stroke="url(#waveGradient2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: 'easeOut' }}
        />
      </svg>
      
      {/* Partículas de brilho */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Glow central sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
}



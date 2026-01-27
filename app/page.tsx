/**
 * ===========================================
 * PÁGINA PRINCIPAL DO PORTFÓLIO
 * ===========================================
 * 
 * OTIMIZADO PARA PERFORMANCE:
 * - Lazy loading de seções abaixo do fold
 * - Componentes carregados sob demanda
 */

import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';

// Lazy load de componentes abaixo do fold para carregar mais rápido
const AboutSection = dynamic(() => import('@/components/about-section'), {
  loading: () => <div className="min-h-screen" />,
});

const DisclaimerSection = dynamic(() => import('@/components/disclaimer-section'), {
  loading: () => <div className="min-h-[50vh]" />,
});

const ProjectsSection = dynamic(() => import('@/components/projects-section'), {
  loading: () => <div className="min-h-screen" />,
});

const ContactSection = dynamic(() => import('@/components/contact-section'), {
  loading: () => <div className="min-h-[50vh]" />,
});

const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => <div className="h-20" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <DisclaimerSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

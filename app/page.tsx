/**
 * PÁGINA PRINCIPAL
 * Seções abaixo do fold carregadas sob demanda.
 */

import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';

const AboutSection = dynamic(() => import('@/components/about-section'), {
  loading: () => <div className="min-h-[60vh]" />,
});

const DisclaimerSection = dynamic(() => import('@/components/disclaimer-section'), {
  loading: () => <div className="min-h-[50vh]" />,
});

const ProjectsSection = dynamic(() => import('@/components/projects-section'), {
  loading: () => <div className="min-h-[60vh]" />,
});

const ContactSection = dynamic(() => import('@/components/contact-section'), {
  loading: () => <div className="min-h-[40vh]" />,
});

const Footer = dynamic(() => import('@/components/footer'), {
  loading: () => <div className="h-24" />,
});

export default function Home() {
  return (
    <main className="bg-paper">
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

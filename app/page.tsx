/**
 * ===========================================
 * PÁGINA PRINCIPAL DO PORTFÓLIO
 * ===========================================
 * 
 * Esta é a página principal que agrupa todas as seções.
 * 
 * ESTRUTURA:
 * 1. Header - Navegação fixa
 * 2. Hero - Seção de apresentação
 * 3. About - Sobre mim
 * 4. Projects - Projetos com filtro
 * 5. Contact - Links de contato
 * 6. Footer - Rodapé
 * 
 * COMO PERSONALIZAR:
 * - Textos: edite /lib/translations.ts
 * - Projetos: edite /lib/projects-data.ts
 * - Cores: edite /app/globals.css e /tailwind.config.ts
 * - Links de contato: edite os arquivos contact-section.tsx e footer.tsx
 */

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import DisclaimerSection from '@/components/disclaimer-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navegação fixa no topo */}
      <Header />
      
      {/* Seção Hero - Apresentação principal */}
      <HeroSection />
      
      {/* Seção Sobre - Informações pessoais */}
      <AboutSection />
      
      {/* Seção Disclaimer - Reflexão sobre IA e foco em dados */}
      <DisclaimerSection />
      
      {/* Seção de Projetos - Grid com filtros */}
      <ProjectsSection />
      
      {/* Seção de Contato - Links sociais */}
      <ContactSection />
      
      {/* Rodapé */}
      <Footer />
    </main>
  );
}

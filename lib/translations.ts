/**
 * ===========================================
 * SISTEMA DE TRADUÇÕES - PT-BR / EN-US
 * ===========================================
 * 
 * Para editar os textos do site, modifique os valores abaixo.
 * Cada idioma tem sua própria seção (ptBR e enUS).
 * 
 * COMO USAR:
 * 1. Encontre a seção que deseja editar (hero, about, projects, etc.)
 * 2. Altere o texto correspondente em AMBOS os idiomas
 * 3. Salve o arquivo e o site será atualizado automaticamente
 */

export type Language = 'pt-BR' | 'en-US';

export const translations = {
  'pt-BR': {
    // ========== NAVEGAÇÃO ==========
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contato',
    },
    
    // ========== HERO SECTION ==========
    // Edite seu nome e título profissional aqui
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Arthur Vital', // <- EDITE SEU NOME AQUI
      title: 'Analista de Dados', // <- EDITE SEU TÍTULO
      statement: 'Limpo bases, monto pipelines e automatizo o que se repete.',
      lead: 'Uso Python, SQL e Pandas para organizar dados, escrever ETL e montar dashboards.',
      subtitle: 'Limpo bases, monto pipelines e automatizo o que se repete.',
      cta: 'Ver projetos',
      contact: 'Entrar em contato',
    },
    
    // ========== SOBRE MIM ==========
    about: {
      title: 'Sobre mim',
      paragraphs: [
        'Sou analista de dados e programo para isso. No dia a dia uso Python, Pandas, NumPy e SQL: puxo dados de várias fontes, limpo, rodo o ETL e entrego em dashboard.',
        'Também faço web quando o projeto pede. O IAeJovem, que fiz no HackFaesa 2025, é um app em Next.js e PostgreSQL com uma IA de apoio emocional para estudantes.',
      ],
    },
    
    // ========== PROJETOS ==========
    projects: {
      title: 'Projetos',
      subtitle: '',
      viewRepo: 'Ver Repositório',
      viewDemo: 'Ver Demo',
      viewDetails: 'Ver Detalhes',
      filterAll: 'Todos',
      privateProject: 'Projeto Privado',
      // Categorias de filtro
      categories: {
        'data-analysis': 'Análise de Dados',
        'automation': 'Automações de Processos',
        'ai': 'Inteligência Artificial',
        'client-solutions': 'Soluções para Cliente Final',
      },
    },
    
    // ========== CONTATO ==========
    contact: {
      title: 'Vamos conversar?',
      subtitle: 'Disponível para projetos de dados. O jeito mais rápido é por email.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    
    // ========== FOOTER ==========
    footer: {
      rights: 'Todos os direitos reservados.',
      madeWith: 'Feito com',
      by: 'por',
    },
  },
  
  'en-US': {
    // ========== NAVIGATION ==========
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    
    // ========== HERO SECTION ==========
    hero: {
      greeting: "Hi, I'm",
      name: 'Arthur Vital', // <- EDIT YOUR NAME HERE
      title: 'Data Analyst', // <- EDIT YOUR TITLE
      statement: 'I clean data, build pipelines and automate what repeats.',
      lead: 'I use Python, SQL and Pandas to organize data, write ETL jobs and build dashboards.',
      subtitle: 'I clean data, build pipelines and automate what repeats.',
      cta: 'View projects',
      contact: 'Get in touch',
    },
    
    // ========== ABOUT ME ==========
    about: {
      title: 'About me',
      paragraphs: [
        'I am a data analyst, and I code to do the job. Day to day I use Python, Pandas, NumPy and SQL: I pull data from several sources, clean it, run the ETL and deliver a dashboard.',
        'I also build for the web when a project needs it. IAeJovem, which I made at HackFaesa 2025, is a Next.js and PostgreSQL app with an emotional-support AI for students.',
      ],
    },
    
    // ========== PROJECTS ==========
    projects: {
      title: 'Projects',
      subtitle: '',
      viewRepo: 'View Repository',
      viewDemo: 'View Demo',
      viewDetails: 'View Details',
      filterAll: 'All',
      privateProject: 'Private Project',
      categories: {
        'data-analysis': 'Data Analysis',
        'automation': 'Process Automation',
        'ai': 'Artificial Intelligence',
        'client-solutions': 'Client Solutions',
      },
    },
    
    // ========== CONTACT ==========
    contact: {
      title: "Let's talk?",
      subtitle: 'Available for data projects. Email is the fastest way to reach me.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
    
    // ========== FOOTER ==========
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by',
    },
  },
};

// Tipo para auto-complete no editor
export type TranslationKeys = typeof translations['pt-BR'];

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
      subtitle: 'Transformo ideias em soluções digitais elegantes e eficientes.',
      cta: 'Ver Projetos',
      contact: 'Entrar em Contato',
    },
    
    // ========== SOBRE MIM ==========
    about: {
      title: 'Sobre Mim',
      paragraphs: [
        'Sou um desenvolvedor com forte interesse em soluções orientadas a dados e automação de processos. Gosto de utilizar a programação para transformar dados em informações úteis e criar soluções que aumentam a eficiência e apoiam a tomada de decisão.',
        'Meu foco principal está em análise de dados e automação, utilizando tecnologias como Python, Pandas, NumPy, SQL e processos de ETL. Busco desenvolver soluções limpas, práticas e confiáveis para organização, processamento e análise de dados.',
        'Estou sempre em busca de aprimorar minhas habilidades, aprender novas tecnologias e aplicar a programação em problemas reais, especialmente em projetos voltados à análise de dados, automação e otimização de sistemas.'
      ],
    },
    
    // ========== PROJETOS ==========
    projects: {
      title: 'Meus Projetos',
      subtitle: 'Uma seleção dos meus trabalhos mais relevantes',
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
      title: 'Vamos Conversar?',
      subtitle: 'Estou sempre aberto a novas oportunidades e colaborações interessantes.',
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
      subtitle: 'I transform ideas into elegant and efficient digital solutions.',
      cta: 'View Projects',
      contact: 'Get in Touch',
    },
    
    // ========== ABOUT ME ==========
    about: {
      title: 'About Me',
      paragraphs: [
        'I am a developer with a strong interest in data-driven solutions and process automation. I enjoy using programming to turn data into useful insights and to build solutions that improve efficiency and decision-making.',
        'My main focus is on data analysis and automation, working with technologies such as Python, Pandas, NumPy, SQL, and ETL processes. I like developing clean and practical solutions that help organize, process, and analyze data in a clear and reliable way.',
        'I am always looking to improve my skills, learn new technologies, and apply programming to real-world data problems, especially in projects related to data analysis, automation, and system optimization.'
      ],
    },
    
    // ========== PROJECTS ==========
    projects: {
      title: 'My Projects',
      subtitle: 'A selection of my most relevant work',
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
      title: "Let's Talk?",
      subtitle: "I'm always open to new opportunities and interesting collaborations.",
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

/**
 * ===========================================
 * DADOS DOS PROJETOS
 * ===========================================
 * 
 * Edite esta lista para adicionar, remover ou modificar projetos.
 * 
 * ESTRUTURA DE CADA PROJETO:
 * - id: identificador único (não altere se já existir)
 * - titlePtBR / titleEnUS: nome do projeto nos dois idiomas
 * - descriptionPtBR / descriptionEnUS: descrição curta
 * - category: categoria para filtro (data-analysis, automation, ai, client-solutions)
 * - technologies: array de tecnologias usadas
 * - repoUrl: link do repositório (null se privado)
 * - demoUrl: link da demo (null se não houver)
 * - images: array de URLs de imagens para o carrossel
 * - videoUrl: URL de vídeo embed do YouTube/Vimeo (null se não houver)
 * - isPrivate: true se for projeto fechado/privado
 */

export interface Project {
  id: string;
  titlePtBR: string;
  titleEnUS: string;
  descriptionPtBR: string;
  descriptionEnUS: string;
  highlightsPtBR: string[];
  highlightsEnUS: string[];
  contextPtBR: string;
  contextEnUS: string;
  category: 'data-analysis' | 'automation' | 'ai' | 'client-solutions';
  technologies: string[];
  repoUrl: string | null;
  demoUrl: string | null;
  images: string[];
  videoUrl: string | null;
  isPrivate: boolean;
  coverImage: string;
}

export const projects: Project[] = [
  // ========== PROJETO 1: IAeJovem ==========
  {
    id: 'iaejovem',
    titlePtBR: 'IAeJovem - Plataforma de Apoio Emocional',
    titleEnUS: 'IAeJovem - Emotional Support Platform',
    descriptionPtBR: 'Plataforma de apoio emocional para estudantes construída em torno de uma IA empática chamada Ayla, oferecendo um espaço seguro e confidencial para conversas sobre saúde mental.',
    descriptionEnUS: 'Emotional support platform for students built around an empathetic AI called Ayla, providing a safe and confidential space for mental health conversations.',
    highlightsPtBR: [
      'IA empática (Ayla) com escuta ativa e apoio emocional',
      'Sistema de pontos motivacional com loja de resgates',
      'Scores emocionais (0-10) para acompanhamento de bem-estar',
      'Painéis específicos para alunos, professores e administradores',
      'Conversa por voz com speech-to-text e text-to-speech',
      'Dark mode, log de auditoria e ações em massa',
    ],
    highlightsEnUS: [
      'Empathetic AI (Ayla) with active listening and emotional support',
      'Motivational points system with rewards store',
      'Emotional scores (0-10) for well-being monitoring',
      'Specific dashboards for students, teachers and administrators',
      'Voice conversation with speech-to-text and text-to-speech',
      'Dark mode, audit log and batch actions',
    ],
    contextPtBR: '🏆 Desenvolvido para o HackFaesa 2025',
    contextEnUS: '🏆 Developed for HackFaesa 2025',
    category: 'ai',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'Tailwind CSS', 'ChatGPT API', 'Recharts'],
    repoUrl: 'https://github.com/arthurvtl/IAeJovem-HackFaesa2025',
    demoUrl: null,
    images: ['/projects/iaejovem1.png', '/projects/iaejovem2.png', '/projects/iaejovem3.png', '/projects/iaejovem4.png'],
    videoUrl: null,
    isPrivate: false,
    coverImage: '/projects/iaejovem1.png',
  },

  // ========== PROJETO 2: SAA - Sistema de Análise de Alarmes ==========
  {
    id: 'saa',
    titlePtBR: 'SAA - Sistema de Análise de Alarmes',
    titleEnUS: 'SAA - Alarm Analysis System',
    descriptionPtBR: 'Plataforma de inteligência operacional que centraliza a visão de dezenas de usinas fotovoltaicas, permitindo identificar rapidamente equipamentos que impactam a geração de energia.',
    descriptionEnUS: 'Operational intelligence platform that centralizes the view of dozens of solar power plants, enabling quick identification of equipment impacting energy generation.',
    highlightsPtBR: [
      'Processamento de grandes volumes de teleobjetos e alarmes',
      'Tratamento inteligente de dados com normalização e refinamento',
      'KPIs com precisão, consistência e relevância operacional',
      'Monitoramento de Trackers e NCUs em tempo real',
      'Visualizações interativas para equipes de O&M',
      'Identificação de padrões que economizam energia',
    ],
    highlightsEnUS: [
      'Processing large volumes of teleobjects and alarms',
      'Intelligent data treatment with normalization and refinement',
      'KPIs with precision, consistency and operational relevance',
      'Real-time Tracker and NCU monitoring',
      'Interactive visualizations for O&M teams',
      'Pattern identification that saves energy',
    ],
    contextPtBR: '💼 Desenvolvido durante estágio em empresa de energia solar',
    contextEnUS: '💼 Developed during internship at solar energy company',
    category: 'data-analysis',
    technologies: ['Python', 'Streamlit', 'PostgreSQL', 'SQL', 'Pandas', 'Pyecharts'],
    repoUrl: null,
    demoUrl: null,
    images: ['/projects/saa1.png', '/projects/saa2.png', '/projects/saa3.png', '/projects/saa4.png'],
    videoUrl: null,
    isPrivate: true,
    coverImage: '/projects/saa1.png',
  },

  // ========== PROJETO 3: Sistema de Análise de Clipping ==========
  {
    id: 'clipping',
    titlePtBR: 'Sistema de Análise de Clipping Solar',
    titleEnUS: 'Solar Clipping Analysis System',
    descriptionPtBR: 'Sistema completo para análise de perdas por clipping em inversores solares de usinas fotovoltaicas, utilizando metodologia física robusta baseada em saturação real dos equipamentos.',
    descriptionEnUS: 'Complete system for clipping loss analysis in solar inverters of photovoltaic plants, using robust physical methodology based on real equipment saturation.',
    highlightsPtBR: [
      'Cálculo de régua baseado em saturação real com mediana (robusta contra outliers)',
      'Integração numérica por método dos trapézios para energia gerada',
      'Cálculo ponto a ponto de energia perdida por excedente de irradiância',
      'Inserção automática no banco de dados (3 tabelas atualizadas)',
      'Módulo Python independente para integração com outros sistemas',
      'Visualizações interativas com PyEcharts (rankings, séries temporais, comparativos)',
    ],
    highlightsEnUS: [
      'Saturation-based ruler calculation using median (robust against outliers)',
      'Numerical integration using trapezoidal method for generated energy',
      'Point-by-point lost energy calculation based on irradiance excess',
      'Automatic database insertion (3 tables updated)',
      'Standalone Python module for integration with other systems',
      'Interactive visualizations with PyEcharts (rankings, time series, comparisons)',
    ],
    contextPtBR: '💼 Desenvolvido durante estágio em empresa de energia solar',
    contextEnUS: '💼 Developed during internship at solar energy company',
    category: 'data-analysis',
    technologies: ['Python', 'Streamlit', 'PostgreSQL', 'SQL', 'Pandas', 'NumPy', 'Pyecharts', 'SQLAlchemy'],
    repoUrl: null,
    demoUrl: null,
    images: ['/projects/clipping1.png'],
    videoUrl: null,
    isPrivate: true,
    coverImage: '/projects/clipping1.png',
  },
];

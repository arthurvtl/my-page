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
    descriptionPtBR: 'App de apoio emocional para estudantes. Eles conversam com a Ayla, uma IA de escuta ativa, por texto ou voz. Professores e administradores têm painéis próprios.',
    descriptionEnUS: 'Emotional support app for students. They talk to Ayla, an active-listening AI, by text or voice. Teachers and administrators get their own dashboards.',
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
    contextPtBR: 'Feito para o HackFaesa 2025',
    contextEnUS: 'Built for HackFaesa 2025',
    category: 'ai',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'Tailwind CSS', 'ChatGPT API', 'Recharts'],
    repoUrl: 'https://github.com/arthurvtl/IAeJovem-HackFaesa2025',
    demoUrl: null,
    images: ['/projects/iaejovem1.png', '/projects/iaejovem2.png', '/projects/iaejovem3.png', '/projects/iaejovem4.png'],
    videoUrl: null,
    isPrivate: false,
    coverImage: '/projects/iaejovem1.png',
  },
];

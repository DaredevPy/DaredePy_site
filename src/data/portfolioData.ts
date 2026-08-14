import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Renato Pimenta',
  initials: 'RP',
  title: 'Desenvolvedor web iniciante',
  availability: 'Disponível para novos projetos',
  subtitle: 'Transformo ideias em aplicações web de alto desempenho, com foco em arquitetura limpa, acessibilidade e interfaces intuitivas.',
  modality: 'Atuação via PJ / Freela ou CLT',
  bioParagraph1: 'Sou desenvolvedor web com mais de 5 anos de experiência prática criando sistemas de alta escala, plataformas SaaS e soluções e-commerce. Minha jornada começou com a paixão por resolver problemas complexos através de interfaces simples e elegantes.',
  bioParagraph2: 'Foco em manter um código limpo, testável e de fácil manutenção, aplicando boas práticas de arquitetura de software (SOLID, Clean Code). Minha experiência abrange desde o design de APIs RESTful robustas no backend até a construção de aplicações ricas em interatividade no frontend.',
  githubUsername: 'DaredevPy',
  githubUrl: 'https://github.com/DaredevPy',
  linkedinUrl: 'https://linkedin.com/in/renatopimenta',
  email: 'renatopiment@gmail.com',
  phone: '+55 (16) 99199-2803',
  whatsappRaw: '5516991992803',
  location: 'São Paulo, SP — Brasil (Remoto)',
  stats: [
    { value: '1', label: 'Anos de Experiência', icon: 'Award' },
    { value: '35+', label: 'Projetos Entregues', icon: 'Briefcase' },
    { value: '100%', label: 'Compromisso com Prazos', icon: 'Clock' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-react-redux',
    title: 'E-commerce React & Redux',
    description: 'Plataforma de comércio eletrônico completa com carrinho em tempo real, busca com debounce e checkout simulado.',
    longDescription: 'Aplicação web de e-commerce desenvolvida com foco na experiência do usuário e alta capacidade de resposta. Conta com gerenciamento de estado global otimizado via Redux Toolkit, persistência de carrinho de compras, pesquisa reativa com debounce para produtos, e simulador de cálculo de frete e checkout.',
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind CSS'],
    category: 'React',
    githubUrl: 'https://github.com/DaredevPy/ecommerce-react-redux',
    demoUrl: '#',
    featured: true,
    metrics: 'Carregamento sub-segundo, checkout responsivo',
  },
  {
    id: 'dashboard-metrics-saas',
    title: 'Dashboard de Métricas SaaS',
    description: 'Painel de dados corporativos com gráficos interativos, exportação de relatórios PDF/CSV e gerenciamento de permissões.',
    longDescription: 'Sistema de analítica corporativa completo voltado para acompanhamento de KPIs de desempenho, MRR, churn rate e retenção de usuários. Possui controle de acesso baseado em funções (RBAC), exportador automático de dados em formato PDF/CSV e visualização gráfica com Recharts.',
    technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
    category: 'Node.js',
    githubUrl: 'https://github.com/DaredevPy/dashboard-metrics-saas',
    demoUrl: '#',
    featured: true,
    metrics: 'Exportação em PDF/CSV, permissões dinâmicas',
  },
  {
    id: 'kanban-task-platform',
    title: 'Plataforma de Tarefas Kanban',
    description: 'Gerenciador de projetos com colunas customizáveis, drag-and-drop intuitivo e suporte a anexos.',
    longDescription: 'Solução visual para gestão de fluxos de trabalho no estilo Kanban. Permite criação dinâmica de quadros, movimentação de cartões por drag-and-drop reativo em tempo real via WebSockets, tagging, atribuição de equipe e histórico de alterações.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    category: 'TypeScript',
    githubUrl: 'https://github.com/DaredevPy/kanban-task-platform',
    demoUrl: '#',
    featured: true,
    metrics: 'Atualizações em tempo real com WebSockets',
  },
  {
    id: 'landing-page-institutional',
    title: 'Landing Page Institucional',
    description: 'Página de alta conversão para startup de tecnologia com animações CSS fluidas e pontuação 100/100 no Lighthouse.',
    longDescription: 'Landing page projetada estrategicamente para otimização SEO e alta conversão de leads. Implementada com arquitetura leve, suporte a internacionalização, design responsivo com adaptações para telas ultra-wide e nota máxima nos pilares do Google Lighthouse.',
    technologies: ['HTML5', 'CSS3 Puro', 'JavaScript', 'SEO'],
    category: 'HTML/CSS',
    githubUrl: 'https://github.com/DaredevPy/landing-page-institutional',
    demoUrl: '#',
    featured: true,
    metrics: '100/100 no Google Lighthouse Performance & SEO',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Python & Algoritmos',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: 'Intermediário', percentage: 75 },
      { name: 'Linguagem C & Estrutura de Dados', level: 'Intermediário', percentage: 70 },
      { name: 'Jupyter Notebook & Data Analysis', level: 'Intermediário', percentage: 72 },
      { name: 'Lógica de Programação', level: 'Intermediário', percentage: 80 },
    ],
  },
  {
    title: 'Mobile & Flutter',
    iconName: 'Smartphone',
    skills: [
      { name: 'Dart & Flutter', level: 'Intermediário', percentage: 70 },
      { name: 'Desenvolvimento Android', level: 'Intermediário', percentage: 68 },
      { name: 'UI/UX Mobile Components', level: 'Intermediário', percentage: 75 },
      { name: 'Arquitetura Cross-Platform', level: 'Intermediário', percentage: 72 },
    ],
  },
  {
    title: 'Desenvolvimento Web & Ferramentas',
    iconName: 'Code2',
    skills: [
      { name: 'HTML5, CSS3 & JavaScript', level: 'Intermediário', percentage: 85 },
      { name: 'TypeScript', level: 'Intermediário', percentage: 78 },
      { name: 'Git & GitHub', level: 'Intermediário', percentage: 82 },
      { name: 'GitHub Pages & Deploy Web', level: 'Intermediário', percentage: 80 },
    ],
  },
];

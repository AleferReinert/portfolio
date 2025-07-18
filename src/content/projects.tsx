import { ProjectProps } from 'components/Project/Project'

export const projects: Omit<ProjectProps, 'index'>[] = [
  {
    id: '14',
    title: 'Let Me Ask',
    year: '2025',
    description: `Gerenciamento de salas. Crie, grave áudio com transcrição, faça perguntas e receba respostas geradas por IA com base no áudio gravado em cada sala.`,
    skills: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind',
      'Storybook',
      'TestingLibrary',
      'Zod',
      'Drizzle',
      'Fastify',
      'Gemini',
      'PostgreSQL'
    ],
    projectUrl: 'https://let-me-ask-app.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/let-me-ask',
    storybookUrl: 'https://main--68700d12fd56a60965c0891e.chromatic.com',
    img: '/projects/min/let-me-ask.webp'
  },
  {
    id: '13',
    title: 'DebbiFit',
    year: '2025',
    description: `Landing page de consultoria fitness online com treinos, nutrição e suporte para cuidar da sua saúde física e mental. Gerenciamento de conteúdo via CMS.`,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Storybook',
      'TestingLibrary',
      'Strapi',
      'Apollo',
      'GraphQL',
      'PostgreSQL'
    ],
    projectUrl: 'https://debbifit.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/debbifit',
    storybookUrl: 'https://main--67c3ae790f8abf6d4f9b019f.chromatic.com',
    img: '/projects/min/debbifit.webp'
  },
  {
    id: '12',
    title: 'Won Games',
    year: '2025',
    description: `E-commerce de jogos completo com recomendações, lançamentos, detalhes de cada jogo, busca, filtros, lista de favoritos, autenticação, processo de compra e envio de e-mails.`,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Storybook',
      'TestingLibrary',
      'Strapi',
      'GraphQL',
      'Apollo',
      'Cypress',
      'NextAuth',
      'PostgreSQL'
    ],
    projectUrl: 'https://wongames-store.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/won-games',
    storybookUrl: 'https://main--64ceaf6be6c94aa14b9fe174.chromatic.com',
    img: '/projects/min/won-games.webp'
  },
  {
    id: '11',
    title: 'BeTalent',
    year: '2025',
    description: `Teste técnico desenvolvido para um processo seletivo. Consiste em construir a visualização de uma tabela com dados de uma API simulada.`,
    skills: ['React', 'TypeScript', 'Tailwind', 'JSONServer'],
    projectUrl: 'https://betalent.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/betalent',
    img: '/projects/min/betalent.webp'
  },
  {
    id: '10',
    title: 'DevStage',
    year: '2025',
    description: `Website de inscrição e indicação para eventos. Desenvolvido durante o NLW Connect da Rocketseat nas trilhas React e Node.js.`,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Storybook', 'PostgreSQL'],
    projectUrl: 'https://devstage-nlw-connect.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/devstage',
    storybookUrl: 'https://main--67c3a6b77510efaa57103f96.chromatic.com',
    img: '/projects/min/devstage.webp'
  },
  {
    id: '9',
    title: 'Advice Health',
    year: '2025',
    description: `WebApp de consultório médico desenvolvido para um processo seletivo. Permite agendar consultas, gerenciar pacientes e visualizar dados financeiros e estatísticos do dia.`,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Storybook', 'TestingLibrary'],
    projectUrl: 'https://advicehealth.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/advice-health',
    storybookUrl: 'https://main--67620d8560ad19d1f017f00f.chromatic.com',
    img: '/projects/min/advice-health.webp'
  },
  {
    id: '8',
    title: 'Impacta Tecnologia',
    year: '2024',
    description: `Website institucional para uma empresa de tecnologia, destacando seus serviços e soluções personalizadas. Gerenciamento de conteúdo via CMS.`,
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Storybook',
      'TestingLibrary',
      'Strapi',
      'Apollo',
      'GraphQL',
      'PostgreSQL'
    ],
    projectUrl: 'https://impacta-tecnologia.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/impacta-tecnologia',
    storybookUrl: 'https://main--670946a91c483c5167ccb017.chromatic.com',
    img: '/projects/min/impacta-tecnologia.webp'
  },
  {
    id: '7',
    title: 'Findbook',
    year: '2024',
    description: `Aplicação web que utiliza inteligência artificial para recomendar livros a partir da busca do usuário.`,
    skills: ['React', 'TypeScript', 'Tailwind', 'Radix', 'Vite', 'OpenAI', 'Express', 'MongoDB', 'Zod'],
    projectUrl: 'https://findbook-app.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/findbook',
    img: '/projects/min/findbook.webp'
  },
  {
    id: '6',
    title: 'Notes',
    year: '2024',
    description: `Gerenciamento de notas através de texto digitado ou gravações de áudio. 
        Desenvolvido durante o NLW Expert da Rocketseat na trilha React.`,
    skills: ['React', 'TypeScript', 'Tailwind', 'Radix', 'Sonner'],
    projectUrl: 'https://nlw-expert-notes-ar.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/nlw-expert-notes',
    img: '/projects/min/nlw-expert-notes.webp'
  },
  {
    id: '5',
    title: 'Pass In',
    year: '2024',
    description: `Gerenciamento de participantes em eventos presenciais. 
        Desenvolvido durante o NLW Unite da Rocketseat, foram feitas as trilhas de React e Node.js.`,
    skills: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Prisma', 'Fastify'],
    projectUrl: 'https://pass-in-nlw-unite.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/pass.in-react',
    img: '/projects/min/nlw-unite-pass-in.webp'
  },
  {
    id: '4',
    title: 'Portfólio',
    year: '2024',
    description: 'Confira o processo de criação deste portfólio.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Storybook', 'TestingLibrary', 'FramerMotion', 'Cypress'],
    projectUrl: 'https://aleferreinert.vercel.app',
    repositoryUrl: 'https://github.com/AleferReinert/portfolio',
    storybookUrl: 'https://main--64cd32980293c902cb6e27ce.chromatic.com',
    img: '/projects/min/portfolio.webp'
  },
  {
    id: '3',
    title: 'React Avançado',
    year: '2023',
    description: `Landing page do curso "React Avançado: Crie aplicações com NextJS, Strapi e mais".
        Este projeto adicional tem como objetivo introduzir o uso do Strapi para substituir dados estáticos por dados
        dinâmicos por meio de uma API.
      `,
    skills: ['React', 'Next.js', 'TypeScript', 'StyledComponents', 'Strapi'],
    projectUrl: 'https://landing-page-ar.netlify.app',
    repositoryUrl: 'https://github.com/AleferReinert/landing-page',
    img: '/projects/min/landing-page.webp'
  },
  {
    id: '2',
    title: 'Single Page',
    year: '2022',
    description: `Website de uma empresa fictícia destacando seus projetos e serviços. Apresenta sua história, serviços, equipe, redes sociais e formulário para contato.`,
    skills: ['HTML', 'Less', 'JavaScript', 'Gulp'],
    projectUrl: 'https://aleferreinert.github.io/single-page',
    repositoryUrl: 'https://github.com/AleferReinert/single-page',
    img: '/projects/min/single-page.webp'
  },
  {
    id: '1',
    title: 'Metronome',
    year: '2022',
    description: `Metrônomo com diversas configurações. Além do andamento, é possível definir a fórmula de compasso, quantidade de compassos a serem executados, limite de tempo em minutos e controlar o volume dos tempos, contratempos e tercinas separadamente.`,
    skills: ['HTML', 'CSS', 'JavaScript'],
    projectUrl: 'https://aleferreinert.github.io/metronome',
    repositoryUrl: 'https://github.com/AleferReinert/metronome',
    img: '/projects/min/metronome.webp'
  }
]

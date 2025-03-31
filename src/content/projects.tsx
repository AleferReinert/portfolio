import { ProjectProps } from 'components/Project/Project'

export const projects: Omit<ProjectProps, 'index'>[] = [
  {
    title: 'Won Games',
    year: '2025',
    description: `E-commerce de jogos. Em desenvolvimento.`,
    skills: 'Next.js TypeScript StyledComponents Storybook TestingLibrary Strapi GraphQL',
    repositoryLink: 'https://github.com/AleferReinert/won-games',
    storybookLink: 'https://main--64ceaf6be6c94aa14b9fe174.chromatic.com',
    img: '/projects/won-games.webp'
  },
  {
    title: 'BeTalent',
    year: '2025',
    description: `Teste técnico para a empresa BeTalent. Consiste em construir a visualização de uma tabela com dados de uma API simulada.`,
    skills: 'React TypeScript Tailwind JSONServer',
    projectLink: 'https://betalent.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/betalent',
    img: '/projects/betalent.webp'
  },
  {
    title: 'DevStage',
    year: '2025',
    description: `Website de inscrição e indicação para eventos. Desenvolvido através do NLW Connect da Rocketseat na trilha React.`,
    skills: 'Next.js TypeScript Tailwind Storybook',
    projectLink: 'https://devstage-nlw-connect.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/devstage',
    storybookLink: 'https://main--67c3a6b77510efaa57103f96.chromatic.com',
    img: '/projects/devstage.webp'
  },
  {
    title: 'Advice Health',
    year: '2025',
    description: `Aplicação web para consultório médico, desenvolvido como parte de um processo seletivo. Permite agendar consultas, gerenciar pacientes e visualizar dados financeiros e estatísticos do dia.`,
    skills: 'Next.js TypeScript Tailwind Storybook TestingLibrary',
    projectLink: 'https://advicehealth.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/advice-health',
    storybookLink: 'https://main--67620d8560ad19d1f017f00f.chromatic.com',
    img: '/projects/advice-health.webp'
  },
  {
    title: 'DebbiFit',
    year: '2024',
    description: `Website de consultoria fitness online que oferece acompanhamento personalizado, dicas de treino e orientações para uma vida mais saudável.`,
    skills: 'Next.js TypeScript Tailwind Storybook TestingLibrary Strapi Apollo GraphQL',
    projectLink: 'https://debbifit.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/debbifit',
    storybookLink: 'https://main--67c3ae790f8abf6d4f9b019f.chromatic.com',
    img: '/projects/debbifit.webp'
  },
  {
    title: 'Impacta Tecnologia',
    year: '2024',
    description: `Website institucional para uma empresa de tecnologia, destacando seus serviços e soluções personalizadas, com uma interface intuitiva e gerenciamento de conteúdo via CMS.`,
    skills: 'Next.js TypeScript Tailwind Storybook TestingLibrary Strapi Apollo GraphQL',
    projectLink: 'https://impacta-tecnologia.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/impacta-tecnologia',
    storybookLink: 'https://main--670946a91c483c5167ccb017.chromatic.com',
    img: '/projects/impacta-tecnologia.webp'
  },
  {
    title: 'Findbook',
    year: '2024',
    description: `
        Aplicação web que utiliza inteligência artificial para recomendar livros a partir da busca do usuário.`,
    skills: 'React TypeScript Tailwind Radix Vite OpenAI Express MongoDB',
    projectLink: 'https://findbook-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/findbook',
    img: '/projects/findbook.webp'
  },
  {
    title: 'Notes',
    year: '2024',
    description: `
        Aplicação web para criar e gerenciar notas utilizando texto digitado ou gravações de áudio. 
        Desenvolvido através do NLW Expert da Rocketseat na trilha React.`,
    skills: 'React TypeScript Tailwind Radix Sonner',
    projectLink: 'https://nlw-expert-notes-ar.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/nlw-expert-notes',
    img: '/projects/nlw-expert-notes.webp'
  },
  {
    title: 'Pass In',
    year: '2024',
    description: `
        Aplicação para gestão de participantes em eventos presenciais. 
        Desenvolvido durante o NLW Unite da Rocketseat, foram feitas as trilhas de React e Node.js.`,
    skills: 'React TypeScript Tailwind Node.js Prisma Fastify',
    projectLink: 'https://pass-in-nlw-unite.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/pass.in-react',
    img: '/projects/nlw-unite-pass-in.webp'
  },
  {
    title: 'Portfólio',
    year: '2024',
    description: 'Confira o processo de criação deste portfólio.',
    skills: 'Next.js TypeScript Tailwind Storybook TestingLibrary FramerMotion',
    repositoryLink: 'https://github.com/AleferReinert/portfolio',
    storybookLink: 'https://main--64cd32980293c902cb6e27ce.chromatic.com',
    img: '/projects/portfolio.webp'
  },
  {
    title: 'React Avançado',
    year: '2023',
    description: `Landing page do curso 'React Avançado: Crie aplicações com NextJS, Strapi e mais'.
        Este projeto adicional tem como objetivo introduzir o uso do Strapi para substituir dados estáticos por dados
        dinâmicos por meio de uma API.
      `,
    skills: 'Next.js TypeScript StyledComponents Strapi',
    projectLink: 'https://landing-page-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/landing-page',
    img: '/projects/landing-page.webp'
  },
  {
    title: 'Single Page',
    year: '2022',
    description: `Website de uma empresa fictícia destacando seus projetos e serviços. Além disso, é apresentado sua história, redes sociais e formulário para contato, tudo de forma minimalista e objetiva.`,
    skills: 'HTML Less JavaScript Gulp',
    projectLink: 'https://aleferreinert.github.io/single-page',
    repositoryLink: 'https://github.com/AleferReinert/single-page',
    img: '/projects/single-page.webp'
  },
  {
    title: 'Metronome',
    year: '2022',
    description: `Metrônomo com diversas configurações. Além do andamento, é possível definir a fórmula de compasso, quantidade de compassos a serem executados e limite de tempo em minutos. Também é possível controlar o volume dos tempos, contratempos e tercinas separadamente.`,
    skills: 'HTML CSS JavaScript',
    projectLink: 'https://aleferreinert.github.io/metronome',
    repositoryLink: 'https://github.com/AleferReinert/metronome',
    img: '/projects/metronome.webp'
  }
]

import { ProjectProps } from 'components/Project/Project'

export const projects: Omit<ProjectProps, 'index'>[] = [
  {
    slug: 'impacta-tecnologia',
    title: 'Impacta Tecnologia',
    year: '2024',
    shortDescription: `Website institucional para uma empresa de tecnologia, destacando seus serviços e soluções personalizadas, com uma interface intuitiva e gerenciamento de conteúdo via CMS.`,
    skills: 'Next.js TypeScript Tailwind Storybook Strapi Apollo GraphQL',
    projectLink: 'https://impacta-tecnologia.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/impacta-tecnologia',
    storybookLink: 'https://670946a91c483c5167ccb017-xrgkkrbcaz.chromatic.com',
    img: '/projects/impacta-tecnologia.webp'
  },
  {
    slug: 'findbook',
    title: 'Findbook',
    year: '2024',
    shortDescription: `
        Aplicação web que utiliza inteligência artificial para recomendar livros a partir da busca do usuário.`,
    skills: 'React TypeScript Tailwind Radix Vite OpenAI Express MongoDB',
    projectLink: 'https://findbook-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/findbook',
    img: '/projects/findbook.webp'
  },
  {
    slug: 'notes',
    title: 'Notes',
    year: '2024',
    shortDescription: `
        Aplicação web para criar e gerenciar notas utilizando texto digitado ou gravações de áudio. 
        Desenvolvido através do NLW Expert da Rocketseat na trilha React.`,
    skills: 'React TypeScript Tailwind Radix Sonner',
    projectLink: 'https://nlw-expert-notes-ar.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/nlw-expert-notes',
    img: '/projects/nlw-expert-notes.webp'
  },
  {
    slug: 'pass-in',
    title: 'Pass In',
    year: '2024',
    shortDescription: `
        Aplicação para gestão de participantes em eventos presenciais. 
        Desenvolvido durante o NLW Unite da Rocketseat, foram feitas as trilhas de React e Node.js.`,
    skills: 'React TypeScript Tailwind Node.js Prisma Fastify',
    projectLink: 'https://pass-in-nlw-unite.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/pass.in-react',
    img: '/projects/nlw-unite-pass-in.webp'
  },
  // {
  //   slug: 'won-games',
  //   title: 'Won Games',
  //   year: '2024',
  //   shortDescription: `
  //       Projeto principal do curso <q>React Avançado: Crie aplicações com NextJS, Strapi e mais</q>.<br>
  //       Won Games é um-commerce onde os usuários podem explorar, pesquisar e comprar jogos. Em desenvolvimento.`,
  //   skills: 'Next.js TypeScript StyledComponents Storybook TestingLibrary Strapi GraphQL',
  //   repositoryLink: 'https://github.com/AleferReinert/won-games',
  //   storybookLink: 'https://64ceaf6be6c94aa14b9fe174-rwsmooqukg.chromatic.com',
  //   img: '/projects/won-games.webp'
  // },
  {
    slug: 'portfolio',
    title: 'Portfólio',
    year: '2024',
    shortDescription: 'Confira o processo de criação deste portfólio.',
    skills: 'Next.js TypeScript Tailwind Storybook TestingLibrary FramerMotion',
    repositoryLink: 'https://github.com/AleferReinert/portfolio',
    storybookLink: 'https://64cd32980293c902cb6e27ce-alwameemnu.chromatic.com',
    img: '/projects/portfolio.webp'
  },
  {
    slug: 'react-avançado',
    title: 'React Avançado',
    year: '2023',
    shortDescription: `Landing page do curso 'React Avançado: Crie aplicações com NextJS, Strapi e mais'.
        Este projeto adicional tem como objetivo introduzir o uso do Strapi para substituir dados estáticos por dados
        dinâmicos por meio de uma API.
      `,
    skills: 'Next.js TypeScript StyledComponents Strapi',
    projectLink: 'https://landing-page-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/landing-page',
    img: '/projects/landing-page.webp'
  },
  {
    slug: 'single-page',
    title: 'Single Page',
    year: '2022',
    shortDescription: `Website genérico de página única. Apresenta informações sobre uma empresa destacando seus projetos e serviços. Além disso, é apresentado sua história, redes sociais e formulário para contato, tudo de forma minimalista e objetiva.`,
    skills: 'HTML Less JavaScript Gulp',
    projectLink: 'https://aleferreinert.github.io/single-page',
    repositoryLink: 'https://github.com/AleferReinert/single-page',
    img: '/projects/single-page.webp'
  },
  {
    slug: 'metronome',
    title: 'Metronome',
    year: '2022',
    shortDescription: `Metrônomo com diversas configurações. Além do andamento, é possível definir a fórmula de compasso, quantidade de compassos a serem executados e limite de tempo em minutos. Também é possível controlar o volume dos tempos, contratempos e tercinas separadamente.`,
    skills: 'HTML CSS JavaScript',
    projectLink: 'https://aleferreinert.github.io/metronome',
    repositoryLink: 'https://github.com/AleferReinert/metronome',
    img: '/projects/metronome.webp'
  }
]

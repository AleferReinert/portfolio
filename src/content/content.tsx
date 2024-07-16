import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { Github, Linkedin, Mail } from '@styled-icons/feather'
import {
  Adobephotoshop,
  Css3,
  Figma,
  Git,
  Gulp,
  Html5,
  Javascript,
  Jest,
  Less,
  Nextdotjs,
  ReactLogo,
  Sass,
  Storybook,
  Styledcomponents,
  Tailwindcss,
  Typescript
} from '@styled-icons/simple-icons'

export const menu = [
  {
    link: '/#about',
    children: 'Sobre mim'
  },
  {
    link: '/#projects',
    children: 'Projetos'
  },
  {
    link: '/#certificates',
    children: 'Certificados'
  },
  {
    link: '/#skills',
    children: 'Habilidades'
  }
]

export const about = {
  name: 'Alefer Reinert ',
  role: 'Desenvolvedor front-end',
  description: `
      Desenvolvedor front-end com mais de 8 anos de experiência em aplicações web responsivas. 
			Possui habilidades em
			<span>
				<strong>React</strong>,
				<strong>Next.js</strong>, 
				<strong>TypeScript</strong>,
				<strong>Jest</strong>,
				<strong>Storybook</strong> e
				<strong>inteligência artificial</strong>.
			</span>
      <br />
      Atuou em diversos sites e e-commerces, além de projetos pessoais, sempre estudando e buscando evoluir constantemente.`
}

export const projects = [
  {
    slug: 'findbook',
    title: 'Findbook',
    year: '2024',
    shortDescription: `
        Aplicação web que utiliza inteligência artificial para recomendar livros a partir da busca do usuário.`,
    skills: 'React TypeScript Tailwind Radix Vite OpenAI Express MongoDB',
    projectLink: 'https://findbook-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/findbook',
    img: '/img/projects/findbook.webp'
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
    img: '/img/projects/nlw-expert-notes.webp'
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
    img: '/img/projects/nlw-unite-pass-in.webp'
  },
  {
    slug: 'won-games',
    title: 'Won Games',
    year: '2024',
    shortDescription: `
        Projeto principal do curso <q>React Avançado: Crie aplicações com NextJS, Strapi e mais</q>.<br>
        Won Games é um-commerce onde os usuários podem explorar, pesquisar e comprar jogos. Em desenvolvimento.`,
    skills:
      'React Next.js TypeScript StyledComponents Storybook Jest Strapi GraphQL',
    repositoryLink: 'https://github.com/AleferReinert/won-games',
    storybookLink: 'https://64ceaf6be6c94aa14b9fe174-rwsmooqukg.chromatic.com/',
    img: '/img/projects/won-games.webp'
  },
  {
    slug: 'portfolio',
    title: 'Portfólio',
    year: '2023',
    shortDescription: 'Confira o processo de criação deste portfólio.',
    skills: 'React Next.js TypeScript StyledComponents Storybook Jest',
    repositoryLink: 'https://github.com/AleferReinert/portfolio',
    storybookLink: 'https://64cd32980293c902cb6e27ce-alwameemnu.chromatic.com',
    img: '/img/projects/portfolio.webp'
  },
  {
    slug: 'landing-page',
    title: 'Landing Page',
    year: '2023',
    shortDescription: `Página de apresentação do curso <q>React Avançado: Crie aplicações com NextJS, Strapi e mais</q>.<br> 
        Este projeto adicional tem como objetivo introduzir o uso do Strapi para substituir dados estáticos por dados dinâmicos por meio de uma API.`,
    skills: 'React Next.js TypeScript StyledComponents Strapi',
    projectLink: 'https://landing-page-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/landing-page',
    img: '/img/projects/landing-page.webp'
  },
  {
    slug: 'single-page',
    title: 'Single Page',
    year: '2022',
    shortDescription: `Website genérico de página única. Apresenta informações sobre uma empresa destacando seus projetos e serviços. Além disso, é apresentado sua história, redes sociais e formulário para contato, tudo de forma minimalista e objetiva.`,
    skills: 'HTML Less JavaScript Gulp',
    projectLink: 'https://aleferreinert.github.io/single-page',
    repositoryLink: 'https://github.com/AleferReinert/single-page',
    img: '/img/projects/single-page.webp'
  },
  {
    slug: 'metronome',
    title: 'Metronome',
    year: '2022',
    shortDescription: `Metrônomo com diversas configurações. Além do andamento, é possível definir a fórmula de compasso, quantidade de compassos a serem executados e limite de tempo em minutos. Também é possível controlar o volume dos tempos, contratempos e tercinas separadamente.`,
    skills: 'HTML CSS JavaScript',
    projectLink: 'https://aleferreinert.github.io/metronome',
    repositoryLink: 'https://github.com/AleferReinert/metronome',
    img: '/img/projects/metronome.webp'
  }
]

export const certificates = [
  {
    title: 'NLW Journey - Reactjs',
    organization: 'Rocketseat',
    conclusionDate: 'Julho/2024',
    link: 'https://drive.google.com/file/d/1Mb9BBVSVnR-fbB8ikJq73DhpK3spvQG1/view'
  },
  {
    title: 'Inteligência Artificial',
    organization: 'Conquer',
    conclusionDate: 'Junho/2024',
    link: 'https://drive.google.com/file/d/137EE6bccnz99u-ZZ0PHgtHICVpcZE_su/view'
  },
  {
    title: 'Trilha Digital | Coders 24 | Front End',
    organization: 'Ada Tech',
    conclusionDate: 'Junho/2024',
    link: 'https://drive.google.com/file/d/1iWBufAzOH938Wp6KzXle8IAMC6D1cpTR/view'
  },
  {
    title: 'Semana do Herói Edição 04',
    organization: 'Hero Code',
    conclusionDate: 'Junho/2024',
    link: 'https://drive.google.com/file/d/15q_DONGaEFX6gQHNLo0ppILtlsz0JKX3/view'
  },
  {
    title: 'Practical GitHub Copilot',
    organization: 'LinkedIn Learning',
    conclusionDate: 'Maio/2024',
    link: 'https://drive.google.com/file/d/17LqJtoJGFjBWDbPYZmK_h3GWA6Q5UPU8/view'
  },
  {
    title: 'Imersão Inteligência Artificial',
    organization: 'Alura',
    conclusionDate: 'Maio/2024',
    link: 'https://drive.google.com/file/d/14vRBD2eydc9Q2aixTQ6HMy24481nVMLb/view'
  },
  {
    title: 'Trilha fluêncIA',
    organization: 'ENAP',
    conclusionDate: 'Abril/2024',
    link: 'https://drive.google.com/file/d/1e5-HPBjV8Ip5XhDVmusBE2W9OehXze3N/view'
  },
  {
    title: 'NLW Unite - Nodejs',
    organization: 'Rocketseat',
    conclusionDate: 'Abril/2024',
    link: 'https://drive.google.com/file/d/1FzB1k96PXgG8ZtSMhJoiA4O3SWFHbDwn/view'
  },
  {
    title: 'NLW Unite - Reactjs',
    organization: 'Rocketseat',
    conclusionDate: 'Abril/2024',
    link: 'https://drive.google.com/file/d/19E4pMUcpfhewk0dFpbHczLk01zM0znA4/view'
  },
  {
    title: 'Curso Introdução ao React',
    organization: 'Refatorando',
    conclusionDate: 'Março/2024',
    link: 'https://drive.google.com/file/d/1QY9usp1Wvj3EwK6RDuSTb0LbUDnImg0u/view'
  },
  {
    title: 'Curso Introdução ao TypeScript',
    organization: 'Refatorando',
    conclusionDate: 'Março/2024',
    link: 'https://drive.google.com/file/d/1d3-MN9qgV0cW93yQf3xFDlRAWqzAHGeI/view'
  },
  {
    title: 'Curso Introdução ao Git e Github',
    organization: 'Refatorando',
    conclusionDate: 'Março/2024',
    link: 'https://drive.google.com/file/d/14W5ImKi1cSnFopLsjwg12ylpsgSXXRjO/view'
  },
  {
    title: 'Organização de Produtividade Remota',
    organization: 'Descomplica',
    conclusionDate: 'Janeiro/2024',
    link: 'https://drive.google.com/file/d/1_Ft-af5KTcpE_Jx77TZcJnIi4UjAM0qR/view'
  },
  {
    title: 'Fundamentos de Banco de Dados',
    organization: 'Descomplica',
    conclusionDate: 'Janeiro/2024',
    link: 'https://drive.google.com/file/d/168BBYFD8yjjCRLlZx608FqsNLAATOTY1/view'
  },
  {
    title: 'PHP - MYSQL - Iniciante',
    organization: 'Unova Cursos',
    conclusionDate: 'Novembro/2023',
    link: 'https://drive.google.com/file/d/1KxtzH0xtrpr3qjteX-8EDgQkKy0Hzr0Z/view'
  },
  {
    title: 'Javascript Para Iniciantes',
    organization: 'Unova Cursos',
    conclusionDate: 'Outubro/2022',
    link: 'https://drive.google.com/file/d/1JlXW0mOzE2BANTBJE-EuKvALBTx1y0OF/view'
  },
  {
    title: 'CC50: Introdução à Ciência da Computação',
    organization: 'Fundação Estudar',
    link: 'https://drive.google.com/file/d/1CnuB8aRzOaDDiZSg4LMwYMYT8Fftbsl9/view',
    conclusionDate: 'Setembro/2022'
  },
  {
    title: 'Formação Design Gráfico',
    organization: 'ProWay Informática',
    link: 'https://drive.google.com/file/d/1dJErgNzdqUchbaEo7upZoSCO3GBYVRIv/view',
    conclusionDate: 'Fevereiro/2012'
  }
]

export const skills = [
  { title: 'HTML5', icon: <Html5 aria-hidden /> },
  { title: 'CSS3', icon: <Css3 aria-hidden /> },
  { title: 'JavaScript', icon: <Javascript aria-hidden /> },
  { title: 'TypeScript', icon: <Typescript aria-hidden /> },
  { title: 'LESS', icon: <Less aria-hidden /> },
  { title: 'SASS', icon: <Sass aria-hidden /> },
  { title: 'Tailwind', icon: <Tailwindcss aria-hidden /> },
  { title: 'React', icon: <ReactLogo aria-hidden /> },
  { title: 'Next.js', icon: <Nextdotjs aria-hidden /> },
  { title: 'Storybook', icon: <Storybook aria-hidden /> },
  { title: 'Git', icon: <Git aria-hidden /> },
  { title: 'Jest', icon: <Jest aria-hidden /> },
  { title: 'Styled Components', icon: <Styledcomponents aria-hidden /> },
  { title: 'Gulp', icon: <Gulp aria-hidden /> },
  { title: 'Figma', icon: <Figma aria-hidden /> },
  { title: 'Photoshop', icon: <Adobephotoshop aria-hidden /> }
]

export const social = [
  {
    name: 'E-mail',
    link: 'mailto:aleferreinert@gmail.com',
    icon: <Mail aria-hidden />
  },
  {
    name: 'Github',
    link: 'https://github.com/AleferReinert',
    icon: <Github aria-hidden />
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aleferreinert',
    icon: <Linkedin aria-hidden />
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/message/FSN72FDKNRO3O1',
    icon: <Whatsapp aria-hidden />
  }
]

import { Github, Mail, Linkedin } from '@styled-icons/feather'
import { Whatsapp } from '@styled-icons/boxicons-logos'
import {
  Html5,
  Css3,
  Less,
  Sass,
  Styledcomponents,
  Javascript,
  Typescript,
  ReactLogo,
  Nextdotjs,
  Jest,
  Jquery,
  Grunt,
  Gulp,
  Storybook,
  Bootstrap,
  Git,
  Adobephotoshop,
  Graphql,
  Strapi,
  Figma
} from '@styled-icons/simple-icons'

export const menu = [
  {
    link: '#about',
    children: 'Sobre mim'
  },
  {
    link: '#projects',
    children: 'Projetos'
  },
  {
    link: '#certificates',
    children: 'Certificados'
  },
  {
    link: '#skills',
    children: 'Habilidades'
  }
]

export const about = {
  name: 'Alefer Reinert',
  role: 'Desenvolvedor front end',
  description: `
      Escrevo códigos desde 2012, adquiri experiência em duas empresas e em
      projetos pessoais. Desenvolvi e-commerces, websites, wordpress e e-mail
      marketing. Atualmente estou me aprofundando em React e Next.js.
      Além de codificar, sou uma pessoa apaixonada por animais, música e saúde
      mental.`
}

export const projects = [
  {
    title: 'Pass In',
    year: '2024',
    description: `
        Aplicação para gestão de participantes em eventos presenciais. 
        Desenvolvido durante o NLW Unite da Rocketseat, utilizando React e Node.`,
    skills:
      'React Next.js TypeScript StyledComponents Storybook Jest Strapi GraphQL',
    projectLink: 'https://pass-in-nlw-unite.vercel.app',
    repositoryLink: 'https://github.com/AleferReinert/pass.in-react',
    img: '/img/projects/pass-in.webp'
  },
  {
    title: 'Won Games',
    year: '2024',
    description: `
        Projeto principal do curso <q>React Avançado: Crie aplicações com NextJS, Strapi e mais</q>.<br>
        Won Games é um-commerce onde os usuários podem explorar, pesquisar e comprar jogos. Ainda em desenvolvimento.`,
    skills:
      'React Next.js TypeScript StyledComponents Storybook Jest Strapi GraphQL',
    repositoryLink: 'https://github.com/AleferReinert/won-games',
    storybookLink: 'https://64ceaf6be6c94aa14b9fe174-rwsmooqukg.chromatic.com/',
    img: '/img/projects/won-games.webp'
  },
  {
    title: 'Portfólio',
    year: '2023',
    description: 'Veja como foi o desenvolvimento do meu portfólio.',
    skills: 'React Next.js TypeScript StyledComponents Storybook Jest',
    repositoryLink: 'https://github.com/AleferReinert/portfolio',
    storybookLink: 'https://64cd32980293c902cb6e27ce-alwameemnu.chromatic.com',
    img: '/img/projects/portfolio.webp'
  },
  {
    title: 'Landing Page',
    year: '2023',
    description: `Página de apresentação do curso <q>React Avançado: Crie aplicações com NextJS, Strapi e mais</q>.<br> 
        Foi um projeto extra com o objetivo de iniciar no Strapi, substituindo dados estáticos por dinâmicos através de uma API.`,
    skills: 'React Next.js TypeScript StyledComponents Strapi',
    projectLink: 'https://landing-page-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/landing-page',
    img: '/img/projects/landing-page.webp'
  },
  {
    title: 'Single Page',
    year: '2022',
    description: `Website genérico de página única. Apresenta informações sobre uma empresa destacando seus projetos e serviços. Além disso, é apresentado sua história, redes sociais e formulário para contato, tudo de forma minimalista e objetiva.`,
    skills: 'HTML Less JavaScript Gulp',
    projectLink: 'https://aleferreinert.github.io/single-page',
    repositoryLink: 'https://github.com/AleferReinert/single-page',
    img: '/img/projects/single-page.webp'
  },
  {
    title: 'Metronome',
    year: '2022',
    description: `Metrônomo com diversas configurações. Além do andamento, é possível definir a fórmula de compasso, quantidade de compassos a serem executados e limite de tempo em minutos. Também é possível controlar o volume dos tempos, contratempos e tercinas separadamente.`,
    skills: 'HTML CSS JavaScript',
    projectLink: 'https://aleferreinert.github.io/metronome',
    repositoryLink: 'https://github.com/AleferReinert/metronome',
    img: '/img/projects/metronome.webp'
  }
]

export const certificates = [
  {
    title: 'React Avançado: Crie aplicações com Next.js, Strapi e mais',
    organization: 'Udemy',
    conclusionDate: 'Cursando'
  },
  {
    title: 'Trilha fluêncIA',
    organization: 'ENAP',
    conclusionDate: 'Abril/2024',
    link: 'https://drive.google.com/file/d/1e5-HPBjV8Ip5XhDVmusBE2W9OehXze3N/view?usp=sharing'
  },
  {
    title: 'NLW Unite - Nodejs',
    organization: 'Rocketseat',
    conclusionDate: 'Abril/2024',
    link: 'https://drive.google.com/file/d/1FzB1k96PXgG8ZtSMhJoiA4O3SWFHbDwn/view?usp=sharing'
  },
  {
    title: 'NLW Unite - Reactjs',
    organization: 'Rocketseat',
    conclusionDate: 'Abril/2024',
    link: 'https://drive.google.com/file/d/19E4pMUcpfhewk0dFpbHczLk01zM0znA4/view?usp=sharing'
  },
  {
    title: 'Curso Introdução ao React',
    organization: 'Refatorando',
    conclusionDate: 'Março/2024',
    link: 'https://drive.google.com/file/d/1QY9usp1Wvj3EwK6RDuSTb0LbUDnImg0u/view?usp=sharing'
  },
  {
    title: 'Curso Introdução ao TypeScript',
    organization: 'Refatorando',
    conclusionDate: 'Março/2024',
    link: 'https://drive.google.com/file/d/1d3-MN9qgV0cW93yQf3xFDlRAWqzAHGeI/view?usp=sharing'
  },
  {
    title: 'Curso Introdução ao Git e Github',
    organization: 'Refatorando',
    conclusionDate: 'Março/2024',
    link: 'https://drive.google.com/file/d/14W5ImKi1cSnFopLsjwg12ylpsgSXXRjO/view?usp=sharing'
  },
  {
    title: 'Organização de Produtividade Remota',
    organization: 'Descomplica',
    conclusionDate: 'Janeiro/2024',
    link: 'https://drive.google.com/file/d/1_Ft-af5KTcpE_Jx77TZcJnIi4UjAM0qR/view?usp=drivesdk'
  },
  {
    title: 'Fundamentos de Banco de Dados',
    organization: 'Descomplica',
    conclusionDate: 'Janeiro/2024',
    link: 'https://drive.google.com/file/d/168BBYFD8yjjCRLlZx608FqsNLAATOTY1/view?usp=sharing'
  },
  {
    title: 'PHP - MYSQL - INICIANTE ',
    organization: 'Unova Cursos',
    conclusionDate: 'Novembro/2023',
    link: 'https://drive.google.com/file/d/1KxtzH0xtrpr3qjteX-8EDgQkKy0Hzr0Z/view?usp=drivesdk'
  },
  {
    title: 'Javascript Para Iniciantes',
    organization: 'Unova Cursos',
    conclusionDate: 'Outubro/2022',
    link: 'https://drive.google.com/file/d/1JlXW0mOzE2BANTBJE-EuKvALBTx1y0OF/view?usp=drivesdk'
  },
  {
    title: 'CC50: Introdução à Ciência da Computação',
    organization: 'Fundação Estudar',
    link: 'https://drive.google.com/file/d/1CnuB8aRzOaDDiZSg4LMwYMYT8Fftbsl9/view?usp=drivesdk',
    conclusionDate: 'Setembro/2022'
  },
  {
    title: 'Formação Design Gráfico',
    organization: 'ProWay Informática',
    link: 'https://drive.google.com/file/d/1dJErgNzdqUchbaEo7upZoSCO3GBYVRIv/view?usp=share_link',
    conclusionDate: 'Fevereiro/2012'
  }
]

export const skills = [
  { title: 'HTML5', icon: <Html5 aria-hidden /> },
  { title: 'CSS3', icon: <Css3 aria-hidden /> },
  { title: 'JQuery', icon: <Jquery aria-hidden /> },
  { title: 'JavaScript', icon: <Javascript aria-hidden /> },
  { title: 'TypeScript', icon: <Typescript aria-hidden /> },
  { title: 'LESS', icon: <Less aria-hidden /> },
  { title: 'SASS', icon: <Sass aria-hidden /> },
  { title: 'React', icon: <ReactLogo aria-hidden /> },
  { title: 'Next.js', icon: <Nextdotjs aria-hidden /> },
  { title: 'Storybook', icon: <Storybook aria-hidden /> },
  { title: 'Git', icon: <Git aria-hidden /> },
  { title: 'Jest', icon: <Jest aria-hidden /> },
  { title: 'GraphQL', icon: <Graphql aria-hidden /> },
  { title: 'Styled Components', icon: <Styledcomponents aria-hidden /> },
  { title: 'Gulp', icon: <Gulp aria-hidden /> },
  { title: 'Grunt', icon: <Grunt aria-hidden /> },
  { title: 'Strapi', icon: <Strapi aria-hidden /> },
  { title: 'Bootstrap', icon: <Bootstrap aria-hidden /> },
  { title: 'Figma', icon: <Figma aria-hidden /> },
  { title: 'Photoshop', icon: <Adobephotoshop aria-hidden /> }
]

export const social = [
  {
    name: 'Github',
    link: 'https://github.com/AleferReinert',
    icon: <Github aria-hidden />
  },
  {
    name: 'E-mail',
    link: 'mailto:aleferreinert@gmail.com',
    icon: <Mail aria-hidden />
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

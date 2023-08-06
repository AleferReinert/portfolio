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
      Escrevo códigos desde 2012, adquiri experiência em duas empresas e em meus
      projetos pessoais. Desenvolvi e-commerces, websites, wordpress e e-mail
      marketing. Atualmente estou me aprofundando em React e Next.js.
      Além de codificar, sou uma pessoa apaixonada por animais, música e saúde
      mental.`
}

export const projects = [
  {
    title: 'Won Games',
    description:
      'E-ecommerce de jogos que faz parte do curso de React Avançado, em desenvolvimento.',
    skills: 'React Next.js TypeScript Styled Components Storybook Jest',
    repositoryLink: 'https://github.com/AleferReinert/won-games',
    storybookLink: 'https://64ceaf6be6c94aa14b9fe174-rwsmooqukg.chromatic.com/',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691282514/portfolio/projects/won-games_i6iip7.webp'
  },
  {
    title: 'Portfólio',
    description: 'Veja como foi a construção desse portfólio.',
    skills: 'React Next.js TypeScript Styled Components Storybook Jest',
    repositoryLink: 'https://github.com/AleferReinert/portfolio',
    storybookLink: 'https://64cd32980293c902cb6e27ce-alwameemnu.chromatic.com',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691282513/portfolio/projects/portfolio_vwzlzk.webp'
  },
  {
    title: 'Landing Page',
    description: 'Primeiro projeto do curso de React Avançado.',
    skills: 'React Next.js TypeScript StyledComponents Strapi',
    projectLink: 'https://landing-page-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/landing-page',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691282512/portfolio/projects/landing-page_olg789.webp'
  },
  {
    title: 'Minha lojinha',
    description: 'Front end de um e-commerce fictício, em desenvolvimento.',
    skills: 'React Sass Bootstrap',
    projectLink: 'https://aleferreinert.github.io/react-commerce',
    repositoryLink: 'https://github.com/AleferReinert/react-commerce',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691282513/portfolio/projects/minha-lojinha_grzc2m.webp'
  },
  {
    title: 'Single Page',
    description:
      'Website responsivo de uma empresa fictícia, desenvolvido em página única.',
    skills: 'HTML Less JavaScript Gulp',
    projectLink: 'https://aleferreinert.github.io/single-page',
    repositoryLink: 'https://github.com/AleferReinert/single-page',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691282513/portfolio/projects/single-page_sj0mi1.webp'
  },
  {
    title: 'Metronome',
    description: 'Metrônomo para desktop com diversas configurações.',
    skills: 'HTML CSS JavaScript',
    projectLink: 'https://aleferreinert.github.io/metronome',
    repositoryLink: 'https://github.com/AleferReinert/metronome',
    img: 'https://res.cloudinary.com/devalefer/image/upload/v1691284888/portfolio/projects/metronome_blzuw0.png'
  }
]

export const certificates = [
  {
    title: 'React Avançado: Crie aplicações com Next.js, Strapi e mais',
    organization: 'Udemy',
    conclusionDate: 'Cursando'
  },
  {
    title: 'Javascript Para Iniciantes',
    organization: 'Unova Cursos',
    conclusionDate: 'Outubro/2022',
    link: 'https://www.unovacursos.com.br/certificados/14304132340741204202210'
  },
  {
    title: 'CC50: Introdução à Ciência da Computação',
    organization: 'Fundação Estudar',
    conclusionDate: 'Setembro/2022',
    link: 'https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-7244069/course-84414-bvrom.pdf'
  },
  {
    title: 'Formação Design Gráfico',
    organization: 'ProWay Informática',
    conclusionDate: 'Fevereiro/2012',
    link: 'https://drive.google.com/file/d/1dJErgNzdqUchbaEo7upZoSCO3GBYVRIv/view?usp=share_link'
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

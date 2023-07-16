import {
  Facebook,
  Github,
  Mail,
  Linkedin,
  Youtube
} from '@styled-icons/feather'
import { Whatsapp } from '@styled-icons/boxicons-logos'

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
    children: 'Skills'
  }
]

export const about = {
  title: (
    <>
      <span>Olá, meu nome é</span>
      <span>Alefer Reinert</span>
      <span>
        e sou desenvolvedor <span> front end</span>.
      </span>
    </>
  ),
  description: (
    <>
      <p>
        Nos meus mais de 5 anos de experiência, atuei principalmente no
        desenvolvimento de e-commerces, websites, wordpress e e-mail marketing.
      </p>
      <p>
        Aprendi HTML e CSS por conta própria, isso lá por 2012, então
        solidifiquei esse conhecimento no meu primeiro emprego na área, onde
        também aprendi JQuery que era bem popular na época. Hoje meu foco
        principal é o javascript e seus populares frameworks.
      </p>
      <p>
        Além de codificar, sou uma pessoa apaixonada por doguinhos, música e
        saúde mental. Toco bateria desde criança e já tive algumas bandas,
        inclusive gravei um CD em 2021. :)
      </p>
    </>
  )
}

export const skills = [
  { title: 'HTML 5', img: 'img/skills/html5.svg' },
  { title: 'CSS 3', img: 'img/skills/css3.svg' },
  { title: 'LESS', img: 'img/skills/less.svg' },
  { title: 'SASS', img: 'img/skills/sass.svg' },
  { title: 'Styled Components', img: 'img/skills/styled-components.svg' },
  { title: 'JavaScript', img: 'img/skills/javascript.svg' },
  { title: 'TypeScript', img: 'img/skills/typescript.svg' },
  { title: 'React', img: 'img/skills/react.svg' },
  { title: 'Next.js', img: 'img/skills/nextjs.svg' },
  { title: 'Testing Library', img: 'img/skills/testing-library.svg' },
  { title: 'JQuery', img: 'img/skills/jquery.svg' },
  { title: 'Grunt', img: 'img/skills/grunt.svg' },
  { title: 'Gulp', img: 'img/skills/gulp.svg' },
  { title: 'Storybook', img: 'img/skills/storybook.svg' },
  { title: 'Bootstrap', img: 'img/skills/bootstrap.svg' },
  { title: 'Git', img: 'img/skills/git.svg' },
  { title: 'Photoshop', img: 'img/skills/photoshop.svg' },
  { title: 'SQL', img: 'img/skills/sql.svg' }
]

export const certificates = [
  {
    title: 'React Avançado: Crie aplicações com Next.js, Strapi e mais',
    description: 'Udemy | Cursando'
  },
  {
    title: 'Javascript Para Iniciantes',
    description: 'Unova Cursos | Outubro/2022',
    link: 'https://www.unovacursos.com.br/certificados/14304132340741204202210'
  },
  {
    title: 'CC50: Introdução à Ciência da Computação',
    description: 'Fundação Estudar | Setembro/2022',
    link: 'https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-7244069/course-84414-bvrom.pdf'
  },
  {
    title: 'Formação Design Gráfico',
    description: 'ProWay Informática | Fevereiro/2012',
    link: 'https://drive.google.com/file/d/1dJErgNzdqUchbaEo7upZoSCO3GBYVRIv/view?usp=share_link'
  }
]

export const projects = [
  {
    title: 'Landing Page',
    description:
      'Projeto do curso "React Avançado: Crie aplicações com NextJS, Strapi e mais".',
    skills: 'React NextJS TypeScript StyledComponents Strapi',
    websiteLink: 'https://landing-page-ar.netlify.app',
    repositoryLink: 'https://github.com/AleferReinert/landing-page',
    img: '/img/projects/landing-page.png'
  },
  {
    title: 'E-Commerce',
    description: 'Loja virtual responsiva (em desenvolvimento).',
    skills: 'React Sass Bootstrap',
    websiteLink: 'https://aleferreinert.github.io/react-commerce',
    repositoryLink: 'https://github.com/AleferReinert/react-commerce',
    img: '/img/projects/e-commerce.jpg'
  },
  {
    title: 'Single Page',
    description: 'Um simples website genérico de página única.',
    skills: 'HTML JavaScript Less Gulp',
    websiteLink: 'https://aleferreinert.github.io/single-page',
    repositoryLink: 'https://github.com/AleferReinert/single-page',
    img: '/img/projects/single-page.png'
  },
  {
    title: 'Tic Tac Toe',
    description: 'Jogo da velha feito a partir do tutorial do React.',
    skills: 'React JSX CSS',
    websiteLink: 'https://aleferreinert.github.io/tic-tac-toe',
    repositoryLink: 'https://github.com/AleferReinert/tic-tac-toe',
    img: '/img/projects/tic-tac-toe.png'
  },
  {
    title: 'Metronome',
    description:
      'O metrônomo é um item obrigatório para qualquer músico, auxilia nos estudos e a tocar no tempo correto.',
    skills: 'HTML JavaScript CSS',
    websiteLink: 'https://aleferreinert.github.io/metronome',
    repositoryLink: 'https://github.com/AleferReinert/metronome',
    img: '/img/projects/metronome.png'
  },
  {
    title: 'Timer',
    description: 'Medição de intervalos de tempo.',
    skills: 'HTML JavaScript CSS',
    websiteLink: 'https://aleferreinert.github.io/timer',
    repositoryLink: 'https://github.com/AleferReinert/timer',
    img: '/img/projects/timer.png'
  },
  {
    title: 'Google Homepage',
    description: 'Clone da página inicial de busca do Google (desktop).',
    skills: 'HTML JavaScript CSS',
    websiteLink: 'https://aleferreinert.github.io/google-homepage',
    repositoryLink: 'https://github.com/AleferReinert/google-homepage',
    img: '/img/projects/google-homepage.png'
  }
]

export const social = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/AleferReinert',
    icon: <Facebook />
  },
  {
    name: 'Github',
    link: 'https://github.com/AleferReinert',
    icon: <Github />
  },
  {
    name: 'E-mail',
    link: 'mailto:aleferreinert@gmail.com',
    icon: <Mail />
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aleferreinert',
    icon: <Linkedin />
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/message/FSN72FDKNRO3O1',
    icon: <Whatsapp />
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/AleferReinert',
    icon: <Youtube />
  }
]

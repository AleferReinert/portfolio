import { SeoProps } from 'app/layout'
import { AboutProps } from 'components/About/About'
import { FooterProps } from 'components/Footer/Footer'
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si'

export const about: AboutProps & Pick<FooterProps, 'phone' | 'email'> & SeoProps = {
  firstName: 'Alefer',
  lastName: 'Reinert',
  role: 'Desenvolvedor front-end',
  email: 'aleferreinert@gmail.com',
  websiteUrl: 'https://aleferreinert.vercel.app',
  curriculumUrl: 'https://drive.google.com/file/d/1rl5BEI5eoqREjQUh37iKNULMQAFPRAx0/view',
  shareImgUrl: '/social-share.webp',
  phone: '47999558118',
  googleDescription:
    'Desenvolvedor front-end com experiência em React, Next.js, TypeScript, Tailwind, Storybook, Testing Library, GraphQL e Strapi.',
  description: (
    <>
      Desenvolvo sites e e-commerces utilizando as tecnologias mais atuais, focando em desempenho, acessibilidade e
      experiência do usuário. <br className='block lg:hidden' />
      Minhas principais habilidades incluem:{' '}
      <span>
        <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind</strong>,{' '}
        <strong>Storybook</strong>, <strong>Testing Library</strong>, <strong>GraphQL</strong>, <strong>Cypress</strong>{' '}
        e <strong>Strapi</strong>.
      </span>
    </>
  ),
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/AleferReinert', icon: SiGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/AleferReinert', icon: SiLinkedin },
    { name: 'WhatsApp', url: `https://wa.me/5547999558118`, icon: SiWhatsapp }
  ]
}

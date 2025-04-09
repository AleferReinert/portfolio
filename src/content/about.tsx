import { SeoProps } from 'app/layout'
import { AboutProps } from 'components/About/About'
import { FooterProps } from 'components/Footer/Footer'

export const about: AboutProps & Pick<FooterProps, 'phone' | 'email'> & SeoProps = {
  name: 'Alefer Reinert',
  role: 'Desenvolvedor Front-end',
  email: 'aleferreinert@gmail.com',
  websiteLink: 'https://aleferreinert.vercel.app',
  resumeLink: 'https://drive.google.com/file/d/1rl5BEI5eoqREjQUh37iKNULMQAFPRAx0/view',
  shareImgUrl: '/social-share.webp',
  phone: '47999558118',
  googleDescription:
    'Desenvolvedor Front-end com experiência em React, Next.js, TypeScript, Tailwind, Storybook, Testing Library, etc.',
  description: (
    <>
      Com mais de 8 anos experiência, desenvolvo sites e e-commerces utilizando as tecnologias mais atuais, focando em
      desempenho, acessibilidade e experiência do usuário. <br />
      Minhas principais habilidades incluem:
      <span>
        <strong> React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind</strong>,
        <strong> Storybook</strong> e <strong>Testing Library</strong>.
      </span>
    </>
  )
}

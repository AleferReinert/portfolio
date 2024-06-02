import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

const inter = Inter({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

const getCurrentISODate = (): string => {
  const currentDate = new Date()
  return currentDate.toISOString()
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Desenvolvedor com experiência em React, Next.js, Storybook e TypeScript'
        />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, TypeScript, Less, Sass, React, Next.js, Styled Components, Storybook, Jest, Testing Library, GraphQL, Photoshop, Grunt, Gulp, Figma, Jquery, Git, Bootstrap, Strapi, Tailwind'
        ></meta>
        <meta name='theme-color' content='#083344' />

        {/* Visualização de compartilhamento em redes sociais */}
        <meta property='og:url' content='https://aleferreinert.netlify.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Portfólio - Alefer Reinert' />
        <meta
          property='og:description'
          content='Desenvolvedor front-end com experiência em React, Next.js, Styled Components, Storybook, Testing Library e outros.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/devalefer/image/upload/v1691437893/portfolio/social-share_pkmpl3.webp'
        />
        <meta
          name='og:image:alt'
          content='Imagem que mostra o site responsivo em um celular, tablet e notebook.'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='author' content='Alefer Reinert' />
        {/* todo: ao testar no inspetor do linkedin, publish date não é reconhecido */}
        <meta
          name='publish_date'
          property='article:published_time'
          content={getCurrentISODate()}
        />
      </Head>
      <GlobalStyles />
      <Component className={inter.className} {...pageProps} />
    </>
  )
}

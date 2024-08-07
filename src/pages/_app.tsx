import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import imageSocialShare from './../../public/img/social-share.webp'

const inter = Inter({
  weight: ['300', '400', '500', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Desenvolvedor com experiência em React, Next.js, Storybook e TypeScript.'
        />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, TypeScript, Less, Sass, React, Next.js, Styled Components, Storybook, Jest, Testing Library, GraphQL, Photoshop, Grunt, Gulp, Figma, Jquery, Git, Bootstrap, Strapi, Tailwind'
        />
        <meta name='theme-color' content='#083344' />

        {/* Visualização de compartilhamento em redes sociais */}
        <meta
          property='og:title'
          content='Portfólio | Alefer Reinert - Desenvolvedor Front-end'
        />
        <meta name='author' content='Alefer Reinert' />
        <meta
          property='og:description'
          content='Desenvolvedor front-end com experiência em React, Next.js, Styled Components, Storybook, Testing Library e outros.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://aleferreinert.netlify.app' />
        <meta property='og:image' content={imageSocialShare.src} />
        <meta
          name='og:image:alt'
          content='Imagem que mostra o site responsivo em um celular, tablet e notebook.'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='canonical' href='https://aleferreinert.netlify.app' />
      </Head>
      <GlobalStyles />
      <Component className={inter.className} {...pageProps} />
    </>
  )
}

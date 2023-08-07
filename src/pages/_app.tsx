import type { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { Inter } from 'next/font/google'
import GlobalStyles from 'styles/global'
import Head from 'next/head'

const inter = Inter({
  weight: ['300', '400', '700', '800'],
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
          content='Dev com experiência em React, Next.js, Storybook, etc.'
        />
        <meta
          name='keywords'
          content='HTML, CSS, JavaScript, TypeScript, Less, Sass, React, Next.js, Styled Components, Storybook, Jest, Testing Library, GraphQL, Photoshop, Grunt, Gulp, Figma, Jquery, Git, Bootstrap, Strapi'
        ></meta>
        <meta property='og:url' content='https://aleferreinert.netlify.app' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Alefer Reinert - Portfólio' />
        <meta
          property='og:description'
          content='Desenvolvedor front end com experiência em React, Next.js, Styled Components, Storybook, Testing Library e outros.'
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
        <meta
          name='publish_date'
          property='og:publish_date'
          content='2023-08-07'
        />
      </Head>
      <GlobalStyles />
      <GoogleAnalytics trackPageViews />
      <Component className={inter.className} {...pageProps} />
    </>
  )
}

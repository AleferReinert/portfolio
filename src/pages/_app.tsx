import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import Head from 'next/head'

import { Inter } from 'next/font/google'

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
          content='https://res.cloudinary.com/devalefer/image/upload/v1689779983/portfolio/projects/portfolio_hukteg.webp'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </Head>
      <GlobalStyles />
      <Component className={inter.className} {...pageProps} />
    </>
  )
}

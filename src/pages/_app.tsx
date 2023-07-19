import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
import theme from 'styles/theme'

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
        <meta
          property='og:image'
          content='https://res.cloudinary.com/devalefer/image/upload/v1689725028/portfolio/projects/portfolio_syhjrj.webp'
        />
        <meta property='og:image:width' content='1080' />
        <meta property='og:image:height' content='1080' />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

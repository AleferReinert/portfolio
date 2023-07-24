import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
import { light, dark } from 'styles/themes'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

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
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyles />
        <Component theme={theme} toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  )
}

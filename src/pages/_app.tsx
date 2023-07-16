import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Desenvolvedor Front End com experiência em React, Next.js, Styled Components, Storybook, etc.'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

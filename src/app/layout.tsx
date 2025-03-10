import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
// import { themes } from '../../tailwind.config'
import { about } from 'content/about'
import { skills } from 'content/skills'
import './globals.css'

const inter = Inter({ weight: ['300', '400', '500', '700', '900'], subsets: ['latin'], display: 'swap' })

const globalTitle = `Portfólio | ${about.name} - ${about.role}`

export const metadata: Metadata = { title: globalTitle }

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='pt-BR' className='scroll-smooth dark'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content={about.googleDescription} />
        <meta
          name='keywords'
          content={skills
            .map((skill) => skill.title)
            .join(', ')
            .toString()}
        />
        <meta name='theme-color' content='#083344' />
        <meta name='google-site-verification' content='01tG19FkhgIo8cteSWl6WUHYFYCeZywVTSJC6Ua5WGA' />
        <link rel='preconnect' href='https://vercel.live' />
        <meta name='author' content={about.name} />
        <link rel='canonical' href={about.websiteLink} />

        {/* Visualização de compartilhamento em redes sociais */}
        <meta property='twitter:title' content={globalTitle} />
        <meta property='twitter:description' content={about.googleDescription} />
        <meta property='twitter:image' content={about.shareImgUrl} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='og:title' content={globalTitle} />
        <meta property='og:site_name' content={globalTitle} />
        <meta property='og:description' content={about.googleDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={about.websiteLink} />
        <meta property='og:image' content={about.shareImgUrl} />
        <meta property='og:image:alt' content='Imagem que mostra o site responsivo em um celular, tablet e notebook.' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { themes } from '../../tailwind.config'
import imageSocialShare from './../../public/social-share.webp'
import { about, skills } from './content'
import './globals.css'

const inter = Inter({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: `Portfólio | ${about.name} - ${about.role}`
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
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
        <meta name='theme-color' content={themes.dark.secondary} />

        <meta name='google-site-verification' content='01tG19FkhgIo8cteSWl6WUHYFYCeZywVTSJC6Ua5WGA' />
        <link rel='preconnect' href='https://vercel.live' />

        {/* Visualização de compartilhamento em redes sociais */}
        <meta property='og:title' content={`Portfólio | ${about.name} - ${about.role}`} />
        <meta name='author' content={about.name} />
        <meta property='og:description' content={about.googleDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={about.websiteLink} />
        <meta property='og:image' content={imageSocialShare.src} />
        <meta name='og:image:alt' content='Imagem que mostra o site responsivo em um celular, tablet e notebook.' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta name='twitter:card' content='summary_large_image' />
        <link rel='canonical' href={about.websiteLink} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

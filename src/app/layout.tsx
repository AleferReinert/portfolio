import { SpeedInsights } from '@vercel/speed-insights/next'
import { about } from 'content/about'
import { skills } from 'content/skills'
import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

export interface SeoProps {
  googleDescription: string
  websiteLink: string
  shareImgUrl: string
}

const inter = Inter({ weight: ['300', '400', '500', '700', '900'], subsets: ['latin'], display: 'swap' })
const globalTitle = `Portfólio | ${about.name} - ${about.role}`

export const metadata: Metadata = {
  title: globalTitle,
  description: about.googleDescription,
  authors: [{ name: about.name }],
  openGraph: {
    title: globalTitle,
    description: about.googleDescription,
    url: about.websiteLink,
    siteName: globalTitle,
    type: 'website',
    images: [
      {
        url: about.shareImgUrl,
        width: 1200,
        height: 630,
        alt: 'Imagem que mostra o site responsivo em um celular, tablet e notebook.'
      }
    ]
  },
  twitter: {
    title: globalTitle,
    description: about.googleDescription,
    card: 'summary_large_image',
    images: [about.shareImgUrl]
  },
  keywords: skills
    .map((skill) => skill.title)
    .join(', ')
    .toString(),
  alternates: {
    canonical: about.websiteLink
  },
  verification: {
    google: '01tG19FkhgIo8cteSWl6WUHYFYCeZywVTSJC6Ua5WGA'
  }
}

export const viewport: Viewport = {
  themeColor: '#083344',
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='pt-BR' className='scroll-smooth dark'>
      <head>
        <link rel='preconnect' href='https://vercel.live' />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

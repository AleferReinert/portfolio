import { about } from 'content/about'
import { skills } from 'content/skills'
import { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

export interface SeoProps {
  googleDescription: string
  websiteUrl: string
  shareImgUrl: string
}

const font = Plus_Jakarta_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})
const globalTitle = `Portfólio | ${about.firstName} ${about.lastName} - ${about.role}`

export const metadata: Metadata = {
  metadataBase: new URL(about.websiteUrl),
  title: globalTitle,
  description: about.googleDescription,
  authors: [{ name: `${about.firstName} ${about.lastName}` }],
  openGraph: {
    title: globalTitle,
    description: about.googleDescription,
    url: about.websiteUrl,
    siteName: globalTitle,
    type: 'website',
    images: [
      {
        url: about.shareImgUrl,
        width: 1200,
        height: 630,
        alt: 'Visualização do site em um celular, tablet e notebook.'
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
    .map(skill => skill.title)
    .join(', ')
    .toString(),
  alternates: {
    canonical: about.websiteUrl
  },
  verification: {
    google: '01tG19FkhgIo8cteSWl6WUHYFYCeZywVTSJC6Ua5WGA'
  }
}

export const viewport: Viewport = {
  themeColor: '#070707',
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='pt-BR' className='scroll-smooth dark'>
      <body className={font.className}>{children}</body>
    </html>
  )
}

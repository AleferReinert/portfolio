import type { MetadataRoute } from 'next'
import { about } from './content/layoutContent'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${about.websiteLink}/sitemap.xml`
  }
}

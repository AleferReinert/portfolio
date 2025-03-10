import { about } from 'content/about'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${about.websiteLink}/sitemap.xml`
  }
}

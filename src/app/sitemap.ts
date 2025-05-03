import { about } from 'content/about'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: about.websiteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}

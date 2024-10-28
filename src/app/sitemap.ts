import type { MetadataRoute } from 'next'
import { about } from './content'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: about.websiteLink,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}

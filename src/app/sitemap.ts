import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { meta } from '@/data/meta'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = meta.seo.url

  const projectUrls = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...projectUrls,
  ]
}

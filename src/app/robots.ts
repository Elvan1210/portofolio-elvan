import { MetadataRoute } from 'next'
import { meta } from '@/data/meta'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${meta.seo.url}/sitemap.xml`,
  }
}

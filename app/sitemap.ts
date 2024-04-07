import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://carusoprojects.com/',
      priority: 1
    },
    {
      url: 'https://carusoprojects.com/projects',
      priority: 0.8
    },
    {
      url: 'https://carusoprojects.com/about',
      priority: 0.6
    }
  ]
}

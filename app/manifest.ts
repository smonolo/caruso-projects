import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Simone Caruso Design',
    short_name: 'Simone Caruso',
    description: 'Simone Caruso Design',
    start_url: '/',
    display: 'standalone',
    background_color: '#6300ff',
    theme_color: '#6300ff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}

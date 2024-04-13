import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Creator from '@/components/layout/creator'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Simone Caruso Design',
    default: 'Simone Caruso Design'
  },
  description: 'Simone Caruso Design',
  alternates: {
    canonical: '/'
  },
  applicationName: 'Simone Caruso Design',
  authors: [
    {
      name: 'Stefano Monolo <stefano@smnl.dev>',
      url: 'https://smnl.dev'
    }
  ],
  creator: 'Stefano Monolo <stefano@smnl.dev>',
  metadataBase: new URL('https://carusoprojects.com'),
  openGraph: {
    title: 'Simone Caruso Design',
    description: 'Simone Caruso Design',
    url: 'https://carusoprojects.com',
    siteName: 'Simone Caruso',
    type: 'website'
  },
  publisher: 'Stefano Monolo <stefano@smnl.dev>',
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: 'summary',
    creator: '@stmonolo',
    title: 'Simone Caruso Design',
    description: 'Simone Caruso Design'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6300ff'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative m-0 flex min-h-screen w-full flex-col justify-between bg-cp-light-brand p-0 text-cp-light-white">
        <Navbar />
        <main className="mx-auto w-full max-w-[1200px]">{children}</main>
        <div className="mx-auto mt-28 flex w-full max-w-[1200px] flex-col gap-y-4 py-10">
          <Footer />
          <Creator />
        </div>
      </body>
    </html>
  )
}

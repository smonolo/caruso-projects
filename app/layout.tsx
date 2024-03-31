import type { Metadata, Viewport } from 'next'
import type { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      url: 'https://carusoprojects.com'
    }
  ],
  creator: 'Stefano Monolo <stefano@smnl.dev>',
  metadataBase: new URL('https://carusoprojects.com'),
  openGraph: {
    title: 'Simone Caruso Design',
    description: 'Simone Caruso Design',
    url: 'https://smnl.dev',
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
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          'bg-cp-light-brand text-cp-light-white relative m-0 flex min-h-screen w-full flex-col justify-between p-0'
        )}
      >
        <main className="mx-auto w-full max-w-[1200px]">{children}</main>
      </body>
    </html>
  )
}

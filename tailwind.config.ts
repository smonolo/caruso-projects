import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'cp-light-white': '#fbfaf8',
        'cp-light-brand': '#6300ff',
        'cp-light-black': '#1c1c1c',
        'cp-dark-white': '#c9dee4',
        'cp-dark-brand': '#4d00e2',
        'cp-dark-black': '#0f0f0f'
      }
    }
  },
  plugins: []
}

export default config

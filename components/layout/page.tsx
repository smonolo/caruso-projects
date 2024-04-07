import type { PropsWithChildren } from 'react'
import Contact from '@/components/layout/contact'

export default function Page({ children }: PropsWithChildren) {
  return (
    <section className="pt-32">
      {children}
      <Contact />
    </section>
  )
}

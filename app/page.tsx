import Project from '@/components/common/project'
import Page from '@/components/layout/page'
import { getAllProjects } from '@/lib/api'
import Link from 'next/link'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <Page>
      <h1 className="text-6xl font-bold">Simone Caruso</h1>
      <p className="mt-6 max-w-[700px] text-cp-dark-white">
        As a Graphic and UI/UX Designer, I&apos;m like a mad scientist of
        design, crafting delightful and ingenious solutions that make jaws drop
        and minds whirl!
      </p>
      <Link href="#contact" className="mt-14 block w-fit">
        <button className="w-fit rounded-lg border-none bg-cp-light-white px-5 py-3 text-sm font-semibold text-cp-light-brand transition-colors hover:bg-cp-dark-white">
          Let&apos;s work together
        </button>
      </Link>
      <section id="projects" className="mt-40 grid grid-cols-2 gap-10">
        {projects.map((project) => (
          <Project key={project.sys.id} project={project} />
        ))}
      </section>
    </Page>
  )
}

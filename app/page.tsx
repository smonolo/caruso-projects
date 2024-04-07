import Page from '@/components/layout/page'
import { getAllProjects } from '@/lib/api'
import Image from 'next/image'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <Page>
      <h1 className="text-4xl font-bold">Simone Caruso Design</h1>
      <p className="mt-2 text-cp-dark-white">
        Site under construction, check back later.
      </p>
      <section id="projects" className="mt-20 grid grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.sys.id}>
            <Image
              src={project.image.url}
              alt={project.name}
              width={2000}
              height={2000}
              className="h-[500px] w-full rounded-lg object-cover"
            />
            <h5 className="mt-5 font-medium">{project.name}</h5>
            <p className="mt-3 text-cp-dark-white">{project.summary}</p>
          </div>
        ))}
      </section>
    </Page>
  )
}

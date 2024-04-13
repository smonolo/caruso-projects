import Project from '@/components/common/project'
import Page from '@/components/layout/page'
import { getAllProjects } from '@/lib/api'

export default async function Projects() {
  const projects = await getAllProjects(100)

  return (
    <Page>
      <h1 className="text-6xl font-bold">Projects</h1>
      <p className="mt-6 max-w-[700px] text-cp-dark-white">
        Some description about projects here.
      </p>
      <section className="mt-40 grid grid-cols-2 gap-10">
        {projects.map((project) => (
          <Project key={project.sys.id} project={project} />
        ))}
      </section>
    </Page>
  )
}

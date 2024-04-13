import Page from '@/components/layout/page'
import { getProject } from '@/lib/api'
import Image from 'next/image'

type Props = {
  params: {
    slug: string
  }
}

export default async function Project({ params }: Props) {
  const project = await getProject(params.slug)

  if (!project) {
    return (
      <Page>
        <p>Project not found</p>
      </Page>
    )
  }

  return (
    <Page>
      <h1 className="text-5xl font-bold">{project.name}</h1>
      <p className="mt-6 text-cp-dark-white">{project.summary}</p>
      {!!project.description && (
        <p className="mt-28 text-xl font-medium">{project.description}</p>
      )}
      <Image
        src={project.image.url}
        alt={project.name}
        width={2000}
        height={2000}
        className="mt-28 h-[600px] w-full rounded-xl object-cover"
      />
    </Page>
  )
}

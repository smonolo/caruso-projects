import type { Project as APIProject } from '@/lib/api'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  project: APIProject
}

export default function Project({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <div className="h-[500px] w-full overflow-hidden rounded-xl">
        <Image
          src={project.image.url}
          alt={project.name}
          width={2000}
          height={2000}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h5 className="mt-5 font-medium">{project.name}</h5>
      <p className="mt-1 text-cp-dark-white">{project.summary}</p>
    </Link>
  )
}

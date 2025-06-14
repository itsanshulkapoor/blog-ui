import { notFound } from 'next/navigation'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Project Details' })

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.href === `/projects/${params.slug}`)

  if (!project) {
    return notFound()
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {project.title}
        </h1>
      </div>
      <div className="container py-12">
        {project.imgSrc && <div className="mb-8">Image goes here</div>}
        <div className="prose dark:prose-dark max-w-none">
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  )
}

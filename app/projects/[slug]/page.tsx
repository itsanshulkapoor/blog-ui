import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import projectsData from '@/data/projectsData'
import Image from 'next/image'

export async function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.href === `/projects/${params.slug}`)
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }
  return {
    title: project.title,
    description: project.description,
  }
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((p) => p.href === `/projects/${params.slug}`)
  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-4xl font-bold">{project.title}</h1>
      {project.imgSrc && (
        <div className="mb-8">
          <Image
            src={project.imgSrc}
            alt={project.title}
            width={800}
            height={450}
            className="h-auto w-full rounded-lg shadow-lg"
            priority
          />
        </div>
      )}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700">{project.description}</p>
      </div>
    </div>
  )
}

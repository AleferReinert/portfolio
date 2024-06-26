import { ProjectPage } from 'components/ProjectPage/ProjectPage'
import { useRouter } from 'next/router'
import { projects } from '../../content/content'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query
  const project = projects.find((project) => project.slug === slug)

  if (!project) {
    return <p>Projeto não encontrado.</p>
  }

  return <ProjectPage project={project} />
}

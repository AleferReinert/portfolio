import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { Project, ProjectProps } from 'components/Project/Project'

interface ProjectsProps {
  projects: Omit<ProjectProps, 'index'>[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id='projects'>
      <Container>
        <Heading>Projetos</Heading>
        <ul className='flex flex-col gap-6'>
          {projects.map((project, index) => {
            // Disable loading lazy for the first elements
            project.lazy = index === 0 || false

            return <Project key={index} {...project} index={index} />
          })}
        </ul>
      </Container>
    </section>
  )
}

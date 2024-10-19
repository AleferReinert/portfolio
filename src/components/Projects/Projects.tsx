import { Project, ProjectProps } from 'components/Project/Project'

interface ProjectsProps {
  projects: Omit<ProjectProps, 'index'>[]
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <ul className='flex flex-col gap-6'>
      {projects.map((project, index) => {
        // Disable loading lazy for the first elements
        project.lazy = index === 0 || false

        return <Project key={index} {...project} index={index} />
      })}
    </ul>
  )
}

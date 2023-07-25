import Project, { ProjectProps } from 'components/Project/Project'
import * as S from './Projects.styles'

type ProjectsProps = {
  projects: ProjectProps[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <S.Wrapper role='list'>
      {projects.map((project, index) => {
        // Disable loading lazy for the first element
        project.lazy = index === 0 ? true : false

        return <Project key={index} {...project} />
      })}
    </S.Wrapper>
  )
}

export default Projects

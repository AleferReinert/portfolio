import Project, { ProjectProps } from 'components/Project/Project'
import * as S from './Projects.styles'

type ProjectsProps = {
  projects: ProjectProps[]
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <S.Wrapper>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </S.Wrapper>
  )
}

export default Projects

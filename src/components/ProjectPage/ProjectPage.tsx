import Container from 'components/Container/Container'
import Layout from 'components/Layout/Layout'
import { ProjectProps } from 'components/Project/Project'
import { ProjectLinks } from 'components/ProjectLinks/ProjectLinks'
import Image from 'next/image'
import * as S from './ProjectPage.styles'

interface ProjectPageProps {
  project: ProjectProps
}

export function ProjectPage({ project }: ProjectPageProps) {
  return (
    <Layout>
      <Container>
        <S.Wrapper>
          <S.ProjectHeader>
            <S.Info>
              <S.Title>{project.title}</S.Title>
            </S.Info>
            <Image alt='' src={project.img} width={500} height={340} />
          </S.ProjectHeader>
          <S.Skills>
            {project.skills.split(' ').map((skill) => {
              return <li key={skill}>{skill}</li>
            })}
          </S.Skills>
          <ProjectLinks
            repositoryLink={project.repositoryLink}
            storybookLink={project.storybookLink}
            projectLink={project.projectLink}
          />
        </S.Wrapper>
      </Container>
    </Layout>
  )
}

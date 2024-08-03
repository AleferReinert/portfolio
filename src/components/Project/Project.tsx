import { ProjectLinks } from 'components/ProjectLinks/ProjectLinks'
import Image from 'next/image'
import { breakpoints } from 'styles/global'
import * as S from './Project.styles'

export interface ProjectProps {
  slug: string
  title: string
  year: string
  shortDescription: string
  skills: string
  repositoryLink: string
  storybookLink?: string
  projectLink?: string
  img: string
  lazy?: boolean
}

const Project = ({
  title,
  year,
  shortDescription,
  skills,
  repositoryLink,
  storybookLink,
  projectLink,
  img,
  lazy
}: ProjectProps) => {
  return (
    <S.Wrapper role='listitem'>
      <S.ImageWrapper>
        <Image
          src={img}
          alt='Imagem do projeto'
          priority={lazy}
          fill
          quality={100}
          sizes={`240px,
            (min-width: ${breakpoints.xsmall}) 280px,
            (min-width: ${breakpoints.small}) 240px, 
            (min-width: ${breakpoints.medium}) 280px`}
        />
      </S.ImageWrapper>
      <S.Content>
        <S.Title>
          {title}
          <S.Year aria-label='ano'>{year}</S.Year>
        </S.Title>

        <S.Description
          role='paragraph'
          aria-label='descrição'
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        ></S.Description>

        <S.Skills aria-label='skills utilizadas' title='Tecnologias utilizadas'>
          {skills}
        </S.Skills>

        <ProjectLinks
          repositoryLink={repositoryLink}
          storybookLink={storybookLink}
          projectLink={projectLink}
        />
        {/* <Link href={'project/' + slug}>Ver detalhes</Link> */}
      </S.Content>
    </S.Wrapper>
  )
}

export default Project

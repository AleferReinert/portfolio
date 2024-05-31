import { Github as GithubIcon, Link as LinkIcon } from '@styled-icons/feather'
import { Storybook as StorybookIcon } from '@styled-icons/simple-icons'
import Image from 'next/image'
import Link from 'next/link'
import { breakpoints } from 'styles/global'
import * as S from './Project.styles'

export interface ProjectProps {
  title: string
  year: string
  description: String
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
  description,
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
            (min-width: ${breakpoints.medium}) 280px,
            288px`}
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
          dangerouslySetInnerHTML={{ __html: description }}
        ></S.Description>

        <S.Skills aria-label='skills utilizadas' title='Tecnologias utilizadas'>
          {skills}
        </S.Skills>

        <S.IconsWrapper>
          <Link href={repositoryLink} title='Repositório' target='_blank'>
            <GithubIcon aria-hidden />
          </Link>
          {storybookLink && (
            <Link href={storybookLink} title='Storybook' target='_blank'>
              <StorybookIcon aria-hidden />
            </Link>
          )}
          {projectLink && (
            <Link href={projectLink} title='Visualizar' target='_blank'>
              <LinkIcon aria-hidden />
            </Link>
          )}
        </S.IconsWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Project

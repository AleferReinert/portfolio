import { Github as GithubIcon, Link as LinkIcon } from '@styled-icons/feather'
import { Storybook as StorybookIcon } from '@styled-icons/simple-icons'
import { breakpoints } from 'styles/global'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './Project.styles'

export type ProjectProps = {
  title: string
  year: string
  description: string
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
          sizes={`
            (min-width: ${breakpoints.xsmall}) 328px,
            (min-width: ${breakpoints.small}) 240px, 
            (min-width:${breakpoints.medium}) 280px,
            288px`}
        />
      </S.ImageWrapper>
      <S.Content>
        <S.Title>
          {title}
          <S.Year aria-label='ano'>{year}</S.Year>
        </S.Title>

        <S.Description role='paragraph' aria-label='descrição'>
          {description}
        </S.Description>
        <S.Skills aria-label='skills utilizadas'>{skills}</S.Skills>
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
            <Link href={projectLink} title='Projeto' target='_blank'>
              <LinkIcon aria-hidden />
            </Link>
          )}
        </S.IconsWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Project

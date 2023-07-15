import Image from 'next/image'
import Link from 'next/link'
import * as S from './Project.styles'
import { Github as GithubIcon, Link as LinkIcon } from '@styled-icons/feather'

export type ProjectProps = {
  title: string
  description: string
  skills: string
  repositoryLink: string
  websiteLink: string
  img: string
}

const Project = ({
  title,
  description,
  skills,
  repositoryLink,
  websiteLink,
  img
}: ProjectProps) => {
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <Image src={img} alt='Imagem do projeto' fill />
      </S.ImageWrapper>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description aria-label='descrição'>{description}</S.Description>
        <S.Skills aria-label='skills'>{skills}</S.Skills>
        <S.IconsWrapper>
          <Link href={repositoryLink} title='Repositório' target='_blank'>
            <GithubIcon />
          </Link>
          <Link href={websiteLink} title='Website' target='_blank'>
            <LinkIcon />
          </Link>
        </S.IconsWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Project

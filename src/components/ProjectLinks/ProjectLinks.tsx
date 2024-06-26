import { Github as GithubIcon } from '@styled-icons/feather/Github'
import { Link as LinkIcon } from '@styled-icons/feather/Link'
import { Storybook as StorybookIcon } from '@styled-icons/simple-icons/Storybook'
import Link from 'next/link'
import * as S from './ProjectLinks.styles'

interface ProjectLinksProps {
  repositoryLink: string
  storybookLink?: string
  projectLink?: string
}
export const ProjectLinks = ({
  repositoryLink,
  storybookLink,
  projectLink
}: ProjectLinksProps) => {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
}

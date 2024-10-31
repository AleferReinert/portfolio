import Link from 'next/link'
import { IoIosLink } from 'react-icons/io'
import { SiGithub, SiStorybook } from 'react-icons/si'

interface ProjectLinksProps {
  repositoryLink: string
  storybookLink?: string
  projectLink?: string
  index: number
}

export function ProjectLinks({ repositoryLink, storybookLink, projectLink, index }: ProjectLinksProps) {
  const linkStyles = 'group hover:text-primary-theme'
  const svgStyles = 'size-7 transition ease-linear group-hover:animate-rotateFrom180'
  const isEven = index % 2 === 0

  return (
    <div className={`flex gap-4 justify-end w-full sm:justify-start ${isEven ? 'lg:justify-end' : ''}`}>
      <Link href={repositoryLink} title='GitHub' target='_blank' className={linkStyles}>
        <SiGithub className={svgStyles} />
      </Link>

      {storybookLink && (
        <Link href={storybookLink} title='Storybook' target='_blank' className={linkStyles}>
          <SiStorybook className={svgStyles} />
        </Link>
      )}

      {projectLink && (
        <Link href={projectLink} title='Visualizar' target='_blank' className={linkStyles}>
          <IoIosLink className={svgStyles} />
        </Link>
      )}
    </div>
  )
}

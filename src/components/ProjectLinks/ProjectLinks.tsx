import { ProjectProps } from 'components/Project/Project'
import Link from 'next/link'
import { IoIosLink } from 'react-icons/io'
import { SiGithub, SiPagespeedinsights, SiStorybook } from 'react-icons/si'

interface ProjectLinksProps extends Pick<ProjectProps, 'repositoryUrl' | 'storybookUrl' | 'projectUrl'> {
  index: number
}

export function ProjectLinks({ repositoryUrl, storybookUrl, projectUrl, index }: ProjectLinksProps) {
  const linkStyles = 'group/project-link hover:text-primary-theme'
  const svgStyles = 'size-7 transition ease-linear group-hover/project-link:animate-rotateFrom180'
  const isEven = index % 2 === 0

  return (
    <div className={`flex gap-4 justify-end w-full sm:justify-start ${isEven ? 'lg:justify-end' : ''}`}>
      <Link
        href={`https://pagespeed.web.dev/analysis?url=${projectUrl}&form_factor=desktop`}
        title='PageSpeed Insights'
        target='_blank'
        className={linkStyles}
      >
        <SiPagespeedinsights aria-hidden role='img' className={svgStyles} />
      </Link>

      <Link href={repositoryUrl} title='GitHub' target='_blank' className={linkStyles}>
        <SiGithub aria-hidden role='img' className={svgStyles} />
      </Link>

      {storybookUrl && (
        <Link href={storybookUrl} title='Storybook' target='_blank' className={linkStyles}>
          <SiStorybook aria-hidden role='img' className={svgStyles} />
        </Link>
      )}

      {projectUrl !== 'https://aleferreinert.vercel.app' && (
        <Link href={projectUrl} title='Visualizar' target='_blank' className={linkStyles}>
          <IoIosLink aria-hidden role='img' className={svgStyles} />
        </Link>
      )}
    </div>
  )
}

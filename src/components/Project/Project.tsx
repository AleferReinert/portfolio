import { ProjectLinks } from 'components/ProjectLinks/ProjectLinks'
import Image from 'next/image'

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
  index: number
}

export function Project({
  title,
  year,
  shortDescription,
  skills,
  repositoryLink,
  storybookLink,
  projectLink,
  img,
  lazy,
  index
}: ProjectProps) {
  return (
    <li
      data-testid='ProjectComponent'
      className='
				flex flex-col items-center self-center bg-black bg-opacity-5 dark:bg-opacity-25 w-full px-4 py-7 gap-6 
				md:flex-row md:justify-between md:px-6 md:py-8 md:max-w-none md:self-auto md:gap-8
				lg:px-8 lg:py-10 lg:gap-12 md:even:flex-row-reverse
			'
    >
      <div className='relative w-full h-min aspect-[25/17] max-w-[280px] md:max-w-[240px] lg:max-w-[280px]'>
        <Image
          src={img}
          alt='Imagem do projeto'
          priority={lazy}
          fill
          quality={100}
          sizes='(min-width: 320px) 240px,
                 (min-width: 576px) 280px,
                 (min-width: 768px) 240px,
                 (min-width: 1024px) 280px,
                 288px'
        />
      </div>
      <div className='flex flex-col flex-shrink items-center gap-4 mx-auto w-full tex-center md:text-left'>
        <h3 className='w-full flex justify-between items-baseline'>
          <span className='text-2xl font-bold'>{title}</span>
          <span aria-label='ano'>{year}</span>
        </h3>
        <p
          aria-label='descrição'
          className='leading-5 w-full'
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
        <p
          className='w-full text-cyan-950 dark:text-green-400 font-normal'
          title='Tecnologias utilizadas'
        >
          {skills}
        </p>
        <ProjectLinks
          repositoryLink={repositoryLink}
          storybookLink={storybookLink}
          projectLink={projectLink}
          index={index}
        />
      </div>
    </li>
  )
}

import { ProjectLinks } from 'components/ProjectLinks/ProjectLinks'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { globalMotion } from 'utils/motion'

export interface ProjectProps {
  id: string
  title: string
  year: string
  description: string
  skills: string[]
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
  description,
  skills,
  repositoryLink,
  storybookLink,
  projectLink,
  img,
  lazy,
  index
}: ProjectProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isFirst = index === 0

  return (
    <motion.li
      data-testid='ProjectComponent'
      ref={ref}
      initial={{ ...globalMotion.initial.fromBottom }}
      animate={isInView || isFirst ? { ...globalMotion.animate.vertical } : {}}
      transition={{ ...globalMotion.transition, delay: isFirst ? globalMotion.delay.firstProject : 0 }}
      className='
				flex flex-col items-center self-center bg-black/5 dark:bg-black/25 w-full px-4 py-7 gap-6 
				md:flex-row md:justify-between md:px-6 md:py-8 md:max-w-none md:self-auto md:gap-8
				lg:px-8 lg:py-10 lg:gap-12 md:even:flex-row-reverse
			'
    >
      <div className='relative w-full h-min aspect-25/17 max-w-[280px] md:max-w-[240px] lg:max-w-[280px]'>
        <a href={projectLink} target='_blank'>
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
        </a>
      </div>
      <div className='flex flex-col shrink items-center gap-4 mx-auto w-full tex-center md:text-left'>
        <h3 className='w-full flex justify-between items-baseline'>
          <span className='text-2xl font-bold text-heading-theme'>{title}</span>
          <span aria-label='ano'>{year}</span>
        </h3>
        <p aria-label='descrição' className='leading-5 w-full'>
          {description}
        </p>
        <ul className='w-full text-primary-theme font-normal gap-1 flex' title='Tecnologias utilizadas'>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <ProjectLinks
          repositoryLink={repositoryLink}
          storybookLink={storybookLink}
          projectLink={projectLink}
          index={index}
        />
      </div>
    </motion.li>
  )
}

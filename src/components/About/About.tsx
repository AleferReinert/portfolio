import { Section } from 'components/Section/Section'
import * as motion from 'framer-motion/client'
import { ReactNode } from 'react'
import { globalMotion } from '../../utils/motion'

export interface AboutProps {
  name: string
  role: string
  description: ReactNode
  resumeLink: string
}

export function About({ name, role, description, resumeLink }: AboutProps) {
  const { initial, animate, transition, delay } = globalMotion

  return (
    <Section id='about'>
      <div className='pt-20 mb-8 md:pt-28'>
        <motion.div
          className='text-xl leading-5'
          initial={{ ...initial.fromLeft }}
          animate={{ ...animate.horizontal }}
          transition={{ ...transition, delay: delay.about.firstLine }}
        >
          Olá, meu nome é
        </motion.div>
        <h1 className='flex flex-col'>
          <motion.span
            className='text-[2.75rem]/[3.75rem] text-heading-theme font-black md:text-6xl'
            initial={{ ...initial.fromLeft }}
            animate={{ ...animate.horizontal }}
            transition={{ ...transition, delay: delay.about.name }}
          >
            {name}
          </motion.span>
          <motion.span
            initial={{ ...initial.fromLeft }}
            animate={{ ...animate.horizontal }}
            transition={{ ...transition, delay: delay.about.role }}
            className='text-paragraph-theme leading-none font-bold md:text-lg/[1.75rem]'
          >
            {role}
          </motion.span>
          <motion.a
            initial={{ ...initial.opacity }}
            animate={{ ...animate.opacity }}
            transition={{ ...transition, delay: delay.about.resumeLink }}
            href={resumeLink}
            target='_blank'
            className='rounded-3xl border border-primary-theme text-primary-theme py-2 px-5 mt-5 font-medium text-sm max-w-fit 
								transition hover:bg-primary-theme hover:text-secondary-theme hover:scale-95
							'
          >
            Visualizar CV
          </motion.a>
        </h1>
      </div>
      <motion.div
        initial={{ ...initial.fromBottom }}
        animate={{ ...animate.vertical }}
        transition={{ ...transition, delay: delay.about.description }}
      >
        <h2 className='hidden text-xl font-bold text-center md:block'>Sobre mim</h2>
        <p
          className={`[&>span>strong]:inline [&>span>strong]:text-primary-theme [&>span>strong]:font-medium 
						md:text-center md:max-w-(--breakpoint-md) md:mt-2 md:mx-auto md:[&>span]:block md:[&>span+br]:hidden`}
        >
          {description}
        </p>
      </motion.div>
    </Section>
  )
}

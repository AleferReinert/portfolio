import { Container } from 'components/Container/Container'
import * as motion from 'framer-motion/client'
import { ReactNode } from 'react'
import { globalMotion } from '../../utils/motion'

export interface AboutProps {
  name: string
  role: string
  description: ReactNode
  googleDescription: string
  websiteLink: string
  resumeLink: string
  email: string
  phone: string
  socialShareImg: string
}

export function About({ name, role, description, resumeLink }: AboutProps) {
  return (
    <section id='about'>
      <Container>
        <div className='pt-20 mb-8 md:pt-28'>
          <motion.div
            className='text-xl leading-5'
            initial={{ ...globalMotion.initial.fromLeft }}
            animate={{ ...globalMotion.animate.horizontal }}
            transition={{ ...globalMotion.transition, delay: globalMotion.delay.about.firstLine }}
          >
            Olá, meu nome é
          </motion.div>
          <h1 className='flex flex-col'>
            <motion.span
              className='text-[2.75rem] text-heading-theme font-black leading-snug md:text-6xl'
              initial={{ ...globalMotion.initial.fromLeft }}
              animate={{ ...globalMotion.animate.horizontal }}
              transition={{ ...globalMotion.transition, delay: globalMotion.delay.about.name }}
            >
              {name}
            </motion.span>
            <motion.span
              initial={{ ...globalMotion.initial.fromLeft }}
              animate={{ ...globalMotion.animate.horizontal }}
              transition={{ ...globalMotion.transition, delay: globalMotion.delay.about.role }}
              className='text-paragraph-theme leading-none font-bold md:text-lg'
            >
              {role}
            </motion.span>
            <motion.a
              initial={{ ...globalMotion.initial.opacity }}
              animate={{ ...globalMotion.animate.opacity }}
              transition={{ ...globalMotion.transition, delay: globalMotion.delay.about.resumeLink }}
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
          initial={{ ...globalMotion.initial.fromBottom }}
          animate={{ ...globalMotion.animate.vertical }}
          transition={{ ...globalMotion.transition, delay: globalMotion.delay.about.description }}
        >
          <h2 className='hidden text-xl font-bold text-center md:block'>Sobre mim</h2>
          <p
            className={`[&>span>strong]:inline [&>span>strong]:text-primary-theme [&>span>strong]:font-medium 
						md:text-center md:max-w-(--breakpoint-md) md:mt-2 md:mx-auto md:[&>span]:block md:[&>span+br]:hidden`}
          >
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}

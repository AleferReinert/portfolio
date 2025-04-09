'use client'
import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { IconType } from 'react-icons'
import { formatPhone } from 'utils/formatPhone'
import { globalMotion } from 'utils/motion'

export interface SocialProps {
  name: string
  link: string
  icon: IconType
}

export interface FooterProps {
  socials: SocialProps[]
  email: string
  phone: string
}

export function Footer({ phone, email, socials }: FooterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer id='contact' className='pb-6'>
      <Container>
        <Heading>Contato</Heading>
        <motion.div
          ref={ref}
          initial={{ ...globalMotion.initial.fromBottom }}
          animate={isInView ? { ...globalMotion.animate.vertical } : {}}
          transition={{ ...globalMotion.transition }}
          className='flex flex-col sm:flex-row sm:justify-between sm:items-end'
        >
          <p className='mb-6 sm:mb-0 [&>span]:font-medium [&>a:hover]:text-primary-theme [&>a]:transition'>
            <span className='text-heading-theme'>Tel: </span>
            <a href={`tel:${phone}`}>{formatPhone(phone)}</a>
            <br />
            <span className='text-heading-theme'>E-mail: </span>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <nav data-testid='social-component' className='inline-flex gap-5'>
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <a
                  key={social.name}
                  href={social.link}
                  title={social.name}
                  target='_blank'
                  className='group flex relative transition-colors ease-linear hover:text-primary-theme'
                >
                  <Icon
                    role='img'
                    aria-label={social.name}
                    className='size-8 transition-all ease-linear sm:size-7 group-hover:animate-rotateFrom180'
                  />
                </a>
              )
            })}
          </nav>
        </motion.div>
      </Container>
    </footer>
  )
}

'use client'
import { AboutProps } from 'components/About/About'
import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { motion, useInView } from 'framer-motion'
import { cloneElement, useRef } from 'react'
import { formatPhone } from 'utils/formatPhone'
import { globalMotion } from 'utils/motion'

export interface SocialProps {
  name: string
  link: string
  icon: JSX.Element
}

interface FooterProps extends Pick<AboutProps, 'phone' | 'email'> {
  socials: SocialProps[]
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
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.link}
                  title={social.name}
                  target='_blank'
                  className='group flex relative transition-colors ease-linear hover:text-primary-theme'
                >
                  {/* <social.icon className='size-8 transition-all ease-linear sm:size-7 group-hover:animate-rotateFrom180' /> */}
                  {cloneElement(social.icon, {
                    'aria-label': social.name,
                    role: 'img',
                    className: 'size-8 transition-all ease-linear sm:size-7 group-hover:animate-rotateFrom180'
                  })}
                </a>
              )
            })}
          </nav>
        </motion.div>
      </Container>
    </footer>
  )
}

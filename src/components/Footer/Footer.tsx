import { AboutProps } from 'components/About/About'
import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { IconType } from 'react-icons'
import { formatPhone } from 'utils/helpers'

export interface SocialProps {
  name: string
  link: string
  icon: IconType
}

interface FooterProps extends Pick<AboutProps, 'phone' | 'email'> {
  socials: SocialProps[]
}

export function Footer({ phone, email, socials }: FooterProps) {
  return (
    <footer id='contact' className='pb-6'>
      <Container>
        <Heading>Contato</Heading>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end'>
          <p className='mb-6 sm:mb-0 [&>span]:font-medium [&>a:hover]:text-primary-theme-light dark:[&>a:hover]:text-primary-theme-dark [&>a]:transition'>
            <span>Tel: </span>
            <a aria-label='telefone' href={`tel:${phone}`}>
              {formatPhone(phone)}
            </a>
            <br />
            <span>E-mail: </span>
            <a aria-label='email' href={`mailto:${email}`}>
              {email}
            </a>
          </p>
          <nav data-testid='social-component' className='inline-flex gap-5'>
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.link}
                  title={social.name}
                  target='_blank'
                  className='group flex relative transition-colors ease-linear hover:text-primary-theme-light dark:hover:text-primary-theme-dark'
                >
                  <social.icon className='size-8 transition-all ease-linear sm:size-7 group-hover:animate-rotateFrom180' />
                </a>
              )
            })}
          </nav>
        </div>
      </Container>
    </footer>
  )
}

import { StyledIcon } from '@styled-icons/styled-icon'
import { ComponentProps } from 'react'
import { IconType } from 'react-icons'

export interface SocialItemProps {
  name: string
  link: string
  icon: StyledIcon | IconType
}

interface SocialProps extends ComponentProps<'nav'> {
  socials: SocialItemProps[]
}

export function Social({ socials, ...rest }: SocialProps) {
  return (
    <nav
      {...rest}
      data-testid='social-component'
      className={`inline-flex gap-5 group ${rest.className}`}
    >
      {socials.map((social, index) => {
        const Icon = social.icon

        return (
          <a
            key={index}
            href={social.link}
            title={social.name}
            target='_blank'
            className='group flex relative transition-colors ease-linear hover:text-cyan-950 dark:hover:text-green-400'
          >
            <Icon className='size-8 transition-all ease-linear sm:size-6' />
            {/* <span className='hidden lg:block absolute top-[-3px] left-9 text-sm leading-[30px] max-w-0 overflow-hidden text-nowrap transition-all duration-300 ease-linear group-hover:text-cyan-950 dark:group-hover:text-green-400'>
              {social.name}
            </span> */}
          </a>
        )
      })}
    </nav>
  )
}

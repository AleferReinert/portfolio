import { SocialProps } from 'components/Footer/Footer'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'
import { SiGithub } from 'react-icons/si'

export interface NavMenuItemProps {
  link: string
  children: string
}

export interface NavMenuProps {
  menu: NavMenuItemProps[]
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  github?: SocialProps
}

export function NavMenu({ menu, setShowMobileMenu, github }: NavMenuProps) {
  return (
    <nav
      data-testid='NavMenuComponent'
      aria-label='Menu'
      className='flex flex-col gap-6 text-center text-2xl md:flex-row md:text-base'
    >
      {menu.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          scroll={true}
          onClick={() => setShowMobileMenu(false)}
          className='transition hover:text-primary-theme group flex flex-col items-center relative'
        >
          {item.children}
          <div className='bg-primary-theme absolute -translate-y-[1px] -bottom-2 transition-all h-[1px] w-full max-w-0 group-hover:max-w-full' />
        </Link>
      ))}
      {github && (
        <a
          title={github.name}
          href={github.url}
          target='_blank'
          className='transition hover:text-primary-theme group hidden md:inline'
        >
          <SiGithub aria-hidden size={24} className='group-hover:animate-rotateFrom180' />
        </a>
      )}
    </nav>
  )
}

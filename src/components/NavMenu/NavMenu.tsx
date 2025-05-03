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
    <nav data-testid='NavMenuComponent' className='flex flex-col gap-6 text-center text-2xl md:flex-row md:text-base'>
      {menu.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          scroll={true}
          onClick={() => setShowMobileMenu(false)}
          className='transition hover:text-primary-theme'
        >
          {item.children}
        </Link>
      ))}
      {github && (
        <a
          title={github.name}
          href={github.url}
          target='_blank'
          className='transition hover:text-primary-theme hidden md:inline'
        >
          <SiGithub size={24} />
        </a>
      )}
    </nav>
  )
}

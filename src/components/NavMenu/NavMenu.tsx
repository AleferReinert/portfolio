import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export interface NavMenuItemProps {
  link: string
  children: string
}

interface NavMenuProps {
  menu: NavMenuItemProps[]
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
}

export function NavMenu({ menu, setShowMobileMenu }: NavMenuProps) {
  return (
    <nav
      data-testid='NavMenuComponent'
      className='flex flex-col gap-6 text-center text-2xl font-light md:flex-row md:text-base md:font-normal'
    >
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          scroll={true}
          onClick={() => setShowMobileMenu(false)}
          className='transition-colors ease-linear hover:text-green-400'
        >
          {item.children}
        </Link>
      ))}
    </nav>
  )
}

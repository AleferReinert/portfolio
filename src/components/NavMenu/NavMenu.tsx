import Link from 'next/link'
import * as S from './NavMenu.styles'
import { Dispatch, SetStateAction } from 'react'

export interface NavMenuItemProps {
  link: string
  children: string
}

interface NavMenuProps {
  menu: NavMenuItemProps[]
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
}

const NavMenu = ({ menu, setShowMobileMenu }: NavMenuProps) => {
  return (
    <S.Wrapper role='menu'>
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          scroll={false}
          onClick={() => setShowMobileMenu(false)}
          role='menuitem'
        >
          {item.children}
        </Link>
      ))}
    </S.Wrapper>
  )
}

export default NavMenu

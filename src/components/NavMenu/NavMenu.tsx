import Link from 'next/link'
import * as S from './NavMenu.styles'

export type NavMenuItemProps = {
  link: string
  children: string
}

type NavMenuProps = {
  menu: NavMenuItemProps[]
}

const NavMenu = ({ menu }: NavMenuProps) => {
  return (
    <S.Wrapper role='menu'>
      {menu.map((item, index) => (
        <Link key={index} href={item.link} scroll={false} role='menuitem'>
          {item.children}
        </Link>
      ))}
    </S.Wrapper>
  )
}

export default NavMenu

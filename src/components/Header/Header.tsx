import { SocialItemProps } from 'components/Social/Social'
import { useState } from 'react'
import { Menu } from '@styled-icons/material'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import NavMenu, { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import * as S from './Header.styles'

type HeaderProps = {
  menu: NavMenuItemProps[]
  socials: SocialItemProps[]
}

const Header = ({ menu, socials }: HeaderProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <S.Wrapper>
      <S.OpenMenuButton
        title='Abrir menu'
        onClick={() => setShowMobileMenu(true)}
      >
        <Menu aria-hidden />
      </S.OpenMenuButton>
      <MenuMobile
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        socials={socials}
        menu={menu}
      />
      <S.MenuDesktop>
        <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} />
      </S.MenuDesktop>
    </S.Wrapper>
  )
}

export default Header

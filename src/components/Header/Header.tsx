import { SocialItemProps } from 'components/Social/Social'
import { useEffect, useState } from 'react'
import { Menu } from '@styled-icons/feather'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import NavMenu, { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import * as S from './Header.styles'

type HeaderProps = {
  menu: NavMenuItemProps[]
  socials: SocialItemProps[]
}

const Header = ({ menu, socials }: HeaderProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [fixedHeader, setFixedHeader] = useState('fixed')

  useEffect(() => {
    let prev = window.scrollY

    const fixedHeaderOnScrollUp = () => {
      let current = window.scrollY
      prev > current ? setFixedHeader('fixed') : setFixedHeader('')
      prev = current
    }

    window.addEventListener('scroll', fixedHeaderOnScrollUp)
    return () => window.removeEventListener('scroll', fixedHeaderOnScrollUp)
  })

  return (
    <S.Wrapper className={fixedHeader}>
      <S.IconWrapper>
        <Menu title='Abrir menu' onClick={() => setShowMobileMenu(true)} />
      </S.IconWrapper>
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

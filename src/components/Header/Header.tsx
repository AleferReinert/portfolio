import { SocialItemProps } from 'components/Social/Social'
import { useEffect, useState } from 'react'
import { Menu as MenuIcon } from '@styled-icons/feather'
import NavMenu, { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import Switch from 'components/Switch/Switch'
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
    <S.Wrapper>
      <S.Fixed className={fixedHeader}>
        <S.SwitchWrapper>
          <Switch />
        </S.SwitchWrapper>

        <S.IconWrapper>
          <MenuIcon
            title='Abrir menu'
            onClick={() => setShowMobileMenu(true)}
          />
        </S.IconWrapper>

        <S.MenuDesktop>
          <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} />
        </S.MenuDesktop>
      </S.Fixed>

      <MenuMobile
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        socials={socials}
        menu={menu}
      />
    </S.Wrapper>
  )
}

export default Header

import { SocialItemProps } from 'components/Social/Social'
import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import { Menu } from '@styled-icons/feather'
import NavMenu, { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import * as S from './Header.styles'
import Switch from 'components/Switch/Switch'

type HeaderProps = {
  menu: NavMenuItemProps[]
  socials: SocialItemProps[]
  toggleTheme: () => void
}

const Header = ({ menu, socials, toggleTheme }: HeaderProps) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [fixedHeader, setFixedHeader] = useState('fixed')
  const theme = useTheme()

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
      <S.SwitchWrapper>
        <Switch toggleTheme={toggleTheme} theme={theme.title} />
      </S.SwitchWrapper>
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

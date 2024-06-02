import { X as CloseIcon } from '@styled-icons/feather/X'
import NavMenu, { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import Social, { SocialItemProps } from 'components/Social/Social'
import type { Dispatch, SetStateAction } from 'react'
import * as S from './MenuMobile.styles'

export interface MenuMobileProps {
  showMobileMenu: boolean
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>
  menu: NavMenuItemProps[]
  socials: SocialItemProps[]
}

const MenuMobile = ({
  showMobileMenu,
  setShowMobileMenu,
  menu,
  socials
}: MenuMobileProps) => {
  return (
    <S.Wrapper showMobileMenu={showMobileMenu}>
      <S.IconWrapper>
        <CloseIcon title='Fechar' onClick={() => setShowMobileMenu(false)} />
      </S.IconWrapper>
      <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} />
      <Social socials={socials} />
    </S.Wrapper>
  )
}

export default MenuMobile

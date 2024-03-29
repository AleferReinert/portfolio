import type { Dispatch, SetStateAction } from 'react'
import { X } from '@styled-icons/feather'
import NavMenu, { NavMenuItemProps } from 'components/NavMenu/NavMenu'
import Social, { SocialItemProps } from 'components/Social/Social'
import * as S from './MenuMobile.styles'

export type MenuMobileProps = {
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
        <X title='Fechar menu' onClick={() => setShowMobileMenu(false)} />
      </S.IconWrapper>
      <NavMenu menu={menu} setShowMobileMenu={setShowMobileMenu} />
      <Social socials={socials} />
    </S.Wrapper>
  )
}

export default MenuMobile

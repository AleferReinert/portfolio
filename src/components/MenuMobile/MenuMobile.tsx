import type { Dispatch, SetStateAction } from 'react'
import NavMenu from 'components/NavMenu/NavMenu'
import * as S from './MenuMobile.styles'

type MenuMobileProps = {
  menuMobile: boolean
  setMenuMobile: Dispatch<SetStateAction<boolean>>
}

const MenuMobile = ({ menuMobile, setMenuMobile }: MenuMobileProps) => {
  return (
    <S.Wrapper aria-hidden={!menuMobile} data-testid='menuMobile'>
      <S.CloseMenu title='Fechar menu' onClick={() => setMenuMobile(false)}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
        </svg>
      </S.CloseMenu>
      <NavMenu />
    </S.Wrapper>
  )
}

export default MenuMobile

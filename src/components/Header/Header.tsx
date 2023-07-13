import { useState } from 'react'
import MenuMobile from 'components/MenuMobile/MenuMobile'
import NavMenu from 'components/NavMenu/NavMenu'
import * as S from './Header.styles'

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <S.Wrapper>
      <S.OpenMenuButton title='Abrir menu' onClick={() => setMenuMobile(true)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
        </svg>
      </S.OpenMenuButton>
      <MenuMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
      <S.MenuDesktop>
        <NavMenu />
      </S.MenuDesktop>
    </S.Wrapper>
  )
}

export default Header

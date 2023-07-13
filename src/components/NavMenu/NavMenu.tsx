import Link from 'next/link'
import * as S from './NavMenu.styles'

const NavMenu = () => {
  return (
    <S.Wrapper>
      <Link href='#about'>sobre mim</Link>
      <Link href='#certificates-skills'>certificados e skills</Link>
      <Link href='#projects'>projetos</Link>
    </S.Wrapper>
  )
}

export default NavMenu

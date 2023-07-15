import Link from 'next/link'
import * as S from './NavMenu.styles'

const NavMenu = () => {
  return (
    <S.Wrapper>
      <Link href='#about'>Sobre mim</Link>
      <Link href='#projects'>Projetos</Link>
      <Link href='#certificates'>Certificados</Link>
      <Link href='#skills'>Skills</Link>
    </S.Wrapper>
  )
}

export default NavMenu

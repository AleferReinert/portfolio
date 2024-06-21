import Header from 'components/Header/Header'
import Social from 'components/Social/Social'
import { menu, social } from 'content/content'
import Head from 'next/head'
import { ReactNode } from 'react'
import * as S from './Layout.styles'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Portfólio | Alefer Reinert - Desenvolvedor Front-end</title>
      </Head>
      <Header menu={menu} socials={social} />
      <S.Wrapper>
        <S.Main>{children}</S.Main>
        <S.SocialWrapper>
          <Social socials={social} />
        </S.SocialWrapper>
      </S.Wrapper>
    </>
  )
}

export default Layout

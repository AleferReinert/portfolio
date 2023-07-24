import {
  certificates,
  projects,
  skills,
  social,
  about,
  menu
} from 'content/content'
import About from 'components/About/About'
import Certificates from 'components/Certificates/Certificates'
import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import Heading from 'components/Heading/Heading'
import Head from 'next/head'
import Projects from 'components/Projects/Projects'
import Skills from 'components/Skills/Skills'
import Social from 'components/Social/Social'
import * as S from 'styles/home'

export type ThemeProps = {
  toggleTheme: () => void
  theme: string
}

export default function Home({ toggleTheme, theme }: ThemeProps) {
  return (
    <>
      <Head>
        <title>Alefer Reinert - Desenvolvedor Front End</title>
      </Head>
      <Header
        menu={menu}
        socials={social}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <S.Wrapper>
        <S.Main>
          <S.Section id='about'>
            <Container>
              <About {...about} />
            </Container>
          </S.Section>

          <S.Section id='projects'>
            <Container>
              <Heading>Projetos</Heading>
              <Projects projects={projects} />
            </Container>
          </S.Section>

          <S.Section id='certificates'>
            <Container>
              <Heading>Certificados</Heading>
              <Certificates certificates={certificates} />
            </Container>
          </S.Section>

          <S.Section id='skills'>
            <Container>
              <Heading>Habilidades</Heading>
              <Skills skills={skills} />
            </Container>
          </S.Section>
        </S.Main>
        <S.SocialWrapper>
          <Social socials={social} />
        </S.SocialWrapper>
      </S.Wrapper>
    </>
  )
}

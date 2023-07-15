import { certificates, projects, skills, social, about } from 'content/content'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Alefer Reinert - Desenvolvedor Front End</title>
      </Head>
      <Header />
      <S.Wrapper>
        <S.Main>
          <S.Section>
            <Container>
              <About {...about} />
            </Container>
          </S.Section>

          <S.Section>
            <Container>
              <Heading>Projetos</Heading>
              <Projects projects={projects} />
            </Container>
          </S.Section>

          <S.Section>
            <Container>
              <Heading>Certificados</Heading>
              <Certificates certificates={certificates} />
            </Container>
          </S.Section>

          <S.Section>
            <Container>
              <Heading>Skills</Heading>
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

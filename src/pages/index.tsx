import About from 'components/About/About'
import Certificates from 'components/Certificates/Certificates'
import Container from 'components/Container/Container'
import Header from 'components/Header/Header'
import Heading from 'components/Heading/Heading'
import Projects from 'components/Projects/Projects'
import Skills from 'components/Skills/Skills'
import Social from 'components/Social/Social'
import {
  about,
  certificates,
  menu,
  projects,
  skills,
  social
} from 'content/content'
import Head from 'next/head'
import * as S from 'styles/home'
import schema from '../../public/schema.json'

export default function Home() {
  return (
    <>
      <Head>
        <script type='application/ld+json'>{JSON.stringify(schema)}</script>
        <title>Portfólio | Alefer Reinert - Desenvolvedor Front-end</title>
      </Head>
      <Header menu={menu} socials={social} />
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
          {/* <S.Footer>Desenvolvido em 2023.</S.Footer> */}
        </S.Main>
        <S.SocialWrapper>
          <Social socials={social} />
        </S.SocialWrapper>
      </S.Wrapper>
    </>
  )
}

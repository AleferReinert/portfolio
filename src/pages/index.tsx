import About from 'components/About/About'
import Certificates from 'components/Certificates/Certificates'
import Container from 'components/Container/Container'
import Heading from 'components/Heading/Heading'
import Layout from 'components/Layout/Layout'
import Projects from 'components/Projects/Projects'
import Skills from 'components/Skills/Skills'
import { about, certificates, projects, skills } from 'content/content'
import * as S from './home/Home.styles'

export default function Home() {
  return (
    <Layout>
      <S.Wrapper>
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
      </S.Wrapper>
    </Layout>
  )
}

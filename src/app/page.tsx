import {
  about,
  certificates,
  menu,
  projects,
  skills,
  social
} from 'app/content'
import { About } from 'components/About/About'
import { Certificates } from 'components/Certificates/Certificates'
import { Container } from 'components/Container/Container'
import { Header } from 'components/Header/Header'
import { Heading } from 'components/Heading/Heading'
import { Projects } from 'components/Projects/Projects'
import { Skills } from 'components/Skills/Skills'
import { Social } from 'components/Social/Social'
import { formatPhone } from 'utils/helpers'

export default function Page() {
  return (
    <>
      <Header menu={menu} />
      <div className='lg:gap-20 lg:px-20 xl:justify-center xl:gap-20 xl:max-w-6xl mx-auto'>
        <main className='pb-6'>
          <Container className='flex flex-col gap-12 md:gap-16 lg:mx-0 '>
            <section id='about'>
              <About {...about} />
            </section>

            <section id='projects'>
              <Heading>Projetos</Heading>
              <Projects projects={projects} />
            </section>

            <section id='certificates'>
              <Heading>Certificados</Heading>
              <Certificates certificates={certificates} />
            </section>

            <section id='skills'>
              <Heading>Habilidades</Heading>
              <Skills skills={skills} />
            </section>

            <section id='contact'>
              <Heading>Contato</Heading>
              <div className='flex flex-col sm:flex-row sm:justify-between sm:items-end'>
                <p className='mb-6 sm:mb-0 [&>span]:font-medium [&>a:hover]:text-cyan-950 dark:[&>a:hover]:text-green-400 [&>a]:transition'>
                  <span>Tel: </span>
                  <a href={`tel:${about.phone}`}>{formatPhone(about.phone)}</a>
                  <br />
                  <span>E-mail: </span>
                  <a href={`mailto:${about.email}`}>{about.email}</a>
                </p>
                <Social
                  socials={social.filter((item) => item.name !== 'E-mail')}
                />
              </div>
            </section>
          </Container>
        </main>
      </div>
    </>
  )
}

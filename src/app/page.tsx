import { about, certificates, menu, projects, skills, socials } from 'app/content'
import { About } from 'components/About/About'
import { Certificates } from 'components/Certificates/Certificates'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Projects } from 'components/Projects/Projects'
import { Skills } from 'components/Skills/Skills'

export default function Page() {
  return (
    <>
      <Header menu={menu} />
      <main>
        <About {...about} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <Certificates certificates={certificates} />
      </main>
      <Footer phone={about.phone} email={about.email} socials={socials} />
    </>
  )
}

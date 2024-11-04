'use client'
import { about, certificates, menu, projects, skills, socials } from 'app/content'
import { About } from 'components/About/About'
import { Certificates } from 'components/Certificates/Certificates'
import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Projects } from 'components/Projects/Projects'
import { Skills } from 'components/Skills/Skills'
import { useEffect } from 'react'

export default function Page() {
  // Realiza o scroll para a seção correta ao atualizar a página
  useEffect(() => {
    const hash = window.location.hash
    const offsetTop = document.getElementById(hash.replace('#', ''))?.offsetTop
    window.scrollTo({ top: hash ? offsetTop : 0, behavior: 'instant' })
  }, [])

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

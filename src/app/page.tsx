'use client'
import { about, certificates, menu, projects, skills, socials } from 'app/content'
import { Header } from 'components/Header/Header'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const DynamicAbout = dynamic(() => import('components/About/About').then((mod) => mod.About))
const DynamicProjects = dynamic(() => import('components/Projects/Projects').then((mod) => mod.Projects))
const DynamicSkills = dynamic(() => import('components/Skills/Skills').then((mod) => mod.Skills))
const DynamicCertificates = dynamic(() =>
  import('components/Certificates/Certificates').then((mod) => mod.Certificates)
)
const DynamicFooter = dynamic(() => import('components/Footer/Footer').then((mod) => mod.Footer))

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
        <DynamicAbout {...about} />
        <DynamicProjects projects={projects} />
        <DynamicSkills skills={skills} />
        <DynamicCertificates certificates={certificates} />
      </main>
      <DynamicFooter phone={about.phone} email={about.email} socials={socials} />
    </>
  )
}

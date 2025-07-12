'use client'
import { Header } from 'components/Header/Header'
import { about } from 'content/about'
import { certificates } from 'content/certificates'
import { projects } from 'content/projects'
import { skills } from 'content/skills'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { scrollToSection } from 'utils/scrollToSection'

const DynamicAbout = dynamic(() => import('components/About/About').then(mod => mod.About))
const DynamicProjects = dynamic(() => import('components/Projects/Projects').then(mod => mod.Projects))
const DynamicSkills = dynamic(() => import('components/Skills/Skills').then(mod => mod.Skills))
const DynamicCertificates = dynamic(() => import('components/Certificates/Certificates').then(mod => mod.Certificates))
const DynamicFooter = dynamic(() => import('components/Footer/Footer').then(mod => mod.Footer))

export default function Page() {
  useEffect(() => scrollToSection(), [])

  return (
    <>
      <Header github={about.socialLinks.find(link => link.name === 'GitHub')} />
      <main>
        <DynamicAbout {...about} />
        <DynamicProjects projects={projects} />
        <DynamicSkills skills={skills} />
        <DynamicCertificates certificates={certificates} />
      </main>
      <DynamicFooter phone={about.phone} email={about.email} socials={about.socialLinks} />
    </>
  )
}

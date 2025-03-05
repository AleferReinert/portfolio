'use client'
import { Filter } from 'components/Filter/Filter'
import { ProjectProps } from 'components/Project/Project'
import { Section } from 'components/Section/Section'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { IoFilter } from 'react-icons/io5'
const DynamicProject = dynamic(() => import('components/Project/Project').then((mod) => mod.Project))

interface ProjectsProps {
  projects: Omit<ProjectProps, 'index'>[]
}

export function Projects({ projects }: ProjectsProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const allSkills = Array.from(new Set(projects.flatMap((project) => project.skills.split(' ')))).sort()

  // Retorna projetos que possuem todas skills selecionadas
  // Se nenhuma skill estiver selecionada, retorna todos
  const filteredProjects = projects.filter((project) => {
    if (selectedSkills.length > 0) {
      return selectedSkills.every((skill) => project.skills.split(' ').includes(skill))
    }
    return true
  })

  return (
    <Section
      id='projects'
      title={
        <div className='flex justify-between'>
          Projetos
          <button
            title={showFilters ? 'Ocultar filtros' : 'Exibir filtros'}
            onClick={() => setShowFilters(!showFilters)}
          >
            <IoFilter
              className={`size-6 ${selectedSkills.length > 0 ? 'fill-primary-theme ' : 'fill-paragraph-theme transition hover:fill-primary-theme'}`}
            />
          </button>
        </div>
      }
    >
      <Filter
        showFilters={showFilters}
        skills={allSkills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
        filteredProjects={filteredProjects}
        projects={projects}
      />

      {filteredProjects.length > 0 ? (
        <ul className='flex flex-col gap-6'>
          {filteredProjects.map((project, index) => {
            project.lazy = index === 0 || false // Desativa lazy loading para o primeiro elemento
            return <DynamicProject key={index} {...project} index={index} />
          })}
        </ul>
      ) : (
        <p>Nenhum projeto encontrado contendo todos os filtros selecionados.</p>
      )}
    </Section>
  )
}

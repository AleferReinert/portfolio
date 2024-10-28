'use client'
import { Container } from 'components/Container/Container'
import { Filter } from 'components/Filter/Filter'
import { Heading } from 'components/Heading/Heading'
import { Project, ProjectProps } from 'components/Project/Project'
import { useState } from 'react'
import { IoFilter } from 'react-icons/io5'

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
    <section id='projects'>
      <Container>
        <Heading className='flex justify-between'>
          Projetos
          <button
            title={showFilters ? 'Ocultar filtros' : 'Exibir filtros'}
            onClick={() => setShowFilters(!showFilters)}
          >
            <IoFilter
              className={`size-6 ${selectedSkills.length > 0 ? 'fill-primary-theme ' : 'fill-paragraph-theme '}`}
            />
          </button>
        </Heading>

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
              return <Project key={index} {...project} index={index} />
            })}
          </ul>
        ) : (
          <p>Nenhum projeto encontrado contendo todos os filtros selecionados.</p>
        )}
      </Container>
    </section>
  )
}

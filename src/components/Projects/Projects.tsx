'use client'
import { Filter } from 'components/Filter/Filter'
import { ProjectProps } from 'components/Project/Project'
import { Section } from 'components/Section/Section'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import { IoFilter } from 'react-icons/io5'
const DynamicProject = dynamic(() => import('components/Project/Project').then((mod) => mod.Project))

interface ProjectsProps {
  projects: Omit<ProjectProps, 'index'>[]
}

export function Projects({ projects }: ProjectsProps) {
  const [showFilters, setShowFilters] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const allSkills = useMemo(() => {
    return Array.from(new Set(projects.flatMap((project) => project.skills))).sort()
  }, [projects])

  // Returns projects that have all skills checked
  // If no skill are checked, return all
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (selectedSkills.length) {
        return selectedSkills.every((skill) => project.skills.includes(skill))
      }
      return true
    })
  }, [projects, selectedSkills])

  return (
    <Section
      isFirst
      id='projects'
      title={
        <div className='flex justify-between'>
          Projetos
          <button
            title={showFilters ? 'Ocultar filtros' : 'Exibir filtros'}
            onClick={() => setShowFilters(!showFilters)}
            className='relative'
          >
            <span
              data-testid='FilterBadge'
              title={
                selectedSkills.length > 1
                  ? `${selectedSkills.length} filtros selecionados`
                  : selectedSkills.length === 1
                    ? '1 filtro selecionado'
                    : ''
              }
              aria-hidden={selectedSkills.length === 0}
              className={`${selectedSkills.length > 0 ? 'scale-100' : 'scale-0'} transition-all ease-in-out rounded-full size-4 bg-primary-theme absolute font-bold leading-4 -top-0.5 -right-1.5 text-black text-center text-xs`}
            >
              <span className='translate-x-[1px]'>{selectedSkills.length}</span>
            </span>
            <IoFilter className={'size-6 fill-paragraph-theme transition hover:fill-primary-theme'} />
          </button>
        </div>
      }
    >
      <Filter
        showFilters={showFilters}
        skills={allSkills}
        selectedSkills={selectedSkills}
        setSelectedSkills={setSelectedSkills}
      />

      <div
        className={`${selectedSkills.length > 0 ? 'max-h-10 opacity-100 transition-all duration-300' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className='pb-4 flex justify-between text-sm gap-2'>
          <p>
            {filteredProjects.length > 0
              ? `Exibindo ${filteredProjects.length} de ${projects.length} projetos.`
              : 'Nenhum projeto encontrado contendo todos os filtros selecionados.'}
          </p>
          <button
            disabled={selectedSkills.length === 0}
            onClick={() => setSelectedSkills([])}
            className='text-primary-theme ml-auto disabled:hidden transition hover:scale-95'
          >
            Limpar
          </button>
        </div>
      </div>

      <ul className='flex flex-col gap-6'>
        {filteredProjects.map((project, index) => {
          return <DynamicProject key={project.id} lazy={index === 0} {...project} index={index} />
        })}
      </ul>
    </Section>
  )
}

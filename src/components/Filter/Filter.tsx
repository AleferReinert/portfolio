import { ProjectProps } from 'components/Project/Project'
import { Dispatch, SetStateAction } from 'react'
import { FaCheck } from 'react-icons/fa6'

interface FilterProps {
  showFilters: boolean
  skills: string[]
  selectedSkills: string[]
  setSelectedSkills: Dispatch<SetStateAction<string[]>>
  filteredProjects: Omit<ProjectProps, 'index'>[]
  projects: Omit<ProjectProps, 'index'>[]
}

export function Filter({
  showFilters,
  skills,
  selectedSkills,
  setSelectedSkills,
  filteredProjects,
  projects
}: FilterProps) {
  // Remove a skill caso já exista, se não adiciona
  const updateSelectedSkills = (skill: string) => {
    setSelectedSkills((prevSelectedSkills) => {
      if (prevSelectedSkills.includes(skill)) {
        return prevSelectedSkills.filter((selectedSkill) => selectedSkill !== skill)
      } else {
        return [...prevSelectedSkills, skill]
      }
    })
  }

  return (
    <div
      data-testid='FilterComponent'
      className={`transition-all duration-500 overflow-hidden ${showFilters ? 'max-h-[352px] md:max-h-60 xl:max-h-48' : 'max-h-0'}`}
    >
      <div className='mb-6'>
        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1'>
          {skills.map((skill, index) => {
            const active = selectedSkills.includes(skill)

            return (
              <li key={index}>
                <label
                  className={`flex group gap-1 items-center text-sm normal-case cursor-pointer
										transition hover:text-primary-theme 
										${active ? 'font-medium text-primary-theme' : 'font text-paragraph-theme'}`}
                >
                  <div
                    className={`size-4 sm:size-3 border transition flex items-center justify-center group-hover:border-primary-theme 
										${active ? 'border-primary-theme' : 'border-paragraph-theme'}`}
                  >
                    {active && <FaCheck className='size-3 sm:size-2 fill-primary-theme' />}
                  </div>
                  <input
                    type='checkbox'
                    checked={active}
                    onChange={() => updateSelectedSkills(skill)}
                    className='size-0 overflow-hidden'
                  />
                  {skill}
                </label>
              </li>
            )
          })}
        </ul>

        <div className='flex justify-between overflow-hidden transition-all py-6 text-sm'>
          <p>{`Exibindo ${filteredProjects.length} de ${projects.length} projetos.`}</p>
          <button
            disabled={selectedSkills.length === 0}
            onClick={() => setSelectedSkills([])}
            className='text-primary-theme font-medium ml-auto disabled:hidden'
          >
            Limpar
          </button>
        </div>
      </div>
    </div>
  )
}

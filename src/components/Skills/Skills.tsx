import { IconType } from 'react-icons'

export interface SkillProps {
  title: string
  icon: IconType
  shortTitle?: string
}

interface SkillsProps {
  skills: SkillProps[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <ul className='grid grid-cols-[repeat(5,min-content)] gap-y-4 justify-between sm:grid-cols-[repeat(10,min-content)] sm:gap-y-6 lg:gap-y-10'>
      {skills.map((skill, index) => {
        const Icon = skill.icon

        return (
          <li
            key={index}
            title={skill.title}
            className='flex flex-col items-center gap-3'
          >
            <Icon aria-hidden className='size-8' />
            <h3 className='hidden text-sm leading-none font-normal text-center lg:block'>
              {skill.shortTitle ?? skill.title}
            </h3>
          </li>
        )
      })}
    </ul>
  )
}

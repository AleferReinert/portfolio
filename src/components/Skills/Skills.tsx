import { Section } from 'components/Section/Section'
import { Skill, SkillProps } from 'components/Skill/Skill'

interface SkillsProps {
  skills: Omit<SkillProps, 'index'>[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id='skills' title='Habilidades'>
      <ul className='grid grid-cols-3 gap-1 justify-between sm:grid-cols-6'>
        {skills.map((skill, index) => {
          return <Skill key={skill.title} {...skill} index={index} />
        })}
      </ul>
    </Section>
  )
}

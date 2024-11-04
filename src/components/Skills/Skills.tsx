import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { Skill, SkillProps } from 'components/Skill/Skill'

interface SkillsProps {
  skills: Omit<SkillProps, 'index'>[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id='skills'>
      <Container>
        <Heading>Habilidades</Heading>

        <ul className='grid grid-cols-3 gap-1 justify-between sm:grid-cols-6'>
          {skills.map((skill, index) => {
            return <Skill key={index} {...skill} index={index} />
          })}
        </ul>
      </Container>
    </section>
  )
}

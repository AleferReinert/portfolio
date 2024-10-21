import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { Skill, SkillProps } from 'components/Skill/Skill'

interface SkillsProps {
  skills: SkillProps[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id='skills'>
      <Container>
        <Heading>Habilidades</Heading>

        <ul className='grid grid-cols-[repeat(5,min-content)] gap-y-4 justify-between sm:grid-cols-[repeat(10,min-content)] sm:gap-y-6 lg:gap-y-10'>
          {skills.map((skill, index) => {
            return <Skill key={index} {...skill} />
          })}
        </ul>
      </Container>
    </section>
  )
}

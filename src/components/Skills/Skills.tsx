import Image from 'next/image'
import * as S from './Skills.styles'

type SkillProps = {
  title: string
  img: string
}

type SkillsProps = {
  skills: SkillProps[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <S.Wrapper role='list'>
      {skills.map((skill, index) => (
        <S.Skill key={index} role='listitem'>
          <S.ImageWrapper>
            <Image src={skill.img} alt='' fill />
          </S.ImageWrapper>
          <S.Title>{skill.title}</S.Title>
        </S.Skill>
      ))}
    </S.Wrapper>
  )
}

export default Skills

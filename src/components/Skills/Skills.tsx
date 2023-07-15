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
    <S.Wrapper>
      {skills.map((skill, index) => (
        <S.Skill key={index} title={skill.title}>
          <S.ImageWrapper>
            <Image src={skill.img} alt={skill.title} fill />
          </S.ImageWrapper>
          <S.Title>{skill.title}</S.Title>
        </S.Skill>
      ))}
    </S.Wrapper>
  )
}

export default Skills

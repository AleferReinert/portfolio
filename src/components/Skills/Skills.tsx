import { ReactNode } from 'react'
import * as S from './Skills.styles'

interface SkillProps {
  title: string
  icon: ReactNode
}

interface SkillsProps {
  skills: SkillProps[]
}

const Skills = ({ skills }: SkillsProps) => {
  return (
    <S.Wrapper role='list'>
      {skills.map((skill, index) => (
        <S.Skill key={index} role='listitem'>
          <S.IconWrapper>{skill.icon}</S.IconWrapper>
          <S.Title>{skill.title}</S.Title>
        </S.Skill>
      ))}
    </S.Wrapper>
  )
}

export default Skills

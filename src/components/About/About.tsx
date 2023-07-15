import { ReactNode } from 'react'
import * as S from './About.styles'

type AboutProps = {
  title: ReactNode
  description: ReactNode
}

const About = ({ title, description }: AboutProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description role='paragraph'>{description}</S.Description>
    </S.Wrapper>
  )
}

export default About

import * as S from './About.styles'

export interface AboutProps {
  name: string
  role: string
  description: string
}

const About = ({ name, role, description }: AboutProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.FirstLine>Olá, meu nome é </S.FirstLine>
        <S.Title>
          <S.Name>{name}</S.Name>
          <S.Role>{role}</S.Role>
        </S.Title>
      </S.TitleWrapper>
      <S.Subtitle>Sobre mim</S.Subtitle>
      <S.Description
        role='paragraph'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </S.Wrapper>
  )
}

export default About

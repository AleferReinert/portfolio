import * as S from './About.styles'

interface AboutProps {
  name: string
  role: string
  description: string
}

const About = ({ name, role, description }: AboutProps) => {
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>
          <S.FirstLine>Olá, meu nome é</S.FirstLine>
          <S.Name>{name}</S.Name>
        </S.Title>
        <S.Role>{role}</S.Role>
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

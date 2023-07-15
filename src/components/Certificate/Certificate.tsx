import * as S from './Certificate.styles'

export type CertificateProps = {
  title: string
  description: string
  link?: string
}

const Certificate = ({ title, description, link }: CertificateProps) => {
  const asLink = !!link && {
    href: link,
    as: 'a',
    title: 'Visualizar certificado',
    target: '_blank'
  }

  return (
    <S.Wrapper {...asLink}>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Certificate

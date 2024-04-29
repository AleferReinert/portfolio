import Link from 'next/link'
import * as S from './Certificate.styles'

export interface CertificateProps {
  title: string
  organization: string
  conclusionDate: string
  link?: string
}

const Certificate = ({
  title,
  organization,
  conclusionDate,
  link
}: CertificateProps) => {
  const content = (
    <>
      <S.Title>{title}</S.Title>
      <S.Description role='paragraph'>
        {organization} | {conclusionDate}
      </S.Description>
    </>
  )

  const contentWithLink = (
    <>
      <Link title='Visualizar certificado' href={link!} target='_blank'>
        {content}
      </Link>
    </>
  )

  return (
    <S.Wrapper role='listitem'>{link ? contentWithLink : content}</S.Wrapper>
  )
}

export default Certificate

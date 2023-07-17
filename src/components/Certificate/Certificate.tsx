import Link from 'next/link'
import * as S from './Certificate.styles'

export type CertificateProps = {
  title: string
  description: string
  link?: string
}

const Certificate = ({ title, description, link }: CertificateProps) => {
  return (
    <S.Wrapper role='listitem'>
      {link ? (
        <Link href={link} title='Visualizar certificado' target='_blank'>
          <S.Title>{title}</S.Title>
          <S.Description role='paragraph'>{description}</S.Description>
        </Link>
      ) : (
        <>
          <S.Title>{title}</S.Title>
          <S.Description role='paragraph'>{description}</S.Description>
        </>
      )}
    </S.Wrapper>
  )
}

export default Certificate

import Certificate, {
  CertificateProps
} from 'components/Certificate/Certificate'
import * as S from './Certificates.styles'

type CertificatesProps = {
  certificates: CertificateProps[]
}

const Certificates = ({ certificates }: CertificatesProps) => {
  return (
    <S.Wrapper>
      {certificates.map((certificate, index) => (
        <Certificate key={index} {...certificate} />
      ))}
    </S.Wrapper>
  )
}

export default Certificates

import {
  Certificate,
  CertificateProps
} from 'components/Certificate/Certificate'

interface CertificatesProps {
  certificates: CertificateProps[]
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <ul className='flex flex-col gap-4 md:grid md:grid-cols-2'>
      {certificates.map((certificate, index) => (
        <Certificate key={index} {...certificate} />
      ))}
    </ul>
  )
}

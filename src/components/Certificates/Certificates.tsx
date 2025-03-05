import { Certificate, CertificateProps } from 'components/Certificate/Certificate'
import { Section } from 'components/Section/Section'

interface CertificatesProps {
  certificates: Omit<CertificateProps, 'index'>[]
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <Section id='certificates' title='Certificados'>
      <ul className='flex flex-col gap-4 md:grid md:grid-cols-2'>
        {certificates.map((certificate, index) => (
          <Certificate key={index} {...certificate} index={index} />
        ))}
      </ul>
    </Section>
  )
}

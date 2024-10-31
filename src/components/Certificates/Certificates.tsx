import { Certificate, CertificateProps } from 'components/Certificate/Certificate'
import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'

interface CertificatesProps {
  certificates: Omit<CertificateProps, 'index'>[]
}

export function Certificates({ certificates }: CertificatesProps) {
  return (
    <section id='certificates'>
      <Container>
        <Heading>Certificados</Heading>
        <ul className='flex flex-col gap-4 md:grid md:grid-cols-2'>
          {certificates.map((certificate, index) => (
            <Certificate key={index} {...certificate} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

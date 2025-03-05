import { Container } from 'components/Container/Container'
import { Heading } from 'components/Heading/Heading'
import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title?: ReactNode
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className='pb-12 md:pb-16'>
      <Container>
        {title && <Heading>{title}</Heading>}
        {children}
      </Container>
    </section>
  )
}

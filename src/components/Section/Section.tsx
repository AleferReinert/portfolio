import { Container } from 'components/Container/Container'
import { Heading, HeadingProps } from 'components/Heading/Heading'
import { ReactNode } from 'react'

interface SectionProps extends Pick<HeadingProps, 'isFirst'> {
  id: string
  title?: ReactNode
  children: ReactNode
}

export function Section({ id, title, children, isFirst }: SectionProps) {
  return (
    <section id={id} className='pb-6 md:pb-10'>
      <Container>
        {title && <Heading isFirst={isFirst}>{title}</Heading>}
        {children}
      </Container>
    </section>
  )
}

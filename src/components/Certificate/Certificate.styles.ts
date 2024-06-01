import styled from 'styled-components'

export const Wrapper = styled.div`
  &:hover h3 {
    color: var(--color-primary);
  }
`

export const Title = styled.h3`
  font-size: var(--font-sm);
  font-weight: var(--font-regular);
  color: var(--color-primary);
  transition: all var(--transition-duration-default) var(--transition-effect);
`

export const Description = styled.p`
  font-size: var(--font-sm);
`

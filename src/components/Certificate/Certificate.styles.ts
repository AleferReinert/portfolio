import styled from 'styled-components'

export const Wrapper = styled.div`
  &:first-child {
    grid-column: 1/3;
  }
`

export const Title = styled.h3`
  color: var(--color-primary);
  font-size: var(--font-medium);
  font-weight: var(--font-bold);
  margin-top: calc(var(--spacing-xxsmall) * -1);
  margin-bottom: var(--spacing-xxsmall);
`

export const Description = styled.p`
  font-size: var(--font-small);
`

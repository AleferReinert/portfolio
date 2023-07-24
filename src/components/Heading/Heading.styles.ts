import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.h2`
  color: var(--color-heading);
  font-size: var(--font-xlarge);
  font-weight: var(--font-bold);
  padding-bottom: var(--spacing-xsmall);
  border-bottom: 0.1rem solid var(--color-primary);
  margin-bottom: var(--spacing-xlarge);

  @media (min-width: ${breakpoints.small}) {
    font-size: var(--font-xxlarge);
    padding-bottom: var(--spacing-small);
    margin-bottom: var(--spacing-xlarge);
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: var(--font-huge);
    margin-bottom: var(--spacing-xxlarge);
  }
`

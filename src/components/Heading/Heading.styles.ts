import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.h2`
  color: var(--color-heading);
  font-size: var(--spacing-xl);
  font-weight: var(--font-bold);
  padding-bottom: var(--spacing-xs);
  border-bottom: 0.1rem solid var(--color-primary);
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.small}) {
    font-size: var(--font-xxl);
    padding-bottom: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: var(--font-huge);
    margin-bottom: var(--spacing-xxl);
  }
`

import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.h2`
  color: var(--color-heading);
  font-size: var(--font-xl);
  font-weight: var(--font-bold);
  padding-bottom: var(--spacing-sm);
  border-bottom: 0.2rem solid var(--color-heading);
  margin-bottom: var(--spacing-md);
  display: inline-block;

  @media (min-width: ${breakpoints.small}) {
    display: block;
    font-size: var(--font-xxl);
    padding-bottom: var(--spacing-sm);
    margin-bottom: var(--spacing-xxl);
    border-bottom-width: 0.1rem;
  }

  @media (min-width: ${breakpoints.medium}) {
    font-size: var(--font-huge);
  }
`

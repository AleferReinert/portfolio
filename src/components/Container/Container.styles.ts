import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  margin: 0 var(--spacing-sm);

  @media (min-width: ${breakpoints.small}) {
    margin: 0 var(--spacing-md);
  }

  @media (min-width: ${breakpoints.medium}) {
    max-width: none;
    margin: 0;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 100rem;
  }
`

import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);

  @media (min-width: ${breakpoints.small}) {
    display: grid;
    grid-template-columns: auto max-content;
  }

  @media (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

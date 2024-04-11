import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);

  @media (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
  }
`

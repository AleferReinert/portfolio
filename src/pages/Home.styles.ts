import styled from 'styled-components'
import { breakpoints } from '../styles/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);

  @media (min-width: ${breakpoints.small}) {
    gap: var(--spacing-huge);
  }
`

export const Section = styled.section``

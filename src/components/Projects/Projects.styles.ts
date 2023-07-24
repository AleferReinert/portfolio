import { breakpoints } from 'styles/global'
import styled from 'styled-components'
import * as ProjectStyles from 'components/Project/Project.styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-medium);

  @media (min-width: ${breakpoints.small}) {
    ${ProjectStyles.Wrapper}:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`

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

    /* ${ProjectStyles.Wrapper}:nth-child(1) img {
      background-color: #060729;
    }

    ${ProjectStyles.Wrapper}:nth-child(2) img {
      background-color: #d0ecf5;
    }

    ${ProjectStyles.Wrapper}:nth-child(3) img {
      background-color: #002737;
    }

    ${ProjectStyles.Wrapper}:nth-child(4) img {
      background-color: #002737;
    }

    ${ProjectStyles.Wrapper}:nth-child(5) img {
      background-color: #002737;
    } */
  }
`

import styled, { css } from 'styled-components'
import * as ProjectStyles from 'components/Project/Project.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);

    @media (min-width: ${theme.breakpoints.small}) {
      ${ProjectStyles.Wrapper}:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  `}
`

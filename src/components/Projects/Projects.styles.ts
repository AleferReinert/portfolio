import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'
import * as ProjectStyles from 'components/Project/Project.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      ${ProjectStyles.Wrapper}:nth-child(even) {
        flex-direction: row-reverse;
      }
    }
  `}
`

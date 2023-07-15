import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 ${theme.spacings.small};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      margin: 0 ${theme.spacings.medium};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      max-width: none;
      margin: 0;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
      max-width: 100rem;
    }
  `}
`

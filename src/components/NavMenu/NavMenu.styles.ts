import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    text-align: center;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weights.light};

    a {
      transition: color ${theme.transition.duration.default}
        ${theme.transition.effect};

      &:hover {
        color: ${theme.colors.primary};
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      flex-direction: row;
      font-size: ${theme.font.sizes.xsmall};
      gap: ${theme.spacings.large};
    }
  `}
`

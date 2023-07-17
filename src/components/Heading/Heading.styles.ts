import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weights.bold};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 0.1rem solid ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xlarge};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      font-size: ${theme.font.sizes.xxlarge};
      padding-bottom: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xlarge};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      font-size: ${theme.font.sizes.huge};
      margin-bottom: ${theme.spacings.xxlarge};
    }
  `}
`

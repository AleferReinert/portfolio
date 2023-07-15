import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weights.extraBold};
    margin-bottom: ${theme.spacings.medium};

    > span {
      display: block;

      &:first-child {
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.weights.light};
      }

      span {
        color: ${theme.colors.primary};
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      font-size: ${theme.font.sizes.xxlarge};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      font-size: ${theme.font.sizes.huge};
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    p {
      &::first-letter {
        margin-left: ${theme.spacings.medium};
      }

      + p {
        margin-top: ${theme.spacings.medium};
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      max-width: 68rem;
    }
  `}
`

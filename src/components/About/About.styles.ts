import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      margin-bottom: ${theme.spacings.huge};
      margin-top: ${theme.spacings.large};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
  `}
`

export const FirstLine = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weights.light};
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.weights.extraBold};
    margin-bottom: ${theme.spacings.xsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      font-size: calc(${theme.font.sizes.huge} * 1.4);
    }
  `}
`

export const Role = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xlarge};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.heading};
    font-size: ${theme.font.sizes.xxlarge};

    ${cssMediaQuery.lessThan(theme.breakpoints.small)} {
      display: none;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};

    p::first-letter {
      margin-left: ${theme.spacings.medium};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      text-align: center;
      max-width: 80rem;
      margin: ${theme.spacings.xlarge} auto;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

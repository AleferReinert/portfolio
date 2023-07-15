import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weights.bold};
    margin-top: -${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`

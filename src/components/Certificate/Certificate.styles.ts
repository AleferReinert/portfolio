import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weights.bold};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.medium};
  `}
`

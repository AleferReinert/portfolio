import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.weights.bold};
    padding-bottom: ${theme.spacings.small};
    border-bottom: 0.1rem solid ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`

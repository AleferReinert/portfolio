import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #fff;
    border-radius: ${theme.radius};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    max-width: 15rem;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 5rem;
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    max-width: 96rem;
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    a {
      transition: color ${theme.transition.default};
      color: ${theme.colors.gray};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`

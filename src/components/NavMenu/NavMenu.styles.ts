import styled, { css } from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-medium);
    text-align: center;
    font-size: var(--font-large);
    font-weight: var(--font-light);

    a {
      transition: color var(--transition-duration-default)
        var(--transition-effect);

      &:hover {
        color: ${theme.colors.primary};
      }
    }

    @media (min-width: ${breakpoints.small}) {
      flex-direction: row;
      font-size: var(--font-xsmall);
      gap: var(--spacing-large);
    }
  `}
`

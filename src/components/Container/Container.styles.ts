import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 0 var(--spacing-small);

    @media (min-width: ${theme.breakpoints.small}) {
      margin: 0 var(--spacing-medium);
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      max-width: none;
      margin: 0;
    }

    @media (min-width: ${theme.breakpoints.large}) {
      max-width: 100rem;
    }
  `}
`

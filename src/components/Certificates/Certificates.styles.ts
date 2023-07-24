import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-large);

    @media (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      justify-content: space-between;
    }
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
    font-size: var(--font-xlarge);
    font-weight: var(--font-bold);
    padding-bottom: var(--spacing-xsmall);
    border-bottom: 0.1rem solid ${theme.colors.primary};
    margin-bottom: var(--spacing-xlarge);

    @media (min-width: ${theme.breakpoints.small}) {
      font-size: var(--font-xxlarge);
      padding-bottom: var(--spacing-small);
      margin-bottom: var(--spacing-xlarge);
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      font-size: var(--font-huge);
      margin-bottom: var(--spacing-xxlarge);
    }
  `}
`

import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: var(--font-medium);
    font-weight: var(--font-bold);
    margin-top: -var(--spacing-xxsmall);
    margin-bottom: var(--spacing-xxsmall);
  `}
`

export const Description = styled.p`
  font-size: var(--font-small);
`

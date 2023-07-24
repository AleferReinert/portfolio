import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: var(--spacing-xlarge);

    @media (min-width: ${theme.breakpoints.small}) {
      margin-bottom: var(--spacing-huge);
      margin-top: var(--spacing-large);
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.heading};
  `}
`

export const FirstLine = styled.div`
  font-size: var(--font-large);
  font-weight: var(--font-light);
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-size: var(--font-huge);
    font-weight: var(--font-extraBold);
    margin-bottom: var(--spacing-xsmall);

    @media (min-width: ${theme.breakpoints.small}) {
      font-size: calc(var(--font-huge) * 1.4);
    }
  `}
`

export const Role = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: var(--font-small);
    margin-bottom: var(--spacing-xlarge);

    @media (min-width: ${theme.breakpoints.small}) {
      font-size: var(--font-medium);
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.heading};
    font-size: var(--font-xxlarge);

    @media (max-width: calc(var(--breakpoint-small) -1)) {
      display: none;
    }
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-large);

    p::first-letter {
      margin-left: var(--spacing-medium);
    }

    @media (min-width: ${theme.breakpoints.small}) {
      text-align: center;
      max-width: 80rem;
      margin: var(--spacing-xlarge) auto;
      font-size: var(--font-medium);
    }
  `}
`

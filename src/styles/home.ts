import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.medium}) {
      display: grid;
      grid-template-columns: max-content auto;
      gap: var(--spacing-huge);
      padding: 0 var(--spacing-huge);
    }

    @media (min-width: ${theme.breakpoints.large}) {
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: center;
      gap: var(--spacing-huge);
    }
  `}
`

export const Main = styled.main`
  order: 2;
`

export const Section = styled.section`
  ${({ theme }) => css`
    padding-top: var(--spacing-xxlarge);

    &:last-child {
      padding-bottom: var(--spacing-huge);
    }

    @media (max-width: calc(var(--breakpoint-small) -1)) {
      &:first-child {
        padding-top: var(--spacing-small);
      }
    }

    @media (min-width: ${theme.breakpoints.small}) {
      padding-top: var(--spacing-huge);

      &:last-child {
        padding-bottom: 0;
      }
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      &:last-child {
        padding-bottom: var(--spacing-xlarge);
      }
    }
  `}
`

export const SocialWrapper = styled.footer`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.small}) {
      display: block;
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      position: sticky;
      top: 0;
      height: 100vh;
      width: var(--icon-small);
    }

    @media (min-width: ${theme.breakpoints.large}) {
      transform: translateX(-var(--icon-small));
    }
  `}
`

import styled from 'styled-components'
import { breakpoints } from './global'

export const Wrapper = styled.div`
  @media (min-width: ${breakpoints.medium}) {
    display: grid;
    grid-template-columns: max-content auto;
    gap: var(--spacing-huge);
    padding: 0 var(--spacing-huge);
  }

  @media (min-width: ${breakpoints.large}) {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    gap: var(--spacing-huge);
  }
`

export const Main = styled.main`
  order: 2;
`

export const Section = styled.section`
  padding-top: var(--spacing-small);

  &:last-child {
    padding-bottom: var(--spacing-huge);
  }

  @media (min-width: ${breakpoints.small}) {
    padding-top: var(--spacing-huge);

    &:first-child {
      padding-top: var(--spacing-xxlarge);
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  @media (min-width: ${breakpoints.medium}) {
    &:last-child {
      padding-bottom: var(--spacing-xlarge);
    }
  }
`

export const SocialWrapper = styled.footer`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    display: block;
  }

  @media (min-width: ${breakpoints.medium}) {
    position: sticky;
    top: 0;
    height: 100vh;
    width: var(--icon-small);
  }

  @media (min-width: ${breakpoints.large}) {
    transform: translateX(calc(var(--icon-small) * -1));
  }
`

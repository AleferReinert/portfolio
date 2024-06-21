import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

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
  padding-top: var(--spacing-huge);
  padding-bottom: var(--spacing-xxl);

  @media (min-width: ${breakpoints.small}) {
    text-align: left;
    padding-bottom: 0;
  }

  @media (min-width: ${breakpoints.medium}) {
    padding-bottom: var(--spacing-xxl);
  }
`

export const SocialWrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    display: block;
  }

  @media (min-width: ${breakpoints.medium}) {
    position: sticky;
    top: 0;
    height: 100vh;
    width: var(--icon-sm);
  }

  @media (min-width: ${breakpoints.large}) {
    transform: translateX(calc(var(--icon-sm) * -1));
  }
`

export const Footer = styled.footer`
  text-align: center;
  margin-top: var(--spacing-huge);
  margin-bottom: var(--spacing-xxl);
  font-size: var(--font-xxs);

  @media (min-width: ${breakpoints.small}) {
    display: none;
  }

  @media (min-width: ${breakpoints.medium}) {
    display: block;
  }
`

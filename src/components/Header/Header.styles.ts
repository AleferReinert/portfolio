import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.header``

export const Fixed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: var(--color-background);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transform: translateY(-100%);
  transition: transform var(--transition-duration-slow) var(--transition-effect);

  &.fixed {
    transform: translateY(0);
  }

  @media (min-width: ${breakpoints.small}) {
    padding: var(--spacing-sm) var(--spacing-lg);
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  height: min-content;

  .react-switch-handle {
    width: 1.8rem !important;
    height: 1.8rem !important;
    top: 0.2rem !important;
  }
`

export const IconWrapper = styled.div`
  svg {
    width: var(--icon-md);
    color: var(--color-primary);
    cursor: pointer;
  }

  @media (min-width: ${breakpoints.small}) {
    display: none;
  }
`

export const MenuDesktop = styled.div`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    display: flex;
  }
`

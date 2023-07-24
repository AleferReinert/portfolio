import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-xsmall) var(--spacing-small);
    background-color: ${theme.colors.background};

    @media (min-width: ${theme.breakpoints.small}) {
      padding: var(--spacing-small) var(--spacing-large);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
      transform: translateY(-100%);
      transition: transform var(--transition-duration-slow)
        var(--transition-effect);

      &.fixed {
        transform: translateY(0);
      }
    }
  `}
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
  ${({ theme }) => css`
    svg {
      width: var(--icon-medium);
      color: ${theme.colors.primary};
      cursor: pointer;
    }

    @media (min-width: ${theme.breakpoints.small}) {
      display: none;
    }
  `}
`

export const MenuDesktop = styled.div`
  ${({ theme }) => css`
    display: none;

    @media (min-width: ${theme.breakpoints.small}) {
      display: flex;
    }
  `}
`

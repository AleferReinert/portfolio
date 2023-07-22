import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: ${theme.colors.background};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      padding: ${theme.spacings.small} ${theme.spacings.large};
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: ${theme.layers.menu};
      transform: translateY(-100%);
      transition: transform ${theme.transition.duration.slow}
        ${theme.transition.effect};

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
      width: ${theme.icons.sizes.medium};
      color: ${theme.colors.primary};
      cursor: pointer;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      display: none;
    }
  `}
`

export const MenuDesktop = styled.div`
  ${({ theme }) => css`
    display: none;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      display: flex;
    }
  `}
`

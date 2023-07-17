import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: ${theme.colors.background};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      padding: ${theme.spacings.small} ${theme.spacings.large};
      position: fixed;
      top: -100%;
      left: 0;
      right: 0;
      z-index: ${theme.layers.menu};
      transition: top ${theme.transition.duration.slow}
        ${theme.transition.effect};

      &.fixed {
        top: 0;
      }
    }
  `}
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

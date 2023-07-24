import styled, { css } from 'styled-components'
import * as NavMenuStyles from 'components/NavMenu/NavMenu.styles'

import * as SocialStyles from 'components/Social/Social.styles'
import { MenuMobileProps } from './MenuMobile'

const wrapperModifiers = {
  showMobileMenu: () => css`
    opacity: 1;
    pointer-events: all;
    transition: all var(--transition-duration-default) var(--transition-effect);

    ${NavMenuStyles.Wrapper} {
      transition: all var(--transition-duration-slow) var(--transition-effect)
        var(--transition-duration-slow);
      transform: translateY(0);
      opacity: 1;
    }

    ${SocialStyles.Wrapper} {
      transition: width var(--transition-duration-slow) var(--transition-effect)
        var(--transition-duration-slow);
      width: 100%;
    }
  `
}

export const Wrapper = styled.div<Pick<MenuMobileProps, 'showMobileMenu'>>`
  ${({ theme, showMobileMenu }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.background};
    z-index: 1;
    padding-bottom: var(--spacing-xxlarge);
    transition: opacity var(--transition-duration-default)
      var(--transition-effect) var(--transition-duration-slow);
    opacity: 0;
    pointer-events: none;

    ${NavMenuStyles.Wrapper} {
      transition: all var(--transition-duration-slow) var(--transition-effect);
      transform: translateY(15rem);
      opacity: 0;
    }

    ${SocialStyles.Wrapper} {
      transition: width var(--transition-duration-slow) var(--transition-effect);
      width: 0;
      overflow: hidden;
    }

    ${showMobileMenu && wrapperModifiers.showMobileMenu()}

    @media (min-width: ${theme.breakpoints.small}) {
      display: none;
    }
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    align-self: end;
    margin-top: var(--spacing-xsmall);
    margin-right: var(--spacing-small);

    svg {
      width: var(--icon-medium);
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

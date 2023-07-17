import styled, { DefaultTheme, css } from 'styled-components'
import * as NavMenuStyles from 'components/NavMenu/NavMenu.styles'
import { cssMediaQuery } from 'utils/helpers'
import * as SocialStyles from 'components/Social/Social.styles'
import { MenuMobileProps } from './MenuMobile'

const wrapperModifiers = {
  show: (theme: DefaultTheme) => css`
    transition: opacity
      (${theme.transition.duration.default} ${theme.transition.effect});
    opacity: 1;
    pointer-events: all;

    ${NavMenuStyles.Wrapper} {
      transition: all ${theme.transition.duration.slow}
        ${theme.transition.effect} ${theme.transition.duration.slow};
      transform: translateY(0);
      opacity: 1;
    }

    ${SocialStyles.Wrapper} {
      transition: width ${theme.transition.duration.slow}
        ${theme.transition.effect} ${theme.transition.duration.slow};
      width: 100%;
    }
  `,
  hidden: (theme: DefaultTheme) => css`
    transition: opacity ${theme.transition.duration.default}
      ${theme.transition.effect} ${theme.transition.duration.slow};
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div<Pick<MenuMobileProps, 'showMobileMenu'>>`
  ${({ theme, showMobileMenu }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.background};
    z-index: ${theme.layers.menu};
    padding-bottom: ${theme.spacings.xxlarge};
    display: flex;

    ${NavMenuStyles.Wrapper} {
      transition: all ${theme.transition.duration.slow}
        ${theme.transition.effect};
      transform: translateY(15rem);
      opacity: 0;
    }

    ${SocialStyles.Wrapper} {
      transition: width ${theme.transition.duration.slow}
        ${theme.transition.effect};
      width: 0;
      overflow: hidden;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      display: none;
    }

    ${showMobileMenu && wrapperModifiers.show(theme)};
    ${!showMobileMenu && wrapperModifiers.hidden(theme)};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    align-self: end;
    margin-top: ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.small};

    svg {
      width: ${theme.icons.sizes.medium};
      color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`

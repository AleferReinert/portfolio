import styled, { css } from 'styled-components'
import * as NavMenuStyles from 'components/NavMenu/NavMenu.styles'
import { cssMediaQuery } from 'utils/helpers'
import * as SocialStyles from 'components/Social/Social.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
    z-index: ${theme.layers.menu};
    padding-bottom: ${theme.spacings.xxlarge};
    transition: opacity ${theme.transition.duration.default}
      ${theme.transition.effect} ${theme.transition.duration.slow};
    opacity: 0;
    pointer-events: none;

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

    &[aria-hidden='false'] {
      opacity: 1;
      pointer-events: all;
      transition: opacity ${theme.transition.duration.default}
        ${theme.transition.effect};

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
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      display: none;
    }
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

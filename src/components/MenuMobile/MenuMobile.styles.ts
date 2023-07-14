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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.darkBg};
    z-index: ${theme.layers.menu};
    padding-bottom: ${theme.spacings.xxlarge};
    transition: opacity ${theme.transition.default};
    opacity: 0;
    pointer-events: none;

    ${NavMenuStyles.Wrapper} {
      transition: all ${theme.transition.default} 0.15s;
      transform: translateY(10rem);
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: ${theme.font.sizes.xlarge};
      gap: ${theme.spacings.medium};
      opacity: 0;
    }

    ${SocialStyles.Wrapper} {
      transition: width ${theme.transition.slow} 0.25s;
      width: 0;
      overflow: hidden;
    }

    &[aria-hidden='false'] {
      opacity: 1;
      pointer-events: all;

      ${NavMenuStyles.Wrapper} {
        transform: translateY(0);
        opacity: 1;
      }

      ${SocialStyles.Wrapper} {
        width: 100%;
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      display: none;
    }
  `}
`

export const CloseMenu = styled.button`
  ${({ theme }) => css`
    align-self: end;
    margin-top: ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.small};

    svg {
      width: 3rem;
      height: 3rem;
      fill: ${theme.colors.primary};
    }
  `}
`

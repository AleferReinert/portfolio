import styled, { css } from 'styled-components'
import * as NavMenuStyles from 'components/NavMenu/NavMenu.styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.darkBg};
    z-index: ${theme.layers.menu};
    transition: opacity ${theme.transition.default};
    opacity: 0;
    pointer-events: none;

    ${NavMenuStyles.Wrapper} {
      transition: all ${theme.transition.default} 0.15s;
      transform: translateY(5rem);
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: ${theme.font.sizes.xlarge};
      gap: ${theme.spacings.medium};
      opacity: 0;
    }

    &[aria-hidden='false'] {
      opacity: 1;
      pointer-events: all;

      ${NavMenuStyles.Wrapper} {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}
`

export const CloseMenu = styled.button`
  ${({ theme }) => css`
    position: fixed;
    top: ${theme.spacings.xsmall};
    right: ${theme.spacings.small};

    svg {
      width: 3rem;
      height: 3rem;
      fill: ${theme.colors.primary};
    }
  `}
`

import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'
import * as NavMenuStyles from 'components/NavMenu/NavMenu.styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`

export const OpenMenuButton = styled.button`
  ${({ theme }) => css`
    svg {
      width: 3rem;
      height: 3rem;
      fill: ${theme.colors.primary};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      display: none;
    }
  `}
`

export const MenuDesktop = styled.div`
  ${({ theme }) => css`
    display: none;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      display: flex;
    }

    ${NavMenuStyles.Wrapper} {
      display: flex;
      gap: ${theme.spacings.large};
    }
  `}
`

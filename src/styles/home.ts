import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      display: grid;
      grid-template-columns: max-content auto;
      gap: ${theme.spacings.huge};
      padding: 0 ${theme.spacings.huge};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: center;
      gap: ${theme.spacings.huge};
    }
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxlarge};
    order: 2;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      gap: ${theme.spacings.huge};
      padding-top: ${theme.spacings.huge};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      padding-bottom: ${theme.spacings.xxlarge};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
      padding-top: ${theme.spacings.huge};
      padding-bottom: ${theme.spacings.huge};
    }
  `}
`

export const Section = styled.section``

export const SocialWrapper = styled.aside`
  ${({ theme }) => css`
    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      position: sticky;
      top: 0;
      height: 100vh;
      width: ${theme.icons.sizes.small};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
      transform: translateX(-${theme.icons.sizes.small});
    }
  `}
`

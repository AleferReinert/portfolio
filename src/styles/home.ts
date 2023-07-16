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
  order: 2;
`

export const Section = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxlarge};

    &:last-child {
      padding-bottom: ${theme.spacings.huge};
    }

    ${cssMediaQuery.lessThan(theme.breakpoints.small)} {
      &:first-child {
        padding-top: ${theme.spacings.small};
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      padding-top: ${theme.spacings.huge};

      &:last-child {
        padding-bottom: 0;
      }
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      &:last-child {
        padding-bottom: ${theme.spacings.xlarge};
      }
    }
  `}
`

export const SocialWrapper = styled.footer`
  ${({ theme }) => css`
    display: none;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      display: block;
    }

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

import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${theme.spacings.xsmall};
    row-gap: ${theme.spacings.large};

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      grid-template-columns: repeat(6, min-content);
      justify-content: space-around;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      row-gap: ${theme.spacings.xxlarge};
    }
  `}
`

export const Skill = styled.div`
  display: grid;
  grid-template-rows: max-content calc(100% - 5rem);
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.icons.sizes.small};
    margin: 0 auto;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      width: ${theme.icons.sizes.medium};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      width: ${theme.icons.sizes.large};
    }
  `}
`

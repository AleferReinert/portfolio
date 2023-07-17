import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${theme.spacings.xsmall};
    row-gap: ${theme.spacings.large};
    justify-content: space-around;
    justify-items: center;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      grid-template-columns: repeat(4, 1fr);
      row-gap: ${theme.spacings.xlarge};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      grid-template-columns: repeat(5, 1fr);
    }
  `}
`

export const Skill = styled.div`
  width: 9.2rem;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
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
    width: ${theme.icons.sizes.medium};
    margin: 0 auto;

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      width: ${theme.icons.sizes.large};
    }
  `}
`

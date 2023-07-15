import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.spacings.small};
    grid-template-columns: repeat(2, 1fr);

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      grid-template-columns: repeat(4, 1fr);
      row-gap: ${theme.spacings.large};
    }
  `}
`

export const Skill = styled.div`
  ${({ theme }) => css`
    background-color: #fff;
    border-radius: ${theme.radius};
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    display: grid;
    grid-template-rows: max-content calc(100% - 5rem);
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weights.regular};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: ${theme.icons.sizes.xlarge};
    aspect-ratio: 1/1;
    margin: 0 auto;
  `}
`

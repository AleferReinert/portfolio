import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.25);

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      justify-content: space-between;
      flex-direction: row;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 1/1;
    width: 100%;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      max-width: 24rem;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      max-width: 30rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.small};
    flex-direction: column;
    align-self: center;
    margin: 0 auto;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      padding-left: ${theme.spacings.xxlarge};
      padding-right: ${theme.spacings.xxlarge};
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weights.extraBold};
    margin-bottom: ${theme.spacings.small};

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      font-size: ${theme.font.sizes.large};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`

export const Skills = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium} 0;

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      margin: ${theme.spacings.large} 0;
    }
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};

    svg {
      height: ${theme.font.sizes.large};
      transition: fill ${theme.transition.duration.default}
        ${theme.transition.effect};

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`

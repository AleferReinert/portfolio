import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.backgroundSecondary};
    max-width: calc(
      ${theme.breakpoints.xsmall} - calc(${theme.spacings.small} * 2)
    );
    align-self: center;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      justify-content: space-between;
      flex-direction: row;
      max-width: none;
      align-self: auto;
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: min-content;
    aspect-ratio: 1/1;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      max-width: 24rem;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      max-width: 28rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;

    ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
      padding: ${theme.spacings.small} ${theme.spacings.large};
    }

    ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
      padding-left: ${theme.spacings.huge};
      padding-right: ${theme.spacings.huge};
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
    font-size: ${theme.font.sizes.xsmall};
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
      transition: all ${theme.transition.duration.default}
        ${theme.transition.effect};
    }

    a:hover {
      color: ${theme.colors.primary};

      svg {
        animation: rotateFrom180 ${theme.transition.duration.slow};
      }
    }
  `}

  @keyframes rotateFrom180 {
    from {
      transform: rotate(-180deg) scale(0.75);
    }
    to {
      transform: rotate(0) scale(1);
    }
  }
`

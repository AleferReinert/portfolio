import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'
import { ProjectProps } from './Project'

const wrapperModifiers = {
  left: () => css`
    flex-direction: row;
  `,
  right: () => css`
    flex-direction: row-reverse;
  `
}

export const Wrapper = styled.div<Pick<ProjectProps, 'direction'>>`
  ${({ theme, direction }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.darkBg};

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      justify-content: space-between;

      ${!!direction && wrapperModifiers[direction]()}
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    aspect-ratio: 1/1;
    width: 100%;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      max-width: 20rem;
    }

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      max-width: 30rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    margin: 0 auto;
    flex-direction: column;
    align-self: center;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.weights.bold};
    margin-bottom: ${theme.spacings.xsmall};

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`

export const Skills = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium} 0;

    ${cssMediaQuery.greaterThan(theme.breakpoint.medium)} {
      margin: ${theme.spacings.large} 0;
    }
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};

    svg {
      fill: ${theme.colors.gray};
      transition: fill ${theme.transition.default};

      &:hover {
        fill: ${theme.colors.primary};
      }
    }
  `}
`

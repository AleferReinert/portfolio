import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.backgroundSecondary};
    width: 100%;
    max-width: calc(var(--breakpoint-xsmall) - calc(var(--spacing-small) * 2));
    align-self: center;

    @media (min-width: ${theme.breakpoints.small}) {
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

    img {
      object-fit: contain;
    }

    @media (min-width: ${theme.breakpoints.small}) {
      max-width: 24rem;
    }

    @media (min-width: ${theme.breakpoints.medium}) {
      max-width: 28rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: var(--spacing-large) var(--spacing-small);
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints.small}) {
      padding: var(--spacing-small) var(--spacing-large);
    }

    @media (min-width: ${theme.breakpoints.large}) {
      padding-left: var(--spacing-huge);
      padding-right: var(--spacing-huge);
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: var(--font-large);
    font-weight: var(--font-extraBold);
    margin-bottom: var(--spacing-small);

    @media (min-width: ${theme.breakpoints.medium}) {
      font-size: var(--font-large);
      margin-bottom: var(--spacing-small);
    }
  `}
`

export const Description = styled.p`
  font-size: var(--font-small);
`

export const Skills = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: var(--font-xsmall);
    font-weight: var(--font-regular);
    margin: var(--spacing-medium) 0;

    @media (min-width: ${theme.breakpoints.medium}) {
      margin: var(--spacing-large) 0;
    }
  `}
`

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: var(--spacing-small);

    svg {
      height: var(--font-large);
      transition: all var(--transition-duration-default)
        var(--transition-effect);
    }

    a:hover {
      color: ${theme.colors.primary};

      svg {
        animation: rotateFrom180 var(--transition-duration-slow);
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

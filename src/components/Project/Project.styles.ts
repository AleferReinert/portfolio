import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-background-secondary);
  width: 100%;
  max-width: 32.8rem;
  align-self: center;
  align-items: center;
  padding: var(--spacing-medium);
  gap: var(--spacing-medium);

  @media (min-width: ${breakpoints.small}) {
    justify-content: space-between;
    flex-direction: row;
    max-width: none;
    align-self: auto;
    padding: var(--spacing-large) var(--spacing-medium);
    gap: var(--spacing-large);
  }

  @media (min-width: ${breakpoints.medium}) {
    justify-content: space-between;
    flex-direction: row;
    max-width: none;
    align-self: auto;
    padding: var(--spacing-xxlarge);
    gap: var(--spacing-xxlarge);
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: min-content;
  aspect-ratio: 25/17;

  img {
    object-fit: contain;
  }

  @media (min-width: ${breakpoints.small}) {
    max-width: 24rem;
  }

  @media (min-width: ${breakpoints.medium}) {
    max-width: 28rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 0 auto;
`

export const Title = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: var(--font-large);
  font-weight: var(--font-extrabold);
  margin-bottom: var(--spacing-small);

  @media (min-width: ${breakpoints.medium}) {
    font-size: var(--font-large);
    margin-bottom: var(--spacing-small);
  }
`

export const Year = styled.span`
  font-size: var(--font-xxsmall);
  font-weight: var(--font-light);
`

export const Description = styled.p`
  font-size: var(--font-small);
`

export const Skills = styled.p`
  color: var(--color-primary);
  font-size: var(--font-xsmall);
  font-weight: var(--font-regular);
  margin: var(--spacing-medium) 0;

  @media (min-width: ${breakpoints.medium}) {
    margin: var(--spacing-large) 0;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-small);

  svg {
    height: var(--font-large);
    transition: all var(--transition-duration-default) var(--transition-effect);
  }

  a:hover {
    color: var(--color-primary);

    svg {
      animation: rotateFrom180 var(--transition-duration-slow);
    }
  }

  @keyframes rotateFrom180 {
    from {
      transform: rotate(-180deg) scale(0.75);
    }
    to {
      transform: rotate(0) scale(1);
    }
  }
`

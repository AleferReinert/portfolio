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
  padding: var(--spacing-md);
  gap: var(--spacing-md);

  @media (min-width: ${breakpoints.small}) {
    justify-content: space-between;
    flex-direction: row;
    max-width: none;
    align-self: auto;
    padding: var(--spacing-lg) var(--spacing-md);
    gap: var(--spacing-lg);
  }

  @media (min-width: ${breakpoints.medium}) {
    justify-content: space-between;
    flex-direction: row;
    max-width: none;
    align-self: auto;
    padding: var(--spacing-xxl);
    gap: var(--spacing-xxl);
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
  font-size: var(--font-lg);
  font-weight: var(--font-bold);
  margin-bottom: var(--spacing-sm);

  @media (min-width: ${breakpoints.medium}) {
    font-size: var(--font-lg);
    margin-bottom: var(--spacing-sm);
  }
`

export const Year = styled.span`
  font-size: var(--font-xxs);
  font-weight: var(--font-light);
`

export const Description = styled.p`
  font-size: var(--font-sm);
  opacity: 0.85;
`

export const Skills = styled.p`
  color: var(--color-primary);
  font-size: var(--font-xs);
  font-weight: var(--font-regular);
  margin: var(--spacing-md) 0;

  @media (min-width: ${breakpoints.medium}) {
    margin: var(--spacing-lg) 0;
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  gap: var(--spacing-sm);

  svg {
    height: var(--font-lg);
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

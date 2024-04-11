import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.small}) {
    margin-bottom: var(--spacing-huge);
    margin-top: var(--spacing-lg);
  }
`

export const Title = styled.h1`
  color: var(--color-heading);
`

export const FirstLine = styled.div`
  font-size: var(--font-lg);
  font-weight: var(--font-light);
`

export const Name = styled.div`
  font-size: var(--font-huge);
  font-weight: var(--font-extrabold);
  margin-bottom: var(--spacing-xs);

  @media (min-width: ${breakpoints.small}) {
    font-size: calc(var(--font-huge) * 1.4);
  }
`

export const Role = styled.h2`
  color: var(--color-primary);
  font-size: var(--font-sm);
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.small}) {
    font-size: var(--font-md);
  }
`

export const Subtitle = styled.h3`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    text-align: center;
    color: var(--color-heading);
    font-size: var(--font-xxl);
    display: block;
  }
`

export const Description = styled.p`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);

  p::first-letter {
    margin-left: var(--spacing-md);
  }

  @media (min-width: ${breakpoints.small}) {
    text-align: center;
    max-width: 80rem;
    margin: var(--spacing-xl) auto;
    font-size: var(--font-md);
  }
`

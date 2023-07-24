import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  margin-bottom: var(--spacing-xlarge);

  @media (min-width: ${breakpoints.small}) {
    margin-bottom: var(--spacing-huge);
    margin-top: var(--spacing-large);
  }
`

export const Title = styled.h1`
  color: var(--color-heading);
`

export const FirstLine = styled.div`
  font-size: var(--font-large);
  font-weight: var(--font-light);
`

export const Name = styled.div`
  font-size: var(--font-huge);
  font-weight: var(--font-extrabold);
  margin-bottom: var(--spacing-xsmall);

  @media (min-width: ${breakpoints.small}) {
    font-size: calc(var(--font-huge) * 1.4);
  }
`

export const Role = styled.h2`
  color: var(--color-primary);
  font-size: var(--font-small);
  margin-bottom: var(--spacing-xlarge);

  @media (min-width: ${breakpoints.small}) {
    font-size: var(--font-medium);
  }
`

export const Subtitle = styled.h3`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    text-align: center;
    color: var(--color-heading);
    font-size: var(--font-xxlarge);
    display: block;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-large);

  p::first-letter {
    margin-left: var(--spacing-medium);
  }

  @media (min-width: ${breakpoints.small}) {
    text-align: center;
    max-width: 80rem;
    margin: var(--spacing-xlarge) auto;
    font-size: var(--font-medium);
  }
`

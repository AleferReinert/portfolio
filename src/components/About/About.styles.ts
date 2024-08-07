import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div``

export const TitleWrapper = styled.div`
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.small}) {
    margin-bottom: var(--spacing-xll);
  }
`

export const Title = styled.h1`
  color: var(--color-heading);
  display: flex;
  flex-direction: column;
`

export const FirstLine = styled.div`
  color: var(--color-heading);
  font-size: var(--font-lg);
  font-weight: var(--font-light);
`

export const Name = styled.span`
  font-size: var(--font-huge);
  font-weight: var(--font-extrabold);
  margin-bottom: var(--spacing-xs);

  @media (min-width: ${breakpoints.small}) {
    font-size: calc(var(--font-huge) * 1.4);
  }
`

export const Role = styled.span`
  color: var(--color-primary);
  font-size: var(--font-sm);
  margin-bottom: var(--spacing-xl);

  @media (min-width: ${breakpoints.small}) {
    font-size: var(--font-md);
  }
`

export const Subtitle = styled.h2`
  display: none;

  @media (min-width: ${breakpoints.small}) {
    text-align: center;
    color: var(--color-heading);
    font-size: var(--font-xl);
    display: block;
  }
`

export const Description = styled.p`
  span {
    strong {
      display: inline;
      color: var(--color-primary);
      font-weight: var(--font-regular);
    }
  }

  @media (min-width: ${breakpoints.small}) {
    text-align: center;
    max-width: 80rem;
    margin: var(--spacing-lg) auto 0;
    font-size: var(--font-md);

    span {
      display: block;

      & + br {
        display: none;
      }
    }
  }
`

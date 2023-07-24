import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: var(--spacing-xsmall);
  row-gap: var(--spacing-large);
  justify-content: space-around;
  justify-items: center;

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: var(--spacing-xlarge);
  }

  @media (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const Skill = styled.div`
  width: 9.2rem;
`

export const Title = styled.h3`
  margin-top: var(--spacing-xsmall);
  font-size: var(--font-xsmall);
  font-weight: var(--font-regular);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const IconWrapper = styled.div`
  width: var(--icon-medium);
  margin: 0 auto;

  @media (min-width: ${breakpoints.medium}) {
    width: var(--icon-large);
  }
`

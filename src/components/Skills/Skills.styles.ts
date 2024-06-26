import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  row-gap: var(--spacing-lg);
  justify-content: space-around;
  justify-items: center;

  @media (min-width: ${breakpoints.small}) {
    grid-template-columns: repeat(6, 1fr);
    row-gap: var(--spacing-xl);
  }
`

export const Skill = styled.div`
  /* width: 9.2rem; */
`

export const Title = styled.h3`
  margin-top: var(--spacing-xs);
  font-size: var(--font-xxs);
  line-height: var(--font-xxs);
  font-weight: var(--font-regular);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const IconWrapper = styled.div`
  width: var(--icon-md);
  margin: 0 auto;

  @media (min-width: ${breakpoints.medium}) {
    width: var(--icon-lg);
  }
`

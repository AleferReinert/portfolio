import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${() => css``}
`
export const ProjectHeader = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
  `}
`

export const Title = styled.h1`
  ${() => css`
    font-size: var(--font-huge);
  `}
`

export const Info = styled.div`
  ${() => css``}
`

export const Skills = styled.ul`
  ${() => css`
    list-style: none;
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
    font-style: italic;
    margin: var(--spacing-huge) 0;

    li {
      background: var(--color-primary);
      border-radius: var(--spacing-sm);
      color: var(--color-background);
      padding: var(--spacing-xs) var(--spacing-sm);
      font-weight: var(--font-medium);
    }
  `}
`

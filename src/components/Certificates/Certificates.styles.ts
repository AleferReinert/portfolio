import styled, { css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};

    ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      justify-content: space-between;
    }
  `}
`

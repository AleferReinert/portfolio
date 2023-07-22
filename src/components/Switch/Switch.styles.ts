import styled, { css } from 'styled-components'

export const Wrapper = styled.label`
  ${({ theme }) => css`
    display: inline-flex;
    width: 4rem;
    height: 2rem;
    background-color: ${theme.colors.text};
    border-radius: 1rem;

    input {
      position: absolute;
      opacity: 0;
      z-index: -1;

      &:checked + ${Handle} {
        transform: translateX(100%);
      }
    }
  `}
`

export const Handle = styled.div`
  ${({ theme }) => css`
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    background-color: ${theme.colors.background};
    border: 0.2rem solid ${theme.colors.text};
    transition: transform ${theme.transition.duration.default}
      ${theme.transition.effect};
  `}
`

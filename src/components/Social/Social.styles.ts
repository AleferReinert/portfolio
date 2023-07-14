import styled, { css } from 'styled-components'
import Link from 'next/link'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    align-items: center;
    justify-content: center;

    ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
      position: fixed;
      left: 0;
      bottom: 0;
      flex-direction: column;
      padding-bottom: 10rem;
      gap: ${theme.spacings.xsmall};

      &::after {
        position: absolute;
        left: 49%;
        bottom: 0;
        content: '';
        display: block;
        width: 1px;
        height: 10rem;
        background-color: ${theme.colors.gray};
      }

      a {
        position: relative;

        &::after {
          color: ${theme.colors.white};
          content: attr(title);
          font-size: ${theme.font.sizes.xsmall};
          font-weight: ${theme.font.weights.light};
          left: 3.6rem;
          line-height: 3rem;
          text-wrap: nowrap;
          max-width: 0;
          opacity: 0.5;
          overflow: hidden;
          position: absolute;
          top: -3px;
          transition: max-width ${theme.transition.slow};
        }

        &:hover {
          svg {
            transform: translateY(-0.5rem);
          }

          &::after {
            max-width: 6.5rem;
          }
        }
      }
    }
  `}
`

export const SocialItem = styled(Link)`
  ${({ theme }) => css`
    svg {
      width: 3.6rem;
      color: ${theme.colors.gray};
      transition: all ${theme.transition.default};

      ${cssMediaQuery.greaterThan(theme.breakpoint.small)} {
        width: auto;
        height: 3rem;
      }
    }
  `}
`

import styled, { css } from 'styled-components'
import Link from 'next/link'
import { cssMediaQuery } from 'utils/helpers'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xxlarge} 0;

    ${cssMediaQuery.greaterThan(theme.breakpoints.medium)} {
      position: absolute;
      bottom: 0;
      flex-direction: column;
      gap: 0;
      padding-bottom: 10rem;

      &::after {
        position: absolute;
        left: 49%;
        bottom: 0;
        content: '';
        display: block;
        width: 1px;
        height: 10rem;
        background-color: ${theme.colors.text};
      }

      a {
        position: relative;
        margin-bottom: ${theme.spacings.small};

        &::after {
          color: ${theme.colors.white};
          content: attr(title);
          font-size: ${theme.font.sizes.xxsmall};
          left: 3.6rem;
          line-height: 3rem;
          text-wrap: nowrap;
          max-width: 0;
          opacity: 0.5;
          overflow: hidden;
          position: absolute;
          top: -3px;
          transition: max-width ${theme.transition.duration.slow}
            ${theme.transition.effect};
        }

        &:hover {
          svg {
            transform: translateY(-0.5rem);
          }

          ${cssMediaQuery.greaterThan(theme.breakpoints.large)} {
            &::after {
              max-width: 6.5rem;
            }
          }
        }
      }
    }
  `}
`

export const SocialItem = styled(Link)`
  ${({ theme }) => css`
    svg {
      width: ${theme.icons.sizes.medium};
      transition: all ${theme.transition.duration.default}
        ${theme.transition.effect};

      ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
        width: auto;
        height: ${theme.icons.sizes.small};
      }
    }
  `}
`

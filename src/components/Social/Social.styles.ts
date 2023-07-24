import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    gap: var(--spacing-small);
    align-items: center;
    justify-content: center;
    padding: var(--spacing-xxlarge) 0;

     @media (min-width: ${theme.breakpoints.medium}) {
      position: absolute;
      bottom: 0;
      flex-direction: column;
      gap: 0;
      padding-bottom: 10rem;

      &::after,
      &::before {
        position: absolute;
        left: 49%;
        bottom: 0;
        content: '';
        display: block;
        width: 1px;
        height: 10rem;
        background-color: ${theme.colors.text};
        overflow: hidden;
      }

      &::after {
        transform: translateY(100%);
        transition: all var(--transition-duration-slow);
        background-color: ${theme.colors.primary};
        var(--transition-effect);
      }

      &:hover::after {
        transform: translateY(0);
      }

      a {
        position: relative;
        margin-bottom: var(--spacing-small);
        transition: color var(--transition-duration-default)
          var(--transition-effect);

        &::after {
          content: attr(title);
          font-size: var(--font-xxsmall);
          left: 3.6rem;
          line-height: 3rem;
          text-wrap: nowrap;
          max-width: 0;
          overflow: hidden;
          position: absolute;
          top: -3px;
          transition: max-width var(--transition-duration-slow)
            var(--transition-effect);
        }

        svg {
          transition: all var(--transition-duration-default)
            var(--transition-effect);
        }

        &:hover {
          color: ${theme.colors.primary};

          svg {
            transform: translateY(-0.5rem);
          }

           @media (min-width: ${theme.breakpoints.large}) {
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
      width: var(--icon-medium);
      transition: all var(--transition-duration-default)
        var(--transition-effect);

      @media (min-width: ${theme.breakpoints.small}) {
        width: auto;
        height: var(--icon-small);
      }
    }
  `}
`

import Link from 'next/link'
import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.nav`
  display: flex;
  overflow: hidden;
  gap: var(--spacing-sm);
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xxl) 0;

  @media (min-width: ${breakpoints.medium}) {
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
      background-color: var(--color-text);
      overflow: hidden;
    }

    &::after {
      transform: translateY(100%);
      transition: all var(--transition-duration-slow) var(--transition-effect);
      background-color: var(--color-primary);
    }

    &:hover::after {
      transform: translateY(0);
    }

    a {
      position: relative;
      margin-bottom: var(--spacing-sm);
      transition: color var(--transition-duration-default)
        var(--transition-effect);

      &::after {
        content: attr(title);
        font-size: var(--font-xxs);
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
        color: var(--color-primary);

        svg {
          transform: translateY(-0.5rem);
        }

        @media (min-width: ${breakpoints.large}) {
          &::after {
            max-width: 6.6rem;
          }
        }
      }
    }
  }
`

export const SocialItem = styled(Link)`
  svg {
    width: var(--icon-md);
    transition: all var(--transition-duration-default) var(--transition-effect);

    @media (min-width: ${breakpoints.small}) {
      width: auto;
      height: var(--icon-sm);
    }
  }
`

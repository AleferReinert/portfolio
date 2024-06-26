import styled from 'styled-components'
import { breakpoints } from 'styles/global'

export const Wrapper = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;

  svg {
    height: var(--font-lg);
    transition: all var(--transition-duration-default) var(--transition-effect);
  }

  a:hover {
    color: var(--color-primary);

    svg {
      animation: rotateFrom180 var(--transition-duration-slow);
    }
  }

  @keyframes rotateFrom180 {
    from {
      transform: rotate(-180deg) scale(0.75);
    }
    to {
      transform: rotate(0) scale(1);
    }
  }

  @media (min-width: ${breakpoints.small}) {
    justify-content: left;
  }
`

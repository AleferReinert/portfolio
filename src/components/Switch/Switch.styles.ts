import styled from 'styled-components'

export const Wrapper = styled.label`
  display: inline-flex;
  width: 4rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 1rem;

  input {
    position: absolute;
    opacity: 0;
    z-index: -1;

    &:checked + div {
      transform: translateX(100%);
    }
  }
`

export const Handle = styled.div`
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.colors.background};
  border: 0.2rem solid ${(props) => props.theme.colors.text};
  transition: transform var(--transition-duration-default)
    var(--transition-effect);
`

import { createGlobalStyle, css } from 'styled-components'
import { cssMediaQuery } from 'utils/helpers'

const GlobalStyles = createGlobalStyle`

    ${({ theme }) => css`
      html {
        font-size: 62.5%;

        ${cssMediaQuery.greaterThan(theme.breakpoints.small)} {
          scroll-behavior: smooth;
        }
      }

      body {
        color: ${theme.colors.text};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.weights.light};
        background-color: ${theme.colors.background};
        overflow-x: hidden;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
        font-family: inherit;
      }

      label {
        cursor: pointer;
      }

      a:focus-visible,
      button:focus,
      svg:focus {
        outline: none;
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    `}    
`

export default GlobalStyles

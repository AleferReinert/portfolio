import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        color: ${theme.colors.gray};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
        background-color: ${theme.colors.bg};
        overflow-x: hidden;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1;
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

      button:focus,
      svg:focus {
        outline: none;
      }

      a {
        text-decoration: none;
      }
    `}    
`

export default GlobalStyles

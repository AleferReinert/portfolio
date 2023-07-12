import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');

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
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        &::before,
        &::after {
          box-sizing: inherit;
        }
      }

      button {
        cursor: pointer;
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
    `}    
`

export default GlobalStyles

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --font-light: 300;
        --font-regular: 400;
        --font-bold: 700;
        --font-extrabold: 800;
        --font-xxsmall: 1.4rem;
        --font-xsmall: 1.6rem;
        --font-small: 1.8rem;
        --font-medium: 2rem;
        --font-large: 2.4rem;
        --font-xlarge: 2.8rem;
        --font-xxlarge: 3.6rem;
        --font-huge: 4.4rem;
        --spacing-xxsmall: 0.4rem;
        --spacing-xsmall: 0.8rem;
        --spacing-small: 1.6rem;
        --spacing-medium: 2.4rem;
        --spacing-large: 3.2rem;
        --spacing-xlarge: 4rem;
        --spacing-xxlarge: 4.8rem;
        --spacing-huge: 8rem;
        --transition-effect: linear;
        --transition-duration-slow: .3s;
        --transition-duration-default: .15s;
        --breakpoint-xxsmall: 320px;
        --breakpoint-xsmall: 360px;
        --breakpoint-small: 768px;
        --breakpoint-medium: 1024px;
        --breakpoint-large: 1366px;
        --breakpoint-xlarge: 1920px;
        --icon-small: 2.8rem;
        --icon-medium: 3.6rem;
        --icon-large: 4.4rem;
    }

    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/inter-v12-latin-300.woff2') format('woff2');
    }

    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/inter-v12-latin-regular.woff2') format('woff2');
    }
    
    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/inter-v12-latin-700.woff2') format('woff2');
    }

    @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/inter-v12-latin-800.woff2') format('woff2');
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;

        @media (min-width: ${theme.breakpoints.small}) {
          scroll-behavior: smooth;
        }
      }

      body {
        color: ${theme.colors.text};
        font-family: var(--font-family);
        font-size: var(--font-small);
        font-weight: var(--font-light);
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

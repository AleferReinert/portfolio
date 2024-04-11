import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  xxsmall: '320px',
  xsmall: '360px',
  small: '768px',
  medium: '1024px',
  large: '1366px',
  xlarge: '1920px'
}

const GlobalStyles = createGlobalStyle`
    :root {
        --font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        --font-light: 300;
        --font-regular: 400;
        --font-bold: 700;
        --font-extrabold: 800;
        --font-xxs: 1.4rem;
        --font-xs: 1.6rem;
        --font-sm: 1.8rem;
        --font-md: 2rem;
        --font-lg: 2.4rem;
        --font-xl: 2.8rem;
        --font-xxl: 3.6rem;
        --font-huge: 4.4rem;
        --spacing-xxs: 0.4rem;
        --spacing-xs: 0.8rem;
        --spacing-sm: 1.6rem;
        --spacing-md: 2.4rem;
        --spacing-lg: 3.2rem;
        --spacing-xl: 4rem;
        --spacing-xxl: 4.8rem;
        --spacing-huge: 8rem;
        --transition-effect: linear;
        --transition-duration-slow: .3s;
        --transition-duration-default: .15s;
        --icon-sm: 2.8rem;
        --icon-md: 3.6rem;
        --icon-lg: 4.4rem;
        --color-primary: #48e194;
        --color-background: #00344a;
        --color-background-secondary: rgba(0, 0, 0, 0.25);
        --color-heading: rgba(255,255,255,0.85);
        --color-text: #829BA6;
    }

    .lightTheme {
        --color-primary: #00344a;
        --color-background: #f5f5f5;
        --color-background-secondary: rgba(0, 0, 0, 0.05);
        --color-heading: #313131;
        --color-text: #595959;
    }

      html {
        font-size: 62.5%;

        @media (min-width: ${breakpoints.small}) {
          scroll-behavior: smooth;
        }
      }

      body {
        color: var(--color-text);
        font-family: var(--font-family);
        font-size: var(--font-sm);
        font-weight: var(--font-light);
        background-color: var(--color-background);
        overflow-x: hidden;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;

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

      ::selection {
            color: rgba(255,255,255,0.85);
            background: var(--color-primary);
        }
`

export default GlobalStyles

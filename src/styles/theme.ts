const theme = {
  radius: '0.2rem',
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
      extraBold: 800
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '2rem',
      xlarge: '2.8rem',
      xxlarge: '4rem'
    }
  },
  colors: {
    primary: '#48e194',
    lightBg: '#003b54',
    bg: '#00344a',
    darkBg: '#002d40',
    white: '#ffffffd9',
    gray: '#7f99a4'
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '.15s linear'
  },
  breakpoint: {
    xxsmall: '320px',
    xsmall: '360px',
    small: '768px',
    medium: '1024px',
    large: '1366px',
    xlarge: '1920px'
  }
}

export default theme

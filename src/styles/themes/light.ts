const theme = {
  title: 'light',
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
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2rem',
      large: '2.4rem',
      xlarge: '2.8rem',
      xxlarge: '3.6rem',
      huge: '4.4rem'
    }
  },
  colors: {
    primary: '#00344a',
    background: '#f5f5f5',
    backgroundSecondary: 'rgba(0, 0, 0, 0.05)',
    heading: '#313131',
    text: '#595959'
  },
  spacings: {
    xxsmall: '0.4rem',
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '8rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    effect: 'linear',
    duration: {
      slow: '.3s',
      default: '.15s'
    }
  },
  breakpoints: {
    xxsmall: '320px',
    xsmall: '360px',
    small: '768px',
    medium: '1024px',
    large: '1366px',
    xlarge: '1920px'
  },
  icons: {
    sizes: {
      small: '2.8rem',
      medium: '3.6rem',
      large: '4.4rem'
    }
  }
}

export default theme

import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import React from 'react'
import themeDark from '../src/styles/themes/dark'
import themeLight from '../src/styles/themes/light'

const customViewports = {
  xxsmall: {
    name: `320 x 480`,
    styles: {
      width: themeDark.breakpoints.xxsmall,
      height: '480px'
    }
  },
  xsmall: {
    name: `360 x 640`,
    styles: {
      width: themeDark.breakpoints.xsmall,
      height: '640px'
    }
  },
  small: {
    name: `768 x 1024`,
    styles: {
      width: themeDark.breakpoints.small,
      height: '1024px'
    }
  },
  medium: {
    name: `1024 x 768`,
    styles: {
      width: themeDark.breakpoints.medium,
      height: '768px'
    }
  },
  large: {
    name: `1366 x 768`,
    styles: {
      width: themeDark.breakpoints.large,
      height: '768px'
    }
  },
  xlarge: {
    name: `1920 x 1080`,
    styles: {
      width: themeDark.breakpoints.xlarge,
      height: '1080px'
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDark}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'Light',
          value: themeLight.colors.background
        },
        {
          name: 'Dark',
          value: themeDark.colors.background
        }
      ]
    },
    controls: {
      hideNoControlsWarning: true
    },
    layout: 'fullscreen',
    options: {
      showPanel: true,
      panelDirection: 'right'
    },
    viewport: {
      viewports: {
        ...customViewports
      }
    }
  }
}

export default preview

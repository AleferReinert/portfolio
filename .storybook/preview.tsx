import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles, { breakpoints } from '../src/styles/global'
import React from 'react'
import { dark, light } from '../src/styles/themes'

const customViewports = {
  xxsmall: {
    name: `320 x 480`,
    styles: {
      width: breakpoints.xxsmall,
      height: '480px'
    }
  },
  xsmall: {
    name: `360 x 640`,
    styles: {
      width: breakpoints.xsmall,
      height: '640px'
    }
  },
  small: {
    name: `768 x 1024`,
    styles: {
      width: breakpoints.small,
      height: '1024px'
    }
  },
  medium: {
    name: `1024 x 768`,
    styles: {
      width: breakpoints.medium,
      height: '768px'
    }
  },
  large: {
    name: `1366 x 768`,
    styles: {
      width: breakpoints.large,
      height: '768px'
    }
  },
  xlarge: {
    name: `1920 x 1080`,
    styles: {
      width: breakpoints.xlarge,
      height: '1080px'
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={dark}>
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
          value: light.colors.background
        },
        {
          name: 'Dark',
          value: dark.colors.background
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

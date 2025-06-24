import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'
import { create } from '@storybook/theming'
import '../src/app/globals.css'

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark'
      },
      defaultTheme: 'dark'
    })
  ],
  parameters: {
    backgrounds: {
      disable: true
    },
    controls: { hideNoControlsWarning: true },
    docs: {
      theme: create({
        base: 'dark',
        appContentBg: '05334',
        barBg: 'transparent',
        inputBg: 'transparent',
        booleanBg: 'transparent',
        booleanSelectedBg: 'rgba(0,0,0,0.15)',
        buttonBg: 'transparent'
      })
    },
    options: { showPanel: true, panelDirection: 'right' },
    viewport: {
      viewports: {
        xs: { name: 'Tailwind xs (320)', styles: { width: '320px', height: '100%' } },
        sm: { name: 'Tailwind sm (640)', styles: { width: '640px', height: '100%' } },
        md: { name: 'Tailwind md (768)', styles: { width: '768px', height: '100%' } },
        lg: { name: 'Tailwind lg (1024)', styles: { width: '1024px', height: '100%' } },
        xl: { name: 'Tailwind xl (1280)', styles: { width: '1920px', height: '1080px' } }
      },
      defaultViewport: 'reset'
    }
  }
}

export default preview

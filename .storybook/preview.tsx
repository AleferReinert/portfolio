import type { Preview } from '@storybook/react'
import React from 'react'
import twColors from 'tailwindcss/colors'
import '../src/app/globals.css'
import { bodyStyles } from '../src/app/layout'

export const decorators = [
  (Story) => (
    <div className='dark'>
      <div className={bodyStyles}>
        <Story />
      </div>
    </div>
  )
]

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        {
          name: 'Light',
          value: twColors.neutral[100]
        },
        {
          name: 'Dark',
          value: twColors.cyan[950]
        }
      ],
      default: 'Dark'
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
        xxsmall: {
          name: `320 x 640`,
          styles: {
            width: '320px',
            height: '640px'
          }
        },
        xsmall: {
          name: `360 x 640`,
          styles: {
            width: '360px',
            height: '640px'
          }
        },
        small: {
          name: `768 x 1024`,
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        medium: {
          name: `1024 x 768`,
          styles: {
            width: '1024px',
            height: '768px'
          }
        },
        large: {
          name: `1366 x 768`,
          styles: {
            width: '1366px',
            height: '768px'
          }
        },
        xlarge: {
          name: `1920 x 1080`,
          styles: {
            width: '1920px',
            height: '1080px'
          }
        }
      }
    }
  }
}

export default preview

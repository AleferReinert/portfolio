import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import MenuMobileComponent from './MenuMobile'
import { jsMediaQuery } from 'utils/helpers'
import theme from 'styles/theme'
import { social } from 'content/content'

const meta: Meta<typeof MenuMobileComponent> = {
  title: 'Components/MenuMobile',
  component: MenuMobileComponent,
  args: {
    menuMobile: true,
    socials: social
  },
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  }
}

export default meta

type Story = StoryObj<typeof MenuMobileComponent>

export const MenuMobile: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const links = canvas.queryAllByRole('link')
    const closeMenuButton = canvas.queryByRole('button', {
      name: /fechar menu/i
    })
    const closeMenuIcon = canvasElement.getElementsByTagName('svg')[0]

    jsMediaQuery.lessThan(theme.breakpoints.small, async () => {
      await step('Render 9 links and a button', () => {
        expect(links.length).toBe(9)
        expect(closeMenuButton).toBeInTheDocument()
        expect(closeMenuIcon).toBeInTheDocument()
      })
    })
  }
}

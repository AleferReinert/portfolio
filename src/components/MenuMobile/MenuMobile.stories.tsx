import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import MenuMobileComponent from './MenuMobile'

const meta: Meta<typeof MenuMobileComponent> = {
  title: 'Components/MenuMobile',
  component: MenuMobileComponent,
  args: {
    menuMobile: true
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
    const closeMenuButton = canvas.getByRole('button', { name: /fechar menu/i })
    const closeMenuIcon = canvasElement.getElementsByTagName('svg')[0]

    await step('Render 3 links and a button', () => {
      expect(links.length).toBe(3)
      expect(closeMenuButton).toBeInTheDocument()
      expect(closeMenuIcon).toBeInTheDocument()
    })
  }
}

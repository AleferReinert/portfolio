import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { menu } from 'app/content/layoutContent'
import { NavMenu } from './NavMenu'

const meta: Meta<typeof NavMenu> = {
  title: 'Components/NavMenu',
  component: NavMenu,
  args: {
    menu: menu
  }
}

export default meta
type Story = StoryObj<typeof NavMenu>

export const Default: Story = {
  name: 'NavMenu',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render links', () => {
      const links = canvas.getAllByRole('link')
      expect(links.length).toBe(5)
    })
  }
}

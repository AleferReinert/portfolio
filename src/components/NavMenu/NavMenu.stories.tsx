import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { menu } from 'app/content'
import { NavMenu } from './NavMenu'

const meta: Meta<typeof NavMenu> = {
  title: 'Components/NavMenu',
  component: NavMenu,
  args: {
    menu: menu
  },
  argTypes: {
    setShowMobileMenu: {
      table: { disable: true }
    }
  }
}

export default meta

type Story = StoryObj<typeof NavMenu>

export const Default: Story = {
  name: 'NavMenu',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')

    await step('Render links', () => {
      expect(links.length).toBe(5)
    })
  }
}

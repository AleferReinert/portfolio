import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { menu } from 'content/content'
import NavMenuComponent from './NavMenu'

const meta: Meta<typeof NavMenuComponent> = {
  title: 'Components/NavMenu',
  component: NavMenuComponent,
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

type Story = StoryObj<typeof NavMenuComponent>

export const NavMenu: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('menuitem')

    await step('Render menu items', () => {
      expect(links.length).toBe(4)
    })
  }
}

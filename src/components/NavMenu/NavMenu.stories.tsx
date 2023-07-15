import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import NavMenuComponent from './NavMenu'

const meta: Meta<typeof NavMenuComponent> = {
  title: 'Components/NavMenu',
  component: NavMenuComponent
}

export default meta

type Story = StoryObj<typeof NavMenuComponent>

export const NavMenu: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const links = canvas.getAllByRole('link')

    await step('Render links', () => {
      expect(links.length).toBe(4)
    })
  }
}

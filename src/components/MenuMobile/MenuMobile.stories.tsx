import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { menu } from 'app/content'
import { MenuMobile } from './MenuMobile'

const meta: Meta<typeof MenuMobile> = {
  title: 'Components/MenuMobile',
  component: MenuMobile,
  args: {
    showMobileMenu: true,
    menu: menu
  },
  argTypes: {
    setShowMobileMenu: {
      table: { disable: true }
    }
  },
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  }
}

export default meta

type Story = StoryObj<typeof MenuMobile>

export const Default: Story = {
  name: 'MenuMobile',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render button, menu and social', () => {
      waitFor(() => {
        const closeMenuButton = canvas.getByRole('img', {
          name: /fechar menu/i
        })
        const NavMenuComponent = canvas.getByTestId('NavMenuComponent')
        expect(closeMenuButton).toBeVisible()
        expect(NavMenuComponent).toBeVisible()
      })
    })
  }
}

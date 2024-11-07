import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { menu } from 'app/content'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    menu: menu
  }
}

export default meta
type Story = StoryObj<typeof Header>

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xs'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openMenuButton = canvas.getByTitle('Abrir menu')
    const closeMenuButton = canvas.getByTitle('Fechar menu')
    const MenuMobileComponent = canvas.getByTestId('MenuMobileComponent')

    await step('Render buttonOpenMenu', () => {
      waitFor(() => expect(openMenuButton).toBeVisible(), { timeout: 2000 })
    })

    await step('Hidden MenuMobile as default', () => {
      expect(MenuMobileComponent).not.toBeVisible()
    })

    await step('Show MenuMobile on buttonOpenMenu click', async () => {
      userEvent.click(openMenuButton)

      await waitFor(() => {
        expect(MenuMobileComponent).toHaveStyle({
          opacity: '1',
          'pointer-events': 'auto'
        })
      })
    })

    await step('Close menu on buttonCloseMenu click', async () => {
      userEvent.click(closeMenuButton)
      waitFor(() => {
        expect(MenuMobileComponent).not.toBeVisible()
      })
    })
  }
}

export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Hidden button to open menu', () => {
      const openMenuButton = canvas.getByTitle('Abrir menu')
      expect(openMenuButton).not.toBeVisible()
    })

    await step('Render only one NavMenuComponent', () => {
      const NavMenuComponent = canvas.getAllByTestId('NavMenuComponent')
      waitFor(
        () => {
          expect(NavMenuComponent[0]).toBeVisible()
        },
        { timeout: 2000 }
      )
      expect(NavMenuComponent[1]).not.toBeVisible()
    })
  }
}

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
      defaultViewport: 'xsmall'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const MenuMobileComponent = canvas.getByTestId('MenuMobileComponent')

    await step('Render buttonOpenMenu', () => {
      waitFor(() => {
        const openMenuButton = canvas.getByRole('img', { name: 'Abrir menu' })
        expect(openMenuButton).toBeVisible()
      })
    })

    await step('Hidden MenuMobile as default', () => {
      expect(MenuMobileComponent).not.toBeVisible()
    })

    await step('Show MenuMobile on buttonOpenMenu click', async () => {
      waitFor(async () => {
        const openMenuButton = canvas.getByRole('img', { name: 'Abrir menu' })
        await userEvent.click(openMenuButton)
        await waitFor(() => {
          expect(MenuMobileComponent).toBeVisible()
        })
      })
    })

    await step('Close menu on buttonCloseMenu click', async () => {
      waitFor(async () => {
        const closeMenuButton = canvas.getByRole('img', { name: 'Fechar menu' })
        await userEvent.click(closeMenuButton)
        await waitFor(() => {
          expect(MenuMobileComponent).not.toBeVisible()
        })
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
      waitFor(() => {
        const openMenuButton = canvas.queryByRole('img', {
          name: 'Abrir menu'
        })
        expect(openMenuButton).not.toBeInTheDocument()
      })
    })

    await step('Render only one NavMenuComponent', () => {
      const NavMenuComponent = canvas.getAllByTestId('NavMenuComponent')
      expect(NavMenuComponent[0]).toBeVisible()
      expect(NavMenuComponent[1]).not.toBeVisible()
    })
  }
}

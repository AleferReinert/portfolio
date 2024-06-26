import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { menu, social } from 'content/content'
import { breakpoints } from 'styles/global'
import { jsMediaQuery } from 'utils/helpers'
import HeaderComponent from './Header'

const meta: Meta<typeof HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  args: {
    menu: menu,
    socials: social
  }
}

export default meta

type Story = StoryObj<typeof HeaderComponent>

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'xsmall'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openMenuButton = canvas.queryByRole('img', { name: /abrir menu/i })
    const menus = canvas.queryAllByRole('menu')

    jsMediaQuery.lessThan(breakpoints.small, async () => {
      await step('Render buttonOpenMenu', () => {
        expect(openMenuButton).toBeInTheDocument()
      })

      await step('Hidden menu as default', () => {
        expect(menus[0]).not.toBeVisible()
      })

      await step('Show menu mobile on buttonOpenMenu click', async () => {
        const button = canvas.getByRole('img', { name: /abrir menu/i })

        await userEvent.click(button)
        await waitFor(() => {
          const menus = canvas.getAllByRole('menu')
          expect(menus[0]).toBeVisible()
        })
      })

      await step('Close menu on buttonCloseMenu click', async () => {
        const button = canvas.getByRole('img', { name: /fechar menu/i })

        await userEvent.click(button)
        await waitFor(() => {
          const menus = canvas.queryAllByRole('menu')
          expect(menus[0]).not.toBeVisible()
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
    const openMenuButton = canvas.queryByRole('img', { name: /abrir menu/i })
    const menus = canvas.getAllByRole('menu')

    jsMediaQuery.greaterThan(breakpoints.small, async () => {
      await step('Hidden button to open menu', () => {
        expect(openMenuButton).not.toBeInTheDocument()
      })

      await step('Render only one menu', () => {
        expect(menus.length).toBe(1)
      })
    })
  }
}

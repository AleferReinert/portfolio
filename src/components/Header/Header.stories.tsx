import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { jsMediaQuery } from 'utils/helpers'
import HeaderComponent from './Header'
import theme from 'styles/theme'
import { menu, social } from 'content/content'

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
    const openMenuButton = canvas.queryByRole('button', { name: /abrir menu/i })
    const menus = canvas.queryAllByRole('menu')

    jsMediaQuery.lessThan(theme.breakpoints.small, async () => {
      await step('Render buttonOpenMenu', () => {
        expect(openMenuButton).toBeInTheDocument()
      })

      await step('Hidden menu as default', () => {
        expect(menus.length).toBe(0)
      })

      await step('Show menu mobile on buttonOpenMenu click', async () => {
        const button = canvas.getByRole('button', { name: /abrir menu/i })

        await userEvent.click(button)
        await waitFor(() => {
          const menus = canvas.getAllByRole('menu')
          expect(menus.length).toBe(1)
        })
      })

      await step('Close menu on buttonCloseMenu click', async () => {
        const button = canvas.getByRole('button', { name: /fechar menu/i })

        await userEvent.click(button)
        await waitFor(() => {
          const menus = canvas.queryAllByRole('menu')
          expect(menus.length).toBe(0)
        })
      })
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openMenuButton = canvas.queryByRole('button', { name: /abrir menu/i })
    const menus = canvas.getAllByRole('menu')

    jsMediaQuery.greaterThan(theme.breakpoints.small, async () => {
      await step('Hidden button to open menu', () => {
        expect(openMenuButton).not.toBeInTheDocument()
      })

      await step('Render only one menu', () => {
        expect(menus.length).toBe(1)
      })
    })
  }
}

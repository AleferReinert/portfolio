import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import HeaderComponent from './Header'
import { jsMediaQuery } from 'utils/helpers'
import theme from 'styles/theme'

const meta: Meta<typeof HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent
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
    const openMenuIcon = canvasElement.getElementsByTagName('svg')[0]
    const menuMobile = canvas.queryByTestId('menuMobile')
    const menuLinks = canvas.queryAllByRole('link')

    jsMediaQuery.lessThan(theme.breakpoints.small, async () => {
      await step('Show buttonOpenMenu', () => {
        expect(openMenuButton).toBeInTheDocument()
        expect(openMenuIcon).toBeInTheDocument()
      })
      await step('Hidden menu desktop', () => {
        expect(menuLinks.length).toBe(0)
      })

      await step('Show menu on buttonOpenMenu click', async () => {
        await userEvent.click(
          canvas.getByRole('button', {
            name: /abrir menu/i
          })
        )
        await waitFor(() => {
          expect(menuMobile).toBeVisible()
        })
      })

      await step('Close menu on buttonCloseMenu click', async () => {
        await userEvent.click(
          canvas.getByRole('button', {
            name: /fechar menu/i
          })
        )
        await waitFor(() => {
          expect(menuMobile).not.toBeVisible()
        })
      })
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const openMenuButton = canvas.queryByRole('button', { name: /abrir menu/i })
    const menuMobile = canvas.queryByTestId('menuMobile')
    const menuLinks = canvas.getAllByRole('link')

    jsMediaQuery.greaterThan(theme.breakpoints.small, async () => {
      await step('Hidden button to open menu', () => {
        expect(openMenuButton).not.toBeInTheDocument()
      })

      await step('Hidden menu mobile', () => {
        expect(menuMobile).not.toBeVisible()
      })

      await step('Render menu desktop', () => {
        expect(menuLinks.length).toBe(3)
      })
    })
  }
}

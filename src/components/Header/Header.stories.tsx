import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { menu, socials } from 'content/layout'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: { menu: menu, github: socials[0] },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className='min-h-14'>
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof Header>

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'xs' } },
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
        expect(MenuMobileComponent).toHaveStyle({ opacity: '1', 'pointer-events': 'auto' })
      })
    })

    await step('Close menu on buttonCloseMenu click', () => {
      userEvent.click(closeMenuButton)
      waitFor(() => {
        expect(MenuMobileComponent).not.toBeVisible()
      })
    })

    await step('GitHub hidden', () => {
      const githubLink = canvas.queryByRole('link', { name: socials[0].name })
      if (githubLink) {
        expect(githubLink).not.toBeVisible()
      } else {
        expect(githubLink).toBeNull()
      }
    })
  }
}

export const Desktop: Story = {
  parameters: { viewport: { defaultViewport: 'responsive' } },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Hidden button to open menu', () => {
      const openMenuButton = canvas.getByTitle('Abrir menu')
      expect(openMenuButton).not.toBeVisible()
    })

    await step('Render only one NavMenuComponent', () => {
      const NavMenuComponent = canvas.getAllByTestId('NavMenuComponent')
      waitFor(() => expect(NavMenuComponent[0]).toBeVisible(), { timeout: 2000 })
      expect(NavMenuComponent[1]).not.toBeVisible()
    })

    await step('GitHub', () => {
      const githubLink = canvas.getByRole('link', { name: socials[0].name })
      const githubIcon = canvas.getByRole('img')

      waitFor(() => {
        expect(githubLink).toHaveAttribute('href', socials[0].url)
        expect(githubIcon).toBeVisible()
      })
    })
  }
}

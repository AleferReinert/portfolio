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
    const MenuMobileComponent = canvas.getByTestId('MenuMobileComponent')

    await step('Render buttonOpenMenu', () => {
      waitFor(() => {
        const openMenuButton = canvas.getByRole('button', { name: 'Abrir menu' })
        waitFor(() => expect(openMenuButton).toBeVisible(), { timeout: 6000 })
      })
    })

    await step('Hidden MenuMobile as default', () => {
      expect(MenuMobileComponent).not.toBeVisible()
    })

    await step('Show MenuMobile on buttonOpenMenu click', () => {
      waitFor(() => {
        userEvent.click(canvas.getByRole('button', { name: 'Abrir menu' }))
        expect(MenuMobileComponent).toHaveStyle({ opacity: '1', 'pointer-events': 'auto' })
      })
    })

    await step('Close menu on buttonCloseMenu click', () => {
      waitFor(async () => {
        const closeMenuButton = await canvas.findByRole('button', { name: 'Fechar menu' })
        userEvent.click(closeMenuButton)
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

    await step('Hidden button to open menu', async () => {
      await waitFor(() => expect(canvas.getByTestId('header-component')).toBeVisible(), { timeout: 2000 })
      const openMenuButton = canvas.queryByRole('button', { name: 'Abrir menu', hidden: true })
      expect(openMenuButton).not.toBeInTheDocument()
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

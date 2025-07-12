import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
import { about } from 'content/about'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: {
    github: about.socialLinks.find(link => link.name === 'GitHub')
  },
  parameters: { layout: 'fullscreen' },
  decorators: [
    Story => (
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

    await step('Button Open Menu', () => {
      waitFor(() => {
        const openMenuButton = canvas.getByRole('button', { name: 'Abrir menu' })
        waitFor(() => expect(openMenuButton).toBeVisible(), { timeout: 6000 })
      })
    })

    await step('Hidden MenuMobile as default', () => {
      expect(MenuMobileComponent).not.toBeVisible()
    })

    await step('Show MenuMobile on buttonOpenMenu click', () => {
      waitFor(async () => {
        userEvent.click(canvas.getByRole('button', { name: 'Abrir menu' }))
        await expect(MenuMobileComponent).toBeVisible()
      })
    })

    await step('Close menu on buttonCloseMenu click', async () => {
      const closeMenuButton = await canvas.findByRole('button', { name: 'Fechar menu' })
      await waitFor(() => {
        expect(closeMenuButton).toBeVisible()
      })
      await userEvent.click(closeMenuButton)

      await waitFor(() => {
        expect(MenuMobileComponent).not.toBeVisible()
      })
    })

    await step('GitHub hidden', () => {
      const github = canvas.queryByRole('link', { name: 'GitHub', hidden: true })
      if (github) {
        expect(github).not.toBeVisible()
      } else {
        expect(github).toBeNull()
      }
    })
  }
}

export const Desktop: Story = {
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
      const githubLink = canvas.getByRole('link', { name: 'GitHub' })
      const githubIcon = within(githubLink).getByRole('img', { hidden: true })

      waitFor(() => {
        expect(githubLink).toHaveAttribute('href', about.socialLinks.find(link => link.name === 'GitHub')?.url)
        expect(githubIcon).toBeVisible()
      })
    })
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { menu } from 'components/Header/Header'
import { MenuMobile } from './MenuMobile'

const meta: Meta<typeof MenuMobile> = {
  title: 'Components/MenuMobile',
  component: MenuMobile,
  args: { showMobileMenu: true, menu },
  parameters: { layout: 'centered', viewport: { defaultViewport: 'xs' } }
}

export default meta
type Story = StoryObj<typeof MenuMobile>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Visible closeButton ', () => {
      const closeMenuButton = canvas.getByTitle('Fechar menu')
      waitFor(() => {
        expect(closeMenuButton).toBeVisible()
      })
    })

    await step('Visible menu', () => {
      const NavMenuComponent = canvas.getByTestId('NavMenuComponent')
      waitFor(() => {
        expect(NavMenuComponent).toBeVisible()
      })
    })
  }
}

import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import MenuMobileComponent from './MenuMobile'
import { jsMediaQuery } from 'utils/helpers'
import theme from 'styles/theme'
import { menu, social } from 'content/content'

const meta: Meta<typeof MenuMobileComponent> = {
  title: 'Components/MenuMobile',
  component: MenuMobileComponent,
  args: {
    showMobileMenu: true,
    menu: menu,
    socials: social
  },
  parameters: {
    viewport: {
      defaultViewport: 'xxsmall'
    }
  }
}

export default meta

type Story = StoryObj<typeof MenuMobileComponent>

export const MenuMobile: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const closeMenuButton = canvas.queryByRole('img', {
      name: /fechar menu/i
    })
    const menu = canvas.queryByRole('menu')
    const socialLinks = canvas.queryAllByRole('link')

    jsMediaQuery.lessThan(theme.breakpoints.small, async () => {
      await step('Render button, menu and social', () => {
        expect(closeMenuButton).toBeInTheDocument()
        expect(menu).toBeInTheDocument()
        expect(socialLinks.length).toBe(6)
      })
    })
  }
}

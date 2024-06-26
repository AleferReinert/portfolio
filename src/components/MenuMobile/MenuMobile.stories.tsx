import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { expect } from '@storybook/test'
import { jsMediaQuery } from 'utils/helpers'
import { menu, social } from 'content/content'
import { breakpoints } from 'styles/global'
import MenuMobileComponent from './MenuMobile'

const meta: Meta<typeof MenuMobileComponent> = {
  title: 'Components/MenuMobile',
  component: MenuMobileComponent,
  args: {
    showMobileMenu: true,
    menu: menu,
    socials: social
  },
  argTypes: {
    setShowMobileMenu: {
      table: { disable: true }
    }
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

    jsMediaQuery.lessThan(breakpoints.small, async () => {
      await step('Render button, menu and social', () => {
        expect(closeMenuButton).toBeInTheDocument()
        expect(menu).toBeInTheDocument()
        expect(socialLinks.length).toBe(4)
      })
    })
  }
}

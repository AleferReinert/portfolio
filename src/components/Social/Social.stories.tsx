import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import SocialComponent from './Social'
import { social } from 'content/content'
import { jsMediaQuery } from 'utils/helpers'
import theme from 'styles/theme'

const meta: Meta<typeof SocialComponent> = {
  title: 'Components/Social',
  component: SocialComponent,
  args: {
    socials: social
  }
}

export default meta

type Story = StoryObj<typeof SocialComponent>

export const Social: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const socialLinks = canvas.getAllByRole('link')
    const wrapper = canvasElement.getElementsByTagName('nav')[0]

    await step('Render 4 links with title attribute', () => {
      expect(socialLinks.length).toBe(4)
      for (const socialLink of socialLinks) {
        expect(socialLink).toHaveAttribute('title')
      }
    })

    jsMediaQuery.lessThan(theme.breakpoints.medium, async () => {
      await step('Horizontal on mobile', () => {
        expect(wrapper).not.toHaveStyle({ flexDirection: 'column' })
      })
    })

    jsMediaQuery.greaterThan(theme.breakpoints.medium, async () => {
      await step('Vertical on desktop', () => {
        expect(wrapper).toHaveStyle({ flexDirection: 'column' })
      })
    })
  }
}

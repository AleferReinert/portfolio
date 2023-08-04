import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { social } from 'content/content'
import { jsMediaQuery } from 'utils/helpers'
import { breakpoints } from 'styles/global'
import SocialComponent from './Social'

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
    const github = canvas.getByRole('link', { name: /github/i })
    const email = canvas.getByRole('link', { name: /e-mail/i })
    const linkedin = canvas.getByRole('link', { name: /linkedin/i })
    const whatsapp = canvas.getByRole('link', { name: /whatsapp/i })
    const wrapper = canvasElement.getElementsByTagName('nav')[0]

    await step('Render social links', () => {
      expect(github).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(linkedin).toBeInTheDocument()
      expect(whatsapp).toBeInTheDocument()
    })

    jsMediaQuery.lessThan(breakpoints.medium, async () => {
      await step('Horizontal on mobile', () => {
        expect(wrapper).not.toHaveStyle({ flexDirection: 'column' })
      })
    })

    jsMediaQuery.greaterThan(breakpoints.medium, async () => {
      await step('Vertical on desktop', () => {
        expect(wrapper).toHaveStyle({ flexDirection: 'column' })
      })
    })
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { social } from 'app/content'
import { Social } from './Social'

const meta: Meta<typeof Social> = {
  title: 'Components/Social',
  component: Social,
  args: {
    socials: social
  }
}

export default meta

type Story = StoryObj<typeof Social>

export const Default: Story = {
  name: 'Social',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const github = canvas.getByRole('link', { name: /github/i })
    const email = canvas.getByRole('link', { name: /e-mail/i })
    const linkedin = canvas.getByRole('link', { name: /linkedin/i })
    const whatsapp = canvas.getByRole('link', { name: /whatsapp/i })

    await step('Render social links', () => {
      expect(github).toBeInTheDocument()
      expect(email).toBeInTheDocument()
      expect(linkedin).toBeInTheDocument()
      expect(whatsapp).toBeInTheDocument()
    })
  }
}

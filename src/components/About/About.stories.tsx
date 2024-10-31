import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { about } from 'app/content'
import { About } from './About'

const meta: Meta<typeof About> = {
  title: 'Components/About',
  component: About,
  args: about
}

export default meta
type Story = StoryObj<typeof About>

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'xs' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render name and role', () => {
      const heading = canvas.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent(about.name)
      expect(heading).toHaveTextContent(about.role)
    })

    await step('Render description', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toBeInTheDocument()
    })

    await step('Not render subtitle', () => {
      waitFor(() => {
        const subtitle = canvas.queryByRole('heading', {
          name: 'Sobre mim',
          level: 2,
          hidden: true
        })
        expect(subtitle).not.toBeInTheDocument()
      })
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render subtitle', () => {
      waitFor(() => {
        const subtitle = canvas.getByRole('heading', {
          level: 2,
          name: /sobre mim/i
        })
        expect(subtitle).toBeVisible()
      })
    })
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = { title: 'Components/Heading', component: Heading, args: { children: 'Heading' } }

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  name: 'Heading',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render h2', () => {
      const heading = canvas.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('Heading')
    })
  }
}

import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  args: { children: 'Heading' },
  decorators: (Story) => (
    <div className='p-4'>
      <Story />
    </div>
  )
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('h2', () => {
      const heading = canvas.getByRole('heading', { level: 2 })
      expect(heading).toHaveTextContent('Heading')
    })
  }
}

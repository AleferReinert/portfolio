import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  args: {
    children: <div className='flex justify-center items-center bg-black/25 h-svh'>children</div>
  }
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  name: 'Container',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render children', () => {
      const children = canvas.getByText('children')
      expect(children).toBeInTheDocument()
    })
  }
}

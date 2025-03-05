import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  args: { children: <div className='flex justify-center items-center bg-black/25 py-10'>children</div> },
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render children', () => {
      const children = canvas.getByText('children')
      expect(children).toBeInTheDocument()
    })

    await step('Max width', () => {
      const container = canvasElement.firstChild
      expect(container).toHaveClass('max-w-(--breakpoint-lg)')
    })
  }
}

export const Fluid: Story = {
  args: { fluid: true },
  play: async ({ canvasElement, step }) => {
    await step('Not max width', () => {
      const container = canvasElement.firstChild
      expect(container).not.toHaveClass('max-w-(--breakpoint-lg)')
    })
  }
}

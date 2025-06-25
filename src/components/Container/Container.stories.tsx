import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  args: { children: <div className='flex justify-center items-center bg-white/50 py-10'>children</div> }
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByText('children')

    await step('Children', () => {
      expect(children).toBeInTheDocument()
    })

    await step('Max width', () => {
      const container = children.parentElement
      expect(container).toHaveClass('max-w-5xl')
    })
  }
}

export const Fluid: Story = {
  args: { fluid: true },
  play: async ({ canvasElement, step }) => {
    await step('Without max-width', () => {
      const container = canvasElement.firstChild
      expect(container).not.toHaveClass('max-w-5xl')
    })
  }
}

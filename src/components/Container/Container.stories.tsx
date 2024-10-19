import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  args: {
    children: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
          height: '100vh'
        }}
      >
        children
      </div>
    )
  },
  argTypes: {
    children: {
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

type Story = StoryObj<typeof Container>

export const Default: Story = {
  name: 'Container',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByText('children')

    await step('Render children', () => {
      expect(children).toBeInTheDocument()
    })
  }
}

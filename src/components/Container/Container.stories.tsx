import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { expect } from '@storybook/test'
import ContainerComponent from './Container'

const meta: Meta<typeof ContainerComponent> = {
  title: 'Components/Container',
  component: ContainerComponent,
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

type Story = StoryObj<typeof ContainerComponent>

export const Container: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const children = canvas.getByText('children')

    await step('Render children', () => {
      expect(children).toBeInTheDocument()
    })
  }
}

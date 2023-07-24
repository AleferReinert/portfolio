import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { dark as theme } from 'styles/themes'
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
          backgroundColor: theme.colors.text,
          color: theme.colors.background,
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

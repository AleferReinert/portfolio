import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import SwitchComponent from './Switch'

const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  args: {
    theme: 'dark',
    toggleTheme: jest.fn()
  }
}

export default meta

type Story = StoryObj<typeof SwitchComponent>

export const Switch: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    await step('Switch ON with theme dark as default', () => {
      expect(checkbox).toBeChecked()
      expect(checkbox).toHaveAttribute('title', 'Alterar para tema claro')
    })
  }
}

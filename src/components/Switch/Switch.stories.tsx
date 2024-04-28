import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { expect } from '@storybook/test'
import SwitchComponent from './Switch'

const meta: Meta<typeof SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent
}

export default meta

type Story = StoryObj<typeof SwitchComponent>

export const Switch: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    await step('Switch ON with theme dark as default', () => {
      expect(checkbox).toBeChecked()
      expect(checkbox.parentElement).toHaveAttribute('title', 'Tema claro')
      expect(document.body).not.toHaveClass('lightTheme')
    })

    await step('Change theme', async () => {
      await userEvent.click(checkbox)
      expect(document.body).toHaveClass('lightTheme')
      expect(checkbox.parentElement).toHaveAttribute('title', 'Tema escuro')

      await userEvent.click(checkbox)
      expect(document.body).not.toHaveClass('lightTheme')
      expect(checkbox.parentElement).toHaveAttribute('title', 'Tema claro')
    })
  }
}

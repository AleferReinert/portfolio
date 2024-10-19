import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  name: 'Switch',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const SwitchComponent = canvas.getByTestId('SwitchComponent')

    await step('Switch ON with theme dark as default', () => {
      expect(SwitchComponent).toHaveAttribute('title', 'Tema claro')
      // expect(document.body).not.toHaveClass('light')
    })

    await step('Change theme', async () => {
      await userEvent.click(SwitchComponent)
      // expect(document.body).toHaveClass('light')
      expect(SwitchComponent).toHaveAttribute('title', 'Tema escuro')

      await userEvent.click(SwitchComponent)
      // expect(document.body).not.toHaveClass('light')
      expect(SwitchComponent).toHaveAttribute('title', 'Tema claro')
    })
  }
}

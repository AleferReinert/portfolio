import type { Meta, StoryObj } from '@storybook/react'
import { expect, userEvent, waitFor, within } from '@storybook/test'
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
    const html = document.documentElement

    await step('Default: Switch ON with theme dark', () => {
      waitFor(() => {
        expect(SwitchComponent).toHaveAttribute('title', 'Tema claro')
        expect(html).toHaveClass('dark')
      })
    })

    await step('Change theme', async () => {
      await userEvent.click(SwitchComponent)
      expect(html).not.toHaveClass('dark')
      expect(SwitchComponent).toHaveAttribute('title', 'Tema escuro')

      await userEvent.click(SwitchComponent)
      waitFor(() => {
        expect(html).toHaveClass('dark')
        expect(SwitchComponent).toHaveAttribute('title', 'Tema claro')
      })
    })
  }
}

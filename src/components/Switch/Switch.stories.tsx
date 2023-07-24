import type { StoryObj, Meta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect, jest } from '@storybook/jest'
import SwitchComponent from './Switch'
import { ThemeProvider } from 'styled-components'
import light from 'styles/themes/light'

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

export const Dark: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox')

    await step('Switch ON with theme dark as default', () => {
      expect(checkbox).toBeChecked()
      expect(checkbox).toHaveAttribute('title', 'Alterar para tema claro')
    })

    await step('Calling toggleTheme() on click', async () => {
      await userEvent.click(checkbox)
      expect(args.toggleTheme).toHaveBeenCalledTimes(1)
    })
  }
}

export const Light: Story = {
  args: {
    theme: 'light'
  },
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={light}>
        <Story />
      </ThemeProvider>
    )
  ]
}

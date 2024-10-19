import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { certificates } from 'app/content'
import { Certificates } from './Certificates'

const meta: Meta<typeof Certificates> = {
  title: 'Components/Certificates',
  component: Certificates,
  args: {
    certificates: certificates
  }
}

export default meta

type Story = StoryObj<typeof Certificates>

export const Default: Story = {
  name: 'Certificates',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const titles = canvas.getAllByRole('heading')

    await step('Minimal two certificates', () => {
      expect(titles.length).toBeGreaterThan(1)
    })
  }
}

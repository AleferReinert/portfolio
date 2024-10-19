import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { certificates } from 'app/content'
import { Certificate } from './Certificate'

const meta: Meta<typeof Certificate> = {
  title: 'Components/Certificate',
  component: Certificate,
  args: {
    ...certificates[0]
  }
}

export default meta

type Story = StoryObj<typeof Certificate>

export const Default: Story = {
  name: 'Certificate',
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const description = canvas.getByRole('paragraph')
    const link = canvas.queryByRole('link')

    await step('Render title, description and link', () => {
      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
      expect(link).toHaveAttribute('title', 'Visualizar certificado')
    })
  }
}

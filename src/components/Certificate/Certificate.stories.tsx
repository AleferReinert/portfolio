import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { expect } from '@storybook/test'
import CertificateComponent from './Certificate'
import { certificates } from 'content/content'

const meta: Meta<typeof CertificateComponent> = {
  title: 'Components/Certificate',
  component: CertificateComponent,
  args: {
    ...certificates[0],
    link: ''
  }
}

export default meta

type Story = StoryObj<typeof CertificateComponent>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading')
    const description = canvas.getByRole('paragraph')
    const link = canvas.queryByRole('link')

    await step('Render title and description', () => {
      expect(title).toBeInTheDocument()
      expect(description).toBeInTheDocument()
    })

    await step('Without link as default', () => {
      expect(link).not.toBeInTheDocument()
    })
  }
}

export const WithLink: Story = {
  args: {
    link: '/link'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link')

    await step('Has link with title', () => {
      expect(link).toHaveAttribute('href', '/link')
      expect(link).toHaveAttribute('title', 'Visualizar certificado')
    })
  }
}

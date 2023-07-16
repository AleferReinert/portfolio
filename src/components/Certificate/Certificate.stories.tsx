import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
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
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    const wrapper = canvas.getByRole('heading', {
      name: args.title
    }).parentElement

    await step('Has link with title', () => {
      expect(wrapper).toHaveAttribute('href', '/link')
      expect(wrapper).toHaveAttribute('title', 'Visualizar certificado')
    })
  }
}

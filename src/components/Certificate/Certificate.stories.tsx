import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CertificateComponent from './Certificate'

const meta: Meta<typeof CertificateComponent> = {
  title: 'Components/Certificate',
  component: CertificateComponent,
  args: {
    title: 'Course name',
    description: 'Organization | October/2023'
  }
}

export default meta

type Story = StoryObj<typeof CertificateComponent>

export const Default: Story = {
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement)
    const title = canvas.getByRole('heading', { name: args.title })
    const description = canvas.getByText(args.description)
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

    await step('Has link', () => {
      expect(wrapper).toHaveAttribute('href', args.link)
    })
  }
}

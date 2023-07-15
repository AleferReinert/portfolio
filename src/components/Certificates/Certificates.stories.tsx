import type { StoryObj, Meta } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import CertificatesComponent from './Certificates'
import { certificates } from 'content/content'

const meta: Meta<typeof CertificatesComponent> = {
  title: 'Components/Certificates',
  component: CertificatesComponent,
  args: {
    certificates: certificates
  }
}

export default meta

type Story = StoryObj<typeof CertificatesComponent>

export const Certificates: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const titles = canvas.getAllByRole('heading')

    await step('Minimal two certificates', () => {
      expect(titles.length).toBeGreaterThan(1)
    })
  }
}

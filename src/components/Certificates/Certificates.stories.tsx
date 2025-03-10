import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { certificates } from 'content/certificates'
import { Certificates } from './Certificates'

const meta: Meta<typeof Certificates> = {
  title: 'Components/Certificates',
  component: Certificates,
  args: { certificates: certificates },
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Certificates>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Certificados')
    })

    await step('Minimal two certificates', () => {
      const CertificateComponents = canvas.getAllByTestId('CertificateComponent')
      expect(CertificateComponents.length).toBeGreaterThan(1)
    })
  }
}

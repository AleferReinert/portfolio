import type { Meta, StoryObj } from '@storybook/react'
import { expect, within } from '@storybook/test'
import { certificates } from 'content/certificates'
import { Certificate } from './Certificate'

const lastCertificate = certificates.at(-1)

const meta: Meta<typeof Certificate> = {
  title: 'Components/Certificate',
  component: Certificate,
  args: { ...lastCertificate },
  parameters: {
    a11y: { config: { rules: [{ id: 'listitem', enabled: false }] } },
    layout: 'fullscreen'
  },
  decorators: (Story) => (
    <div className='p-4'>
      <Story />
    </div>
  )
}

export default meta
type Story = StoryObj<typeof Certificate>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Title', () => {
      const title = canvas.getByRole('heading', { level: 3 })
      expect(title).toHaveTextContent(lastCertificate!.title)
    })

    await step('Organization and conclusion date', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toHaveTextContent(lastCertificate!.organization)
      expect(description).toHaveTextContent(lastCertificate!.conclusionDate)
    })

    await step('Url', () => {
      const link = canvas.queryByRole('link')
      expect(link).toHaveAttribute('title', 'Visualizar certificado')
      expect(link).toHaveAttribute('href', lastCertificate!.url)
    })
  }
}

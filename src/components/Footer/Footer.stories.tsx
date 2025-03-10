import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { about } from 'content/about'
import { socials } from 'content/layout'
import { formatPhone } from 'utils/formatPhone'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  args: { phone: about.phone, email: about.email, socials: socials },
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Render heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Contato')
    })

    await step('Render phone', () => {
      const phone = canvas.getByRole('link', { name: formatPhone(about.phone) })
      expect(phone).toHaveAttribute('href', `tel:${about.phone}`)
    })

    await step('Render email', () => {
      const phone = canvas.getByRole('link', { name: about.email })
      expect(phone).toHaveAttribute('href', `mailto:${about.email}`)
    })

    await step('Render social links', async () => {
      await waitFor(() => {
        const socialLinks = ['GitHub', 'LinkedIn', 'Whatsapp']
        socialLinks.map((social) => {
          expect(canvas.getByRole('link', { name: social })).toBeInTheDocument()
        })
      })
    })
  }
}

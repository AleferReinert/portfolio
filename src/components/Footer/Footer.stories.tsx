import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { about } from 'content/about'
import { formatPhone } from 'utils/formatPhone'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  args: {
    phone: about.phone,
    email: about.email,
    socials: about.socialLinks
  },
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Heading', () => {
      const HeadingComponent = canvas.getByTestId('HeadingComponent')
      expect(HeadingComponent).toHaveTextContent('Contato')
    })

    await step('Phone', () => {
      const phone = canvas.getByRole('link', { name: formatPhone(about.phone) })
      expect(phone).toHaveAttribute('href', `tel:${about.phone}`)
    })

    await step('Email', () => {
      const phone = canvas.getByRole('link', { name: about.email })
      expect(phone).toHaveAttribute('href', `mailto:${about.email}`)
    })

    await step('Social links', async () => {
      await waitFor(() => {
        const socialLinksNavigation = canvas.getByRole('navigation')
        expect(socialLinksNavigation).toBeVisible()
        const socialLinks = ['GitHub', 'LinkedIn', 'WhatsApp']
        socialLinks.map(social => {
          expect(canvas.getByRole('link', { name: social })).toBeInTheDocument()
        })
      })
    })
  }
}

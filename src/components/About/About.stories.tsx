import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { about } from 'app/content'
import { Container } from 'components/Container/Container'
import { About } from './About'

const meta: Meta<typeof About> = {
  title: 'Components/About',
  component: About,
  args: about,
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    )
  ]
}

export default meta

type Story = StoryObj<typeof About>

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: 'xxsmall' }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const name = canvas.getByRole('heading', { name: /alefer reinert/i })
    const role = canvas.getByRole('heading', {
      name: /desenvolvedor front-end/i
    })

    const description = canvas.getByRole('paragraph')

    await step('Render name, role and description', () => {
      expect(name).toBeInTheDocument()
      expect(role).toBeInTheDocument()
      expect(description).toBeInTheDocument()
    })

    await step('Not render subtitle', () => {
      waitFor(() => {
        const subtitle = canvas.queryByRole('heading', {
          name: 'Sobre mim',
          level: 2,
          hidden: true
        })
        expect(subtitle).not.toBeInTheDocument()
      })
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)
    const subtitle = canvas.getByRole('heading', { name: /sobre mim/i })

    await step('Render subtitle', () => {
      expect(subtitle).toBeVisible()
    })
  }
}

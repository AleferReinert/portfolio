import type { Meta, StoryObj } from '@storybook/react'
import { expect, waitFor, within } from '@storybook/test'
import { about } from 'content/about'
import { About } from './About'

const meta: Meta<typeof About> = {
  title: 'Components/About',
  component: About,
  args: about,
  parameters: { layout: 'fullscreen' }
}

export default meta
type Story = StoryObj<typeof About>

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: 'xs' } },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Name and role', () => {
      const heading = canvas.getByRole('heading', { level: 1 })
      expect(heading).toHaveTextContent(about.name)
      expect(heading).toHaveTextContent(about.role)
    })

    await step('Curriculum button', () => {
      const curriculumUrl = canvas.getByRole('link', { name: 'Visualizar CV' })
      expect(curriculumUrl).toHaveAttribute('href', about.curriculumUrl)
      expect(curriculumUrl).toHaveAttribute('target', '_blank')
    })

    await step('Description', () => {
      const description = canvas.getByRole('paragraph')
      expect(description).toBeInTheDocument()
    })

    await step('Not render subtitle', () => {
      waitFor(() => {
        const subtitle = canvas.queryByRole('heading', { name: 'Sobre mim', level: 2, hidden: true })
        expect(subtitle).not.toBeInTheDocument()
      })
    })
  }
}

export const Desktop: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Subtitle', () => {
      waitFor(() => {
        const subtitle = canvas.getByRole('heading', { level: 2, name: /sobre mim/i })
        expect(subtitle).toBeVisible()
      })
    })
  }
}
